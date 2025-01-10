"use client"

import React from "react";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/aceternity/ui/autotype";
import { GithubIcon, HeartFilledIcon, InstagramIcon, TBAIcon, YoutubeIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/shadcn/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="h-screen mb-10 overflow-hidden antialiased relative">
            <motion.div 
                className="absolute inset-0 z-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <Image
                    src="/team2024-1.webp"
                    alt="Team 334"
                    className="w-full h-full object-cover"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
            </motion.div>
            <div className="absolute inset-0 z-10">
                <Header />
            </div>
        </div>
    );
};

const Header = () => {
    const socialButtons = [
        {
            href: siteConfig.links.instagram,
            icon: <InstagramIcon size={20} />,
            label: "Instagram",
            bgColor: "bg-[#e03a66]",
            hoverColor: "hover:bg-[#be5b89]"
        },
        {
            href: siteConfig.links.youtube,
            icon: <YoutubeIcon width={24} height={24} />,
            label: "Youtube",
            bgColor: "bg-[#e02f2f]",
            hoverColor: "hover:bg-[#bf1d1d]"
        },
        {
            href: siteConfig.links.github,
            icon: <GithubIcon size={20} />,
            label: "Github",
            bgColor: "bg-[#010409]",
            hoverColor: "hover:bg-[#071c3f]"
        }
    ];

    const actionButtons = [
        {
            href: siteConfig.links.blueAlliance,
            icon: <TBAIcon width={24} height={24} />,
            label: "Blue Alliance",
            bgColor: "bg-[#4555a5]",
            hoverColor: "hover:bg-[#374484]"
        },
        {
            href: "/donate",
            icon: <HeartFilledIcon width={24} height={24} className="text-danger" />,
            label: "Donate",
            bgColor: "bg-[#E34D75]",
            hoverColor: "hover:bg-[#B53D5D]"
        }
    ];

    return (
        <motion.div 
            className="text-center max-w-7xl relative mx-auto px-4 w-full z-30 left-0 top-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h1 className="text-[2.15rem] md:text-7xl font-bold">
                <TextGenerateEffect words="Team 334" className="main text-white" />
            </h1>
            <motion.p 
                className="text-base md:text-xl text-white font-bold mt-4 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Team 334 is a FIRST® Robotics Competition Team from Brooklyn Technical
                High School in Downtown Brooklyn, NY.
            </motion.p>

            <motion.div 
                className="flex flex-col md:flex-row md:min-w-fit gap-4 mt-8 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <div className="flex flex-row gap-2 justify-center flex-wrap">
                    {socialButtons.map((btn, index) => (
                        <Button 
                            key={btn.label}
                            className={`${btn.bgColor} rounded-full transition-all duration-300 ${btn.hoverColor} transform hover:scale-105`}
                        >
                            <Link
                                target="_blank"
                                href={btn.href}
                                className="flex flex-row gap-2 items-center"
                            >
                                {btn.icon}
                                <b>{btn.label}</b>
                            </Link>
                        </Button>
                    ))}
                </div>
                <div className="flex flex-row gap-2 justify-center flex-wrap">
                    {actionButtons.map((btn, index) => (
                        <Button 
                            key={btn.label}
                            className={`${btn.bgColor} rounded-full transition-all duration-300 ${btn.hoverColor} transform hover:scale-105`}
                        >
                            <Link
                                href={btn.href}
                                target={btn.href.startsWith('http') ? '_blank' : undefined}
                                className="flex flex-row gap-2 items-center"
                            >
                                {btn.icon}
                                <b>{btn.label}</b>
                            </Link>
                        </Button>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export { Hero };
