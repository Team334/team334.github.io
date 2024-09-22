import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
    <div className="flex flex-col h-screen">
        <Head>
            <title>TechKnights | Team 334</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default MyApp;
