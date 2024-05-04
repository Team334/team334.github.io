import React from 'react';
import Image from "next/legacy/image";

export type Member = {
    name: string;
    department: string;
    image: string;
}

interface MemberProps {
    member: Member;
}

export const MemberCard: React.FC<MemberProps> = React.memo(({member}) => (
    <div className="w-36 flex flex-col">
        <div className="relative w-full h-36 mb-3">
            <Image unoptimized loader={({src}) => src} src={member.image} alt={member.name} layout="fill"
                   className="rounded-full object-cover"/>
        </div>
        <p className="text-center mb-0 text-base md:text-medium text-neutral-200 secondary">{member.name}</p>
    </div>
));

MemberCard.displayName = "MemberCard"
