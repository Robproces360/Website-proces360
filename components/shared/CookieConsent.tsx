'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, BarChart3, Target, ChevronDown, ChevronUp, Check } from 'lucide-react';
import Magnetic from './Magnetic';
import { updateGAConsent } from './GoogleAnalytics';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'proces360_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'proces360_cookie_preferences';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsented) {
      // Small delay for better UX - let the page load first
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setIsVisible(false);

    // Update Google Analytics consent
    updateGAConsent(prefs.analytics, prefs.marketing);
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    setPreferences(onlyNecessary);
    savePreferences(onlyNecessary);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  const cookieCategories = [
    {
      id: 'necessary',
      name: 'Noodzakelijk',
      icon: Shield,
      description: 'Deze cookies zijn essentieel voor de werking van de website. Ze onthouden uw voorkeuren en zorgen voor basisfunctionaliteit.',
      required: true,
      examples: ['Sessie cookies', 'Cookie voorkeuren', 'Beveiligingstokens'],
    },
    {
      id: 'analytics',
      name: 'Analytisch',
      icon: BarChart3,
      description: 'Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken. Dit stelt ons in staat de site te verbeteren.',
      required: false,
      examples: ['Google Analytics', 'Paginaweergaven', 'Sessieduur'],
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: Target,
      description: 'Deze cookies worden gebruikt om advertenties relevanter te maken en om de effectiviteit van campagnes te meten.',
      required: false,
      examples: ['LinkedIn Insight', 'Facebook Pixel', 'Remarketing'],
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={() => {}} // Prevent closing by clicking backdrop
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-dark-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-500/10 rounded-xl">
                      <Cookie className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Wij respecteren uw privacy
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Wij gebruiken cookies om uw ervaring te verbeteren, websiteverkeer te analyseren
                        en gepersonaliseerde content te tonen. U kunt uw voorkeuren aanpassen of alle
                        cookies accepteren.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookie Details (Expandable) */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 space-y-3">
                        {cookieCategories.map((category) => (
                          <div
                            key={category.id}
                            className="bg-dark-900/50 border border-white/5 rounded-xl p-4"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <category.icon className="w-5 h-5 text-primary-500" />
                                <span className="font-semibold text-white">{category.name}</span>
                                {category.required && (
                                  <span className="px-2 py-0.5 bg-primary-500/20 text-primary-400 text-xs rounded-full">
                                    Vereist
                                  </span>
                                )}
                              </div>
                              <button
                                onClick={() => {
                                  if (!category.required) {
                                    setPreferences(prev => ({
                                      ...prev,
                                      [category.id]: !prev[category.id as keyof CookiePreferences]
                                    }));
                                  }
                                }}
                                disabled={category.required}
                                className={`relative w-12 h-6 rounded-full transition-colors ${
                                  preferences[category.id as keyof CookiePreferences]
                                    ? 'bg-primary-500'
                                    : 'bg-gray-600'
                                } ${category.required ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
                              >
                                <motion.div
                                  animate={{
                                    x: preferences[category.id as keyof CookiePreferences] ? 26 : 2
                                  }}
                                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                                />
                              </button>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{category.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {category.examples.map((example, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-white/5 text-gray-500 text-xs rounded"
                                >
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="p-6 pt-2 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Toggle Details Button */}
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {showDetails ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Verberg details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Toon details
                        </>
                      )}
                    </button>

                    <div className="flex-1" />

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={acceptNecessary}
                        className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg transition-colors text-sm"
                      >
                        Alleen noodzakelijk
                      </button>

                      {showDetails && (
                        <button
                          onClick={saveCustomPreferences}
                          className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Voorkeuren opslaan
                        </button>
                      )}

                      <Magnetic>
                        <button
                          onClick={acceptAll}
                          className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors text-sm shadow-lg shadow-primary-500/25"
                        >
                          Alles accepteren
                        </button>
                      </Magnetic>
                    </div>
                  </div>

                  {/* Privacy Link */}
                  <div className="mt-4 text-center sm:text-left">
                    <a
                      href="/juridisch?tab=privacy"
                      className="text-xs text-gray-500 hover:text-primary-400 transition-colors"
                    >
                      Lees ons privacybeleid →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
