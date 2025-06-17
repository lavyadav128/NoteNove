import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  classId: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true,
    default: "" 
  },
  price: { 
    type: Number, 
    required: true,
    default: 0 
  },
  imageUrl: { 
    type: String, 
    required: true,
    default: "" 
  },
  expiryDate: { 
    type: Date, 
    required: true 
  },
  isPremium: { 
    type: Boolean, // ✅ updated to Boolean
    required: true 
  }
}, { 
  timestamps: true,
  strict: true,
  validateBeforeSave: true
});

export default mongoose.model('Purchase', purchaseSchema);
