import {Metadata} from "next";
import {notFound} from "next/navigation";
import React from "react";
import Image from "next/image";
import {Image as NextUIImage} from "@nextui-org/react"
import markdownStyles from "./markdown-styles.module.css";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import rehypeStringify from "rehype-stringify";

import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism'

import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import py from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import dart from 'react-syntax-highlighter/dist/esm/languages/prism/dart';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('py', py);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('dart', dart);

const checkEnvironment = () => {
    return process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://team334.vercel.app";
};


async function fetchAllPosts() {
    const response = await fetch(checkEnvironment() + '/api/posts');
    return await response.json();
}

async function fetchPostBySlug(slug: string) {
    const response = await fetch(checkEnvironment() + `/api/posts?slug=${slug}`);
    return await response.json();
}


export default async function Post({params}: Params) {
    const postInfo = await fetchPostBySlug(params.slug[0]);
    const post = postInfo[0];

    if (!post) {
        return notFound();
    }

    return (

        <div className="p-10">
            <div className={"flex justify-center items-center text-center w-full my-10"}>
                <div className={"space-y-5"}>
                    <h1 className={"text-[2.9rem] md:text-7xl font-bold dark:text-white secondary p-2"}>{post.title}</h1>
                    <div className="flex flex-row items-center justify-center text-center gap-2">
                        <Image
                            alt="blogAuthor"
                            src={post.author.picture}
                            className="rounded-full"
                            width={40}
                            height={40}
                            style={{width: "40px", height: "40px", objectFit: "cover"}}
                        />

                        <h1 className="main">{post.author.name}</h1>
                        <div className="border-l dark:border-gray-300 border-gray-900 h-6 mx-2"/>
                        <h1 className="secondary">{new Date(post.date).toLocaleDateString()}</h1>
                    </div>
                    <NextUIImage
                        src={post.coverImage}
                        alt={"blogImage"}
                        style={{width: '100%', height: 'auto', maxWidth: '1500px', maxHeight: '600px'}}
                    />
                </div>
            </div>
            <div className="prose max-w-none dark:prose-invert">

                <ReactMarkdown
                    className={markdownStyles["markdown"]}
                    remarkPlugins={[remarkGfm, remarkParse, remarkStringify, remarkRehype]}
                    rehypePlugins={[rehypeRaw, rehypeFormat, rehypeMinifyWhitespace, rehypeStringify]}
                    components={{
                        code({node, inline, className, children, ...props}: any) {
                            const match = /language-(\w+)/.exec(className || '');

                            return !inline && match ? (
                                <SyntaxHighlighter style={prism} PreTag="div" language={match[1]} {...props}>
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {post.content}
                </ReactMarkdown>
            </div>
        </div>
    );
}

type Params = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({params}: Params): Promise<Metadata> {
    const postInfo = await fetchPostBySlug(params.slug);
    const post = postInfo[0]

    if (!post) {
        return notFound();
    }


    const title = `${post.title}`;

    return {
        openGraph: {
            title,
            images: [post.ogImage.url],
        },
    };
}

export async function generateStaticParams() {
    const posts = await fetchAllPosts();

    return posts.map((post: any) => ({
        params: {
            slug: post.slug,
        }
    }));
}