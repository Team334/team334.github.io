import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/media/logo.png';

export const Navbar: React.FC = () => (
    <div className="fixed w-full top-0 backdrop-blur-lg border-b-2 border-b-slate-500/10 z-50">
        <div className="container py-4">
            <div className="flex items-center">
                <Link href="/" passHref>
                    <a>
                        <Image src={logo} loader={({ src }) => src} alt="TechKnights | Team 334" height={71} width={115} />
                    </a>
                </Link>
                <div className="ml-auto flex gap-10 lg:gap-24">
                    <Link href="/team" passHref>
                        <a className="text-lg !no-underline ml-auto">Team</a>
                    </Link>
                    <Link href="/blog" passHref>
                        <a className="text-lg !no-underline">Blog</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
