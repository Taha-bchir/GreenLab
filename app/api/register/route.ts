import { NextRequest, NextResponse } from 'next/server';
import {
  buildSheetRange,
  SHEET_ID,
  SHEET_NAME,
  extractErrorMessage,
  getSheetsClient,
} from '@/lib/google-sheets';

interface RegistrationData {
  fullName: string;
  phone: string;
  email: string;
  faculty: string;
  levelOfStudy: string;
}

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationData = await request.json();

    // Validate input
    if (!body.fullName || !body.phone || !body.email || !body.faculty || !body.levelOfStudy) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Keep demo-mode behavior if credentials are not configured.
    if (!SHEET_ID) {
      console.error('[v0] Google Sheets environment variables not configured');
      return NextResponse.json(
        { message: 'Registration received' },
        { status: 200 }
      );
    }

    const sheets = getSheetsClient();

    if (!sheets) {
      console.error('[v0] Google service account credentials not configured');
      return NextResponse.json(
        { message: 'Registration received' },
        { status: 200 }
      );
    }

    // Append to Google Sheet
    const values = [
      [
        new Date().toISOString(),
        body.fullName,
        body.phone,
        body.email,
        body.faculty,
        body.levelOfStudy,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: buildSheetRange('A:F'),
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 200 }
    );
  } catch (error) {
    const details = extractErrorMessage(error);
    console.error('[v0] Registration error:', details, error);

    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json(
        { message: `Google Sheets error: ${details}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'An error occurred during registration' },
      { status: 500 }
    );
  }
}
