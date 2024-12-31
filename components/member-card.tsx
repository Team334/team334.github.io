import React from 'react';
import Image from "next/image";

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
        <div className="relative aspect-square w-full">
            <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover rounded-xl"
                priority={false}
            />
        </div>
        <p className="text-center mb-0 text-base md:text-medium text-neutral-200 secondary">{member.name}</p>
    </div>
));

MemberCard.displayName = "MemberCard"
