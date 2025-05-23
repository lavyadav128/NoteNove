// /backend/services/twilioService.js
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

const sendWhatsAppMessage = async (batchTitle, userPhone = 'whatsapp:+917878341542') => {
  try {
    await client.messages.create({
      from: fromNumber,
      to: userPhone,
      body: `🔔 New Batch Purchased: ${batchTitle}`
    });
    console.log('WhatsApp message sent!');
  } catch (error) {
    console.error('Failed to send WhatsApp message:', error.message);
  }
};

export { sendWhatsAppMessage };
