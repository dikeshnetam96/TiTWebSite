//  import connectionToDataBase from "../../../lib/mongoose";
//  import User from "../../../models/User";
//  import { NextResponse } from "next/server";

// export async function POST(request) {
//     try{
//         await connectionToDataBase();
//         const {name,email} = await request.json()
//         const newUser = new User({name, email})
//         await newUser.save()
//         return NextResponse.json(newUser,{status:201})
//     }
//     catch(err){
//         console.log(err)
//     }
// }

import { NextResponse } from 'next/server';
import connectionToDataBase from '../../../lib/mongoose';
import User from '../../../models/User';

export async function POST(request) {
  try {
    await connectionToDataBase();

    const body = await request.json();
    const { name, email } = body;

    const newUser = new User({ name, email });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/users:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
