import { GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
    slug: string;
    frontMatter: { [key: string]: any };
}

interface BlogHomeProps {
    posts: BlogPost[];
}

const BlogHome: NextPage<BlogHomeProps> = ({ posts }) => (
    <div className="py-36 px-60">
        <div className="grid grid-cols-2 gap-4">
            {posts
                .sort((a, b) => new Date(a.frontMatter.posted) < new Date(b.frontMatter.posted) ? 1 : -1)
                .map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                        <div className="rounded-[1.5rem] overflow-hidden bg-slate-900 cursor-pointer duration-300 ease-out hover:-translate-y-2">
                            <div className="relative h-40 w-full">
                                {post.frontMatter.cover && (
                                    <Image
                                        src={`/blog/${post.frontMatter.cover.filename}`}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition={post.frontMatter.cover.position}
                                    />
                                )}
                                <div className="relative w-full h-full flex bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900 px-16 py-10" />
                            </div>
                            <div className="p-5 pb-7">
                                <h1>{post.frontMatter.title} <span className="text-xl font-normal text-slate-400">{new Date(post.frontMatter.posted).toLocaleDateString()}</span></h1>
                                <p className="text-slate-400">{post.frontMatter.description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
);

export const getStaticProps: GetStaticProps<BlogHomeProps> = async () => {
    const files = fs.readdirSync(path.join('posts'));

    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
        const { data } = matter(markdownWithMeta);
        return {
            frontMatter: data,
            slug: filename.split('.')[0]
        };
    });

    return {
        props: {
            // Jank way of working around Next.js's inability to serialize Date objects
            posts: JSON.parse(JSON.stringify(posts)),
        }
    };
};

export default BlogHome;
