'use client';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'exarhistheatro@gmail.com',
          subject: 'Υποβολή φόρμας επικοινωνίας Εξ Αρχής',
          text: `Όνομα: ${name}\nEmail: ${email}\nΜήνυμα: ${message}`,
        }),
      });

      if (response.ok) {
        toast.success('Το μήνυμα στάλθηκε επιτυχώς!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Αποτυχία αποστολής μηνύματος.');
      }
    } catch (error) {
      toast.error('Αποτυχία αποστολής μηνύματος');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Επικοινωνήστε μαζί μας</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Όνομα:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Μήνυμα:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Αποστολή
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
