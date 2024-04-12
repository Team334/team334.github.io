import fs from "fs";
import matter from "gray-matter";
import {join} from "path";

const postsDirectory: string = join(process.cwd(), "_posts");

export type Author = {
    name: string;
    picture: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
};

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string | string[]): Post {
    let realSlug: string;
    if (Array.isArray(slug)) {
        realSlug = slug[0].replace(/\.md$/, "");
    } else {
        realSlug = slug.replace(/\.md$/, "");
    }
    const fullPath: string = join(postsDirectory, `${realSlug}.md`);
    const fileContents: string = fs.readFileSync(fullPath, "utf8");
    const {data, content}: { data: Partial<Post>; content: string } = matter(fileContents);

    return {...(data as Post), slug: realSlug, content};
}

export function getAllPosts(): Post[] {
    const slugs: string[] = getPostSlugs();
    const posts: Post[] = slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}