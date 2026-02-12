import Link from 'next/link';
import { Phone, ArrowRight, Calculator, MessageCircle } from 'lucide-react';

export default function BlogCTA() {
  return (
    <div className="mt-16 bg-gradient-to-br from-primary-500/10 to-orange-500/5 border border-primary-500/20 rounded-2xl p-8 md:p-10">
      <h3 className="text-2xl font-bold text-white mb-3">
        Wilt u weten wat dit voor uw bedrijf betekent?
      </h3>
      <p className="text-gray-400 mb-6">
        Bel Rob voor een vrijblijvend gesprek van 20 minuten. Eerlijk advies &mdash; ook als
        ik denk dat u mij niet nodig hebt.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+31854010752"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Bel Rob: 085 - 401 0752
        </a>
        <a
          href="https://wa.me/31630185844"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4">
        <Link href="/oee-calculator" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 text-sm font-medium">
          <Calculator className="w-4 h-4" />
          OEE Calculator
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link href="/quickscan" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 text-sm font-medium">
          Gratis OEE Quickscan
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
