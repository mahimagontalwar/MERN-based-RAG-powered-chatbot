const ChatSession = require("../models/ChatSession");
const { generateAnswer } = require("../services/geminiService");
const { getPassages } = require("../services/retrievalService");

exports.chat = async (req, res) => {
  try {
    const { sessionId, query } = req.body;

    if (!sessionId || !query) {
      return res.status(400).json({ error: "sessionId and query are required" });
    }

    // 1. Retrieve top passages
    const passages = await getPassages(query);

    // 2. Generate answer from Gemini
    const answer = await generateAnswer(query, passages);

    // 3. Save in MongoDB with both user + bot messages
    const chatSession = await ChatSession.findOneAndUpdate(
      { sessionId },
      {
        $push: {
          messages: {
            $each: [
              { role: "user", message: query },
              { role: "bot", message: answer }
            ]
          }
        }
      },
      { new: true, upsert: true }
    );

    res.json({
      answer,
      sessionId,
      history: chatSession.messages
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const chatSession = await ChatSession.findOne({ sessionId });

    if (!chatSession) return res.json([]);

    res.json(chatSession.messages);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.resetSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    await ChatSession.findOneAndDelete({ sessionId });
    res.json({ message: "Session cleared" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
