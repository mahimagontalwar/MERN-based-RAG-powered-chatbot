import { useState } from "react";

export default function InputBox({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your query..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
