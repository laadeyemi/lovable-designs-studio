# Form Email Integration Setup

## Overview

Both the **Contact** and **Quote** forms on the website are now configured to send emails to `contact@ulktili.resend.app` using the Resend email service.

## Setup Instructions

### 1. Get a Resend API Key

1. Visit [https://resend.com](https://resend.com) and sign up for a free account
2. Go to the [API Keys section](https://resend.com/api-keys)
3. Create a new API key and copy it

### 2. Configure Environment Variables

1. Open the `.env.local` file in the project root
2. Replace `your_resend_api_key_here` with your actual Resend API key:
   ```
   VITE_RESEND_API_KEY=your_actual_api_key_here
   ```

### 3. Verify Resend Domain

Since emails are being sent from `contact@ulktili.resend.app`, you need to:

1. Go to your Resend dashboard
2. Navigate to **Domains**
3. Ensure `ulktili.resend.app` is properly configured and verified

If you want to use a custom domain instead, you can update the sender email in:
- `src/pages/Contact.tsx` (line 37)
- `src/pages/Quote.tsx` (line 39)

Change the `from` field to your desired email address.

## How It Works

### Contact Form
- **Location**: `src/pages/Contact.tsx`
- **Fields**: Name, Email, Message
- **Recipient**: `contact@ulktili.resend.app`
- **Reply-To**: The user's submitted email address

### Quote Form
- **Location**: `src/pages/Quote.tsx`
- **Fields**: Name, Email, Company (optional), Budget, Project Details
- **Recipient**: `contact@ulktili.resend.app`
- **Reply-To**: The user's submitted email address

## Features

✅ Client-side email submission using Resend API
✅ Real-time form validation
✅ Loading states during submission
✅ Success/error toast notifications
✅ HTML-formatted emails
✅ Reply-to functionality (emails contain the user's email)

## Testing

1. Start the development server: `npm run dev`
2. Navigate to `/contact` or `/quote`
3. Fill out and submit the form
4. Check `contact@ulktili.resend.app` for the submitted email
5. You should receive an HTML-formatted email with all the form data

## Security Notes

⚠️ **Important**: The Resend API key is exposed on the frontend. This is acceptable because:
1. The Resend API key is restricted to sending emails only
2. It can only send from the configured sender address
3. Resend rate limits prevent abuse

However, for production with high traffic, consider moving this to a backend API.

## Troubleshooting

**"Email service is not configured" error:**
- Make sure `.env.local` exists in the project root
- Verify `VITE_RESEND_API_KEY` is set correctly
- Restart the dev server after updating `.env.local`

**CORS errors:**
- This shouldn't occur as Resend API supports cross-origin requests
- Check your browser console for details

**Emails not arriving:**
- Verify the Resend domain is properly configured
- Check the Resend dashboard for failed email logs
- Ensure you're sending to a valid email address

## Files Modified

- `src/pages/Contact.tsx` - Added Resend email integration
- `src/pages/Quote.tsx` - Added Resend email integration
- `.env.local` - Environment variable configuration
- `.env.example` - Example configuration file
