const axios = require('axios');

exports.generateAnswer = async (query, passages) => {
  const prompt = `Answer the question using these passages:\n${passages.join(
    '\n'
  )}\nQuestion: ${query}`;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
      {
        contents: [{ parts: [{ text: prompt }] }]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY // ✅ correct header
        }
      }
    );

    return (
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No answer generated"
    );
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message);
    return "Error generating answer from Gemini API.";
  }
};
