# Content Summarizer

A full-stack content summarization app with React (TypeScript) frontend and Express backend using Gemini-2.0-Flash model.

---

## Features

- Summarize content using Gemini-2.0-Flash AI model in backend  
- React frontend built with TypeScript  
- Styled with Tailwind CSS  
- PDF support via `pdfjs-dist`  
- Toast notifications with React Toastify

---

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, Vite, React Toastify, pdfjs-dist  
- **Backend:** Express.js, Gemini-2.0-Flash model for summarization

---

## Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── helper/
│   ├── utils/   
│   └── main.tsx
    └── App.tsx
     
    
```

### .env setup (Frontend):

```
VITE_BACKEND_URL=Your localhost url
```

---

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/Shahidullah-Kaisar/Content-Summarizer.git
cd frontend

npm install
# or
yarn install

npm run dev
# or
yarn dev
```

---

## Backend

The backend is built with Express.js using ES modules and connects to the Gemini-2.0-Flash model for content summarization.

### Features

- REST API built with Express 5  
- CORS enabled for frontend communication  
- Environment variables managed with `dotenv`  
- Uses `@google/generative-ai` package for Gemini model integration  
- MongoDB included for data storage (if needed)  
- Nodemon configured for development auto-reload

---

### 🗂️ Step 3: Folder Structure

```
backend/
├── index.js
```

---

### Setup

```bash
cd backend
npm init -y
```

Run:

```bash
nodemon index.js
```

### .env setup (Backend):

```
GEMINI_API_KEY=Your Key
PORT=port number
```