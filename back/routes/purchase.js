// import express from 'express';
// import Purchase from '../schema/purchase.model.js';
// import auth from '../model/authh.js';
// import { User } from "../schema/user.model.js";
// import { sendWhatsAppMessage } from '../services/twilioservice.js';

// const router = express.Router();

// // POST /api/save-purchase
// router.post('/save-purchase', auth, async (req, res) => {
//   const { classId, batchTitle, price } = req.body;
//   const userId = req.user._id;

//   try {
//     const existing = await Purchase.findOne({ userId, classId });

//     const now = new Date();
//     const expiryDate = new Date();
//     expiryDate.setMonth(expiryDate.getMonth() + 10); // 10 months from now

//     if (existing && existing.expiryDate > now) {
//       return res.status(200).json({ message: 'Already purchased' });
//     }

//     const purchaseData = {
//       userId,
//       classId,
//       title: batchTitle,          // ✅ Save title
//       expiryDate,
//     };

//     await Purchase.findOneAndUpdate(
//       { userId, classId },
//       purchaseData,
//       { upsert: true, new: true }
//     );

//     // Send WhatsApp message for paid batches
//     if (price > 0) {
//       const user = await User.findById(userId);
//       if (user?.phone) {
//         const formattedPhone = `whatsapp:+91${user.phone}`;
//         await sendWhatsAppMessage(batchTitle, formattedPhone);
//       }
//     }

//     res.status(200).json({ message: 'Purchase saved' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });



// // GET /api/user-purchases
// router.get('/user-purchases', auth, async (req, res) => {
//   const userId = req.user._id;

//   try {
//     const now = new Date();
//     const purchases = await Purchase.find({
//       userId,
//       expiryDate: { $gt: now }, // Only active purchases
//     }).select('classId title expiryDate -_id'); // ✅ include title and expiryDate

//     res.status(200).json(purchases);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Unable to fetch purchases' });
//   }
// });

// // POST /api/purchase-access
// router.post('/purchase-access', auth, async (req, res) => {
//   const { classId } = req.body;
//   const userId = req.user._id;

//   try {
//     const now = new Date();
//     const purchase = await Purchase.findOne({
//       userId,
//       classId,
//       expiryDate: { $gt: now },
//     });

//     res.status(200).json({ access: !!purchase });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// export default router;





// ✅ BACKEND ROUTES: /routes/purchase.js
import express from 'express';
import Purchase from '../schema/purchase.model.js';
import auth from '../model/authh.js';
import { User } from '../schema/user.model.js';
import { sendWhatsAppMessage } from '../services/twilioservice.js';

const router = express.Router();

// ✅ POST /api/save-purchase
router.post('/save-purchase', auth, async (req, res) => {
  const { classId, batchTitle, price, description, imageUrl, isPremium } = req.body;
  const userId = req.user._id;

  console.log(" Purchase Payload:", {
    classId, batchTitle, price, description, imageUrl, isPremium,
  });

  try {
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 10);

    const purchaseData = {
      userId,
      classId,
      title: batchTitle,
      price: price || 0,
      description: description || '',
      imageUrl: imageUrl || '',
      expiryDate,
      isPremium: !!isPremium, // ✅ Ensure boolean
    };

    await Purchase.findOneAndUpdate(
      { userId, classId },
      { $set: purchaseData },
      { upsert: true, new: true }
    );

    if (price > 0) {
      const user = await User.findById(userId);
      if (user?.phone) {
        const formattedPhone = `whatsapp:+91${user.phone}`;
        await sendWhatsAppMessage(batchTitle, formattedPhone);
      }
    }

    res.status(200).json({ message: 'Purchase saved' });
  } catch (err) {
    console.error("❌ Error saving purchase:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ GET /api/user-purchases
router.get('/user-purchases', auth, async (req, res) => {
  const userId = req.user._id;

  try {
    const now = new Date();
    const purchases = await Purchase.find({
      userId,
      expiryDate: { $gt: now },
    }).select('classId title description imageUrl price expiryDate isPremium -_id'); // ✅ include isPremium

    res.status(200).json(purchases);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to fetch purchases' });
  }
});

// ✅ POST /api/purchase-access
router.post('/purchase-access', auth, async (req, res) => {
  const { classId } = req.body;
  const userId = req.user._id;

  try {
    const now = new Date();
    const purchase = await Purchase.findOne({
      userId,
      classId,
      expiryDate: { $gt: now },
    });

    res.status(200).json({ access: !!purchase });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;








