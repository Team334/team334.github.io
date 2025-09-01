import React, { Suspense, useEffect, useState } from "react";
import {ImagesSlider} from "@/components/aceternity/ui/page-hero";
import {InfiniteMovingCards} from "@/components/aceternity/ui/infinite-moving-cards";
import {motion} from "framer-motion";
import {AwardBanner} from "@/components/awards";

const images = [
  "/team2024.webp",
  "/team2022.webp",
  "/team2020.webp",
  "/team2019-2.webp",
  "/team2019.webp",
];

const Awards = [
  {
    title: "Judges Award",
    year: "2025",
    comp: "NYC Regional"
  },
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
    link: "/logos/first.webp",
    url: "https://www.firstinspires.org/"
  },
  {
    title: "Brooklyn Tech Alumni Foundation",
    link: "/sponsors/alumni-foundation.webp",
    url: "https://bthsalumni.org/"
  },
  {
    title: "Arament Research, Development and Engineering Center",
    link: "/sponsors/arament.webp",
    url: "/"
  },
  {
    title: "Con Edison",
    link: "/sponsors/con-edison.webp",
    url: "https://www.coned.com/en/"
  },
  {
    title: "DoD STEM",
    link: "/sponsors/dodstem.webp",
    url: "https://dodstem.us/"
  },
  {
    title: "Gene HAAS Foundation",
    link: "/sponsors/haas-foundation.webp",
    url: "https://ghaasfoundation.org/content/ghf/en/home.html"
  },
  {
    title: "Ike Heller",
    link: "/sponsors/ike-heller.webp",
    url: "/"
  },
  {
    title: "QuoteBeam",
    link: "/sponsors/quotebeam.webp",
    url: "https://quotebeam.com/"
  },
  {
    title: "Whimsy Tech",
    link: "/sponsors/whimsy-tech.webp",
    url: "https://www.whimsytech.net/"
  },
];

const rotatingWords = [
  "Are 334",
  "Inspire",
  "Build",
  "Innovate",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    
    return () => clearInterval(interval);
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
                  className="font-bold text-4xl sm:text-6xl md:text-7xl text-center text-white py-4 main"
                  initial={{scale: 0.5}}
                  animate={{scale: 1}}
                  transition={{delay: 0.2, type: "spring", stiffness: 200}}
                >
                  TechKnights
                </motion.p>
                <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl mb-2 secondary">
                  <span className="text-white">We</span>
                  <motion.span
                    key={rotatingWords[currentWordIndex]}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.5}}
                    className="text-blue-400 font-semibold"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </div>
              </div>
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
              <div className="md:block">
                <button 
                  onClick={() => setIsAchievementsOpen(!isAchievementsOpen)}
                  className="w-full flex items-center justify-between p-4 text-lg font-semibold md:hidden"
                >
                  <span className="secondary text-xl p-2">Achievements</span>
                  <svg 
                    className={`w-6 h-6 transition-transform ${isAchievementsOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`${isAchievementsOpen ? 'block' : 'hidden'} md:block`}>
                  <div className="h-[400px] md:h-[550px] overflow-y-auto pr-2 md:pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300 flex flex-col items-center">
                    <div className="flex flex-col items-center gap-6 px-2 md:px-4 w-full py-8">
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-2 md:p-4">
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
                  </div>
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
                <div className="flex flex-col gap-6 px-2 md:px-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-8">
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-blue-400">59</h3>
                      <p className="text-gray-300">Students</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-blue-400">5</h3>
                      <p className="text-gray-300">Mentors</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-blue-400">50+</h3>
                      <p className="text-gray-300">Alumni</p>
                    </div>
                  </div>

                  <p className="secondary text-base md:text-lg leading-relaxed text-center md:text-left">
                    Dedicated to building since 1998, we are the TechKnights, Brooklyn Technical High School’s FIRST
                    Robotics Competition (FRC) team. Meeting daily, we come together to tackle the new challenge posed
                    by the international FIRST organization in a 6-week competition season devoted to learning and
                    innovating. Including members from all backgrounds is a pivotal aspect of our team, bringing a
                    diverse range of new members to our lab’s doors every year, and pushing the bounds of growth for the
                    team. Composed of 50 engineers, the TechKnights develop designs through CAD that we go on to
                    manufacture in-house, then create proprietary code for, synthesizing the work of every student
                    across five distinct divisions into one, competition-ready robot.
                  </p>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-xl font-bold main mb-3">Mission Statement</h3>
                    <p className="secondary text-base md:text-lg leading-relaxed">
                      Our mission is to inspire our community by fostering an inclusive environment where students can actively engage in every facet of STEM. By spreading the goals of FIRST (For Inspiration and Recognition of Science and Technology), we aim to empower students with both knowledge and hands-on experience in real-world engineering challenges. Through this journey, we strive to ignite a passion for lifelong learning and innovation, equipping our students to excel as future leaders in the world of STEM.
                    </p>
                  </div>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-xl font-bold main mb-3">Open Alliance 2024 &#8208;  2025</h3>
                    <p className="secondary text-base md:text-lg leading-relaxed">
                      We believe in sharing knowledge and promoting collaboration. Check out our build thread on Chief
                      Delphi where we share our progress and insights:
                    </p>
                    <a
                        href="https://www.chiefdelphi.com/t/frc-334-techknights-2024-25-build-thread-open-alliance/476058"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View our Open Alliance Build Thread →
                    </a>
                  </div>
                </div>
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
                <h3 className="font-bold secondary text-lg mb-3">techrobotics334@gmail.com</h3>

              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                  <h3 className="font-lg main text-xl mb-3">STUDENTS</h3>
                  <ul className="mt-2 space-y-3">
                    <li className="secondary text-sm md:text-base"><b>Samantha Tan</b> - samanthat155@nycstudents.net</li>
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
