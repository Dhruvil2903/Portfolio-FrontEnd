import React from 'react'
import logo from '../Objects/TechObj'
import { motion } from 'framer-motion'

const TechStack = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4 md:px-10">
      {/* Title Section */}
      <h2 className="bg-gradient-to-b from-pink-600 to-purple-300 bg-clip-text text-transparent font-bold md:text-2xl mb-10 tracking-wide text-center">
        Tech Stack
      </h2>

      {/* Grid Section */}
      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 
          gap-6 sm:gap-8 md:gap-10 
          justify-items-center 
          w-full max-w-6xl
        "
      >
        {logo.map((tech, index) => (
          <motion.div
            key={tech.id}
            className="
              flex flex-col items-center justify-center 
              bg-gray-900/40 rounded-2xl border border-purple-500/20
              p-3 sm:p-4 md:p-5
              hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20
              transition-all duration-300 ease-in-out
              w-[6rem] sm:w-[7rem] md:w-[8rem]
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <motion.img
              src={tech['img-url']}
              alt={tech.Title}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain mb-2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <h3 className="text-gray-200 text-sm font-normal text-center">
              {tech.Title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
