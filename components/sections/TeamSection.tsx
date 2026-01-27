'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import Reveal from '../shared/Reveal';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-bg-secondary/50">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium mb-4">
              Maak Kennis
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Het <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Van werkvloer tot directie, van operatie tot strategie
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-bg-primary border border-white/10 rounded-2xl p-8 md:p-10 hover:border-primary-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-primary-500/30">
                    <Image
                      src="/images/rob-derks.jpg"
                      alt="Rob Derks - Adviseur, Consultant & Eigenaar Proces360"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Rob Derks
                  </h3>
                  <p className="text-primary-500 font-medium mb-4">
                    Adviseur, Consultant & Eigenaar
                  </p>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    22+ jaar hands-on ervaring in productie. Van operator tot operations manager,
                    van werkvloer tot directie. Ik ken de machines, de processen én de mensen.
                    Gedegen advies met daarop volgende acties - van A tot Z ontzorgd.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                      OEE Expert
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                      Cobot Specialist
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                      Procesoptimalisatie
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                      Automatisering
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link
                      href="/rob-derks"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      Lees meer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://www.linkedin.com/company/proces360%C2%B0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white font-semibold rounded-lg hover:bg-[#005885] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
