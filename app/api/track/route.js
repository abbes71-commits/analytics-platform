import { events } from '../_data';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req.json();

  const event = {
    ...data,
    time: new Date(),
  };

  events.push(event);
  console.log(event);

  return NextResponse.json({ status: "ok" });
}
