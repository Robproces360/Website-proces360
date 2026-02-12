"use client";
import Link from 'next/link';
import { Phone, Mail, Globe, MapPin, Building2 } from 'lucide-react';
import HoverScale from '../shared/HoverScale';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary py-12 border-t border-white/10 relative">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-text-primary">PROCES</span>
              <span className="text-primary-500">360</span>
            </h3>
            <p className="text-text-secondary mb-4 text-sm">
              22+ jaar productie-ervaring. Eén man die naast u op de vloer staat.
            </p>
            <p className="text-text-muted text-xs">
              Eerlijk advies. Meetbaar resultaat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/#diensten', label: 'Diensten' },
                { href: '/#360scan', label: '360Scan' },
                { href: '/#aanpak', label: 'Aanpak' },
                { href: '/#team', label: 'Maak kennis met Rob' },
                { href: '/#waarom', label: 'Resultaten' },
              ].map((link) => (
                <li key={link.href}>
                  <HoverScale scale={1.05}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary-500 transition-colors inline-block text-sm"
                    >
                      {link.label}
                    </Link>
                  </HoverScale>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+31854010752" className="hover:text-primary-500 transition-colors block">
                    085 - 401 0752
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@proces360.com" className="hover:text-primary-500 transition-colors">
                  info@proces360.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="https://www.proces360.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                  www.proces360.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address Info */}
          <div>
            <h4 className="text-lg font-bold text-text-primary mb-4">Adressen</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-text-muted mb-1">Bezoekadres:</p>
                  <p>Dommelstraat 39</p>
                  <p>5347 JK Oss</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-text-muted mb-1">Postadres:</p>
                  <p>Voorhof 11</p>
                  <p>5351 LL Berghem</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-xs">
            <p>
              © {currentYear} Proces360 B.V. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/juridisch?tab=privacy" className="hover:text-primary-500 transition-colors">Privacybeleid</Link>
              <span className="hidden md:inline">|</span>
              <Link href="/juridisch?tab=cookies" className="hover:text-primary-500 transition-colors">Cookiebeleid</Link>
              <span className="hidden md:inline">|</span>
              <Link href="/juridisch?tab=voorwaarden" className="hover:text-primary-500 transition-colors">Algemene Voorwaarden</Link>
            </div>
            <div className="flex gap-4">
              <span>KvK: 97218774</span>
              <span>|</span>
              <span>BTW: NL867956008B01</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
