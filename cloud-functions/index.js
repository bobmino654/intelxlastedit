const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure Nodemailer with Amazon SES transport
// Make sure to set these in your Cloud Functions environment configuration
// firebase functions:config:set ses.user="YOUR_SES_SMTP_USERNAME" ses.pass="YOUR_SES_SMTP_PASSWORD" ses.host="YOUR_SES_SMTP_HOST" ses.port="YOUR_SES_SMTP_PORT"
const mailTransport = nodemailer.createTransport({
    host: functions.config().ses.host,
    port: functions.config().ses.port,
    secure: true, // use SSL
    auth: {
        user: functions.config().ses.user,
        pass: functions.config().ses.pass,
    },
});

const APP_NAME = 'IntelX Website';

// Sends an email notification when a new contact message is created.
exports.sendContactEmail = functions.firestore.document('contacts/{contactId}').onCreate((snap, context) => {
    const data = snap.data();

    const mailOptions = {
        from: `"${APP_NAME}" <info@intelx360.xom>`,
        to: 'info@intelx360.xom',
        subject: `New Contact Message from ${data.name}`,
        html: `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Organization:</strong> ${data.organization || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
        `,
    };

    return mailTransport.sendMail(mailOptions)
        .then(() => console.log(`New contact email sent to info@intelx360.xom`))
        .catch((error) => console.error('There was an error while sending the email:', error));
});
