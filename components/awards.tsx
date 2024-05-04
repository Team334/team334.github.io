"use client"

import Image from "next/image"
import React from "react";

export const AwardBanner = React.memo(({
                                           title,
                                           year,
                                           comp
                                       }: {
    title: string;
    year: string;
    comp: string;

}) => {
    return (
        <div className="w-[150px] h-[240px] bg-[url('/award-banner.png')]">
            <div className="h-full flex flex-col items-center p-3 pb-6 gap-2">
                <Image
                    src="/logos/first.png"
                    alt="FIRST"
                    width={76}
                    height={76}
                />
                <div className="grow flex flex-col justify-center text-wrap">
                    <h1 className="text-center text-xs md:text-sm font-bold mb-2 secondary">{year} <br/> {comp}</h1>
                    <p className="text-center text-sm md:text-medium secondary">{title}</p>
                </div>
            </div>
        </div>
    )
});

AwardBanner.displayName = "AwardBanner"