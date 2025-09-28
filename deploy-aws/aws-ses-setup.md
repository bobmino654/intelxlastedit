# Amazon SES Setup for IntelX

This guide covers setting up Amazon Simple Email Service (SES) to send emails from your Firebase Cloud Function.

## 1. Verify Your Domain

You must prove that you own the domain you're sending emails from.

1.  Go to the **Amazon SES console**.
2.  In the navigation pane, under **Configuration**, choose **Verified identities**.
3.  Click **Create identity**.
4.  Select **Domain** as the identity type.
5.  Enter your domain name (e.g., `intelx360.xom`).
6.  Click **Create identity**.
7.  SES will generate three CNAME records. You must add these records to your domain's DNS settings (e.g., in Route 53, GoDaddy, Cloudflare).
8.  It may take up to 72 hours for verification to complete, but it's usually much faster. The status will change to **Verified** in the SES console.

## 2. Verify a "From" Email Address

Even with a verified domain, it's good practice to verify the specific email address you'll use.

1.  Follow the same steps as above, but select **Email address** as the identity type.
2.  Enter the email address (e.g., `info@intelx360.xom`).
3.  SES will send a verification link to that email address. Click the link to complete verification.

## 3. Move Out of the Sandbox

By default, your SES account is in a "sandbox" environment. This means:
*   You can only send emails **to** verified email addresses.
*   You have a low sending quota.

To send emails to any address, you must request to be moved out of the sandbox.

1.  In the SES console, you'll see a banner about being in the sandbox. Click **Request production access**.
2.  Fill out the form:
    *   **Mail type:** `Transactional`.
    *   **Website URL:** Provide the URL of your live website.
    *   **Use case description:** Explain how you will use SES. Be thorough. Example:
        > "We will use Amazon SES to send transactional emails to users who submit our contact form on our corporate website (yourdomain.com). These are user-initiated emails sent one at a time to our internal support team. We will not be sending any marketing or bulk emails. We have implemented all necessary SPF and DKIM records."
3.  Acknowledge the terms and submit your request.
4.  Approval can take up to 24 hours.

## 4. Get Your SMTP Credentials

Your Cloud Function will use SMTP credentials to authenticate with SES.

1.  In the SES console, go to **Account dashboard**.
2.  Under **Simple Mail Transfer Protocol (SMTP) settings**, click **Create SMTP credentials**.
3.  This will take you to IAM. An IAM user will be created.
4.  Click **Create**.
5.  **Download the credentials.** This is your only chance to see the secret access key. Store the **SMTP Username** and **SMTP Password** securely.

## 5. Configure Cloud Function Environment

Use the Firebase CLI to set the SES credentials as environment variables for your Cloud Function. **Do not hardcode them in your `index.js` file.**

```bash
firebase functions:config:set ses.user="YOUR_SES_SMTP_USERNAME" ses.pass="YOUR_SES_SMTP_PASSWORD" ses.host="email-smtp.us-east-1.amazonaws.com" ses.port="587"
```
*   Replace the username and password with the credentials you downloaded.
*   The `ses.host` will depend on your AWS region. You can find the correct endpoint in the SES SMTP settings page.

Your `index.js` file can now access these values via `functions.config().ses.user`, etc.
