# Fullstack Application

A fullstack web application with React frontend and Express backend.

## Project Structure

```
.
├── frontend/          # React + Vite frontend application
│   ├── src/          # Source files
│   ├── public/       # Static assets
│   ├── index.html    # Entry HTML file
│   ├── package.json  # Frontend dependencies
│   └── vite.config.js
│
├── backend/          # Express backend server
│   ├── server.js     # Main server file
│   └── package.json  # Backend dependencies
│
└── README.md
```

## Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:3000`

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start the server
- `npm run dev` - Start with nodemon (auto-reload)
