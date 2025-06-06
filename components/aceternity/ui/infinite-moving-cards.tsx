import React from "react";
import Link from "next/link";
import {Card, CardHeader, CardContent} from "@/components/shadcn/ui/card";
import Image from "next/image"
import Marquee from "react-fast-marquee";

export const InfiniteMovingCards = React.memo(({items}: { items: { link: string; title: string; url: string; }[] }) => {
    return (
        <Marquee speed={75} className={"z-0"}>
            {items.map((item, _) => (
                <div className={"container px-3 py-5"} key={item.title}>
                    <Link href={item.url} target={"_blank"} passHref>
                        <Card
                            className="w-[400px] max-w-full h-[325px] flex-shrink max-h-full text-center border-0 rounded-lg shadow">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col">
                                <h1 className="text-base md:text-xl mt-8 text-neutral-200">{item.title}</h1>
                            </CardHeader>
                            <CardContent className="py-2 flex justify-center items-center">
                                <div className="relative w-[190px] h-[190px]">
                                    <Image
                                        alt={item.title}
                                        src={item.link}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        className="rounded-xl"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            ))}
        </Marquee>
    );
});

InfiniteMovingCards.displayName = "InfiniteMovingCards"