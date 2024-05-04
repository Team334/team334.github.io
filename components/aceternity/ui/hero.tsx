"use client"

import React, {useEffect, useMemo, useRef, useState} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import {TextGenerateEffect} from "@/components/aceternity/ui/autotype";
import {GithubIcon, HeartFilledIcon, InstagramIcon, TBAIcon, YoutubeIcon} from "@/components/icons";
import {siteConfig} from "@/config/site";
import {Skeleton} from "@/components/shadcn/ui/skeleton";
import {Button} from "@/components/shadcn/ui/button";


const springConfig = {stiffness: 120, damping: 20, bounce: 25, mass: 0.1};

const ProductCard = React.memo(({product, translate}: {
    product: { title: string; description: string; link: string; thumbnail: string; };
    translate: any;
}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            style={{
                x: translate
            }}
            whileHover={{
                y: -20
            }}
            key={product.title}
            className="group/product min-h-50 w-[13rem] md:w-[30rem] relative flex-shrink-0"
        >
            {loading ? (
                <Skeleton className="w-full h-full"/>
            ) : (
                <>
                    <Link
                        href={product.link}
                        target="_blank"
                        className="block group-hover/product:shadow-2xl"
                    >
                        <Image
                            src={product.thumbnail}
                            height="600"
                            width="1000"
                            className="object-scale-down object-center absolute h-full w-full inset-0"
                            alt={product.title}
                            loading="lazy"
                        />
                    </Link>
                    <div
                        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
                    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                        <b>{product.title}</b> - {product.description}
                    </h2>
                </>
            )}
        </motion.div>
    );
});

ProductCard.displayName = 'ProductCard';

const HeroParallax = React.memo(({products}: {
    products: { title: string; description: string; link: string; thumbnail: string; }[]
}) => {
    const firstRow = useMemo(() => products.slice(0, 5), [products]);
    const secondRow = useMemo(() => products.slice(5, 10), [products]);
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start start", "end start"]});

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

    return (
        <div ref={ref}
             className="h-[130rem] py-40 -mb-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] will-change-auto">
            <Header/>
            <motion.div style={{rotateX, rotateZ, translateY, opacity}} className="">
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product, index) => (
                        <ProductCard product={product} translate={translateX} key={index}/>
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20 ">
                    {secondRow.map((product, index) => (
                        <ProductCard product={product} translate={translateXReverse} key={index}/>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
});

HeroParallax.displayName = 'HeroParallax';

const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full z-30 left-0 top-0">
            <h1 className="text-[2rem] md:text-7xl font-bold text-white">
                <TextGenerateEffect words={"We are the Techknights"} className={"main"}/>
            </h1>
            <p className="text-base md:text-xl mt-8 text-neutral-200">
                The TechKnights is a FIRST® Robotics Competition Team from Brooklyn Technical
                High School in Downtown Brooklyn, NY.
            </p>
            <div className="flex flex-col md:flex-row gap-3 mt-5 opacity-1">
              <div className="flex flex-col md:flex-row gap-3">
                  <Button>
                    <Link
                      target={"_blank"}
                      href={siteConfig.links.instagram}
                      className={"flex flex-row gap-1"}
                    >
                      <InstagramIcon size={20} />
                      <b>Instagram</b>
                    </Link>
                  </Button>
                  <Button>
                      <Link
                          target={"_blank"}
                          href={siteConfig.links.youtube}
                          className={"flex flex-row gap-1"}
                      >
                      <YoutubeIcon width={24} height={24} />
                      <b>Youtube</b>
                    </Link>
                  </Button>
                  <Button>
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
              <div className="flex flex-col md:flex-row gap-3">
                  <Button>
                      <Link
                          target={"_blank"}
                          href={siteConfig.links.blueAlliance}
                          className={"flex flex-row gap-1"}
                      >
                      <TBAIcon width={24} height={24} />
                      <b>Blue Alliance</b>
                    </Link>
                  </Button>

                  <Button>
                      <Link
                          target={"_blank"}
                          href={siteConfig.links.donate}
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

export {HeroParallax};
