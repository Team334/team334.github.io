import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import {Navbar} from "@/components/navbar";


export default function App({ Component, pageProps }: AppProps) {
  return (
      <main>
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
        <Component {...pageProps} />
        <footer className="relative bottom-0 w-full flex py-3 p-6 text-start">
          <div className={"secondary container items-start justify-start md:ml-12"}>
            <span className={"font-bold"}>©1998-2024 TechKnights</span>
          </div>
          <Link
              target={"_blank"}
              className="main flex justify-items-end gap-1 text-current"
              href="https://github.com/Team334"
              title="Team 334"
          >
            <span className={"secondary"}>Made by</span>
            <p className="text-primary">Ze Rui Zheng</p>
          </Link>
        </footer>
      </main>
  )
}
