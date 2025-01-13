import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import {Navbar} from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 antialiased">
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        <Head>
          <title>TechKnights | Team 334</title>
          <meta name="description"
                content="The official website for the BTHS Robotics Team 334, a FIRST Robotics Competition team based in Brooklyn, New York."/>

          <link rel="icon" href="/logo.png" type="image/png"/>
          <link rel="shortcut icon" href="/logo.png" type="image/png"/>
          <link rel="apple-touch-icon" href="/logo.png" type="image/png"/>

          <meta property="og:title" content="BTHS Robotics"/>
          <meta property="og:description"
                content="The official website for the BTHS Robotics Team 334, a FIRST Robotics Competition team based in Brooklyn, New York."/>
          <meta property="og:image" content="/logo.png"/>
          <meta property="og:url" content="https://bthsrobotics.com"/>

          <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <footer className="relative w-full flex py-3 p-6 text-start border-t border-gray-800">
          <div className="mb-10 secondary container items-start justify-start md:ml-12 gap-1 flex flex-col md:flex-row">
            <span className="font-bold">©1998-2025</span>
            <p className="text-primary">TechKnights</p>
          </div>
          <Link
            target="_blank"
            className="main flex justify-items-end gap-1 text-current"
            href="https://cherriae.github.io/"
            title="Team 334"
          >
            <span className="secondary">Made by</span>
            <p className="text-primary">Ze Rui Zheng</p>
          </Link>
        </footer>
      </div>
    </main>
  );
}
