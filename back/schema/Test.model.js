import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],  // 4 options
  correctOption: Number,  // 0-based index
});

const testSchema = new mongoose.Schema({
  testId: { type: String, unique: true },
  title: String,
  description: String,
  duration: Number, // in minutes
  questions: [questionSchema],
});

export default mongoose.model('Test', testSchema);
