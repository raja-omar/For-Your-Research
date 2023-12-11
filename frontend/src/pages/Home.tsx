// src/App.tsx

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./About";
import Search from "./Search";
import SignInForm from "../components/Auth/SignInForm";
import SignUpForm from "../components/Auth/SignUpForm";

const Home: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic for sign-in using the provided email and password
    console.log("Signing in with:", email, password);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic for sign-up using the provided email and password
    console.log("Signing up with:", email, password);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderFeatureCard = (title: string, description: string) => (
    <motion.div
      className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold mb-2 text-purple-800">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );

  return (
    <div>
      {/* Hero Section with parallax effect */}
      <section className="container mx-auto" id="hero-section">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">
              Unlock the Power of Research
            </h2>
            <p className="text-lg mb-6">
              Organize, save, classify, and view your research papers with ease.
              Your research, your way.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/search"
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-purple-500 text-purple-500 hover:text-white hover:bg-purple-500 py-2 px-4 rounded-md"
              >
                Learn More
              </Link>
            </div>
          </div>
          <motion.img
            src="hero-image.png"
            alt="Research Image"
            className="rounded-md shadow-md animate__animated animate__fadeIn animate__delay-1s"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
      </section>

      {/* Sign Up / Sign In Forms */}
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sign In Form */}
          <div className="p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div className="p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-black py-2 px-4 rounded-md"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Feature Cards with hover effect */}
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderFeatureCard(
            "Powerful Scraping",
            "Effortlessly scrape relevant information from various sources."
          )}
          {renderFeatureCard(
            "Organize Papers",
            "Organize your research papers in a systematic and easy-to-access manner."
          )}
          {renderFeatureCard(
            "Save and Classify",
            "Save your favorite papers and classify them based on your preferences."
          )}
        </div>
      </section>

      {/* Footer with animation */}
      <motion.footer
        className="bg-purple-800 text-white py-8 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 ResearchHelper. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="text-purple-500 hover:text-white focus:outline-none"
          >
            Back to Top
          </button>
        </div>
      </motion.footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        {/* Navigation */}
        <nav className="fixed w-full z-10">
          <div className="container mx-auto flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:text-purple-500 cursor-pointer">
                🏠 Home
              </Link>
              <Link
                to="/about"
                className="hover:text-purple-500 cursor-pointer"
              >
                📚 About
              </Link>
              <Link
                to="/search"
                className="hover:text-purple-500 cursor-pointer"
              >
                🔍 Search
              </Link>
            </div>
            <div className="flex space-x-4"></div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
