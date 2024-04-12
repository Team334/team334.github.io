import React from 'react';
import Image from "next/legacy/image";
import {CardBody, CardContainer, CardItem} from "@/components/aceternity/ui/3d-card";

export type Member = {
    name: string;
    department: string;
    image: string;
}

interface MemberProps {
    member: Member;
}

export const MemberCard: React.FC<MemberProps> = React.memo(({member}) => (
    // <div className="w-36 flex flex-col">
    //     <div className="relative w-full h-36 mb-3">
    //         <Image unoptimized loader={({src}) => src} src={member.image} alt={member.name} layout="fill"
    //                className="rounded-full object-cover"/>
    //     </div>
    //     <p className="text-center mb-0 text-base md:text-medium dark:text-neutral-200 secondary">{member.name}</p>
    // </div>
    <CardContainer className="inter-var">
        <CardBody
            className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
            >
                {member.name}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src={member.image}
                    alt={member.name}
                    height={"500"}
                    width={"500"}
                    className="w-full object-cover rounded-full group-hover/card:shadow-xl"
                />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
                <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                    <h1 className={"main text-2xl"}>{member.department}</h1>
                </CardItem>
            </div>
        </CardBody>
    </CardContainer>
));

MemberCard.displayName = "MemberCard"




