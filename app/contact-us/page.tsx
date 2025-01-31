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
    <div className="flex flex-col justify-center items-center gap-4 lg:flex-row">
      <form className="bg-background p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-primary font-bold mb-6 text-gray-800">Επικοινωνήστε μαζί μας</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-primary font-bold mb-2">
            Όνομα
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-primary font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-primary font-bold mb-2">
            Μήνυμα
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800">
          Αποστολή
        </button>
      </form>
      <ToastContainer />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.4733022017754!2d23.732729175406803!3d37.989419299767356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd172dbfe379%3A0x8f656a2707ead660!2zzpXOviDOkc-Bz4fOrs-C!5e0!3m2!1sen!2sgr!4v1737563229804!5m2!1sen!2sgr"
        className="w-full max-w-md rounded-lg"
        height={450}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
