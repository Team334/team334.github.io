import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HeadingBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg border-b border-blue-500 rounded-xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center flex-col flex-1">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-yellow-300"
              >
                📢
              </motion.div>
              <span className="font-bold text-lg">Tryouts Announcement!</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-4 text-center">
              <span className="text-sm sm:text-base">
                Join the TechKnights! Tryouts are happening now.
              </span>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfD1IV7jSP3xN7ICn42X0ZvbHa3hUnmJzX0H7mQ1TH--LO_jA/viewform"
                className="inline-flex items-center gap-1 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-blue-700 rounded-full transition-colors flex-shrink-0"
            aria-label="Close announcement"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
