# Coders-Cup-Scoreboard
This is a MERN-based system for the ranking Scoreboard of the Coder's Cup event with separate folders for frontend, backend and script.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

## Getting Started

To get the project running locally, follow the steps below.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/coders-cup-attendance-portal.git
cd coders-cup-attendance-portal
```

### 2. Navigate to Frontend and Backend

There are three folders in this repository:
- `/frontend` (React app)
- `/backend` (Node.js + Express + MongoDB)
- `/script` (Node.js + Puppeteer)

### 3. Install Dependencies

You need to install dependencies for all, frontend, backend and the script.

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

#### Script

```bash
cd script
npm install
```


### 4. Run the Application

Start both the frontend and backend servers separately, and then run the script to scrap data and update the ranking in the backend

#### Run Frontend

```bash
cd frontend
npm start
```

#### Run Backend

```bash
cd backend
npm run dev
```

#### Run Script

```bash
cd backend
npm run dev
```

## Project Structure

```plaintext
├── frontend/      # Contains React code for the frontend
├── backend/       # Contains Node.js and Express code for the backend
└── script/        # Contains Node.js and Puppeteer code for the webscrappinggit init
```