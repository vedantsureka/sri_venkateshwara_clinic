'use client';
import {useEffect,useState} from 'react';
export default function ClinicHours({fallback='Call to confirm consultation timings.'}:{fallback?:string}){const [value,setValue]=useState(fallback);useEffect(()=>{const controller=new AbortController();fetch('/api/public/hours',{signal:controller.signal}).then(r=>r.ok?r.json():null).then(data=>{if(data?.hours)setValue(data.hours)}).catch(()=>{});return ()=>controller.abort()},[]);return <span>{value}</span>}
