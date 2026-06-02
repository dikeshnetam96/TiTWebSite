import { NextResponse } from 'next/server';
import connectionToDataBase from '@/lib/mongoose';

export const runtime = 'nodejs';

export async function GET() {
  const envSet = !!(process.env.MONGODB_URI || process.env.MONGOURL || process.env.MONGO_URI);

  if (!envSet) {
    return NextResponse.json({ ok: false, envSet: false, dbConnected: false, message: 'MONGODB_URI not set' }, { status: 200 });
  }

  try {
    await connectionToDataBase();
    return NextResponse.json({ ok: true, envSet: true, dbConnected: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, envSet: true, dbConnected: false, message: msg }, { status: 200 });
  }
}
