import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Contact Me</h3>
          <div className="flex items-center gap-2 hover:text-pink-500 transition-colors">
            <FaEnvelope />
            <span>pateldhruvil0329@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-pink-500 transition-colors">
            <FaPhone />
            <span>+1 123-456-7890</span>
          </div>
          <div className="flex items-center gap-2 hover:text-pink-500 transition-colors">
            <FaMapMarkerAlt />
            <span>Bedford, Nova Scotia, Canada</span>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6 text-2xl mt-4 md:mt-0"
        >
          <a href="https://linkedin.com/in/dhruvil0329" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://github.com/dhruvil2903" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaTwitter />
          </a>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Dhruvil Patel. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
