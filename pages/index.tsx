import React, { Suspense, useEffect, useState } from "react";
import {ImagesSlider} from "@/components/aceternity/ui/page-hero";
import {InfiniteMovingCards} from "@/components/aceternity/ui/infinite-moving-cards";
import {motion} from "framer-motion";
import {AwardBanner} from "@/components/awards";

const images = [
  "/team2024.jpg",
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
];

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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Early return with loading state
  if (!isClient || isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-pulse text-2xl text-neutral-400">Loading...</div>
      </div>
    );
  }

  return (
    <section className="overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Hero Section */}
        <div className="relative h-[85vh] w-full -top-[4rem]">
          <ImagesSlider className="object-cover" images={images}>
            <motion.div
              initial={{opacity: 0, y: -80}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="z-50 flex flex-col justify-center items-center px-4"
            >
              <motion.p 
                className="font-bold text-4xl sm:text-6xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-4 main"
                initial={{scale: 0.5}}
                animate={{scale: 1}}
                transition={{delay: 0.2, type: "spring", stiffness: 200}}
              >
                TechKnights 334
              </motion.p>
            </motion.div>
          </ImagesSlider>
        </div>

        {/* Sponsors Section */}
        <Suspense fallback={<div>Loading sponsors...</div>}>
          <div className="py-12 md:py-20 px-4">
            <InfiniteMovingCards items={sponsors}/>
          </div>
        </Suspense>

        {/* Awards and Who We Are Section */}
        <Suspense fallback={<div>Loading content...</div>}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 p-4 md:p-8 my-12 md:my-20 max-w-8xl mx-auto">
            {/* Awards Section  */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold main mb-6 md:mb-8 text-center">Our Achievements</h2>
              <div className="h-[400px] md:h-[520px] overflow-y-auto pr-2 md:pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-2 md:p-4">
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
            </motion.div>

            {/* Who We Are Section*/}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold main mb-6 md:mb-8 text-center">Who We Are</h2>
              <div className="h-[400px] md:h-[500px] overflow-y-auto pr-2 md:pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
                <p className="secondary text-base md:text-lg leading-relaxed px-2 md:px-4">
                  We are a team that consists of 50-60 students which come nearly every day to work on the
                  robot during the build season and compete against teams all over the world. After 10th period,
                  we meet at the wonderful Ike Heller
                  <br /><br />
                  During our preseason, we exchange information between the previous members, and the newcomers,
                  ensuring that our build season occurs flawlessly. We host events and tryouts for students at our
                  school to have an opportunity to join the team. During our offseason, we begin planning ahead
                  for next year's preseason and work on projects around the lab. We also host Future Vision
                  events, in which middle schools from all across Brooklyn come to visit the school. We teach them
                  about FIRST and engineering, while also letting them drive our robot.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Section */}
          <motion.div 
            className="py-12 md:py-20 bg-black/50 backdrop-blur-sm"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
          >
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-3xl md:text-6xl font-bold text-white secondary text-center mb-4 md:mb-6">
                Have a Question?
              </h2>
              <p className="text-lg md:text-xl text-center text-neutral-200 mb-8 md:mb-12">
                You can reach out to us by email
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="font-lg main text-xl mb-3">STUDENTS</h3>
                  <ul className="mt-2 space-y-3">
                    <li className="secondary text-sm md:text-base"><b>Samantha Tan</b> - samanthat155@nycstudents.net</li>
                    <li className="secondary text-sm md:text-base"><b>Valentina Wolfe</b> - ValentinaW2@nycstudents.net</li>
                    <li className="secondary text-sm md:text-base"><b>Gadin Aggarwal</b> - gadina@nycstudents.net</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-lg main text-xl mb-3">MENTORS</h3>
                  <ul className="mt-2 space-y-3">
                    <li className="secondary text-sm md:text-base"><b>Ms. Shaina Doherty</b> - SDoherty2@schools.nyc.gov</li>
                    <li className="secondary text-sm md:text-base"><b>Mr. Marlon Esguerra</b> - MEsguerra@schools.nyc.gov</li>
                    <li className="secondary text-sm md:text-base"><b>Mr. Ali Harb</b> - aharb@schools.nyc.gov</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </Suspense>
      </Suspense>
    </section>
  );
}
