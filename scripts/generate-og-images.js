const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

// Kleuren uit huisstijl
const primaryColor = '#f97316'; // Orange
const bgColor = '#0a0a0a'; // Dark background
const textColor = '#ffffff';

async function generateOGImage() {
  // Hoofd OG image (1200x630)
  const width = 1200;
  const height = 630;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a"/>
          <stop offset="100%" style="stop-color:#1a1a1a"/>
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f97316"/>
          <stop offset="100%" style="stop-color:#ea580c"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

      <!-- Decorative elements -->
      <circle cx="1100" cy="100" r="200" fill="${primaryColor}" opacity="0.1"/>
      <circle cx="100" cy="530" r="150" fill="${primaryColor}" opacity="0.08"/>

      <!-- Orange accent line -->
      <rect x="80" y="200" width="6" height="230" fill="url(#orangeGrad)" rx="3"/>

      <!-- Main text -->
      <text x="110" y="260" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="${textColor}">Proces360</text>

      <!-- Tagline -->
      <text x="110" y="330" font-family="Arial, sans-serif" font-size="32" fill="#9ca3af">Procesoptimalisatie &amp; OEE Expert</text>

      <!-- Subtitle -->
      <text x="110" y="400" font-family="Arial, sans-serif" font-size="24" fill="${primaryColor}">22+ jaar hands-on productie-ervaring</text>

      <!-- Services -->
      <text x="110" y="480" font-family="Arial, sans-serif" font-size="20" fill="#6b7280">OEE Verbetering  |  Cobot Integratie  |  Automatisering</text>

      <!-- Website -->
      <text x="110" y="560" font-family="Arial, sans-serif" font-size="18" fill="#4b5563">proces360.com</text>

      <!-- Bottom accent -->
      <rect x="0" y="620" width="${width}" height="10" fill="url(#orangeGrad)"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(imagesDir, 'og-image.png'));

  console.log('Created og-image.png (1200x630)');
}

async function generateOGImageSquare() {
  // Vierkante OG image (1200x1200)
  const size = 1200;

  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a"/>
          <stop offset="100%" style="stop-color:#1a1a1a"/>
        </linearGradient>
        <linearGradient id="orangeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f97316"/>
          <stop offset="100%" style="stop-color:#ea580c"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${size}" height="${size}" fill="url(#bgGrad2)"/>

      <!-- Decorative circles -->
      <circle cx="1000" cy="200" r="250" fill="${primaryColor}" opacity="0.1"/>
      <circle cx="200" cy="1000" r="200" fill="${primaryColor}" opacity="0.08"/>

      <!-- Center content -->
      <text x="600" y="480" font-family="Arial, sans-serif" font-size="96" font-weight="bold" fill="${textColor}" text-anchor="middle">Proces360</text>

      <!-- Orange line -->
      <rect x="400" y="520" width="400" height="6" fill="url(#orangeGrad2)" rx="3"/>

      <!-- Tagline -->
      <text x="600" y="620" font-family="Arial, sans-serif" font-size="36" fill="#9ca3af" text-anchor="middle">Procesoptimalisatie</text>
      <text x="600" y="680" font-family="Arial, sans-serif" font-size="36" fill="#9ca3af" text-anchor="middle">&amp; OEE Expert</text>

      <!-- Highlight -->
      <text x="600" y="780" font-family="Arial, sans-serif" font-size="28" fill="${primaryColor}" text-anchor="middle">22+ jaar productie-ervaring</text>

      <!-- Bottom accent -->
      <rect x="0" y="1180" width="${size}" height="20" fill="url(#orangeGrad2)"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(imagesDir, 'og-image-square.png'));

  console.log('Created og-image-square.png (1200x1200)');
}

async function generateRobDerksOG() {
  // Rob Derks OG image met foto (1200x630)
  const width = 1200;
  const height = 630;

  // Laad en resize de foto
  const photoPath = path.join(imagesDir, 'rob-derks.jpg');

  if (!fs.existsSync(photoPath)) {
    console.log('rob-derks.jpg not found, skipping rob-derks-og.png');
    return;
  }

  // Maak een circulaire foto
  const photoSize = 300;
  const photoBuffer = await sharp(photoPath)
    .resize(photoSize, photoSize, { fit: 'cover' })
    .png()
    .toBuffer();

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a"/>
          <stop offset="100%" style="stop-color:#1a1a1a"/>
        </linearGradient>
        <linearGradient id="orangeGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f97316"/>
          <stop offset="100%" style="stop-color:#ea580c"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGrad3)"/>

      <!-- Decorative elements -->
      <circle cx="1100" cy="100" r="200" fill="${primaryColor}" opacity="0.1"/>

      <!-- Orange accent line -->
      <rect x="500" y="180" width="6" height="270" fill="url(#orangeGrad3)" rx="3"/>

      <!-- Text content -->
      <text x="530" y="240" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="${textColor}">Rob Derks</text>

      <text x="530" y="300" font-family="Arial, sans-serif" font-size="28" fill="${primaryColor}">Oprichter Proces360</text>

      <text x="530" y="360" font-family="Arial, sans-serif" font-size="22" fill="#9ca3af">Expert Procesoptimalisatie &amp; OEE</text>

      <text x="530" y="420" font-family="Arial, sans-serif" font-size="20" fill="#6b7280">22+ jaar hands-on productie-ervaring</text>

      <text x="530" y="480" font-family="Arial, sans-serif" font-size="18" fill="#4b5563">proces360.com/rob-derks</text>

      <!-- Bottom accent -->
      <rect x="0" y="620" width="${width}" height="10" fill="url(#orangeGrad3)"/>
    </svg>
  `;

  // Eerst de achtergrond maken
  const background = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  // Dan de foto compositen
  await sharp(background)
    .composite([
      {
        input: photoBuffer,
        left: 100,
        top: 165,
      }
    ])
    .png()
    .toFile(path.join(imagesDir, 'rob-derks-og.png'));

  console.log('Created rob-derks-og.png (1200x630) with photo');
}

async function main() {
  console.log('Generating OG images...\n');

  await generateOGImage();
  await generateOGImageSquare();
  await generateRobDerksOG();

  console.log('\nDone! All OG images created in public/images/');
}

main().catch(console.error);
