"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Magnetic from '../shared/Magnetic';
import { Calculator, ChevronDown, X, Menu, Linkedin, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    };

    if (toolsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toolsOpen]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setToolsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setToolsOpen(false);
    }, 300);
  };

  const toggleDropdown = () => {
    setToolsOpen(!toolsOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/#diensten', label: 'Diensten' },
    { href: '/#360scan', label: '360Scan' },
    { href: '/#aanpak', label: 'Aanpak' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Prominent fixed logo - top right, below navbar */}
      <div className="fixed top-20 right-6 z-30 hidden lg:block">
        <Link href="/" className="block">
          <Image
            src="/images/logo-proces360.png"
            alt="Proces360"
            width={80}
            height={80}
            className="hover:scale-105 transition-transform duration-300 drop-shadow-lg"
          />
        </Link>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image
              src="/images/logo-proces360.png"
              alt="Proces360"
              width={52}
              height={52}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">
              <span className="text-white">PROCES</span>
              <span className="text-primary-500">360</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Magnetic strength={0.2}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-primary-500 transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </Link>
              </Magnetic>
            </li>
          ))}

          {/* Tools Dropdown */}
          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleDropdown}
              className={`flex items-center gap-1 transition-colors duration-300 text-sm font-medium ${
                toolsOpen ? 'text-primary-500' : 'text-text-secondary hover:text-primary-500'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>ROI Tools</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${toolsOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-72 glass rounded-xl overflow-hidden border border-primary-500/20 shadow-2xl transition-all duration-300 ${
                toolsOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-2 pointer-events-none invisible'
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/roi-calculator"
                onClick={() => setToolsOpen(false)}
                className="block px-6 py-4 hover:bg-primary-500/10 transition-all duration-200 border-b border-white/10 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Calculator className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1 group-hover:text-primary-500 transition-colors">
                      Robot ROI Calculator
                    </div>
                    <div className="text-xs text-gray-400 leading-relaxed">
                      Bereken de ROI van robot automatisering
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/oee-calculator"
                onClick={() => setToolsOpen(false)}
                className="block px-6 py-4 hover:bg-primary-500/10 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Calculator className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-1 group-hover:text-primary-500 transition-colors">
                      OEE Calculator
                    </div>
                    <div className="text-xs text-gray-400 leading-relaxed">
                      Bereken financiële impact OEE verhoging
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </li>

          {/* Social Icons */}
          <li className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/rob-derks-15900873/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0077B5] hover:bg-[#005885] rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="https://wa.me/31854010752"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366] hover:bg-[#1da851] rounded-lg transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-white" />
            </a>
          </li>

          <li>
            <Magnetic strength={0.3}>
              <a href="tel:+31854010752" className="btn px-6 py-2 text-sm font-semibold">
                085 - 401 0752
              </a>
            </Magnetic>
          </li>
        </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Sluit menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-bg-secondary border-l border-white/10 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block py-3 px-4 text-lg text-text-secondary hover:text-primary-500 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* ROI Tools in mobile */}
                <li className="pt-4 border-t border-white/10 mt-4">
                  <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">ROI Tools</p>
                  <Link
                    href="/roi-calculator"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-lg text-text-secondary hover:text-primary-500 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    Robot ROI Calculator
                  </Link>
                  <Link
                    href="/oee-calculator"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-lg text-text-secondary hover:text-primary-500 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    OEE Calculator
                  </Link>
                </li>
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="pt-6 border-t border-white/10">
              <a
                href="tel:+31854010752"
                className="btn w-full text-center py-4"
                onClick={closeMobileMenu}
              >
                Bel: 085 - 401 0752
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
