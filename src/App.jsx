// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import PostPage from './PostPage';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
