import React, { useState } from "react";
import { motion } from "framer-motion";
import resume from "../assets/DhruvilResume.png"; // Add your resume screenshot here

const Resume = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/resume", {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch resume.");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Dhruvil_Patel_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Failed to download resume. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <section
      id="resume"
      className="flex justify-center items-center py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full"
      >
        {/* Left: Resume Preview Image */}
        <div className="md:w-1/2 w-full relative group">
          <img
            src={resume}
            alt="Resume Preview"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
        </div>

        {/* Right: Description + Button */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center gap-6 text-center md:text-left">
          <h2 className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent font-bold text-3xl md:text-2xl">
            My Resume
          </h2>
          <p className="text-gray-300 text-md md:text-lg">
            Check out my latest resume to explore my skills, experience, and
            projects. 
          </p>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-pink-500/40 transition-all duration-300 self-center md:self-start"
            disabled={loading}
          >
            {loading ? "Downloading..." : "Download Resume"}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
