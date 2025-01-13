import Link from "next/link";
import Image from 'next/image';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/shadcn/ui/card";
import React from "react";
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
            <div className="w-full relative h-full rounded-2xl p-6 md:p-10 text-xl md:text-4xl main font-bold bg-[#f2f2f2]">
                <h1 className="text-black mb-4">Week 1 Recap</h1>
                <div className="h-[calc(100%-4rem)]">
                    <YouTubePlayer 
                        videoId="T5QlrC06WXw"
                        loading="lazy"
                    />
                </div>
            </div>
        ),
        }
    ]

    // Helper function to format dates consistently
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <div className="min-h-screen py-16 px-4 md:px-8">
            {/* Season Recaps Section */}
            <LampContainer>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="w-full"
                >
                    <h2 className="text-4xl md:text-6xl font-bold main text-center mb-6">
                        Season Recaps
                    </h2>
                    <p className="text-xl text-gray-400 secondary text-center mb-12">
                        Watch our weekly progress throughout the 2025 season
                    </p>
                    <div className="relative w-full h-[70vh]">
                        <Tabs tabs={tabs} />
                    </div>
                </motion.div>
            </LampContainer>

            {/* Hero Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-bold main bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    Blog
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-gray-400 secondary">
                    Stay updated with our latest news and developments
                </p>
            </motion.div>

            {/* Blog Grid */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto mb-24"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <Card className="group h-full bg-black/20 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-bold main">{post.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                                                <Image
                                                    alt={post.title}
                                                    src={post.coverImage}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            </div>
                                            <p className="text-gray-400 secondary line-clamp-2">{post.excerpt}</p>
                                        </CardContent>
                                        <CardFooter className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="relative w-8 h-8">
                                                    <Image
                                                        alt={post.author.name}
                                                        src={post.author.picture}
                                                        fill
                                                        className="rounded-full object-cover"
                                                    />
                                                </div>
                                                <span className="secondary text-sm">{post.author.name}</span>
                                            </div>
                                            <span className="secondary text-sm">{formatDate(post.date)}</span>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                </div>
            </motion.div>
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