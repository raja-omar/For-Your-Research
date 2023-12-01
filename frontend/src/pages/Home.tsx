// src/App.tsx

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="py-8 mb-4 bg-black"> 
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-bold text-white">ResearchHelper</h1>
            <nav className="space-x-4">
              <a href="#" className="hover:text-purple-500">🏠 Home</a>
              <a href="#" className="hover:text-purple-500">📚 About</a>
              <a href="#" className="hover:text-purple-500">⚙ Features</a>
              <a href="#" className="hover:text-purple-500">✉ Contact</a>
            </nav>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-500">🔐 Privacy Policy</a>
            <a href="#" className="hover:text-purple-500">📜 Terms of Service</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Unlock the Power of Research</h2>
            <p className="text-lg mb-6">Organize, save, classify, and view your research papers with ease. Your research, your way.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md">Get Started</a>
              <a href="#" className="border border-purple-500 text-purple-500 hover:text-white hover:bg-purple-500 py-2 px-4 rounded-md">Learn More</a>
            </div>
          </div>
          <img src="hero-image.png" alt="Research Image" className="rounded-md shadow-md animate__animated animate__fadeIn animate__delay-1s" />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderFeatureCard("Powerful Scraping", "Effortlessly scrape relevant information from various sources.")}
          {renderFeatureCard("Organize Papers", "Organize your research papers in a systematic and easy-to-access manner.")}
          {renderFeatureCard("Save and Classify", "Save your favorite papers and classify them based on your preferences.")}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8 mt-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 ResearchHelper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const renderFeatureCard = (title: string, description: string) => (
  <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
    <h3 className="text-xl font-bold mb-2 text-purple-800">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default App;
