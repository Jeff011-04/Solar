import Link from "next/link";
import Image from "next/image";

export default function Projects() {
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
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Sunny Homes", description: "50 KW residential project" },
            { title: "Green Plaza", description: "200 KW commercial setup" },
            { title: "Eco Village", description: "100 KW community system" },
          ].map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <Image
                src={`/project-${idx + 1}.jpg`}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
