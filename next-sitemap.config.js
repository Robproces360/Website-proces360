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

  // Additional paths - ALLEEN BESTAANDE PAGINA'S
  additionalPaths: async (config) => {
    const now = new Date().toISOString();
    return [
      // Homepage - hoogste prioriteit
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: now,
      },
      // Diensten pagina's
      {
        loc: '/diensten',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: now,
      },
      {
        loc: '/diensten/procesoptimalisatie',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: now,
      },
      {
        loc: '/diensten/oee-verbetering',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: now,
      },
      {
        loc: '/diensten/cobot-integratie',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: now,
      },
      {
        loc: '/diensten/industriele-automatisering',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: now,
      },
      {
        loc: '/diensten/productie-dashboards',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: now,
      },
      // Contact & Over Ons
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: now,
      },
      {
        loc: '/over-ons',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: now,
      },
      // Tools/Calculators - hoge prioriteit voor lead generation
      {
        loc: '/oee-calculator',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: now,
      },
      {
        loc: '/roi-calculator',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: now,
      },
      // Expert pagina
      {
        loc: '/rob-derks',
        changefreq: 'monthly',
        priority: 0.85,
        lastmod: now,
      },
      // Juridisch
      {
        loc: '/juridisch',
        changefreq: 'monthly',
        priority: 0.3,
        lastmod: now,
      },
      // Blog overzicht
      {
        loc: '/blog',
        changefreq: 'daily',
        priority: 0.85,
        lastmod: now,
      },
      // Blog artikelen - Cornerstone content
      {
        loc: '/blog/oee-verbeteren-complete-gids',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: now,
      },
      {
        loc: '/blog/cobots-in-productie-complete-gids',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: now,
      },
      // Blog artikelen - Supporting content
      {
        loc: '/blog/productie-strategie-automatisering',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/cobot-terugverdientijd-berekenen',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/productie-stilstand-verminderen',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/lean-manufacturing-mkb',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/preventief-onderhoud-tpm',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/industrie-4-mkb-praktisch',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      // Nieuwere blog artikelen
      {
        loc: '/blog/smart-manufacturing-trends-2025',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/productie-kpis-complete-gids',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/automatisering-roadmap-mkb',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/machine-learning-productie',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/productievloer-digitalisering',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/six-sigma-mkb',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/cobot-vs-industriele-robot',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/predictive-maintenance-gids',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/automatisering-roi-berekenen',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/digital-twin-productie',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
      {
        loc: '/blog/productieplanning-optimalisatie',
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: now,
      },
    ];
  },

  // Transform functie - GEEN alternateRefs (voorkomt dubbele paden bug)
  transform: async (config, path) => {
    // Custom prioriteiten per pagina type
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/calculator')) {
      priority = 0.9;
    } else if (path.includes('/blog/') && path !== '/blog') {
      priority = 0.85;
      changefreq = 'weekly';
    } else if (path === '/blog') {
      priority = 0.85;
      changefreq = 'daily';
    } else if (path.includes('/diensten')) {
      priority = 0.9;
    }

    // Geen alternateRefs - dit veroorzaakte de dubbele paden bug
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
