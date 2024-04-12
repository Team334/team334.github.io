import React from "react";
import Link from "next/link";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Image} from "@nextui-org/react";
import Marquee from "react-fast-marquee";

export const InfiniteMovingCards = React.memo(({items}: { items: { link: string; title: string; url: string; }[] }) => {
    return (
        <Marquee speed={200} className={"z-0"}>
            {items.map((item, _) => (
                <div className={"container px-3 py-5"} key={item.title}>
                    <Link href={item.url} target={"_blank"} passHref>
                        <Card
                            className="w-[400px] max-w-full h-[325px] flex-shrink max-h-full text-center border border-slate-700 rounded-lg shadow">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col">
                                <h1 className="text-base md:text-xl mt-8 dark:text-neutral-200">{item.title}</h1>
                            </CardHeader>
                            <CardBody className="py-2 flex justify-center items-center">
                                <Image
                                    alt={item.title}
                                    src={item.link}
                                    height={190}
                                    width={190}
                                    loading="lazy"
                                    className="rounded-xl"
                                />
                            </CardBody>
                        </Card>
                    </Link>
                </div>
            ))}
        </Marquee>
    );
});

InfiniteMovingCards.displayName = "InfiniteMovingCards"