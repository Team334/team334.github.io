import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/ui/button";

export default function DonatePage() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-16 px-4 md:px-8"
        >
            {/* Hero Section */}
            <motion.div 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-bold main bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    Support Our Mission
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-gray-400 secondary">
                    Help us inspire the next generation of engineers and innovators
                </p>
            </motion.div>

            {/* Donation Options */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Online Donation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden p-8"
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold main mb-6 text-center">Online Donation</h2>
                            <div className="space-y-6">
                                <p className="secondary text-lg text-center">
                                    Make a secure online donation through the Brooklyn Tech Alumni Foundation
                                </p>
                                <div className="bg-black/30 rounded-xl p-6">
                                    <p className="secondary text-lg mb-4">
                                        1. Visit{' '}
                                        <Link
                                            href="https://bthsalumni.org/donate"
                                            target="_blank"
                                            className="text-blue-400 hover:text-blue-300 underline transition-colors"
                                        >
                                            bthsalumni.org/donate
                                        </Link>
                                    </p>
                                    <p className="secondary text-lg">
                                        2. Select "<span className="font-bold text-white">Robotics</span>" under{' '}
                                        <span className="font-bold text-white">Designation</span>
                                    </p>
                                </div>
                                <Image
                                    src="/donation.png"
                                    alt="Donation instructions"
                                    width={800}
                                    height={400}
                                    className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <div className="text-center">
                                    <Link href="https://bthsalumni.org/donate" target="_blank">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="hover:bg-white/20 text-white transition-all duration-300"
                                        >
                                            Donate Now →
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>

                    {/* Check Donation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="group relative bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden p-8"
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold main mb-6 text-center">Mail a Check</h2>
                            <div className="space-y-6">
                                <p className="secondary text-lg text-center">
                                    Send your contribution via check to our foundation
                                </p>
                                <div className="bg-black/30 rounded-xl p-6 space-y-4">
                                    <div className="secondary text-lg">
                                        <p className="font-bold text-white mb-2">Mailing Address:</p>
                                        <p>Brooklyn Tech Alumni Foundation</p>
                                        <p>P.O. Box 26608</p>
                                        <p>Brooklyn, NY 11202-6608</p>
                                        <p className="mt-2">Attn: Techknights Robotics Donation</p>
                                    </div>
                                </div>
                                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                                    <p className="secondary text-lg text-red-200">
                                        The Brooklyn Technical Alumni foundation is a 501(c)(3) nonprofit organization. 
                                        A W-9 form can be provided on request. Our tax ID is 11-2739496. 
                                        All donations are tax deductible.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}