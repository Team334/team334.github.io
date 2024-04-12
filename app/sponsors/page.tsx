"use client"
import {AuroraBackground} from "@/components/aceternity/ui/aurora";
import {motion} from "framer-motion";
import {Image} from "@nextui-org/react";
import React from "react";
import {BackgroundGradient} from "@/components/aceternity/ui/bg-gradient-card";
import {Link} from "@nextui-org/link";


export default function SponsorPage() {
    const bentoItems = [
        {
            image: "/logos/first.png",
            title: "FIRST",
            url: "https://www.firstinspires.org/",
            description: ""
        },
        {
            image: "/sponsors/alumni-foundation.png",
            title: "Brooklyn Tech Alumni Foundation",
            url: "",
            description: ""
        },
        {
            image: "/sponsors/arament.png",
            title: "Arament Research, Development and Engineering Center",
            url: "",
            description: ""
        },
        {
            image: "/sponsors/con-edison.png",
            title: "Con Edison",
            url: "https://www.coned.com/en",
            description: ""
        },
        {
            image: "/sponsors/dodstem.png",
            title: "DoD STEM",
            url: "https://www.dodstem.us",
            description: ""
        },
        {
            image: "/sponsors/haas-foundation.png",
            title: "Gene HAAS Foundation",
            url: "https://ghaasfoundation.org/content/ghf/en/home.html",
            description: ""
        },
        {
            image: "/sponsors/ike-heller.png",
            title: "Ike Heller",
            url: "",
            description: ""
        },
        {
            image: "/sponsors/quotebeam.png",
            title: "QuoteBeam",
            url: "https://quotebeam.com",
            description: ""
        },
        {
            image: "/sponsors/whimsy-tech.png",
            title: "Whimsy Tech",
            url: "https://whimsytech.com",
            description: ""
        }
    ];


    return (
        <div className={"w-full"}>
            <AuroraBackground>
                <motion.div
                    initial={{opacity: 0.0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
                >
                    <div className="text-4xl md:text-7xl font-bold dark:text-white text-center main">
                        Our Sponsors
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        This page is dedicated to our all of sponsors! We couldn't make our robot without your help!
                    </div>
                </motion.div>
            </AuroraBackground>
            <div className={"h-full py-20 items-center justify-center"}>
                <div className="flex flex-wrap justify-center gap-5">
                    {bentoItems.map((item, i) => (
                        <BackgroundGradient
                            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-between"
                            key={i}>
                            <div className="h-[400px] w-[300px] flex flex-col justify-between">
                                <div className="flex items-center justify-center h-[300px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt="sponsor"
                                        width={300}
                                        height={300}
                                        className="max-w-full max-h-full object-contain object-center"
                                    />
                                </div>
                                <div className="mt-4">
                                    <Link className="text-base sm:text-xl text-black dark:text-neutral-200"
                                          href={item.url}>
                                        {item.title}
                                    </Link>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </BackgroundGradient>
                        ))}
                </div>
            </div>
        </div>
    );
}
