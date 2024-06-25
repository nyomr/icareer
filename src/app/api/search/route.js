// import { NextResponse } from 'next/server';
// import connect from '../../../db';
// import Post from '../../../models/Post';

// export const GET = async (request) => {
//     try {
//         await connect();
//         const { searchParams } = new URL(request.url);
//         const query = searchParams.get('query');

//         if (!query) {
//             return new NextResponse(JSON.stringify({ error: 'Query parameter is required' }), { status: 400 });
//         }

//         const post = await Post.findOne({ title: { $regex: query, $options: 'i' } });

//         if (!post) {
//             return new NextResponse(JSON.stringify({ error: 'Post not found' }), { status: 404 });
//         }

//         return new NextResponse(JSON.stringify(post), { status: 200 });
//     } catch (error) {
//         return new NextResponse(`Error in fetching posts: ${error.message}`, { status: 500 });
//     }
// };
// src/app/api/posts/route.js
import { NextResponse } from 'next/server';
import connect from '../../../../db';
import Post from '../../../../models/Post';

export const GET = async (request) => {
    try {
        await connect();
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');

        if (query) {
            // Handle search
            const post = await Post.findOne({ title: { $regex: query, $options: 'i' } });
            if (!post) {
                return new NextResponse(JSON.stringify({ error: 'Post not found' }), { status: 404 });
            }
            return new NextResponse(JSON.stringify(post), { status: 200 });
        } else {
            // Handle fetching limited posts
            const posts = await Post.find().limit(5);
            return new NextResponse(JSON.stringify(posts), { status: 200 });
        }
    } catch (error) {
        return new NextResponse(`Error in fetching posts: ${error.message}`, { status: 500 });
    }
};
