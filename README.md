RAG-Powered Chatbot
Overview

This project is a Retrieval-Augmented Generation (RAG) Chatbot that allows users to query information and receive responses powered by a Gemini AI service. The chatbot also stores session history, which can be viewed or reset.

Tech Stack

Frontend: React.js

Backend: Node.js + Express

Database: MongoDB

AI / Chat Service: Gemini API (mocked for local testing)

Others: dotenv, nodemon

Project Structure
Backend
rag-chatbot-backend/
│
├─ src/
│  ├─ controllers/      # ChatController (chat, getHistory, resetSession)
│  ├─ models/           # Mongoose schema for ChatSession
│  ├─ services/         # GeminiService & RetrievalService
│  └─ index.js          # Server setup
├─ .env                 # Environment variables
├─ package.json
└─ README.md

Frontend
rag-chatbot-frontend/
│
├─ src/
│  ├─ components/       # ChatWindow, ChatMessage, InputBox
│  ├─ App.jsx
│  ├─ index.js
│  └─ styles.css
├─ package.json
└─ README.md

Setup & Installation
Backend

Clone the repo:

git clone <backend-repo-url>
cd rag-chatbot-backend


Install dependencies:

npm install


Create a .env file:

PORT=5000
MONGODB_URI=<your-mongo-uri>
GEMINI_API_KEY=<your-key>


Start the server:

npm run dev


Backend will run at http://localhost:5000

Frontend

Clone the repo:

git clone <frontend-repo-url>
cd rag-chatbot-frontend


Install dependencies:

npm install


Start the frontend:

npm start


Frontend will run at http://localhost:3000 and connect to the backend.

API Endpoints
Method	Endpoint	Description	Body / Params
POST	/chat	Send a query and get AI response	{ sessionId: string, query: string }
GET	/chat/:sessionId	Get chat history for a session	sessionId in URL
DELETE	/chat/:sessionId	Reset session history	sessionId in URL
Demo Instructions

Start backend and frontend

Open frontend in browser → http://localhost:3000

Enter a query → view Gemini AI response

Check chat history and reset session as needed

Code Walkthrough

Frontend sends query → Backend API /chat

Backend:

Retrieves relevant passages using RetrievalService

Generates AI response via GeminiService

Stores both user & bot messages in MongoDB

Frontend:

Displays messages

Allows viewing or resetting session history

Live Deployment

Frontend: <frontend-live-link>

Backend: <backend-live-link>

Noteworthy Points & Improvements

Embeddings / Vector DB: Currently mocked, can integrate Pinecone or Weaviate for real RAG

Session caching: Can add Redis to reduce DB calls

Frontend: Can improve styling & add typing indicator

Security: Add authentication for production
