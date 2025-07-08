// Importing required modules and dependencies
import express from 'express'; // Express for creating routes
import Purchase from '../schema/purchase.model.js'; // Mongoose model for handling purchases
import auth from '../model/authh.js'; // Custom auth middleware for protecting routes
import { User } from '../schema/user.model.js'; // Mongoose model for user data
import { sendWhatsAppMessage } from '../services/twilioservice.js'; // Twilio service for sending WhatsApp notifications

// Create a new Express router
const router = express.Router();

//  POST /api/save-purchase
router.post('/save-purchase', auth, async (req, res) => {
  // Destructure required fields from request body
  const { classId, batchTitle, price, description, imageUrl, isPremium } = req.body;

  // Extract userId from the decoded JWT payload (set in auth middleware)
  const userId = req.user._id;

  // Log incoming purchase payload for debugging
  console.log(" Purchase Payload:", {
    classId, batchTitle, price, description, imageUrl, isPremium,
  });

  try {
    // Calculate expiry date (10 months from now)
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 10);

    // Construct purchase object with fallbacks
    const purchaseData = {
      userId,
      classId,
      title: batchTitle,
      price: price || 0,
      description: description || '',
      imageUrl: imageUrl || '',
      expiryDate,
      isPremium: !!isPremium, //  Ensure it's stored as a boolean
    };

    // Upsert (update if exists, otherwise insert) the purchase entry
    await Purchase.findOneAndUpdate(
      { userId, classId },          // Match on user and class
      { $set: purchaseData },       // Set new values
      { upsert: true, new: true }   // Insert if not exists, and return the new document
    );

    // If the purchase has a price > 0, send a WhatsApp confirmation
    if (price > 0) {
      const user = await User.findById(userId); // Find user by ID
      if (user?.phone) {                        // If user has a phone number
        const formattedPhone = `whatsapp:+91${user.phone}`; // Format number for WhatsApp
        await sendWhatsAppMessage(batchTitle, formattedPhone); // Send message
      }
    }

    // Respond with success
    res.status(200).json({ message: 'Purchase saved' });
  } catch (err) {
    // Log and handle errors
    console.error(" Error saving purchase:", err);
    res.status(500).json({ error: 'Server error' });
  }
});



//  GET /api/user-purchases
router.get('/user-purchases', auth, async (req, res) => {
  // Extract userId from JWT payload
  const userId = req.user._id;

  try {
    const now = new Date(); // Current time
    // Fetch all non-expired purchases for the user
    const purchases = await Purchase.find({
      userId,
      expiryDate: { $gt: now }, // Only include non-expired
    }).select('classId title description imageUrl price expiryDate isPremium -_id'); 
    //  Only select required fields, excluding _id

    // Send back the list of purchases
    res.status(200).json(purchases);
  } catch (err) {
    // Handle error in fetching
    console.error(err);
    res.status(500).json({ error: 'Unable to fetch purchases' });
  }
});



//  POST /api/purchase-access
router.post('/purchase-access', auth, async (req, res) => {
  // Extract classId from request and userId from token
  const { classId } = req.body;
  const userId = req.user._id;

  try {
    const now = new Date(); // Current date-time
    // Find if the user has a valid (non-expired) purchase for this class
    const purchase = await Purchase.findOne({
      userId,
      classId,
      expiryDate: { $gt: now },
    });

    // Respond with access status (true/false)
    res.status(200).json({ access: !!purchase });
  } catch (err) {
    // Handle server errors
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Export the router so it can be used in the main application
export default router;
