import Link from "next/link";
import Image from "next/image";

export default function About() {
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
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Us
        </h1>
        <section className="max-w-4xl mx-auto text-gray-700 space-y-8">
          <p className="text-lg leading-relaxed">
            Welcome to <strong>Solar Bright Solutions</strong>, a leading solar
            energy company committed to revolutionizing the way we power our
            world. Since our inception, we’ve been dedicated to providing
            sustainable, efficient, and cost-effective energy solutions for
            residential, commercial, and industrial clients.
          </p>

          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to accelerate the global transition to renewable
            energy by delivering innovative solar solutions that empower
            individuals and businesses to harness the power of the sun. We aim
            to make clean energy accessible and affordable for everyone.
          </p>

          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Expertise:</strong> Our team of skilled engineers and
              consultants brings years of experience in the solar industry.
            </li>
            <li>
              <strong>Customization:</strong> We design systems tailored to your
              specific energy needs and goals.
            </li>
            <li>
              <strong>Quality Assurance:</strong> We use only top-tier products
              and cutting-edge technology for maximum efficiency.
            </li>
            <li>
              <strong>Sustainability:</strong> We are committed to reducing
              carbon footprints and promoting eco-friendly practices.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We envision a future where renewable energy powers every home,
            business, and community, creating a cleaner and healthier planet
            for generations to come.
          </p>

          <div className="mt-12 text-center">
            <Image
              src="/team-photo.jpg"
              alt="Our Team"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <p className="mt-4 text-sm text-gray-600">
              Meet our passionate team of solar energy experts.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Solar Bright Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
