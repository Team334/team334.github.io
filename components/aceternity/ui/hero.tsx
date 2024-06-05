"use client"

import React from "react";
import Link from "next/link";
import {TextGenerateEffect} from "@/components/aceternity/ui/autotype";
import {GithubIcon, HeartFilledIcon, InstagramIcon, TBAIcon, YoutubeIcon} from "@/components/icons";
import {siteConfig} from "@/config/site";
import {Button} from "@/components/shadcn/ui/button";
import Image from "next/image";


const Hero = () => {

    return (
        <div
            className="h-screen mb-10 overflow-hidden antialiased relative">
            <div className="absolute inset-0 z-0">
                <Image
                    src={"/team2024-1.jpg"}
                    alt={"team image"}
                    className={"w-full h-full object-cover"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className="absolute inset-0 z-10">
                <Header/>
            </div>
        </div>
    );
};


const Header = () => {
    return (
        <div className="text-center max-w-7xl relative mx-auto py-12 md:py-22 px-4 w-full z-30 left-0 top-0">
            <h1 className="text-[2.15rem] md:text-7xl font-bold text-black">
                <TextGenerateEffect words={"We are the Techknights"} className={"main text-white"}/>
            </h1>
            <p className="text-base md:text-xl mt-8 text-white font-bold">
                The TechKnights is a FIRST® Robotics Competition Team from Brooklyn Technical
                High School in Downtown Brooklyn, NY.
            </p>
            <div className="flex flex-col md:flex-row md:min-w-fit gap-2 mt-5 opacity-1 justify-center">
              <div className="flex flex-row gap-2 justify-center">
                  <Button className={"bg-[#e03a66] rounded-full transition-colors ease-in-out duration-300 hover:bg-[#be5b89]"}>
                    <Link
                      target={"_blank"}
                      href={siteConfig.links.instagram}
                      className={"flex flex-row gap-1"}
                    >
                      <InstagramIcon size={20} />
                      <b>Instagram</b>
                    </Link>
                  </Button>
                  <Button className={"bg-[#e02f2f] rounded-full transition-colors ease-in-out duration-300 hover:bg-[#bf1d1d]"}>
                      <Link
                          target={"_blank"}
                          href={siteConfig.links.youtube}
                          className={"flex flex-row gap-1"}
                      >
                      <YoutubeIcon width={24} height={24} />
                      <b>Youtube</b>
                    </Link>
                  </Button>
                  <Button className={"bg-[#010409] rounded-full transition-colors ease-in-out duration-300 hover:bg-[#071c3f]"}>
                      <Link
                          target={"_blank"}
                          href={siteConfig.links.github}
                          className={"flex flex-row gap-1"}
                      >
                      <GithubIcon size={20} />
                      <b>Github</b>
                    </Link>
                  </Button>
              </div>
              <div className="flex flex-row gap-3 justify-center">
                  <Button className={"bg-[#4555a5] rounded-full transition-colors ease-in-out duration-300 hover:bg-[#374484]"}>
                      <Link
                          target={"_blank"}
                          href={siteConfig.links.blueAlliance}
                          className={"flex flex-row gap-1"}
                      >
                      <TBAIcon width={24} height={24} />
                      <b>Blue Alliance</b>
                    </Link>
                  </Button>

                  <Button className={"bg-[#E34D75] rounded-full transition-colors ease-in-out duration-300 hover:bg-[#B53D5D]"}>
                      <Link
                          href={"/donate"}
                          className={"flex flex-row gap-1"}
                      >
                        <div className="flex items-center gap-1">
                            <HeartFilledIcon width={24} height={24} className="text-danger" />
                            <b>Donate</b>
                        </div>
                    </Link>
                  </Button>
              </div>
            </div>
        </div>
    );
};

export {Hero};
