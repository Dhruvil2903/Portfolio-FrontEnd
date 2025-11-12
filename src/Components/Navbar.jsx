import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sections = [
        { name: "Home", id: "home" },
        { name: "TechStack", id: "techStack" },
        { name: "Project Work", id: "projects" },
        { name: "Education", id: "education" },
        { name: "Resume", id: "resume" },
    ];

    // Smooth scroll to section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Detect active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (
                    element.offsetTop <= scrollPosition &&
                    element.offsetTop + element.offsetHeight > scrollPosition
                ) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuVariants = {
        open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50">
            <div className="flex justify-between items-center px-6 sm:px-16 py-4 bg-black/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800 mx-4 mt-4">
                {/* Logo */}
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent tracking-widest">
                    MyPortfolio
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6 items-center">
                    {sections.map((section, index) => (
                        <motion.button
                            key={index}
                            onClick={() => scrollToSection(section.id)}
                            whileHover={{ scale: 1.1, color: "#F472B6" }}
                            className={`font-semibold tracking-wide transition-all duration-300 cursor-pointer ${activeSection === section.id
                                    ? "text-pink-400 underline"
                                    : "text-teal-400"
                                }`}
                        >
                            {section.name}
                        </motion.button>
                    ))}

                    {/* Social Icons */}
                    <div className="flex gap-4 ml-4 text-xl">
                        <motion.a
                            href="https://github.com/Dhruvil2903"
                            target="_blank"
                            whileHover={{ scale: 1.2, color: "#fff" }}
                            className="text-gray-300"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/dhruvil0329/"
                            target="_blank"
                            whileHover={{ scale: 1.2, color: "#0A66C2" }}
                            className="text-gray-300"
                        >
                            <FaLinkedin />
                        </motion.a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden bg-black/90 backdrop-blur-md mt-2 rounded-2xl border border-gray-800 mx-4`}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <ul className="flex flex-col gap-4 p-4 text-center">
                    {sections.map((section, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                scrollToSection(section.id);
                                setIsOpen(false);
                            }}
                            whileHover={{ scale: 1.05, color: "#F472B6" }}
                            className={`font-semibold text-xl tracking-wide transition-all duration-300 ${activeSection === section.id
                                    ? "text-pink-400 underline"
                                    : "text-teal-400"
                                }`}
                        >
                            {section.name}
                        </motion.button>
                    ))}

                    <div className="flex justify-center gap-6 mt-2 text-2xl">
                        <motion.a
                            href="https://github.com/Dhruvil2903"
                            target="_blank"
                            whileHover={{ scale: 1.2, color: "#fff" }}
                            className="text-gray-300"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/dhruvil0329/"
                            target="_blank"
                            whileHover={{ scale: 1.2, color: "#0A66C2" }}
                            className="text-gray-300"
                        >
                            <FaLinkedin />
                        </motion.a>
                    </div>
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
