const express = require('express');
const { chat, getHistory, resetSession } = require('../controllers/chatController');
const router = express.Router();

router.post('/', chat);                  // Send query
router.get('/:sessionId', getHistory);   // Get session history
router.delete('/:sessionId', resetSession); // Reset session

module.exports = router;
