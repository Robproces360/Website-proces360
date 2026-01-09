import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import CustomCursor from "@/components/shared/CustomCursor";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import PageLoader from "@/components/visuals/PageLoader";
import ScrollProgress from "@/components/visuals/ScrollProgress";
import ParticleField from "@/components/visuals/ParticleField";
import NoiseOverlay from "@/components/visuals/NoiseOverlay";
import FloatingElements from "@/components/visuals/FloatingElements";
import CookieConsent from "@/components/shared/CookieConsent";
import { ToastProvider } from "@/components/shared/Toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// WERELDKLASSE SEO METADATA - Geoptimaliseerd voor Google, Bing, en AI-zoekmachines
export const metadata: Metadata = {
  title: {
    default: "Proces360 | Expert Procesoptimalisatie, OEE-verbetering & Cobot Integratie",
    template: "%s | Proces360 - Industriële Automatisering Expert",
  },
  description: "Rob Derks, 22+ jaar ervaring in productie-optimalisatie. Specialist in OEE-verbetering (15-40% verhoging), cobot/robot integratie, industriële automatisering en productie-dashboards. Gratis quickscan voor MKB-maakbedrijven in Nederland, België en Duitsland.",
  keywords: [
    // Primaire NL keywords
    "procesoptimalisatie", "OEE verbetering", "OEE verhoging", "OEE consultant",
    "cobot integratie", "collaborative robot", "robot automatisering",
    "industriële automatisering", "productie automatisering",
    "productie optimalisatie", "productie efficiëntie",
    "productie dashboard", "real-time monitoring", "KPI dashboard",
    // Long-tail NL
    "OEE berekenen", "OEE calculator", "Overall Equipment Effectiveness",
    "cobot programmeren", "cobot implementatie", "Universal Robots",
    "lean manufacturing", "continuous improvement", "kaizen",
    "bottleneck analyse", "workflow optimalisatie", "waste reductie",
    "doorlooptijd verkorting", "productiviteit verhogen",
    "ROI robot automatisering", "terugverdientijd cobot",
    // EN keywords voor internationale vindbaarheid
    "process optimization Netherlands", "OEE improvement consultant",
    "cobot integration specialist", "industrial automation expert",
    "manufacturing optimization", "production efficiency",
    "collaborative robot implementation", "factory automation",
    // DE keywords voor Duitsland
    "Prozessoptimierung", "OEE Verbesserung", "Cobot Integration",
    "Industrielle Automatisierung", "Produktionsoptimierung",
    // Industrie-specifiek
    "MKB maakbedrijf", "productie MKB", "manufacturing SME",
    "quickscan productie", "360 graden scan", "productie audit",
    "interim operations manager", "productie consultant",
  ],
  authors: [
    { name: "Rob Derks", url: "https://proces360.com/rob-derks" },
    { name: "Proces360 B.V." }
  ],
  creator: "Rob Derks - Proces360",
  publisher: "Proces360 B.V.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://proces360.com'),
  alternates: {
    canonical: '/',
    languages: {
      'nl-NL': 'https://proces360.com',
      'en': 'https://proces360.com/en',
      'de': 'https://proces360.com/de',
      'x-default': 'https://proces360.com',
    },
  },
  openGraph: {
    title: "Proces360 | Expert Procesoptimalisatie & Industriële Automatisering",
    description: "Rob Derks: 22+ jaar hands-on ervaring in productie. Specialist in OEE-verbetering (15-40%), cobot integratie en industriële automatisering. Gratis quickscan voor MKB-maakbedrijven.",
    url: 'https://proces360.com',
    siteName: 'Proces360',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Proces360 - Procesoptimalisatie, OEE-verbetering & Cobot Integratie Expert',
        type: 'image/png',
      },
      {
        url: '/images/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'Proces360 Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@proces360',
    creator: '@robderks_nl',
    title: "Proces360 | Expert Procesoptimalisatie & Industriële Automatisering",
    description: "22+ jaar ervaring in productie-optimalisatie. OEE-verbetering, cobot integratie, industriële automatisering. Gratis quickscan voor MKB.",
    images: {
      url: '/images/og-image.png',
      alt: 'Proces360 - Procesoptimalisatie Expert',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#f97316' },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Voeg verificatie codes toe wanneer je Google Search Console en Yandex Webmaster configureert
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  //   yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  //   bing: 'YOUR_BING_VERIFICATION_CODE',
  // },
  category: 'business',
  classification: 'Industrial Automation, Process Optimization, Manufacturing Consulting',
  other: {
    // Extra meta tags voor AI-vindbaarheid
    'article:author': 'Rob Derks',
    'article:publisher': 'Proces360 B.V.',
    // Geo-targeting
    'geo.region': 'NL',
    'geo.placename': 'Oss',
    'geo.position': '51.765;5.518',
    'ICBM': '51.765, 5.518',
    // Business info
    'business:contact_data:street_address': 'Oss',
    'business:contact_data:locality': 'Oss',
    'business:contact_data:region': 'Noord-Brabant',
    'business:contact_data:postal_code': '5340',
    'business:contact_data:country_name': 'Netherlands',
  },
};

// UITGEBREIDE JSON-LD STRUCTURED DATA - Wereldklasse voor Google & AI
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://proces360.com/#organization',
  name: 'Proces360 B.V.',
  alternateName: ['Proces360', 'Proces 360', 'Process360'],
  description: 'Proces360 is dé expert in procesoptimalisatie, OEE-verbetering, cobot/robot integratie en industriële automatisering voor MKB-maakbedrijven. Met 22+ jaar hands-on productie-ervaring helpen wij bedrijven hun productiviteit met 15-40% te verhogen.',
  url: 'https://proces360.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://proces360.com/images/logo-proces360.png',
    width: 512,
    height: 512,
  },
  image: 'https://proces360.com/images/og-image.png',
  telephone: '+31-85-401-0752',
  email: 'info@proces360.com',
  foundingDate: '2023',
  founder: {
    '@type': 'Person',
    '@id': 'https://proces360.com/#founder',
    name: 'Rob Derks',
    jobTitle: 'Oprichter & Lead Consultant',
    description: 'Rob Derks heeft 22+ jaar ervaring in de productie, van operator tot operations manager. Hij combineert hands-on productie-expertise met moderne automatiserings- en robotica-kennis.',
    url: 'https://proces360.com/rob-derks',
    sameAs: [
      'https://www.linkedin.com/in/rob-derks-15900873/',
    ],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oss',
    addressRegion: 'Noord-Brabant',
    postalCode: '5340',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.765,
    longitude: 5.518,
  },
  areaServed: [
    { '@type': 'Country', name: 'Netherlands' },
    { '@type': 'Country', name: 'Belgium' },
    { '@type': 'Country', name: 'Germany' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 51.765,
      longitude: 5.518,
    },
    geoRadius: '500 km',
  },
  priceRange: '€€-€€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Bank Transfer, Invoice',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+31-85-401-0752',
      contactType: 'sales',
      availableLanguage: ['Dutch', 'English', 'German'],
      areaServed: ['NL', 'BE', 'DE'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+31-85-401-0752',
      contactType: 'customer service',
      availableLanguage: ['Dutch', 'English'],
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/108035287',
    'https://twitter.com/proces360',
  ],
  knowsAbout: [
    'Procesoptimalisatie',
    'OEE (Overall Equipment Effectiveness)',
    'Cobot Integratie',
    'Collaborative Robots',
    'Industriële Automatisering',
    'Productie Dashboards',
    'Lean Manufacturing',
    'Continuous Improvement',
    'Robot Automatisering',
    'Universal Robots',
    'FANUC',
    'ABB Robotics',
    'Productie Efficiëntie',
    'MKB Maakbedrijven',
    'Manufacturing Optimization',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Proces360 Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        '@id': 'https://proces360.com/#quickscan',
        name: 'Gratis Quickscan',
        description: 'Gratis analyse van uw productieproces met concrete verbeterpunten, ROI-berekening en prioriteitenlijst. Binnen 2 uur inzicht in uw optimalisatiepotentieel.',
        price: '0',
        priceCurrency: 'EUR',
        url: 'https://proces360.com/diensten/quickscan',
      },
      {
        '@type': 'Offer',
        '@id': 'https://proces360.com/#oee-verbetering',
        name: 'OEE Verbetertraject',
        description: 'Verhoog uw OEE met 15-40% door gerichte optimalisatie van beschikbaarheid, prestatie en kwaliteit. Inclusief real-time monitoring en data-analyse.',
        priceRange: '€5.000 - €50.000',
        priceCurrency: 'EUR',
        url: 'https://proces360.com/diensten/oee-verbetering',
      },
      {
        '@type': 'Offer',
        '@id': 'https://proces360.com/#cobot-integratie',
        name: 'Cobot/Robot Integratie',
        description: 'Complete cobot implementatie van selectie tot programmering. Terugverdientijd gemiddeld 12-18 maanden. Merkonafhankelijk advies uit 50+ technologieën.',
        priceRange: '€35.000 - €300.000',
        priceCurrency: 'EUR',
        url: 'https://proces360.com/diensten/cobot-integratie',
      },
      {
        '@type': 'Offer',
        '@id': 'https://proces360.com/#automatisering',
        name: 'Industriële Automatisering',
        description: 'Van PLC-programmering tot complete productielijnautomatisering. Systeemintegratie, besturingssystemen en optimalisatie van bestaande installaties.',
        priceRange: '€10.000 - €500.000',
        priceCurrency: 'EUR',
        url: 'https://proces360.com/diensten/industriele-automatisering',
      },
      {
        '@type': 'Offer',
        '@id': 'https://proces360.com/#dashboards',
        name: 'Productie Dashboards',
        description: 'Real-time productie monitoring, KPI-visualisatie en business intelligence voor manufacturing. Inzicht in OEE, output, kwaliteit en downtime.',
        priceRange: '€8.000 - €75.000',
        priceCurrency: 'EUR',
        url: 'https://proces360.com/diensten/productie-dashboards',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

// FAQ Schema voor veelgestelde vragen
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is OEE en waarom is het belangrijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OEE (Overall Equipment Effectiveness) is dé KPI voor productie-efficiëntie. Het meet de combinatie van Beschikbaarheid × Prestatie × Kwaliteit. Een gemiddeld MKB-maakbedrijf scoort 40-60% OEE, terwijl world-class 85%+ is. Elke 1% OEE-verbetering betekent directe kostenreductie en meer output met dezelfde resources. Proces360 helpt bedrijven hun OEE met 15-40% te verhogen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een cobot en wat is de terugverdientijd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een complete cobot-installatie kost tussen €35.000 en €150.000, afhankelijk van de toepassing, gripper en integratie. De gemiddelde terugverdientijd ligt tussen 12-18 maanden. Gebruik onze gratis ROI Calculator om uw specifieke terugverdientijd te berekenen. Proces360 adviseert merkonafhankelijk uit 50+ cobot- en robot-technologieën.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een cobot en een industriële robot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cobots (collaborative robots) zijn ontworpen om veilig samen te werken met mensen zonder afscherming. Ze zijn flexibeler, makkelijker te programmeren en goedkoper (€25.000-€60.000). Industriële robots zijn krachtiger, sneller en geschikt voor zware, repetitieve taken, maar vereisen veiligheidsafscherming en kosten €50.000-€250.000+. Proces360 adviseert welke oplossing het beste past bij uw situatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt een procesoptimalisatie-traject?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een quickscan duurt 1-2 dagen. Een compleet OEE-verbetertraject neemt 3-6 maanden. Cobot-integratie kost 2-4 maanden van selectie tot productie. De eerste resultaten zijn vaak binnen 4-6 weken zichtbaar. Proces360 levert concrete, meetbare verbeteringen met duidelijke ROI.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voor welke bedrijven is Proces360 geschikt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proces360 werkt met MKB-maakbedrijven (10-500 medewerkers) in Nederland, België en Duitsland. Onze klanten zijn actief in metaalbewerking, kunststofverwerking, voedselverwerkende industrie, assemblage en logistiek. Of u nu 1 machine of een complete fabriek wilt optimaliseren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat maakt Rob Derks en Proces360 uniek?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rob Derks heeft 22+ jaar hands-on ervaring in productie: van operator, via teamleider en production manager tot operations manager. Dit betekent geen theoretisch advies, maar praktische oplossingen die direct werken op de werkvloer. Proces360 is merkonafhankelijk en selecteert uit 50+ technologieën de beste oplossing voor uw situatie.',
      },
    },
  ],
};

// WebSite Schema voor sitelinks
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://proces360.com/#website',
  url: 'https://proces360.com',
  name: 'Proces360',
  alternateName: 'Proces 360',
  description: 'Expert in procesoptimalisatie, OEE-verbetering, cobot integratie en industriële automatisering',
  publisher: {
    '@id': 'https://proces360.com/#organization',
  },
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://proces360.com/zoeken?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  ],
  inLanguage: ['nl-NL', 'en', 'de'],
};

// Person Schema voor Rob Derks (voor expert authority)
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://proces360.com/#founder',
  name: 'Rob Derks',
  givenName: 'Rob',
  familyName: 'Derks',
  jobTitle: 'Oprichter & Lead Consultant Procesoptimalisatie',
  description: 'Rob Derks is een expert in procesoptimalisatie met 22+ jaar hands-on ervaring in de productie. Van operator tot operations manager, hij kent de werkvloer als geen ander. Specialist in OEE-verbetering, cobot integratie en industriële automatisering.',
  url: 'https://proces360.com/rob-derks',
  image: 'https://proces360.com/images/rob-derks.jpg',
  worksFor: {
    '@id': 'https://proces360.com/#organization',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Diverse MKB-maakbedrijven',
  },
  knowsAbout: [
    'Procesoptimalisatie',
    'OEE (Overall Equipment Effectiveness)',
    'Cobot Integratie',
    'Industriële Automatisering',
    'Lean Manufacturing',
    'Continuous Improvement',
    'Productie Management',
    'Operations Management',
    'Robot Automatisering',
    'Productie Dashboards',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: '22+ jaar productie-ervaring',
      description: 'Van operator → teamleider → production manager → maintenance manager → operations manager',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/rob-derks-15900873/',
  ],
};

// BreadcrumbList Schema
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://proces360.com',
    },
  ],
};

// LocalBusiness Schema voor lokale vindbaarheid
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://proces360.com/#localbusiness',
  name: 'Proces360 B.V.',
  image: 'https://proces360.com/images/logo-proces360.png',
  telephone: '+31-85-401-0752',
  email: 'info@proces360.com',
  url: 'https://proces360.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oss',
    addressRegion: 'Noord-Brabant',
    postalCode: '5340',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.765,
    longitude: 5.518,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '€€-€€€',
};

// Combineer alle schemas
const combinedJsonLd = [
  organizationSchema,
  faqSchema,
  websiteSchema,
  personSchema,
  breadcrumbSchema,
  localBusinessSchema,
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        {/* Structured Data - Alle schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
        />

        {/* Preconnect voor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch voor externe services */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Canonical en hreflang tags */}
        <link rel="alternate" hrefLang="nl" href="https://proces360.com" />
        <link rel="alternate" hrefLang="en" href="https://proces360.com/en" />
        <link rel="alternate" hrefLang="de" href="https://proces360.com/de" />
        <link rel="alternate" hrefLang="x-default" href="https://proces360.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content - Accessibility */}
        <a href="#main-content" className="skip-link">
          Ga naar hoofdinhoud
        </a>

        {/* Page loading animation */}
        <PageLoader />

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Visual layers - Awwwards level */}
        <NoiseOverlay />
        <ParticleField />
        <FloatingElements count={12} />

        <ToastProvider>
          <SmoothScroll>
            <CustomCursor />
            <WhatsAppButton />
            {children}
          </SmoothScroll>

          {/* Cookie Consent Banner - AVG Compliant */}
          <CookieConsent />
        </ToastProvider>
      </body>
    </html>
  );
}
