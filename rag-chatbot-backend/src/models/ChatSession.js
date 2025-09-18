const mongoose = require("mongoose");

const chatSessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  messages: [
    {
      role: { type: String, required: true },   // "user" | "bot"
      message: { type: String, required: true } // actual text
    }
  ]
});

module.exports = mongoose.model("ChatSession", chatSessionSchema);
