import React from "react"
import Faq from "@/components/faq";
import { motion } from "framer-motion";

export default function FAQPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Gradient Background */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center"
                >
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold main bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Have Questions?
                    </motion.h1>
                    <motion.p 
                        className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto secondary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Find answers to common questions about Team 334 and our robotics program
                    </motion.p>
                </motion.div>
            </div>

            {/* FAQ Content with Cards */}
            <motion.div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <div className="space-y-6">
                    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/5">
                        <Faq />
                    </div>
                </div>
            </motion.div>

            {/* Contact Section with Card
            <motion.div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/5">
                    <h2 className="text-2xl md:text-3xl font-bold main mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-gray-400 secondary mb-6">
                        We're here to help! Reach out to us directly.
                    </p>
                    <a 
                        href="mailto:team@bthsrobotics.com" 
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                                 text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 
                                 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-xl
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Contact Us →
                    </a>
                </div>
            </motion.div> */}
        </div> 
    )
}