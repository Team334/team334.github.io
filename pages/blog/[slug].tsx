import {notFound} from "next/navigation";
import React from "react";
import Image from "next/image";
import markdownStyles from "@/styles/markdown-styles.module.css";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import rehypeStringify from "rehype-stringify";

// import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
// import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism'
//
// import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
// import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
// import py from 'react-syntax-highlighter/dist/esm/languages/prism/python';
// import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
// import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
// import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
// import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
// import dart from 'react-syntax-highlighter/dist/esm/languages/prism/dart';
import {GetStaticPaths, GetStaticProps} from "next";
import {getPostBySlug, getPostSlugs, Post} from "@/components/markdown";
//
// SyntaxHighlighter.registerLanguage('tsx', tsx);
// SyntaxHighlighter.registerLanguage('js', js);
// SyntaxHighlighter.registerLanguage('py', py);
// SyntaxHighlighter.registerLanguage('html', html);
// SyntaxHighlighter.registerLanguage('css', css);
// SyntaxHighlighter.registerLanguage('json', json);
// SyntaxHighlighter.registerLanguage('java', java);
// SyntaxHighlighter.registerLanguage('dart', dart);


const PostPage = ({post}) => {

    if (!post) {
        return notFound();
    }

    return (
        <div className="p-10">
            <div className={"flex justify-center items-center text-center w-full my-10"}>
                <div className={"space-y-5"}>
                    <h1 className={"text-[2.9rem] md:text-7xl font-bold text-white secondary p-2"}>{post.title}</h1>
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
                        <div className="border-l border-gray-300 h-6 mx-2"/>
                        <h1 className="secondary">{new Date(post.date).toLocaleDateString()}</h1>
                    </div>
                    <Image
                        src={post.coverImage}
                        alt={"blogImage"}
                        height={"800"}
                        width={"1500"}
                    />
                </div>
            </div>
            <div className="prose max-w-none prose-invert">

                <ReactMarkdown
                    className={markdownStyles["markdown"]}
                    remarkPlugins={[remarkGfm, remarkParse, remarkStringify, remarkRehype]}
                    rehypePlugins={[rehypeRaw, rehypeFormat, rehypeMinifyWhitespace, rehypeStringify]}
                    // components={{
                    //     code({node, inline, className, children, ...props}: any) {
                    //         const match = /language-(\w+)/.exec(className || '');
                    //
                    //         return !inline && match ? (
                    //             <SyntaxHighlighter style={prism} PreTag="div" language={match[1]} {...props}>
                    //                 {String(children).replace(/\n$/, '')}
                    //             </SyntaxHighlighter>
                    //         ) : (
                    //             <code className={className} {...props}>
                    //                 {children}
                    //             </code>
                    //         );
                    //     },
                    // }}
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