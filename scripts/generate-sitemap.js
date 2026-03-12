import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const blogPostsPath = path.join(rootDir, 'data', 'blogPosts.ts');
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');

const domain = 'https://manivarmacyber.github.io';

// Standard routes defined in App.tsx
const staticRoutes = [
  { path: '', priority: '1.0' },
  { path: '/blog', priority: '0.9' },
  { path: '/about', priority: '0.7' },
  { path: '/privacy', priority: '0.5' },
  { path: '/contact', priority: '0.7' },
];

try {
  console.log('Generating dynamic sitemap...');
  const content = fs.readFileSync(blogPostsPath, 'utf8');

  // Extract slugs using regex: slug: '...' or slug: "..."
  const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g) || [];
  const slugs = slugMatches.map(m => m.match(/['"]([^'"]+)['"]/)[1]);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  staticRoutes.forEach(route => {
    xml += `
  <url>
    <loc>${domain}${route.path}</loc>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // Add dynamic blog posts
  slugs.forEach(slug => {
    xml += `
  <url>
    <loc>${domain}/blog/${slug}</loc>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
</urlset>
`;

  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ Success: Generated sitemap.xml with ${slugs.length} dynamic blog routes.`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
