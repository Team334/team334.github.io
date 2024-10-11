import Link from "next/link";
import React from "react";
import Image from "next/image";
import {Button} from "@/components/shadcn/ui/button";

export default function SponsorPage() {
    const sponsors = [
        {
            image: "/logos/first.png",
            title: "FIRST",
            url: "https://www.firstinspires.org/",
            description: "FIRST is a global robotics community preparing young people for the future and the world's leading youth-serving nonprofit advancing STEM education."
        },
        {
            image: "/sponsors/alumni-foundation.png",
            title: "Brooklyn Tech Alumni Foundation",
            url: "https://bthsalumni.org/",
            description: "The Brooklyn Tech Alumni Foundation mobilizes Tech graduates to support the nation's premier high school for science, technology, engineering and mathematics"
        },
        {
            image: "/sponsors/arament.png",
            title: "Arament Research, Development and Engineering Center",
            url: "",
            description: "The U.S. Army Armament Research, Development and Engineering Center (ARDEC) is an internationally acknowledged hub for the advancement of armament technologies"
        },
        {
            image: "/sponsors/con-edison.png",
            title: "Con Edison",
            url: "https://www.coned.com/en",
            description: "We operate one of the world's largest energy delivery systems. Founded in 1823 as the New York Gas Light company, our electric, gas, and steam service now"
        },
        {
            image: "/sponsors/dodstem.png",
            title: "DoD STEM",
            url: "https://www.dodstem.us",
            description: "Science, Technology, Engineering and Mathematics, or STEM, is the gateway to a world of wonder. U.S. Department of Defense (DoD) STEM professionals work at the leading edge of our nation’s most advanced technological breakthroughs. STEM is our future."
        },
        {
            image: "/sponsors/haas-foundation.png",
            title: "Gene HAAS Foundation",
            url: "https://ghaasfoundation.org/content/ghf/en/home.html",
            description: "The Gene Haas Foundation was established in 1999, by Gene Haas, founder and owner of Haas Automation, Inc., to support the needs of the local community, through grants to such local charities as the Boys and Girls Clubs, Food Share, Rescue Mission, and others."
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
            description: "We aim to eliminate frustrations in the purchasing process by streamlining finding product information, getting technical support, quotations, and ordering. All in one place."
        },
        {
            image: "/sponsors/whimsy-tech.png",
            title: "Whimsy Tech",
            url: "https://whimsytech.com",
            description: "#TeamWhimsy"
        }
    ];

    return (
        <div className="p-8 text-center">
            <div className="text-4xl md:text-7xl font-bold text-white text-center main">
                Our Sponsors
            </div>
            <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
                This page is dedicated to our all of sponsors! We couldn't make our robot without your help!
            </div>
            <div className="space-y-8">
                {sponsors.map((sponsor, index) => (
                    <div key={index}
                         className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-5 md:space-y-0 md:space-x-4 h-auto md:h-64">
                        <Image
                            src={sponsor.image}
                            alt={sponsor.title}
                            width={158}
                            height={158}
                            className="md:ml-[8rem]"
                        />
                        <div className="flex flex-col justify-center items-center align-middle w-full">
                            <h2 className="text-[2.1rem] secondary underline">{sponsor.title}</h2>
                            <p className="mb-2 text-lg text-slate-300">{sponsor.description}</p>
                            {sponsor.url && (
                                <Link href={sponsor.url} target="_blank">
                                    <Button
                                        className="inline-block px-4 py-2 rounded-xl bg-gray-200 w-64 mt-5 text-black hover:bg-gray-400">
                                        Learn more
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
