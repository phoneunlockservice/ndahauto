const nodemailer = require('nodemailer');

const sendEmailNotification = async (formData) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: 'hello@ndahauto.com',
    to: 'hello@ndahauto.com', // Sending to self (can change)
    subject: 'New Vehicle Reservation',
    html: `
      <h3>New Vehicle Reservation Received</h3>
      <p><strong>Vehicle:</strong> ${formData.vehicle}</p>
      <p><strong>AC:</strong> ${formData.acPreference}</p>
      <p><strong>Pickup Location:</strong> ${formData.pickupLocation}</p>
      <p><strong>Return Location:</strong> ${formData.returnLocation}</p>
      <p><strong>Pickup Date & Time:</strong> ${formData.pickupDate} ${formData.pickupTime}</p>
      <p><strong>Return Date:</strong> ${formData.returnDate}</p>
      <p><strong>Need Driver?:</strong> ${formData.driverNeeded}</p>
      <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
      <p><strong>Additional Notes:</strong> ${formData.additionalNotes}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmailNotification;