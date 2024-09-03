import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import User from "./components/getUser/User";
import Add from "./components/addUser/Add";
import Edit from "./components/updateUser/Edit";

// Define route components directly in index.js
function HomePage() {
  return <User />;
}

function HomeCreatePage() {
  return <Add />;
}

function HomeUpdatePage() {
  return <Edit />;
}

// Main App component with routing setup
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<HomeCreatePage />} />
        <Route path="/edit/:id" element={<HomeUpdatePage />} />
      </Routes>
    </Router>
  );
}

// Render the App component and Toaster for notifications
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
