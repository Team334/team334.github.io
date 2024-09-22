import React from 'react';
import Image from 'next/image';

interface AwardProps {
    name: string;
    event: string;
}

export const Award: React.FC<AwardProps> = ({ name, event }) => (
    <div className="w-[120px] h-[192px]">
        <svg className="absolute -z-10" viewBox="0 0 100 160" width={120}>
            <path fill="#005AC9" d="M 0,0 v 160 l 50,-15 l 50,15 v -160 z" />
        </svg>
        <div className="h-full flex flex-col items-center p-3 pb-6 gap-2">
            <Image
                src="/media/first.png"
                alt="FIRST"
                loader={({ src }) => src}
                width={50}
                height={30}
            />
            <div className="grow flex flex-col justify-center">
                <p className="text-center text-sm font-bold mb-2">{name}</p>
                <p className="text-center text-xs">{event}</p>
            </div>
        </div>
    </div>
);
