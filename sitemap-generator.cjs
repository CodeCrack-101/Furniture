// sitemap-generator.cjs
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// 1. Define your website's base URL
const hostname = 'https://www.shiring.com'; 
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// 2. LIST ALL YOUR PUBLIC ROUTES HERE
// IMPORTANT: Add an entry for every page you want indexed
const staticRoutes = [
    // Core Pages
    { url: '/', changefreq: 'daily', priority: 1.0, lastmod: currentDate },
    { url: '/about', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },
    { url: '/contact', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },
    { url: '/product', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },

    // Placeholder for other routes (Add your real pages here)
    // { url: '/services', changefreq: 'weekly', priority: 0.7, lastmod: currentDate },
    // { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5, lastmod: currentDate },
];

async function generateSitemap() {
    console.log('Starting sitemap generation...');
    const stream = new SitemapStream({ hostname });

    // Write all defined routes to the stream
    staticRoutes.forEach(route => {
        stream.write(route);
    });

    stream.end();

    const sitemapXml = await streamToPromise(stream);

    // 3. WRITE THE FILE TO THE PUBLIC FOLDER
    const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemapXml.toString());
    console.log(`✅ Sitemap successfully created at ${outputPath}`);
    console.log(`Discovered ${staticRoutes.length} URLs.`);
}

generateSitemap().catch(console.error);