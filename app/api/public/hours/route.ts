import {NextResponse} from 'next/server';
import {db} from '@/lib/server';
export const dynamic='force-dynamic';
export async function GET(){const client=db();if(!client)return NextResponse.json({hours:null},{headers:{'Cache-Control':'no-store'}});const {data,error}=await client.from('clinic_settings').select('value').eq('key','hours').maybeSingle();const v=data?.value;const hours=!error&&v?.published===true&&typeof v.text==='string'?v.text.slice(0,500):null;return NextResponse.json({hours},{headers:{'Cache-Control':'no-store'}})}
