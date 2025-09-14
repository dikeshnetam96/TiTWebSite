// // app/api/tit/route.ts
// import { NextResponse } from "next/server";

// type ContactPayload = {
//     name: string;
//     email: string;
//     query: string;
// };

// export async function POST(req: Request) {
//     try {
//         const body = (await req.json()) as Partial<ContactPayload>;

//         if (!body?.name || !body?.email || !body?.query) {
//             return NextResponse.json(
//                 { error: "name, email and query are required" },
//                 { status: 400 }
//             );
//         }

//         console.log("CONTACT:", body);

//         return NextResponse.json({
//             ok: true,
//             message: "Thanks! We received your message.",
//         });
//     } catch {
//         return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
//     }
// }


import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // ensure Node runtime on platforms that support it

type ContactPayload = {
    name: string;
    email: string;
    query: string;
};

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Partial<ContactPayload>;

        if (!body?.name || !body?.email || !body?.query) {
            return NextResponse.json(
                { error: 'name, email and query are required' },
                { status: 400 }
            );
        }

        // Do your processing here (email, DB, etc.)
        console.log('CONTACT:', body);

        return NextResponse.json({
            ok: true,
            message: 'Thanks! We received your message.',
        });
    } catch {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
}
