import Link from "next/link";
import Image from 'next/image';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/shadcn/ui/card";
import React from "react";
import {TextGenerateEffect} from "@/components/aceternity/ui/autotype";
import {getAllPosts, Post} from "@/components/markdown"
import {GetStaticProps} from "next";
import YouTubePlayer from "@/components/youtube";
import {Tabs} from "@/components/aceternity/ui/tabs";
import {LampContainer} from "@/components/aceternity/ui/lamp";
import {motion} from "framer-motion";

interface BlogHomeProps {
    posts: Post[];
}


const BlogHome: React.FC<BlogHomeProps> = ({ posts }) => {
    
    const tabs = [
        {
        title: "Week 1",
        value: "week1",
        content: (
            <div
                className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
                <h1 className={"text-black"}>Week 1 Recap</h1>
                <YouTubePlayer videoId={"vGIsE0y7tVQ"}/>
            </div>
        ),
        },
        {
        title: "Week 2",
        value: "week2",
        content: (
            <div
                className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
                <h1 className={"text-black"}>Week 2 Recap</h1>
                <YouTubePlayer videoId={"k9-qFX8pPWc"}/>
            </div>
        ),
        },
        {
        title: "Week 3",
        value: "week3",
        content: (
            <div
                className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
                <h1 className={"text-black"}>Week 3 Recap</h1>
                <YouTubePlayer videoId={"kMeeyb-l-0U"}/>
            </div>
        ),
        },
        {
        title: "Week 4",
        value: "week4",
        content: (
            <div
                className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
                <h1 className={"text-black"}>Week 4 Recap</h1>
                <YouTubePlayer videoId={"3xwtSjaZoUM"}/>
            </div>
        ),
        },
        {
        title: "Week 5",
        value: "week5",
        content: (
            <div
                className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
                <h1 className={"text-black"}>Week 5 Recap</h1>
                <YouTubePlayer videoId={"bjL-mn2fMTc"}/>
            </div>
        ),
        },
        {
        title: "Week 6",
        value: "week6",
        content: (
            <div
                className="w-full  relative h-full rounded-2xl p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
                <h1 className={"text-black"}>Week 6 Recap</h1>
                <YouTubePlayer videoId={"KSeID8Ug1Os"}/>
            </div>
        ),
        },
    ]

    return (
        <div className="p-5 ">
            <div className="h-screen">
                <TextGenerateEffect words={"Blog"}
                                    className={"underline font-bold text-center text-5xl md:text-6xl main mb-10"}/>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {posts
                        .sort((a: any, b: any) => new Date(a.date) < new Date(b.date) ? 1 : -1)
                        .map((post: any) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.slug}
                            >
                                <Card className="w-[330px] border-solid border-4 hover:border-double">
                                    <CardHeader>
                                        <CardTitle className={"text-center main"}>{post.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={"flex items-center justify-center"}>
                                            <Image
                                                alt={"blogImage"}
                                                src={`${post.coverImage}`}
                                                className={"justify-self-center rounded-xl"}
                                                width={"330"}
                                                height={"20"}
                                            />
                                        </div>
                                        <p className={"text-gray-300 mt-3"}>{post.excerpt.length > 70 ? post.excerpt.slice(0, 70) + "..." : post.excerpt}</p>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <div className={"flex flex-row items-center text-center gap-2"}>
                                            <Image
                                                alt={"blogAuthor"}
                                                src={post.author.picture}
                                                className="rounded-full"
                                                width={40}
                                                height={40}
                                                style={{width: "40px", height: "40px", objectFit: "cover"}}
                                            />

                                            <h1 className={"secondary"}>{post.author.name}</h1>
                                        </div>
                                        <h1 className={"secondary"}>{new Date(post.date).toLocaleDateString()}</h1>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <LampContainer>
                <motion.h1
                    initial={{opacity: 0.5, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center tracking-tight text-transparent w-full"
                >
                    <div>
                    <h1 className="text-[2.9rem] md:text-7xl font-bold text-white main p-2 text-center">Season Recaps</h1>
                    <p className="text-base md:text-xl my-3 text-neutral-200 p-2 text-center">Here are all our 2024
                        Season recaps.</p>
                    </div>
                    <div
                        className="relative flex flex-col w-full h-[70vh] justify-center">
                        <Tabs tabs={tabs}/>
                    </div>
                </motion.h1>
            </LampContainer>
        </div>
    );
}

interface BlogHomeProps {
    posts: Post[];
}

export const getStaticProps: GetStaticProps<BlogHomeProps> = async () => {
    const posts = getAllPosts();

    return {
        props: {
            posts,
        },
    };
};


export default BlogHome;