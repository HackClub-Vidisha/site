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
      <loc>https://vidisha.hackclub.com/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
      <loc>https://vidisha.hackclub.com/conduct</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  </urlset>`;

  return NextResponse.json(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
