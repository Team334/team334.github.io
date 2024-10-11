import React from 'react';
import { FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => (
    <div className="fixed w-full bottom-0 backdrop-blur-lg border-t-2 border-t-slate-500/10">
        <div className="container py-5 text-slate-300 text-sm">
            <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex gap-3">
                    <p>&copy; 1998-2022 TechKnights</p>
                    <a href="https://instagram.com/team334" target="_blank" rel="noreferrer">
                        <FaInstagram size={20} />
                    </a>
                </div>
                <p className="text-xs lg:ml-auto">
                    Website by <a href="https://romashov.dev" target="_blank" rel="noreferrer">Michael Romashov</a>
                </p>
            </div>
        </div>
    </div>
);
