"use client";
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // WhatsApp phone number (06 nummer) in international format without + or spaces
  const phoneNumber = "31630185844"; // +31 6 3018 5844
  const message = "Hallo, ik wil graag meer informatie over Proces360.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Auto-open chat preview after 3 seconds (only once)
  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setChatOpen(true);
        setHasShown(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Preview Window */}
      <div
        className={`absolute bottom-14 right-0 w-44 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform origin-bottom-right ${
          chatOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-2 py-1.5 flex items-center gap-1.5">
          <div className="relative">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/rob-avatar.png"
                alt="Rob"
                width={24}
                height={24}
                className="rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-[10px]">R</span>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-green-300 rounded-full border border-green-600"></span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-[10px]">Rob Derks</p>
            <p className="text-green-100 text-[8px]">Online</p>
          </div>
          <button
            onClick={() => setChatOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="p-1.5 bg-[#e5ddd5]">
          <div className="bg-white rounded rounded-tl-none p-1.5 shadow-sm relative">
            <p className="text-gray-800 text-[10px] leading-relaxed">
              Hallo! 👋 Vragen? Ik help u graag!
            </p>
            <div className="absolute -left-1 top-0 w-0 h-0 border-t-[4px] border-t-white border-r-[4px] border-r-transparent"></div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-1.5 bg-gray-50 border-t border-gray-200">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-1.5 rounded font-semibold text-[10px] hover:from-green-600 hover:to-green-700 transition-all duration-300"
          >
            Start gesprek
          </a>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => {
          setIsHovered(true);
          setChatOpen(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          if (!chatOpen) {
            e.preventDefault();
            setChatOpen(true);
          }
        }}
        className="relative block bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? '0 10px 40px rgba(34, 197, 94, 0.5)'
            : '0 4px 20px rgba(34, 197, 94, 0.3)'
        }}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>

        {/* Notification badge */}
        {!chatOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold animate-bounce">
            1
          </span>
        )}
      </a>
    </div>
  );
}
