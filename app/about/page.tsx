"use client"

import {motion} from "framer-motion";
import {ImagesSlider} from "@/components/aceternity/ui/page-hero";
import React from "react";
import {title} from "@/components/primitives";
import {AwardBanner} from "@/components/awards";
import {Image} from "@nextui-org/react"
import {BentoGrid, BentoGridItem} from "@/components/aceternity/ui/bento-grid";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/aceternity/ui/globe").then((m) => m.World), {
    ssr: false,
});

export default function AboutPage() {
    const images = [
        "/team2022.png",
        "/team2020.jpg",
        "/team2019-2.jpg",
        "/team2019.jpg",
    ];


    const Awards = [
        {
            title: "Finalist",
            year: "2023",
            comp: "NYC Regional"
        },
        {
            title: "Finalist",
            year: "2023",
            comp: "Long Island Regional"
        },
        {
            title: "Excellence in Engineering Award",
            year: "2019",
            comp: "NYC Regional"
        },
        {
            title: "Judges' Award",
            year: "2019",
            comp: "NYC Regional"
        },
        {
            title: "Industrial Design Award",
            year: "2016",
            comp: "NYC Regional"
        },
        {
            title: "Winner",
            year: "2014",
            comp: "NYC Regional"
        },
        {
            title: "Creativity Award",
            year: "2014",
            comp: "NYC Regional"
        },
        {
            title: "Industrial Design Award",
            year: "2013",
            comp: "NYC Regional"
        },
        {
            title: "Creativity Award",
            year: "2012",
            comp: "NYC Regional"
        },
        {
            title: "Gracious Professionalism Award",
            year: "2008",
            comp: "NYC Regional"
        },
        {
            title: "Engineering Inspiration Award",
            year: "2007",
            comp: "NYC Regional"
        },
        {
            title: "Sportsmanship Award",
            year: "2006",
            comp: "NYC Regional"
        },
        {
            title: "Engineering Inspiration Award",
            year: "2005",
            comp: "NYC Regional"
        },
        {
            title: "Engineering Inspiration Award",
            year: "2004",
            comp: "NYC Regional"
        },
        {
            title: "Chairman's Award",
            year: "2003",
            comp: "NYC Regional"
        },
        {
            title: "Rookie All-Star",
            year: "1999",
            comp: "Philadelphia Alliance Regional"
        },
    ]


    const moreItem = [
        {
            title: "Brooklyn Technical High School",
            description: "Brooklyn Technical High School (aka. “BTHS”, “Tech”) is one of New York City’s specialized\n" +
                "high schools for science, technology, engineering, and mathematics. Tech is the largest high\n" +
                "school in the United States, with an enrollment of 6,500 students across all four grades.",
            header: <div
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
                <Image
                    alt={"Working Image"}
                    src={"https://i.ytimg.com/vi_webp/vGIsE0y7tVQ/maxresdefault.webp"}
                    className={"object-cover"}/></div>,
            className:
                "md:col-span-2",
        },
        {
            title: "What is FIRST?",
            description: "FIRST (For Inspiration and Recognition of Science and Technology), founded in 1989 by Dean\n" +
                "Kamen and Woody Flowers, was created to assist in inspiring and teaching young explorers\n" +
                "like us to connect across the globe via engineering and innovation",
            header: <div
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
                <Image
                    alt={"FIRST-1"}
                    src={"https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/program-block-frc.jpg"}
                    className={"object-cover"}/></div>,
            className:
                "md:col-span-1",
        },
        {
            title: "More About FIRST",
            description:
                "Each year FIRST designs an international robotics competition in which 26 countries and over\n" +
                "3,200 teams participate in each year. Over 500,000 students participate in the FIRST\n" +
                "Robotics Competition itself, and high schools across the globe build a robot and compete at\n" +
                "various regional competitions. After all regionals take place, winners and award recipients\n" +
                "are invited to compete at the championship, which takes place in Houston, Texas. Over 450\n" +
                "teams proceeded to the championships in the 2022 season",
            header: <div
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
                <Image
                    alt={"FIRST-2"}
                    src={"https://www.firstinspires.org/sites/default/files/first-in-show/game-and-season/frc-header.png"}
                    className={"object-cover"}/></div>,
            className: "md:col-span-2",
        },
        {
            title: "FIRST Core Values",
            description:
                <p>
                    Discovery: We explore new skills and ideas.
                    Innovation: We use creativity and persistence to solve problems.
                    Impact: We apply what we learn to improve our world.
                    Inclusion: We respect each other and embrace our differences.
                    Teamwork: We are stronger when we work together.
                    Fun: We enjoy and celebrate what we do!
                </p>,
            header: <div
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
                <Image
                    alt={"FIRST-3"}
                    src={"https://www.firstinspires.org/sites/default/files/uploads/hero_headers/Header-image-fallback-gradient-high-res.jpg"}
                    className={"object-cover"}/></div>,
            className: "md:col-span-1",
        },
    ];

    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: {lat: 22.3193, lng: 114.1694},
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 48.8566,
            startLng: -2.3522,
            endLat: 52.52,
            endLng: 13.405,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 41.9028,
            startLng: 12.4964,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: -33.936138,
            startLng: 18.436529,
            endLat: 21.395643,
            endLng: 39.883798,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: 40.7128,
            startLng: -74.006,
            endLat: 48.8566,
            endLng: 2.3522,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -33.4489,
            startLng: -70.6693,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 40.7128,
            startLng: -74.006,
            endLat: 52.5200,
            endLng: 13.4050,
            arcAlt: 0.6,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: 35.6895,
            endLng: 139.6917,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: -15.7781,
            endLng: -47.9292,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: -6.2088,
            endLng: 106.8456,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: -33.4489,
            startLng: -70.6693,
            endLat: 52.5200,
            endLng: 13.4050,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 37.7749,
            startLng: -122.4194,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.6,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: 48.8566,
            endLng: 2.3522,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 35.6895,
            endLng: 139.6917,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 52.5200,
            startLng: 13.4050,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 1.3521,
            endLng: 103.8198,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: 40.7128,
            startLng: -74.006,
            endLat: 52.5200,
            endLng: 13.4050,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: -6.2088,
            endLng: 106.8456,
            arcAlt: 0.6,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 35.6895,
            endLng: 139.6917,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.4,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];

    return (
        <div className={"w-full"}>
            <div
                className="relative h-screen min-h-screen w-full justify-center items-center -top-[4rem] object-cover m-auto"
            >
                <ImagesSlider className="object-cover" images={images}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -80,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="z-50 flex flex-col justify-center items-center"
                    >
                        <motion.p
                            className="font-bold text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 main">
                            The Team Now
                        </motion.p>
                    </motion.div>
                </ImagesSlider>
            </div>
            <div className={"w-full justify-center text-center items-center p-5"}>
                <h1 className={title({class: "main"})}>Awards</h1>
                <hr className="align-middle border-gray-500 my-2 w-[40%] overflow-x-hidden m-auto"/>
                <div className={"flex flex-wrap mt-10 gap-7 items-center justify-center"}>
                    {Awards.map((award, index) => (
                        <AwardBanner
                            key={index}
                            title={award.title}
                            year={award.year}
                            comp={award.comp}
                        />
                    ))}
                </div>
            </div>
            <div
                className="flex flex-row items-center justify-center py-20 h-[100vh] md:h-auto dark:bg-black bg-white relative w-full text-center">
                <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">

                    <h1 className="text-2xl sm:text-[2rem] md:text-[2rem] lg:text-[3.1rem] font-semibold main">
                        Who are we
                        <hr className="align-middle border-gray-500 my-3 w-[50%] overflow-x-hidden m-auto"/>
                    </h1>
                    <p className="secondary">
                        We are a team that consists of 50-60 students which come nearly every day to work on the
                        robot during the build season and compete against teams all over the world. After 10th period,
                        we meet at the wonderful Ike Heller
                        <br />
                        <br />
                        During our preseason, we exchange information between the previous members, and the newcomers,
                        ensuring that our build season occurs flawlessly. We host events and tryouts for students at our
                        school to have an opportunity to join the team. During our offseason, we begin planning ahead
                        for next year’s preseason and work on projects around the lab. We also host Future Vision
                        events, in which middle schools from all across Brooklyn come to visit the school. We teach them
                        about FIRST and engineering, while also letting them drive our robot.
                    </p>
                    <br/>
                    <div
                        className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40"/>
                    <div className="absolute w-full -bottom-30 h-full z-10">
                        <World data={sampleArcs} globeConfig={globeConfig}/>
                    </div>
                </div>
            </div>
            <BentoGrid className="max-w-8xl mx-auto md:auto-rows-[30rem] p-10">
                {moreItem.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}