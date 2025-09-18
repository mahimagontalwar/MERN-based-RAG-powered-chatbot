import axios from "axios";

const API_URL = "http://localhost:5000/api/chat"; // backend endpoint

export const sendQuery = async (sessionId, query) => {
  const response = await axios.post(API_URL, { sessionId, query });
  return response.data;
};

export const getHistory = async (sessionId) => {
  const response = await axios.get(`${API_URL}/${sessionId}`);
  return response.data;
};

export const resetSession = async (sessionId) => {
  const response = await axios.delete(`${API_URL}/${sessionId}`);
  return response.data;
};
