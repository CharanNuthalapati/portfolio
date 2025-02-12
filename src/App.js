import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 font-sans relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/mnt/data/IMG_20241031_132302.jpg')" }}></div>
      
      <header className="text-center mb-12 w-full max-w-5xl relative z-10">
        <h1 className="text-6xl font-extrabold text-blue-400">Charan Nuthalapati</h1>
        <p className="text-2xl text-gray-300 mt-2">Cloud Engineer | AWS & DevOps Enthusiast</p>
        <p className="text-gray-400 mt-2">Specialized in Cloud Architecture, Automation, and Scalable Solutions</p>
        <div className="mt-6 flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/nuthalapaticharan/" 
            className="px-6 py-3 bg-blue-500 rounded-lg shadow-lg text-white hover:bg-blue-600 text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Hire Me
          </a>
          <a 
            href="mailto:nuthalapaticharan22@gmail.com" 
            className="px-6 py-3 bg-gray-800 rounded-lg shadow-lg text-white hover:bg-gray-700 text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </header>
      
      {/* About Section */}
      <section className="mb-12 w-full max-w-5xl text-center relative z-10">
        <h2 className="text-4xl font-semibold text-blue-300 mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">Aspiring Cloud Engineer with hands-on experience in AWS services, cloud infrastructure, and DevOps practices. Skilled in deploying scalable cloud solutions, automation, and database optimization. Passionate about innovation in cloud computing.</p>
      </section>
      
      {/* Skills & Soft Skills Section */}
      <section className="mb-12 w-full max-w-5xl text-center relative z-10">
        <h2 className="text-4xl font-semibold text-blue-300 mb-6">Technical Skills</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-300">Cloud Platforms</h3>
            <p className="text-gray-400">AWS, Azure, GCP</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-300">DevOps & CI/CD</h3>
            <p className="text-gray-400">Docker, Kubernetes, Terraform, GitHub Actions</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-300">Programming</h3>
            <p className="text-gray-400">Python, Java, Bash</p>
          </div>
        </div>
      </section>
      
      {/* Soft Skills & Languages */}
      <section className="mb-12 w-full max-w-5xl text-center relative z-10">
        <h2 className="text-4xl font-semibold text-blue-300 mb-6">Soft Skills & Languages</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-300">Soft Skills</h3>
            <p className="text-gray-400">Critical Thinking, Innovation, Communication, Collaboration</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-300">Languages</h3>
            <p className="text-gray-400">English, Hindi, Telugu, Tamil</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="mb-12 w-full max-w-5xl text-center relative z-10">
        <h2 className="text-4xl font-semibold text-blue-300 mb-6">Contact</h2>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/CharanNuthalapati" className="text-gray-300 hover:text-blue-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nuthalapaticharan/" className="text-blue-300 hover:text-blue-500"><FaLinkedin /></a>
          <a href="mailto:nuthalapaticharan22@gmail.com" className="text-gray-300 hover:text-blue-400"><FaEnvelope /></a>
          <a href="tel:+12177905976" className="text-gray-300 hover:text-blue-400"><FaPhone /></a>
        </div>
      </section>
    </div>
  );
}
