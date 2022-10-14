import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import matter from 'gray-matter';

interface BlogPostParams extends ParsedUrlQuery {
    slug: string;
}

interface BlogPostProps {
    slug: string;
    frontMatter: { [key: string]: any },
    content: string,
}

const BlogPost: NextPage<BlogPostProps> = ({ slug, frontMatter, content }) => (
    <div className="py-36 px-60">
        <div className="relative h-72 w-full rounded-[1.5rem] overflow-hidden mb-10">
            {frontMatter.cover && (
                <Image
                    loader={({ src }) => src}
                    src={`/blog/${frontMatter.cover.filename}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={frontMatter.cover.position}
                />
            )}
            <div className="relative w-full h-full flex bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900 px-16 py-10">
                <div className="self-end">
                    <h1 className="text-5xl">{frontMatter.title}</h1>
                    <h4 className="font-normal">by {frontMatter.author} — {new Date(frontMatter.posted).toLocaleDateString()}</h4>
                </div>
            </div>
        </div>
        <article className="prose max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
    </div>
);

export const getStaticPaths: GetStaticPaths<BlogPostParams> = async () => {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map((filename) => ({
        params: {
            slug: slugify(filename).replace('.md', ''),
        },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogPostProps, BlogPostParams> = async ({ params }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', `${params!.slug}.md`), 'utf-8');
    const { data, content } = matter(markdownWithMeta);

    return {
        props: {
            frontMatter: JSON.parse(JSON.stringify(data)),
            slug: params!.slug,
            content,
        }
    };
};

export default BlogPost;
