"use client"
import React from "react";
import {HeroParallax} from "@/components/aceternity/ui/hero";
import {InfiniteMovingCards} from "@/components/aceternity/ui/infinite-moving-cards";
import YouTubePlayer from "@/components/youtube";
import {Tabs} from "@/components/aceternity/ui/tabs";
import {LampContainer} from "@/components/aceternity/ui/lamp";
import {motion} from "framer-motion";

export default function Home() {
  const heroItems = [
    {
      "title": "Autodesk",
      "description": "Autodesk is a global leader in design and make technology, with expertise across architecture, engineering, construction, design, manufacturing, etc.",
      "link": "https://www.autodesk.com/",
      "thumbnail": "/logos/autodesk.png"
    },
    {
      "title": "Limelight",
      "description": "Limelight was designed to make robotic perception as easy and reliable as possible without sacrificing raw performance. Limelight is easy enough for complete beginners, and powerful enough for professionals. ",
      "link": "https://limelightvision.io/",
      "thumbnail": "/logos/limelight.png"
    },
    {
      "title": "FRC",
      "description": "Teams of students are challenged to raise funds, design a team \"brand,\" hone teamwork skills, and build and program industrial-size robots to play a difficult field game against like-minded competitors. It’s as close to real-world engineering as a student can get. Volunteer professional mentors lend their time and talents to guide each team. Each season ends with an exciting FIRST Championship.",
      "link": "https://www.firstinspires.org/robotics/frc",
      "thumbnail": "/logos/frc.png"
    },
    {
      "title": "Techknigts",
      "description": "The 334th Team in FIRST Robotics Competition",
      "link": "/",
      "thumbnail": "/old-logo.png"
    },
    {
      "title": "Brooklyn Tech Alumni Foundation",
      "description": "A simple and modern dashboard for FRC.",
      "link": "https://bthsalumni.org/",
      "thumbnail": "/sponsors/alumni-foundation.png",
    },
    {
      "title": "Brooklyn Tech Alumni Foundation",
      "description": "A simple and modern dashboard for FRC.",
      "link": "https://bthsalumni.org/",
      "thumbnail": "/sponsors/alumni-foundation.png",
    },
    {
      "title": "Java",
      "description": "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      "link": "https://www.java.com/en/",
      "thumbnail": "/logos/java.png"
    },
    {
      "title": "CTR Electronics",
      "description": "CTR Electronics provides robust embedded solutions for various control and robotic applications.",
      "link": "https://store.ctr-electronics.com/",
      "thumbnail": "/logos/ctr.png"
    },
    {
      "title": "Wpilib",
      "description": "The WPILib Mission is to enable FIRST Robotics teams to focus on writing game-specific software rather than focusing on hardware details - \"raise the floor, don't lower the ceiling\". We work to enable teams with limited programming knowledge and/or mentor experience to be as successful as possible, while not hampering the abilities of teams with more advanced programming capabilities.",
      "link": "https://docs.wpilib.org/en/stable/index.html",
      "thumbnail": "/logos/wpilib.png"
    },
    {
      "title": "Andymark",
      "description": "AndyMark develops, manufactures, and distributes mechanical and electrical parts for the mobile and competitive robotics market, with a focus on robotics education. The AndyMark staff strives to support the FIRST Community by developing and distributing important components to robot builders within the education, competition, and mobile robotics markets.",
      "link": "https://www.autodesk.com/",
      "thumbnail": "/logos/Andymark.png"
    },
    {
      "title": "Andymark",
      "description": "AndyMark develops, manufactures, and distributes mechanical and electrical parts for the mobile and competitive robotics market, with a focus on robotics education. The AndyMark staff strives to support the FIRST Community by developing and distributing important components to robot builders within the education, competition, and mobile robotics markets.",
      "link": "https://www.autodesk.com/",
      "thumbnail": "/logos/Andymark.png"
    },
  ]

  const sponsors = [
    {
      title: "FIRST",
      link: "/logos/first.png",
      url: "https://www.firstinspires.org/"
    },
    {
      title: "Brooklyn Tech Alumni Foundation",
      link: "/sponsors/alumni-foundation.png",
      url: "https://bthsalumni.org/"
    },
    {
      title: "Arament Research, Development and Engineering Center",
      link: "/sponsors/arament.png",
      url: "/"
    },
    {
      title: "Con Edison",
      link: "/sponsors/con-edison.png",
      url: "https://www.coned.com/en/"
    },
    {
      title: "DoD STEM",
      link: "/sponsors/dodstem.png",
      url: "https://dodstem.us/"
    },
    {
      title: "Gene HAAS Foundation",
      link: "/sponsors/haas-foundation.png",
      url: "https://ghaasfoundation.org/content/ghf/en/home.html"
    },
    {
      title: "Ike Heller",
      link: "/sponsors/ike-heller.png",
      url: "/"
    },
    {
      title: "QuoteBeam",
      link: "/sponsors/quotebeam.png",
      url: "https://quotebeam.com/"
    },
    {
      title: "Whimsy Tech",
      link: "/sponsors/whimsy-tech.png",
      url: "https://www.whimsytech.net/"
    },
  ];


  const tabs = [
    {
      title: "Week 1",
      value: "week1",
      content: (
          <div
              className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
            <h1 className={"text-black"}>Week 1 Recap</h1>
            <YouTubePlayer videoId={"vGIsE0y7tVQ"}/>
          </div>
      ),
    },
    {
      title: "Week 2",
      value: "week2",
      content: (
          <div
              className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
            <h1 className={"text-black"}>Week 2 Recap</h1>
            <YouTubePlayer videoId={"k9-qFX8pPWc"}/>
          </div>
      ),
    },
    {
      title: "Week 3",
      value: "week3",
      content: (
          <div
              className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
            <h1 className={"text-black"}>Week 3 Recap</h1>
            <YouTubePlayer videoId={"kMeeyb-l-0U"}/>
          </div>
      ),
    },
    {
      title: "Week 4",
      value: "week4",
      content: (
          <div
              className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
            <h1 className={"text-black"}>Week 4 Recap</h1>
            <YouTubePlayer videoId={"3xwtSjaZoUM"}/>
          </div>
      ),
    },
    {
      title: "Week 5",
      value: "week5",
      content: (
          <div
              className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
            <h1 className={"text-black"}>Week 5 Recap</h1>
            <YouTubePlayer videoId={"bjL-mn2fMTc"}/>
          </div>
      ),
    },
    {
      title: "Week 6",
      value: "week6",
      content: (
          <div
              className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
            <h1 className={"text-black"}>Week 6 Recap</h1>
            <YouTubePlayer videoId={"KSeID8Ug1Os"}/>
          </div>
      ),
    },
  ]

  return (
      <section>
        <HeroParallax products={heroItems}/>
        <div className="text-center h-[70vh] mb-3">
          <h1 className="text-[2.9rem] md:text-7xl font-bold text-white main">Sponsors</h1>
          <p className="text-base md:text-xl my-3 text-neutral-200 p-2">
            Thank you to all our sponsors and families who supported this. We couldn't make our robot without
            your help!
          </p>
          <InfiniteMovingCards items={sponsors}/>
        </div>

        <LampContainer>
          <motion.h1
              initial={{opacity: 0.5, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center tracking-tight text-transparent w-full"
          >
            <div>
              <h1 className="text-[2.9rem] md:text-7xl font-bold text-white main p-2 text-center">Season Recaps</h1>
              <p className="text-base md:text-xl my-3 text-neutral-200 p-2 text-center">Here are all our 2024
                Season recaps.</p>
            </div>
            <div
                className="relative flex flex-col w-full h-[70vh] justify-center">
              <Tabs tabs={tabs}/>
            </div>
          </motion.h1>
        </LampContainer>
        <div className="text-center h-[30vh] my-24 align-middle">
          <h1 className="text-[2.9rem] md:text-7xl font-bold text-white secondary">Have a Question?</h1>
          <p className="text-base md:text-xl my-3 text-neutral-200 p-2">
            You can reach out to us by email
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="font-lg main">STUDENTS</h3>
              <ul className="mt-2 space-y-2">
                <li className={"secondary"}><b>Matthew Piszcz</b> - Matthewp403@nycstudents.net</li>
                <li className={"secondary"}><b>Gadin Aggarwal</b> - gadina@nycstudents.net</li>
              </ul>
            </div>
            <div>
              <h3 className="font-lg main">MENTORS</h3>
              <ul className="mt-2 space-y-2">
                <li className={"secondary"}><b>Ms. Shaina Doherty</b> - SDoherty2@schools.nyc.gov</li>
                <li className={"secondary"}><b>Mr. Marlon Esguerra</b> - MEsguerra@schools.nyc.gov</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}
