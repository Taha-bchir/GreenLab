# GreenLab Hackathon Registration - Setup Guide

## Overview
The GreenLab Hackathon registration website is fully functional and ready to integrate with Google Sheets for storing registrations.

## Features

### ✓ Completed Components
- **Hero Section**: Eye-catching landing with GreenLab branding, animated background gradients, and call-to-action
- **Registration Form**: Full form with validation for:
  - Full Name (minimum 2 characters)
  - Phone Number (international format support)
  - Email Address (valid email format)
  - Faculty (Engineering, Business, Sciences, Arts, Medicine, Other)
  - Level of Study (First Year through Postgraduate)
- **Success/Error States**: Immediate feedback with animations
- **Footer**: Branded footer with contact information and quick links
- **Design System**: Dark theme with neon green accents, glassmorphic cards, and smooth animations

### Styling Features
- Glassmorphism effect on form cards with backdrop blur
- Animated gradient background orbs
- Glow effects on buttons and form inputs
- Smooth transitions and hover states
- Fully responsive mobile-first design

## Google Sheets Integration Setup

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet for your registrations
3. Name it or use an existing sheet named "Registrations"
4. Add header row with columns:
   - A: Timestamp
   - B: Full Name
   - C: Phone
   - D: Email
   - E: Faculty
   - F: Level of Study

### Step 2: Get Your Sheet ID
1. Open your Google Sheet
2. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
3. Save this ID - you'll need it in Step 4

### Step 3: Create a Google Cloud Project & Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select existing)
3. Enable the **Google Sheets API**:
   - Search for "Google Sheets API"
   - Click "Enable"
4. Create a Service Account:
   - Go to "Credentials" in the left sidebar
  - Click "Create Credentials" → "Service Account"
  - Give it a name (e.g., `greenlab-sheet-writer`)
5. Generate a key for the service account:
  - Open the service account
  - Go to "Keys" → "Add Key" → "Create new key"
  - Select **JSON** and download the file
6. From the JSON file, copy:
  - `client_email`
  - `private_key`

### Step 4: Add Environment Variables
In your v0 project settings (top right → Vars):

Add three required environment variables:
- **Key**: `GOOGLE_SHEET_ID` | **Value**: `your-sheet-id-here`
- **Key**: `GOOGLE_SERVICE_ACCOUNT_EMAIL` | **Value**: `client_email from your service account JSON`
- **Key**: `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | **Value**: `private_key from your service account JSON`

Optional (if your tab is not named `Registrations`):
- **Key**: `GOOGLE_SHEET_NAME` | **Value**: `exact worksheet tab name` (example: `Sheet1`)

Important for `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`:
- Keep line breaks as escaped `\\n` in a single line when storing in environment variables.
- If you use `.env.local`, restart `pnpm dev` after changing environment variables.

### Step 5: Share Your Sheet with the Service Account
To allow writes, open your sheet and click **Share**:
- Add the service account email (`client_email` from the JSON key)
- Grant **Editor** access

## Testing the Integration

1. **Without Environment Variables**: The form will submit successfully but registrations won't be saved to Google Sheets (demo mode)
2. **With Environment Variables**: Registrations will be automatically appended to your Google Sheet with timestamp

## File Structure

```
/app
  /api
    /register/route.ts          # API endpoint for form submissions
  /page.tsx                     # Main page
  /layout.tsx                   # App layout with metadata
  /globals.css                  # Design tokens and animations

/components
  /hero.tsx                     # Hero section
  /registration-form.tsx        # Registration form with validation
  /footer.tsx                   # Footer section
  /ui/*                         # shadcn/ui components
```

## Customization

### Change Branding
Edit `app/globals.css` color tokens:
- `--primary`: Change the neon green accent color
- `--secondary`: Change the deep red accent
- `--background`: Change dark navy background

### Update Form Fields
Edit `components/registration-form.tsx`:
- Modify the `registrationSchema` for validation rules
- Add/remove form fields in the JSX

### Update Faculties & Levels
In `registration-form.tsx`, find the `SelectContent` sections for Faculty and Level of Study to customize options.

## Troubleshooting

### Registrations not saving?
1. Check that `GOOGLE_SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` are set in project Vars
2. Verify the Google Sheet exists and is named "Registrations"
3. Confirm the sheet is shared with the service account email and has Editor access
4. Check Google Cloud Console API is enabled for the project that owns the service account

### Local Health Check Endpoint
Use this endpoint to verify credentials and sheet access before submitting the form:

- `GET /api/register/health`

Example on localhost:

```bash
curl http://localhost:3000/api/register/health
```

Expected success response:

```json
{
  "ok": true,
  "checks": {
    "sheetIdPresent": true,
    "sheetName": "Registrations",
    "credentialsPresent": true
  },
  "message": "Google Sheets connection looks good"
}
```

### Form validation not working?
- Ensure phone format includes country code (e.g., +1 for US)
- Email must be valid format
- All fields are required

### Design looks different?
- The design system uses dark theme by default
- Colors are defined in `app/globals.css` as CSS variables
- Tailwind is configured for responsive design

## Deployment

The website is ready to deploy to Vercel:
1. Click "Publish" in the top right
2. Set your environment variables in Vercel project settings
3. Your registration site will be live!

## Support

For questions about the registration form or integration, refer to:
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [React Hook Form](https://react-hook-form.com/)
