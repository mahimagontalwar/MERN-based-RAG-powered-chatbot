import { useState, useEffect } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import { sendQuery, getHistory } from "./services/api";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [sessionId] = useState(() => Date.now().toString());

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getHistory(sessionId);
      setMessages(history);
    };
    fetchHistory();
  }, [sessionId]);

  const handleSend = async (query) => {
    const data = await sendQuery(sessionId, query);
    setMessages(data.history);
  };

  return (
    <div className="app">
      <h1>RAG Chatbot</h1>
      <ChatWindow messages={messages} />
      <InputBox onSend={handleSend} />
    </div>
  );
}
