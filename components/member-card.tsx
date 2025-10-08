import React from 'react';
import Image from "next/image";

export type Member = {
    name: string;
    department: string;
    image: string;
    role?: string;
}

interface MemberProps {
    member: Member;
}

export const MemberCard: React.FC<MemberProps> = React.memo(({member}) => (
    <div className="w-36 flex flex-col">
        <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover rounded-full"
                priority={false}
            />
        </div>
        <p className="text-center mb-0 text-base md:text-medium text-neutral-200 secondary">{member.name}</p>
        {member.role && (
            <p className="text-center mt-1 text-sm text-gray-400 secondary italic">{member.role}</p>
        )}
    </div>
));

MemberCard.displayName = "MemberCard"
