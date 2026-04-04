# GreenLab Hackathon 2026 - Registration Website

A modern, fully-responsive registration website for the GreenLab Hackathon 2026, featuring AI and media innovation themes.

## 🌟 Features

- **Modern Design System**: Dark theme with neon green accents and glassmorphic UI elements
- **Form Validation**: Client-side validation with React Hook Form and Zod
- **Google Sheets Integration**: Automatically save registrations to your Google Sheet
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions, floating gradients, and glow effects
- **Error Handling**: Comprehensive error messages and success states
- **Accessibility**: Semantic HTML and ARIA compliant

## 📋 Registration Fields

- Full Name (minimum 2 characters)
- Phone Number (international format)
- Email Address
- Faculty (6 options including "Other")
- Level of Study (5 options from First Year to Postgraduate)

## 🚀 Quick Start

### 1. Clone or Download
If downloading from v0.app, use the shadcn CLI or download as ZIP.

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Configure Google Sheets (Optional)
See `SETUP_GUIDE.md` for detailed instructions on:
- Creating a Google Sheet
- Getting API credentials
- Adding environment variables

### 4. Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Deploy to Vercel
```bash
pnpm build
```

Then deploy using Vercel's CLI or web dashboard. Add your environment variables in Vercel project settings.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Form Validation**: React Hook Form + Zod
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: Google Sheets API v4
- **Hosting**: Vercel (ready to deploy)

## 📁 Project Structure

```
greenlab/
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.ts          # Form submission endpoint
│   ├── globals.css               # Design tokens & animations
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page
├── components/
│   ├── hero.tsx                  # Landing section
│   ├── registration-form.tsx     # Form component
│   ├── footer.tsx                # Footer
│   └── ui/                       # shadcn/ui components
├── public/
│   └── greenlab-logo.jpg         # GreenLab logo image
├── SETUP_GUIDE.md                # Detailed setup instructions
└── README.md                     # This file
```

## 🎨 Design System

### Colors
- **Primary (Neon Green)**: `oklch(0.52 0.235 147.69)` - Main accent color
- **Secondary (Deep Red)**: `oklch(0.48 0.18 0.04)` - Secondary accent
- **Background**: `oklch(0.095 0 0)` - Dark navy
- **Foreground**: `oklch(0.95 0 0)` - Near white

### Custom Utilities
- `.glassmorphism` - Glassmorphic card effect
- `.glow-green` - Green glow shadow
- `.input-glow` - Form input styling with focus effects
- `.animate-float` - Floating animation for background elements

## 📧 API Endpoint

**POST** `/api/register`

### Request Body
```json
{
  "fullName": "John Doe",
  "phone": "+1234567890",
  "email": "john@example.com",
  "faculty": "engineering",
  "levelOfStudy": "second-year"
}
```

### Response (Success)
```json
{
  "message": "Registration successful"
}
```

### Response (Error)
```json
{
  "message": "Error description"
}
```

## ⚙️ Environment Variables

To enable Google Sheets integration, add these to your Vercel project:

```
GOOGLE_SHEET_ID=your-sheet-id-here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=your-service-account-private-key
# Optional if tab name is not "Registrations"
GOOGLE_SHEET_NAME=Sheet1
```

Share your target sheet with the service account email as an Editor.

Without these variables, the form will work in demo mode (submissions acknowledged but not saved).

## 🧪 Testing

### Test Form Submission (Demo Mode)
1. Run the dev server
2. Fill out the registration form
3. Click "Register Now"
4. You should see a success message

### Test Google Sheets Integration
1. Set up Google Sheets as per `SETUP_GUIDE.md`
2. Add environment variables
3. Submit a form
4. Check your Google Sheet for the new row

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

The design adapts seamlessly across all breakpoints.

## 🎯 Customization Guide

### Change Colors
Edit `app/globals.css` CSS variables in `:root` and `.dark` sections.

### Add Form Fields
1. Update `registrationSchema` in `components/registration-form.tsx`
2. Add form field JSX
3. Update API route in `app/api/register/route.ts`

### Customize Faculty/Level Options
Edit the `SelectContent` sections in `components/registration-form.tsx`.

### Update Branding
- Edit hero and footer text in respective components
- Change colors in globals.css
- Update metadata in `app/layout.tsx`

## 🔐 Security Notes

- Phone numbers and emails are validated client-side and server-side
- All form data is validated with Zod schemas
- Google API key should be kept secure and only used server-side
- No sensitive data is exposed to the client

## 🐛 Troubleshooting

**Q: Registrations not saving to Google Sheets?**
A: Ensure environment variables are set correctly, the sheet is shared with your service account email, and Google Sheets API is enabled.

**Q: Form looks wrong on mobile?**
A: Clear browser cache and ensure Tailwind is properly compiled.

**Q: Phone validation failing?**
A: Phone numbers must include country code (e.g., +1 for US, +44 for UK).

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Hook Form](https://react-hook-form.com/)
- [shadcn/ui](https://ui.shadcn.com)
- [Google Sheets API](https://developers.google.com/sheets/api)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions:
1. Check the `SETUP_GUIDE.md` for detailed setup instructions
2. Review the troubleshooting section above
3. Check component files for implementation details

---

**GreenLab Hackathon 2026** - Innovate. Create. Compete.
