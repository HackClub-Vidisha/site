// pages/sitemap.xml.js

import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

const Sitemap = () => {
  return null; // This component does not render anything
};

export default Sitemap;

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    <url>
      <loc>${process.env.NEXT_PUBLIC_SITE_URL}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
      <loc>${process.env.NEXT_PUBLIC_SITE_URL}/contact</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  </urlset>`;

  return NextResponse.json(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
