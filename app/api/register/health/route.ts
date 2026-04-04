import { NextResponse } from 'next/server';
import {
  buildSheetRange,
  SHEET_ID,
  SHEET_NAME,
  extractErrorMessage,
  getSheetsClient,
  hasSheetsCredentials,
} from '@/lib/google-sheets';

export const runtime = 'nodejs';

export async function GET() {
  const checks = {
    sheetIdPresent: Boolean(SHEET_ID),
    sheetName: SHEET_NAME,
    credentialsPresent: hasSheetsCredentials(),
  };

  if (!checks.sheetIdPresent || !checks.credentialsPresent) {
    return NextResponse.json(
      {
        ok: false,
        checks,
        message: 'Missing Google Sheets environment variables',
      },
      { status: 500 }
    );
  }

  const sheets = getSheetsClient();

  if (!sheets) {
    return NextResponse.json(
      {
        ok: false,
        checks,
        message: 'Google Sheets client could not be created',
      },
      { status: 500 }
    );
  }

  try {
    await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: buildSheetRange('A1:F1'),
    });

    return NextResponse.json({
      ok: true,
      checks,
      message: 'Google Sheets connection looks good',
    });
  } catch (error) {
    const details = extractErrorMessage(error);

    return NextResponse.json(
      {
        ok: false,
        checks,
        message: `Google Sheets error: ${details}`,
      },
      { status: 500 }
    );
  }
}
