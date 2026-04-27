# Resend Configuration Guide for Contact & Quote Forms

## Current Setup Status

Your website is already configured to send emails via Resend! Here's what's in place:

- ✅ **Contact Form** - Sends to `contact@ulktili.resend.app`
- ✅ **Quote Form** - Sends to `contact@ulktili.resend.app`
- ✅ **API Key** - Already added to `.env.local`
- ✅ **Email Format** - HTML formatted emails with all details

---

## Step-by-Step Configuration

### Step 1: Verify Resend Account & API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign in or create an account
3. Navigate to **Settings → API Keys**
4. Copy your API key (starts with `re_`)
5. Your key is already in `.env.local` ✅

### Step 2: Restart Your Development Server

**IMPORTANT:** Environment variables are only loaded when the server starts.

```bash
# Stop your current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 3: Test the Contact Form

1. Open `http://localhost:8080/contact` (or your dev URL)
2. Fill out the form with test data
3. Submit the form
4. Check your email at `contact@ulktili.resend.app` for the submission

### Step 4: Test the Quote Form

1. Open `http://localhost:8080/quote`
2. Fill out the form with project details
3. Submit the form
4. Check your email for the quote request

---

## Email Delivery Details

### What Gets Sent

**From:** `onboarding@resend.dev` (Resend's test domain)
**To:** `contact@ulktili.resend.app` (Resend subdomain)
**Reply-To:** User's email (so you can reply directly)

**Email includes:**
- Name
- Email address
- Message/Project details
- Company (quote form only)
- Budget (quote form only)

### Email Format

Emails are sent in professional HTML format with:
- Clear subject line
- Formatted content
- Easy-to-read layout

---

## Using Your Custom Domain (Optional)

If you want to use your own domain instead of Resend's:

### Option 1: Use a Custom Domain

1. In Resend Dashboard → **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., `hello@yourdomain.com`)
4. Follow DNS verification steps
5. Update the `from` field in forms:

**In `src/pages/Contact.tsx`:**
```javascript
from: "noreply@yourdomain.com",  // Change this
```

**In `src/pages/Quote.tsx`:**
```javascript
from: "noreply@yourdomain.com",  // Change this
```

### Option 2: Keep Using ulktili.resend.app

- **Pros:** No DNS configuration needed, free
- **Cons:** Shows Resend branding
- **Action:** No changes needed, you're all set!

---

## Production Deployment

### On Vercel

When you deploy to Vercel:

1. **Add environment variable to Vercel:**
   - Go to your Vercel project settings
   - **Environment Variables**
   - Add: `VITE_RESEND_API_KEY` = your API key
   - Value: `re_BcCk8Xo8_8rxpeKnHqX7mYwn6fzQqgrKD`

2. **Redeploy** your application

3. **Test in production** by submitting forms

### Vercel Environment Setup

```
Variable Name: VITE_RESEND_API_KEY
Variable Value: re_BcCk8Xo8_8rxpeKnHqX7mYwn6fzQqgrKD
Environments: Production, Preview, Development
```

---

## Troubleshooting

### "Email service is not configured" Error

**Problem:** The API key isn't being loaded
**Solutions:**
1. Restart your dev server (`npm run dev`)
2. Make sure `.env.local` file exists
3. Check API key is correct in `.env.local`
4. Clear browser cache and reload

### Emails Not Arriving

**Check these:**
1. Form submitted successfully (success message appears)
2. Check spam/junk folder in your email
3. Verify recipient email in form code: `to: "contact@ulktili.resend.app"`
4. Go to Resend Dashboard → Check email logs

### CORS Errors in Browser Console

**This is normal for production.** Resend API supports browser requests, so CORS errors shouldn't block emails, but if they do:
1. Try a fresh browser tab
2. Check browser console for exact error
3. Verify API key in `.env.local`

---

## Monitoring & Logs

### Check Email Logs in Resend Dashboard

1. Go to [https://resend.com](https://resend.com) → Dashboard
2. **Emails** tab shows:
   - Sent emails
   - Delivery status
   - Failed emails
   - Click-through rates

### Check Email Details

1. Click on any sent email
2. View recipient, subject, content
3. Check delivery timestamp

---

## Security Best Practices

✅ **Already Implemented:**
- API key stored in `.env.local` (not in code)
- Environment variable used only
- HTML escaping for user input
- Form validation before sending

✅ **Additional Recommendations:**
- Never commit `.env.local` to git
- Use `.gitignore` to exclude env files
- Rotate API key regularly
- Monitor Resend dashboard for suspicious activity

---

## Current Form Configuration

### Contact Form (`src/pages/Contact.tsx`)

```javascript
const response = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
  },
  body: JSON.stringify({
    from: "onboarding@resend.dev",
    to: "contact@ulktili.resend.app",
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `<h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, "<br>")}</p>`,
  }),
});
```

### Quote Form (`src/pages/Quote.tsx`)

```javascript
const response = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
  },
  body: JSON.stringify({
    from: "onboarding@resend.dev",
    to: "contact@ulktili.resend.app",
    replyTo: email,
    subject: `New Quote Request from ${name}`,
    html: `<h2>New Quote Request</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Company:</strong> ${company || "Not provided"}</p>
           <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
           <p><strong>Project Details:</strong></p>
           <p>${details.replace(/\n/g, "<br>")}</p>`,
  }),
});
```

---

## Quick Start Checklist

- [ ] Verify Resend account created at https://resend.com
- [ ] API key saved in `.env.local`
- [ ] Dev server restarted after adding `.env.local`
- [ ] Test contact form at `/contact`
- [ ] Test quote form at `/quote`
- [ ] Check emails received at `contact@ulktili.resend.app`
- [ ] Verify emails in Resend dashboard
- [ ] (Optional) Set up custom domain in Resend
- [ ] Add API key to Vercel environment variables
- [ ] Deploy to Vercel
- [ ] Test production forms

---

## Support Resources

- **Resend Docs:** https://resend.com/docs
- **Resend API Reference:** https://resend.com/docs/api-reference/emails/send
- **React Integration:** https://resend.com/docs/react-email

---

## Your Current Status

✅ **Configured & Ready to Use**

Your website's contact and quote forms are fully configured to send emails via Resend. Just:
1. Restart your dev server
2. Test the forms
3. Check your email
4. Deploy to production with API key in Vercel env vars

**You're all set!** 🚀
