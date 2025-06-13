
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
    default: "" // Add default to ensure it's never empty
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
  }
}, { 
  timestamps: true,
  strict: true, // Enforces only defined fields are saved
  validateBeforeSave: true // Ensures validation before saving
});

export default mongoose.model('Purchase', purchaseSchema);