import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess('Your message has been sent successfully!');
      } else {
        setError(result.error || 'Something went wrong.');
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full px-8 py-4 bg-white shadow-md flex justify-between items-center">
        <Image
          src="/solar-logo.svg"
          alt="Solar Company Logo"
          width={150}
          height={50}
          priority
        />
        <nav className="flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </header>

      {/* Contact Form Section */}
      <main className="px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Get in Touch
        </h1>
        {success && (
          <div className="mb-6 text-green-600 text-center">
            <p>{success}</p>
          </div>
        )}
        {error && (
          <div className="mb-6 text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}
        <form
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow"
          onSubmit={handleSubmit}
        >
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Your email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-200 text-sm px-6 py-4 flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()} Solar Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
