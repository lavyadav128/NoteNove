import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  questionIndex: Number,
  selectedOption: Number,
});

const attemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  testId: String,
  answers: [answerSchema],
  startTime: Date,
  endTime: Date,
  score: Number,
});

export default mongoose.model('TestAttempt', attemptSchema);
