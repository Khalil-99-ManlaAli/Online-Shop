import React from "react";

function App() {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-xl font-bold text-blue-600">🛍️ Mein Online Shop</h1>
        <nav className="space-x-4">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#kontakt" className="text-gray-600 hover:text-blue-600">Kontakt</a>
          <select className="border rounded p-1">
            <option>Deutsch</option>
            <option>English</option>
            <option>Kurdisch</option>
            <option>Arabisch</option>
            <option>Spanisch</option>
            <option>Französisch</option>
          </select>
        </nav>
      </header>

      {/* Home / Produkte */}
      <section id="home" className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8">Produkte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded shadow">
            <img src="https://via.placeholder.com/300x200" alt="Produkt 1" className="rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produkt 1</h3>
            <p className="text-gray-700 mb-4">Beschreibung für Produkt 1.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Jetzt kaufen</button>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <img src="https://via.placeholder.com/300x200" alt="Produkt 2" className="rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Produkt 2</h3>
            <p className="text-gray-700 mb-4">Beschreibung für Produkt 2.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Jetzt kaufen</button>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-white p-8 text-center border-t">
        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
        <div className="flex justify-center gap-6 text-3xl text-blue-600">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-snapchat"></i></a>
          <a href="mailto:dein@email.de"><i className="fas fa-envelope"></i></a>
        </div>
      </section>
    </div>
  );
}

export default App;
