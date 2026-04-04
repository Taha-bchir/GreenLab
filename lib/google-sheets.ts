import { google } from 'googleapis';

export const SHEET_ID = process.env.GOOGLE_SHEET_ID;
export const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Registrations';
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

export function normalizePrivateKey(value: string) {
  const trimmed = value.trim();
  const withoutWrappingQuotes = trimmed.replace(/^"|"$/g, '');
  return withoutWrappingQuotes.replace(/\\n/g, '\n');
}

export function extractErrorMessage(error: unknown) {
  if (!error || typeof error !== 'object') {
    return 'Unknown error';
  }

  const err = error as {
    message?: string;
    code?: string | number;
    response?: {
      status?: number;
      data?: {
        error?: {
          message?: string;
        };
      };
    };
  };

  const apiMessage = err.response?.data?.error?.message;
  if (apiMessage) {
    return apiMessage;
  }

  if (err.message) {
    return err.message;
  }

  if (err.code) {
    return `Error code: ${String(err.code)}`;
  }

  return 'Unknown error';
}

export function hasSheetsCredentials() {
  return Boolean(
    GOOGLE_SERVICE_ACCOUNT_EMAIL && GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY && SHEET_ID
  );
}

export function buildSheetRange(cells: string) {
  const escapedSheetName = SHEET_NAME.replace(/'/g, "''");
  return `'${escapedSheetName}'!${cells}`;
}

export function getSheetsClient() {
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: normalizePrivateKey(GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}
