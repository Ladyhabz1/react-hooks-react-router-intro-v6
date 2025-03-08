import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Movies from "./Movies";
import About from "./About";
import Login from "./Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/movies">Movies</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
