/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://proces360.com',
  generateRobotsTxt: false, // We hebben al een custom robots.txt
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  // Exclude paths
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500',
  ],

  // Additional paths die niet automatisch gegenereerd worden
  additionalPaths: async (config) => {
    return [
      // Homepage - hoogste prioriteit
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      // Diensten pagina's
      {
        loc: '/diensten',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/diensten/procesoptimalisatie',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/diensten/oee-verbetering',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/diensten/cobot-integratie',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/diensten/industriele-automatisering',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/diensten/productie-dashboards',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      // Tools/Calculators - hoge prioriteit voor lead generation
      {
        loc: '/oee-calculator',
        changefreq: 'monthly',
        priority: 0.85,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/roi-calculator',
        changefreq: 'monthly',
        priority: 0.85,
        lastmod: new Date().toISOString(),
      },
      // Over ons / Expert pagina
      {
        loc: '/over-ons',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/rob-derks',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      // Contact
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      // Cases / Portfolio
      {
        loc: '/cases',
        changefreq: 'weekly',
        priority: 0.75,
        lastmod: new Date().toISOString(),
      },
      // Blog/Kennisbank (voor thought leadership)
      {
        loc: '/kennisbank',
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ];
  },

  // Transform functie voor extra metadata
  transform: async (config, path) => {
    // Custom prioriteiten per pagina type
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/diensten')) {
      priority = 0.9;
    } else if (path.includes('/calculator')) {
      priority = 0.85;
    } else if (path.includes('/kennisbank') || path.includes('/blog')) {
      priority = 0.8;
      changefreq = 'daily';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        // Meertalige alternatieven
        { href: `https://proces360.com${path}`, hreflang: 'nl' },
        { href: `https://proces360.com/en${path}`, hreflang: 'en' },
        { href: `https://proces360.com/de${path}`, hreflang: 'de' },
        { href: `https://proces360.com${path}`, hreflang: 'x-default' },
      ],
    };
  },
};
