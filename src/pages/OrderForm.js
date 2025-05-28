import React, { useState } from "react";

function OrderForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Bestellung aufgeben</h2>
      {submitted ? (
        <p className="text-green-600 font-semibold">
          ✅ Vielen Dank! Deine Bestellung wurde übermittelt.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Vor- und Nachname" required className="w-full p-2 border rounded" />
          <input type="email" placeholder="E-Mail" required className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Telefonnummer" required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Adresse" required className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Jetzt bestellen</button>
        </form>
      )}
    </div>
  );
}

export default OrderForm;
