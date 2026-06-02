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
import connectionToDataBase from '@/lib/mongoose';
import Contact from '@/models/Contact';

export const runtime = 'nodejs';

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

        // Connect to database
        await connectionToDataBase();

        // Create new contact document
        const newContact = new Contact({
            name: body.name.trim(),
            email: body.email.trim().toLowerCase(),
            query: body.query.trim(),
            status: 'new',
        });

        // Save to MongoDB
        await newContact.save();

        console.log('CONTACT SAVED:', newContact);

        return NextResponse.json({
            ok: true,
            message: 'Thanks! We received your message. We\'ll get back to you soon.',
            data: {
                id: newContact._id,
                email: newContact.email,
            },
        });
    } catch (error) {
        console.error('Error saving contact:', error);
        return NextResponse.json(
            { error: 'Failed to save your message. Please try again.' },
            { status: 500 }
        );
    }
}
