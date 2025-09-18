// Utilities for session handling in Redis

exports.createSessionKey = (sessionId) => `chat_session:${sessionId}`;

exports.parseHistory = async (redisClient, key) => {
    const history = await redisClient.get(key);
    return history ? JSON.parse(history) : [];
};
