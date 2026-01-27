'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Declare gtag on window
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Helper function to check if analytics is consented
export function isAnalyticsConsented(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const preferences = localStorage.getItem('proces360_cookie_preferences');
    if (preferences) {
      const parsed = JSON.parse(preferences);
      return parsed.analytics === true;
    }
  } catch {
    return false;
  }
  return false;
}

// Track page views
export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID || !isAnalyticsConsented()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// Track events
export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (!GA_MEASUREMENT_ID || !isAnalyticsConsented()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Pre-defined event helpers
export const analytics = {
  // Tool usage events
  toolStarted: (toolName: string) => {
    trackEvent({
      action: 'tool_started',
      category: 'Tools',
      label: toolName,
    });
  },

  toolCompleted: (toolName: string, result?: string) => {
    trackEvent({
      action: 'tool_completed',
      category: 'Tools',
      label: `${toolName}${result ? ` - ${result}` : ''}`,
    });
  },

  // CTA events
  ctaClicked: (ctaName: string, location: string) => {
    trackEvent({
      action: 'cta_clicked',
      category: 'CTA',
      label: `${ctaName} - ${location}`,
    });
  },

  phoneClicked: (location: string) => {
    trackEvent({
      action: 'phone_click',
      category: 'Contact',
      label: location,
    });
  },

  whatsappClicked: (location: string) => {
    trackEvent({
      action: 'whatsapp_click',
      category: 'Contact',
      label: location,
    });
  },

  formSubmitted: (formName: string) => {
    trackEvent({
      action: 'form_submitted',
      category: 'Forms',
      label: formName,
    });
  },

  // Calculator/tool results
  calculatorResult: (calculatorName: string, resultValue: number) => {
    trackEvent({
      action: 'calculator_result',
      category: 'Calculators',
      label: calculatorName,
      value: Math.round(resultValue),
    });
  },

  // Download events
  downloadClicked: (fileName: string) => {
    trackEvent({
      action: 'download',
      category: 'Downloads',
      label: fileName,
    });
  },

  // Scroll depth
  scrollDepth: (percentage: number) => {
    trackEvent({
      action: 'scroll_depth',
      category: 'Engagement',
      label: `${percentage}%`,
      value: percentage,
    });
  },

  // Time on page
  timeOnPage: (seconds: number, pageName: string) => {
    trackEvent({
      action: 'time_on_page',
      category: 'Engagement',
      label: pageName,
      value: seconds,
    });
  },
};

// Page view tracker component
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}

// Main Google Analytics component
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Default to denied until consent is given
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
            });

            // Check for existing consent
            try {
              const preferences = localStorage.getItem('proces360_cookie_preferences');
              if (preferences) {
                const parsed = JSON.parse(preferences);
                if (parsed.analytics) {
                  gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                  });
                }
                if (parsed.marketing) {
                  gtag('consent', 'update', {
                    'ad_storage': 'granted',
                  });
                }
              }
            } catch (e) {}

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
            });
          `,
        }}
      />

      {/* Track page views on route changes */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}

// Function to update consent (call this from CookieConsent)
export function updateGAConsent(analyticsConsent: boolean, marketingConsent: boolean) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    'analytics_storage': analyticsConsent ? 'granted' : 'denied',
    'ad_storage': marketingConsent ? 'granted' : 'denied',
  });

  // If analytics is now granted, send a pageview
  if (analyticsConsent && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }
}
