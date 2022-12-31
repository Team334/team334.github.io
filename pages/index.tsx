import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { Bubble } from '../components/Bubble';
import { Ultor } from '../components/Ultor';
import logo2022 from '../public/media/logo2022.png';
import ultor from '../public/media/ultor/01.webp';

const Home: NextPage = () => {
    const [mobile, setMobile] = React.useState<boolean>(false);

    useEffect(() => setMobile(isMobile), []);

    return (
        <div className="container">
            <Bubble
                x={500} y={300}
                vx={1} vy={-1}
                r={370}
                color="rgba(82, 0, 255, 0.075)"
                className="fixed inset-0 pointer-events-none"
            />
            <Bubble
                x={700} y={900}
                vx={-1} vy={1}
                r={400}
                color="rgba(0, 117, 255, 0.075)"
                className="fixed inset-0 pointer-events-none"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 content-center h-screen">
                <div>
                    <h2 className="font-normal text-2xl lg:text-3xl">We Are</h2>
                    <h1 className="font-display text-3xl lg:text-5xl mb-10 lg:mb-16">TechKnights</h1>
                    <p className="mb-5">TechKnights is a FIRST&reg; Robotics Competition team from <a href="https://bths.edu" target="_blank" rel="noreferrer">Brooklyn Technical High School</a> in New York City.</p>
                    <p className="mb-16">Also known as Team 334, our team has a rich history in engineering excellence and putting the power to create in the hands of high school students.</p>
                    <button className="border-2 border-white rounded-xl bg-none font-bold text-md px-8 py-1">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 content-center h-screen">
                <div>
                    {mobile && <Image priority loader={({ src }) => src} src={ultor} alt="Ultor" width={750} height={750} />}
                    <div className="inline-flex items-center mb-8 lg:mb-12">
                        <h1 className="font-display text-3xl lg:text-5xl -mb-4 mr-5">Ultor</h1>
                        <Image loader={({ src }) => src} src={logo2022} alt="Ultor" height={88} width={97} />
                    </div>
                    <p className="mb-16">Built for the 2022 season, Ultor features a six-falcon tank drivetrain, turret shooter for hub tracking, and the most stunning design to have ever left our workshop.</p>
                </div>
            </div>

            <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
                <div className="container h-screen grid grid-cols-2 justify-end content-center">
                    <Ultor className="col-start-2 w-full" />
                </div>
            </div>
        </div>
    );
};

export default Home;
