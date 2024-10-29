"use client"
import React from "react";
import {Hero} from "@/components/aceternity/ui/hero";
import {InfiniteMovingCards} from "@/components/aceternity/ui/infinite-moving-cards";
import YouTubePlayer from "@/components/youtube";
import {Tabs} from "@/components/aceternity/ui/tabs";
import {LampContainer} from "@/components/aceternity/ui/lamp";
import {motion} from "framer-motion";

export default function Home() {
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


  // const tabs = [
  //   {
  //     title: "Week 1",
  //     value: "week1",
  //     content: (
  //         <div
  //             className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
  //           <h1 className={"text-black"}>Week 1 Recap</h1>
  //           <YouTubePlayer videoId={"vGIsE0y7tVQ"}/>
  //         </div>
  //     ),
  //   },
  //   {
  //     title: "Week 2",
  //     value: "week2",
  //     content: (
  //         <div
  //             className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
  //           <h1 className={"text-black"}>Week 2 Recap</h1>
  //           <YouTubePlayer videoId={"k9-qFX8pPWc"}/>
  //         </div>
  //     ),
  //   },
  //   {
  //     title: "Week 3",
  //     value: "week3",
  //     content: (
  //         <div
  //             className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
  //           <h1 className={"text-black"}>Week 3 Recap</h1>
  //           <YouTubePlayer videoId={"kMeeyb-l-0U"}/>
  //         </div>
  //     ),
  //   },
  //   {
  //     title: "Week 4",
  //     value: "week4",
  //     content: (
  //         <div
  //             className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
  //           <h1 className={"text-black"}>Week 4 Recap</h1>
  //           <YouTubePlayer videoId={"3xwtSjaZoUM"}/>
  //         </div>
  //     ),
  //   },
  //   {
  //     title: "Week 5",
  //     value: "week5",
  //     content: (
  //         <div
  //             className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
  //           <h1 className={"text-black"}>Week 5 Recap</h1>
  //           <YouTubePlayer videoId={"bjL-mn2fMTc"}/>
  //         </div>
  //     ),
  //   },
  //   {
  //     title: "Week 6",
  //     value: "week6",
  //     content: (
  //         <div
  //             className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
  //           <h1 className={"text-black"}>Week 6 Recap</h1>
  //           <YouTubePlayer videoId={"KSeID8Ug1Os"}/>
  //         </div>
  //     ),
  //   },
  // ]

  return (
      <section>
        <Hero/>
        <div className="text-center h-[70vh] my-3">
          <h1 className="text-[2.9rem] md:text-7xl font-bold text-white main">Sponsors</h1>
          <p className="text-base md:text-xl my-3 text-neutral-200 p-2">
            Thank you to all our sponsors and families who supported this. We couldn't make our robot without
            your help!
          </p>
          <InfiniteMovingCards items={sponsors}/>
        </div>

        {/* <LampContainer>
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
        </LampContainer> */}

        <div className="p-2 text-center h-[40vh] md:h-[20vh] mb-[5rem] align-middle">
          <h1 className="text-[2.9rem] md:text-7xl font-bold text-white secondary">Have a Question?</h1>
          <p className="text-base md:text-xl my-3 text-neutral-200 p-2">
            You can reach out to us by email
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="font-lg main">STUDENTS</h3>
              <ul className="mt-2 space-y-2">
                <li className={"secondary"}><b>Samantha Tan</b> - samanthat155@nycstudents.net</li>
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
        </div>
      </section>
  )
}
