import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { blogPosts } from './data/blogPosts';

function generateBlogMetadata() {
  return {
    name: 'generate-blog-metadata',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexHtmlPath)) return;

      const template = fs.readFileSync(indexHtmlPath, 'utf8');

      blogPosts.forEach((post) => {
        const blogDir = path.join(distDir, 'blog', post.slug);
        if (!fs.existsSync(blogDir)) {
          fs.mkdirSync(blogDir, { recursive: true });
        }

        const title = post.title;
        // Escape quotes to prevent breaking HTML attributes
        const description = post.excerpt.replace(/"/g, '&quot;');
        const url = `https://manivarmacyber.github.io/blog/${post.slug}`;
        const image = `https://manivarmacyber.github.io${post.image}`;

        let publishTime = post.publishDate;
        try { publishTime = new Date(post.publishDate).toISOString().split('T')[0] + 'T10:00:00+00:00'; } catch (e) { }

        let modifiedTime = post.updatedDate || post.publishDate;
        try { modifiedTime = new Date(post.updatedDate || post.publishDate || new Date().toISOString()).toISOString().split('T')[0] + 'T10:00:00+00:00'; } catch (e) { }

        const metaTags = `
  <!-- Initial SEO Metadata Injected via Vite SSG -->
  <title>${title}</title>
  <meta name="title" content="${title}" />
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${url}" />
  
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  
  <meta property="article:published_time" content="${publishTime}" />
  <meta property="article:modified_time" content="${modifiedTime}" />
  <meta property="article:author" content="G Manikanta Varma" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${url}" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
        `;

        // Strip default tags that conflict
        let updatedHtml = template
          .replace(/<title>.*?<\/title>/, '')
          .replace(/<meta name="title".*?>/, '')
          .replace(/<meta name="description".*?>/, '')
          .replace(/<meta property="og:type".*?>/, '')
          .replace(/<meta property="og:url".*?>/, '')
          .replace(/<meta property="og:title".*?>/, '')
          .replace(/<meta property="og:description".*?>/, '')
          .replace(/<meta property="og:image".*?>/, '')
          .replace(/<meta name="twitter:url".*?>/, '')
          .replace(/<meta name="twitter:title".*?>/, '')
          .replace(/<meta name="twitter:description".*?>/, '')
          .replace(/<meta name="twitter:image".*?>/, '');

        // Inject new tags right before </head>
        updatedHtml = updatedHtml.replace('</head>', `${metaTags}\n</head>`);

        fs.writeFileSync(path.join(blogDir, 'index.html'), updatedHtml);
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
      generateBlogMetadata(),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      outDir: 'dist',
      minify: 'lightningcss',
      cssMinify: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['motion'],
            'vendor-icons': ['lucide-react'],
            'vendor-firebase': ['firebase/app', 'firebase/firestore', 'firebase/messaging'],
          },
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    }
  };
});
