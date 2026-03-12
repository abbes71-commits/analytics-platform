import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// using a service-role key for trusted server-side operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export async function POST(req) {
  const data = await req.json();
  const event = {
    ...data,
    time: new Date().toISOString(),
  };

  const { error } = await supabase.from('events').insert([event]);
  if (error) {
    console.error('Supabase insert error', error);
    return NextResponse.json({ status: 'error', error: error.message }, { status: 500 });
  }

  return NextResponse.json({ status: 'ok' });
}
