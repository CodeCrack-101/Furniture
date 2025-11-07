// sitemap-generator.js
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// 1. Define your website's base URL
const hostname = 'https://www.shiring.com'; 

// 2. LIST ALL YOUR PUBLIC ROUTES HERE
// IMPORTANT: Add an entry for every page you want indexed
const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    // Add all other pages here: e.g., { url: '/services', changefreq: 'weekly', priority: 0.7 }
];

async function generateSitemap() {
    const stream = new SitemapStream({ hostname });

    // Write all static routes to the stream
    staticRoutes.forEach(route => {
        stream.write(route);
    });

    stream.end();

    const sitemapXml = await streamToPromise(stream);

    // 3. WRITE THE FILE TO THE PUBLIC FOLDER
    // This is the crucial step for static hosting!
    const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemapXml.toString());
    console.log(`✅ Sitemap successfully created at ${outputPath}`);
}

generateSitemap().catch(console.error);