# Project Name
Product Store
## Overview
This project is a full-stack web application built with React and Vite on the frontend and Node.js on the backend. It incorporates modern UI frameworks and state management techniques, as well as a MongoDB database for data persistence.

## Technologies Used

### Frontend
- **React + Vite**: The frontend is developed using React with Vite, a fast and lightweight bundler that enhances development speed and build performance.
- **UI Framework**:
  - **Tailwind CSS**: Tailwind is used for styling components and achieving a responsive design through its utility-first approach.
  - **Chakra UI**: For pre-built, accessible UI components, Chakra UI is used, making it easy to design and style complex UI elements with a consistent theme.
- **State Management**:
  - **Zustand**: Zustand is used for managing complex state across components, chosen for its simplicity and lightweight approach compared to Redux Toolkit.

### Backend
- **Node.js**: The backend server is built with Node.js, handling all routes and API requests efficiently.
- **Express.js**: Express is used as the web framework for creating RESTful API endpoints, managing middleware, and handling routing.
- **MongoDB**: All data is stored in MongoDB collections, making it easy to handle large datasets in a NoSQL format. 
  - **Mongoose Schemas**: Mongoose is used for defining data models, enabling schema-based validation and simplifying MongoDB interactions.

## Features
- **Frontend**:
  - Responsive and user-friendly UI built with Tailwind CSS and Chakra UI.
  - State management with Zustand for seamless state handling across components.
- **Backend**:
  - RESTful API for CRUD operations.
  - MongoDB for data storage, with schemas defined using Mongoose.

## Getting Started
# In the frontend directory
npm i && npm run dev

# In the backend directory
npm i && npm start

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB database connection string.

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
