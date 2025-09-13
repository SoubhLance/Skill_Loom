import { motion } from "framer-motion";
import { FaRocket, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaRocket className="text-pink-400" />
        Welcome to My App
      </motion.h1>

      {/* Animated Box */}
      <motion.div
        className="w-24 h-24 bg-blue-500 rounded-2xl shadow-lg mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated Button */}
      <motion.a
        href="https://github.com"
        target="_blank"
        className="flex items-center gap-2 bg-pink-500 px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub className="text-xl" />
        Visit GitHub
      </motion.a>
    </div>
  );
}

export default App;
