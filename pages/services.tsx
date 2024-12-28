import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
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
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Solar Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Residential Solar</h2>
            <p className="text-gray-600">
              Transform your home into an energy-efficient space with our
              tailored solar panel installations.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Commercial Solar</h2>
            <p className="text-gray-600">
              Empower your business with renewable energy and reduce operational
              costs with our custom solutions.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Battery Storage</h2>
            <p className="text-gray-600">
              Maximize your energy independence with our reliable battery
              storage systems for uninterrupted power.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Solar Panel Cleaning</h2>
            <p className="text-gray-600">
              Keep your panels operating at peak efficiency with our cleaning
              and maintenance services.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Consultation & Design</h2>
            <p className="text-gray-600">
              Work with our experts to design a solar system that fits your
              energy needs and budget.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-2">EV Charging Stations</h2>
            <p className="text-gray-600">
              Power your electric vehicle with our innovative and sustainable
              charging solutions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
