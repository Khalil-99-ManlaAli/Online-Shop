import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-xl font-bold text-blue-600">🛍️ Mein Online Shop</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
            <Link to="/register" className="text-gray-600 hover:text-blue-600">Registrieren</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

function Startseite() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Willkommen im Shop!</h2>
      <p>Bitte melde dich an oder registriere dich, um fortzufahren.</p>
    </div>
  );
}

export default App;
