import express from 'express';
import Test from '../models/Test.model.js';
import TestAttempt from '../models/TestAttempt.model.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// GET /api/tests
router.get('/tests', async (req, res) => {
  const tests = await Test.find().select('testId title description duration');
  res.json(tests);
});

// GET /api/test/:testId
router.get('/test/:testId', auth, async (req, res) => {
  const test = await Test.findOne({ testId: req.params.testId });
  if (!test) return res.status(404).json({ error: 'Test not found' });
  res.json(test);
});

// POST /api/test/submit
router.post('/test/submit', auth, async (req, res) => {
  const { testId, answers } = req.body;
  const userId = req.user._id;
  const test = await Test.findOne({ testId });
  if (!test) return res.status(404).json({ error: 'Test not found' });

  let score = 0;
  answers.forEach(({ questionIndex, selectedOption }) => {
    if (test.questions[questionIndex]?.correctOption === selectedOption) score++;
  });

  const attempt = new TestAttempt({
    userId,
    testId,
    answers,
    startTime: new Date(),
    endTime: new Date(),
    score,
  });

  await attempt.save();
  res.json({ score, total: test.questions.length });
});

// GET /api/test/:testId/leaderboard
router.get('/test/:testId/leaderboard', async (req, res) => {
  const attempts = await TestAttempt.find({ testId: req.params.testId })
    .sort({ score: -1 })
    .limit(20)
    .populate('userId', 'name');
  res.json(attempts);
});

export default router;
