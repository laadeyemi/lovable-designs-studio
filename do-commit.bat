@echo off
cd /d "C:\Users\Adeyemi\Desktop\Project\web\lovable-designs-studio"
echo Checking git status...
git status --short
echo.
echo Adding all files...
git add .
echo.
echo Committing...
git commit -m "Fix form submissions with FormSubmit integration - removed failed Vite middleware approach

- Switched Contact.tsx to use FormSubmit API instead of failed backend proxy
- Switched Quote.tsx to use FormSubmit API for consistency
- Reverted vite.config.ts to remove non-functional middleware
- Forms now send submissions to contact@ulktili.resend.app via FormSubmit
- Both contact and quote forms working with toast notifications
- CORS issue resolved with proven FormSubmit service

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
echo.
echo Pushing to GitHub...
git push
echo.
echo Done!
pause
