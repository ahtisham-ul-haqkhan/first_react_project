import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./components/getUser/User";
import Add from "./components/addUser/Add";
import Edit from "./components/updateUser/Edit";
import './App.css';

function HomePage() {
  return <User/>;
}

function HomeCreatePage() {
  return <Add/>;

}

function HomeUpdatePage() {
  return <Edit/>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<HomeCreatePage />} />
          <Route path="/update" element={<HomeUpdatePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
