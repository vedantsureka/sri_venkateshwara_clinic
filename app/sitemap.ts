import type {MetadataRoute} from 'next';
export default function sitemap():MetadataRoute.Sitemap{const host=process.env.NEXT_PUBLIC_SITE_URL||'https://example.com';return ['/','/about','/services','/diabetes-care','/reviews-faqs','/contact','/privacy','/terms'].map(path=>({url:host+path,changeFrequency:'monthly',priority:path==='/'?1:.7}));}
