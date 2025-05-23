// schema/purchase.model.js
import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  classId: { type: String, required: true },
  title: { type: String, required: true },             // Batch title
  expiryDate: { type: Date, required: true },          // Access valid until
}, { timestamps: true });

const Purchase = mongoose.model('Purchase', purchaseSchema);
export default Purchase;
