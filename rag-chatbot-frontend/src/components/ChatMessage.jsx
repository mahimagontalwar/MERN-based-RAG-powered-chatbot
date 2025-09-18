export default function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.role}`}>
      <span>{message.role}: </span>
      <span>{message.message}</span>
    </div>
  );
}
