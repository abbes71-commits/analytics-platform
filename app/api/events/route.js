import { events } from '../_data';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(events);
}
