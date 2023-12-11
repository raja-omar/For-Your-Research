// src/About.tsx

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* About Section */}
      <motion.section
        className="container mx-auto text-center p-8 bg-opacity-80 rounded-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">About ResearchHelper</h2>
            <p className="text-lg mb-6">
              ResearchHelper is a powerful tool designed to assist researchers
              in organizing, saving, and classifying research papers with ease.
              Our mission is to simplify the research process and provide a
              seamless experience for users.
            </p>
            <p className="text-lg mb-6">
              With ResearchHelper, you can effortlessly scrape relevant
              information from various sources, organize your research papers in
              a systematic and easy-to-access manner, and save your favorite
              papers while classifying them based on your preferences.
            </p>
            <p className="text-lg mb-6">
              Whether you are a student, academic, or industry professional,
              ResearchHelper is here to make your research journey smoother and
              more efficient.
            </p>
            {/* Add more content as needed */}
          </div>
          <div className="relative overflow-hidden rounded-md hover:shadow-2xl transition duration-300">
            <motion.img
              src="/ai.jpg" // Replace with the appropriate image path
              alt="About Image"
              className="rounded-md shadow-md animate__animated animate__fadeIn animate__delay-1s"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-transparent rounded-md"></div>
          </div>
        </div>
      </motion.section>

      {/* Additional Design Details */}
      <div className="mt-8 text-lg text-center">
        <p className="mb-4">
          Explore the endless possibilities of ResearchHelper. Your research,
          your way.
        </p>
        <p className="mb-4">
          Join us in revolutionizing the world of research and discovery.
        </p>
        <p>
          <strong>Unlock the Power of Research with ResearchHelper!</strong>
        </p>
      </div>

      {/* Made with ❤️ by Omar */}
      <div className="mt-8 text-lg">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline"
        >
          Omar
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
