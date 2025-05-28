import React from "react";

function Register() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Registrieren</h2>
      <form>
        <input type="text" placeholder="Vor- und Nachname" className="w-full mb-3 p-2 border rounded" />
        <input type="email" placeholder="E-Mail" className="w-full mb-3 p-2 border rounded" />
        <input type="password" placeholder="Passwort" className="w-full mb-3 p-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Registrieren</button>
      </form>
    </div>
  );
}

export default Register;
