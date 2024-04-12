import {NextRequest, NextResponse} from "next/server";
import {getAllPosts, Post} from "../markdown";

function getRandomPosts(posts: Post[], numPosts: number): Post[] {
    const shuffled = posts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numPosts);
}

export async function GET(request: NextRequest) {
    const allPosts = getAllPosts();
    const randomPosts = getRandomPosts(allPosts, 3);
    return NextResponse.json(randomPosts);
}
