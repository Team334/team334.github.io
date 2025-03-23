import Link from "next/link";
import React from "react";
import Image from "next/image";
import {Button} from "@/components/shadcn/ui/button";
import {motion} from "framer-motion";

export default function SponsorPage() {
    const sponsors = [
        {
            image: "/logos/first.webp",
            title: "FIRST",
            url: "https://www.firstinspires.org/",
            description: "FIRST is a global robotics community preparing young people for the future and the world's leading youth-serving nonprofit advancing STEM education."
        },
        {
            image: "/sponsors/alumni-foundation.webp",
            title: "Brooklyn Tech Alumni Foundation",
            url: "https://bthsalumni.org/",
            description: "The Brooklyn Tech Alumni Foundation mobilizes Tech graduates to support the nation's premier high school for science, technology, engineering and mathematics"
        },
        {
            image: "/sponsors/Educademy.png",
            title: "Educademy",
            url: "https://www.educademy.org/about/",
            description: "We provide higher-order thinking, processing, and learning experiences around significant issues, themes, and ideas across different areas of study. Our mission is to promote educational excellence for all."
        },
        {
            image: "/sponsors/intuitive-foundation.webp",
            title: "Intuitive Foundation",
            url: "https://www.intuitive-foundation.org/",
            description: "The Intuitive Foundation is dedicated to reducing the global burden of disease and suffering through philanthropy, research and education."
        },
        {
            image: "/sponsors/arament.webp",
            title: "Arament Research, Development and Engineering Center",
            url: "",
            description: "The U.S. Army Armament Research, Development and Engineering Center (ARDEC) is an internationally acknowledged hub for the advancement of armament technologies"
        },
        {
            image: "/sponsors/con-edison.webp",
            title: "Con Edison",
            url: "https://www.coned.com/en",
            description: "We operate one of the world's largest energy delivery systems. Founded in 1823 as the New York Gas Light company, our electric, gas, and steam service now"
        },
        {
            image: "/sponsors/dodstem.webp",
            title: "DoD STEM",
            url: "https://www.dodstem.us",
            description: "Science, Technology, Engineering and Mathematics, or STEM, is the gateway to a world of wonder. U.S. Department of Defense (DoD) STEM professionals work at the leading edge of our nation’s most advanced technological breakthroughs. STEM is our future."
        },
        {
            image: "/sponsors/haas-foundation.webp",
            title: "Gene HAAS Foundation",
            url: "https://ghaasfoundation.org/content/ghf/en/home.html",
            description: "The Gene Haas Foundation was established in 1999, by Gene Haas, founder and owner of Haas Automation, Inc., to support the needs of the local community, through grants to such local charities as the Boys and Girls Clubs, Food Share, Rescue Mission, and others."
        },
        {
            image: "/sponsors/quotebeam.webp",
            title: "QuoteBeam",
            url: "https://quotebeam.com",
            description: "We aim to eliminate frustrations in the purchasing process by streamlining finding product information, getting technical support, quotations, and ordering. All in one place."
        },
        {
            image: "/sponsors/whimsy-tech.webp",
            title: "Whimsy Tech",
            url: "https://whimsytech.com",
            description: "#TeamWhimsy"
        },
        {
            image: "/sponsors/ike-heller.webp",
            title: "Ike Heller",
            url: "",
            description: ""
        },
    ];

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="min-h-screen py-16 px-4 md:px-8"
        >
            {/* Hero Section */}
            <motion.div 
                initial={{y: -20}}
                animate={{y: 0}}
                transition={{duration: 0.6}}
                className="text-center max-w-4xl mx-auto mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-bold main bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    Our Sponsors
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-gray-400 secondary">
                    We are grateful for the support of these amazing organizations that make our work possible
                </p>
            </motion.div>

            {/* Sponsors Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-8 md:gap-12">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="group relative bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row items-center p-6 md:p-8 relative z-10">
                                {/* Logo Section */}
                                <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
                                    <motion.div
                                        whileHover={{scale: 1.05}}
                                        transition={{duration: 0.2}}
                                    >
                                        <Image
                                            src={sponsor.image}
                                            alt={sponsor.title}
                                            width={200}
                                            height={200}
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-3/4 md:pl-8">
                                    <h2 className="text-2xl md:text-3xl font-bold main mb-4">
                                        {sponsor.title}
                                    </h2>
                                    <p className="text-gray-300 secondary text-lg mb-6">
                                        {sponsor.description}
                                    </p>
                                    {sponsor.url && sponsor.url !== "" && (
                                        <Link href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                            <Button
                                                variant="outline"
                                                size="lg"
                                                className="hover:bg-white/20 text-white transition-all duration-300"
                                            >
                                                Learn More →
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <motion.div 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="text-center mt-20 p-8 bg-black/20 backdrop-blur-sm rounded-2xl max-w-3xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold main mb-4">
                    Interested in Sponsoring?
                </h2>
                <p className="text-gray-300 secondary text-lg mb-6">
                    Join our mission to inspire the next generation of engineers and innovators
                </p>
                <p className="text-xl text-center text-neutral-200 mb-12">
            You can reach out to us by email
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-lg main">STUDENTS</h3>
              <ul className="mt-2 space-y-2">
                <li className={"secondary"}><b>Samantha Tan</b> - samanthat155@nycstudents.net</li>
                <li className={"secondary"}><b>Valentina Wolfe</b> - ValentinaW2@nycstudents.net</li>
                <li className={"secondary"}><b>Gadin Aggarwal</b> - gadina@nycstudents.net</li>
              </ul>
            </div>
            <div>
              <h3 className="font-lg main">MENTORS</h3>
              <ul className="mt-2 space-y-2">
                <li className={"secondary"}><b>Ms. Shaina Doherty</b> - SDoherty2@schools.nyc.gov</li>
                <li className={"secondary"}><b>Mr. Marlon Esguerra</b> - MEsguerra@schools.nyc.gov</li>
                <li className={"secondary"}><b>Mr. Ali Harb</b> - aharb@schools.nyc.gov</li>
              </ul>
            </div>
          </div>  
            </motion.div>
        </motion.div>
    );
}
