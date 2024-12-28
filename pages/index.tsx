import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
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
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 bg-white shadow-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Switch to Solar Power and Save Big!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Join thousands of homeowners and businesses who are reducing energy costs and protecting the planet with our innovative solar solutions.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/quote"
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
{/* Features Section */}
<section className="py-16 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          Why Choose Solar?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
          <div className="text-center">
            <Image src="/icon-savings.svg" alt="Savings" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Save Money</h3>
            <p className="text-gray-600">
              Cut down on electricity bills and increase your savings by using
              renewable energy.
            </p>
          </div>
          <div className="text-center">
            <Image src="/icon-eco.svg" alt="Eco-Friendly" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Eco-Friendly</h3>
            <p className="text-gray-600">
              Help reduce carbon emissions and protect the planet for future
              generations.
            </p>
          </div>
          <div className="text-center">
            <Image src="/icon-reliable.svg" alt="Reliable" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Reliable Energy</h3>
            <p className="text-gray-600">
              Enjoy uninterrupted power with high-efficiency solar panels and
              storage solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-600">
              "Switching to solar has been a game-changer. Our bills are lower,
              and the process was seamless."
            </p>
            <p className="mt-4 font-semibold">- Sarah M.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-600">
              "Great service and support! Highly recommend this company for
              solar installations."
            </p>
            <p className="mt-4 font-semibold">- James T.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-600">
              "A reliable energy solution for our business. We’ve seen huge
              savings in the first year."
            </p>
            <p className="mt-4 font-semibold">- Amanda K.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-8 px-6">
          <div>
            <h3 className="font-semibold text-lg">How does solar power work?</h3>
            <p className="text-gray-600">
              Solar panels convert sunlight into electricity that you can use to
              power your home or business.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Will I save money with solar?</h3>
            <p className="text-gray-600">
              Yes! Solar reduces your dependence on grid electricity, resulting
              in significant cost savings over time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Is financing available?</h3>
            <p className="text-gray-600">
              Absolutely. We offer flexible financing options to make solar
              accessible for everyone.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          Get in Touch
        </h2>
        <form
          className="max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
          {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-200 text-sm px-6 py-4 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Solar Company. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </nav>
      </footer>
    </div>
  );
}
