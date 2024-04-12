import {NextRequest, NextResponse} from "next/server";
import {getAllPosts} from "./markdown";

export async function GET(request: NextRequest) {
    const post = getAllPosts();
    return NextResponse.json(post);
}