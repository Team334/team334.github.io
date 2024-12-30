import {notFound} from "next/navigation";
import React from "react";
import Image from "next/image";
import markdownStyles from "@/styles/markdown-styles.module.css";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {GetStaticPaths, GetStaticProps} from "next";
import {getPostBySlug, getPostSlugs, Post} from "@/components/markdown";
import {motion} from "framer-motion";

type PostPageProps = {
    post: Post | undefined;
};

const PostPage: React.FC<PostPageProps> = ({post}) => {
    if (!post) {
        return notFound();
    }

    return (
        <motion.div 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="max-w-4xl mx-auto px-4 py-8"
        >
            {/* Hero Section */}
            <div className="space-y-6 mb-12">
                <motion.h1 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.2}}
                    className="text-4xl md:text-6xl font-bold text-white secondary text-center"
                >
                    {post.title}
                </motion.h1>
                
                {/* Author Info */}
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.3}}
                    className="flex items-center justify-center space-x-4"
                >
                    <Image
                        alt={post.author.name}
                        src={post.author.picture}
                        className="rounded-full"
                        width={40}
                        height={40}
                    />
                    <span className="main text-lg">{post.author.name}</span>
                    <span className="text-gray-400">•</span>
                    <time className="secondary text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </motion.div>

                {/* Cover Image */}
                <motion.div 
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.4}}
                    className="relative aspect-video rounded-xl overflow-hidden"
                >
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>

            {/* Content */}
            <motion.article 
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                className="prose prose-lg prose-invert max-w-none"
            >
                <ReactMarkdown
                    className={markdownStyles["markdown"]}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {post.content}
                </ReactMarkdown>
            </motion.article>
        </motion.div>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostSlugs().map((slug) => ({ params: { slug: slug.replace(/\.md$/, '') } }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
                                                                         params,
                                                                     }) => {
    const { slug } = params as Params["params"];
    const post = getPostBySlug(slug);

    return {
        props: {
            post,
        },
    };
};

export default PostPage;