'use client';

import React, { useState } from 'react';
import { X, Mail, User, Building2, Phone, Download, Loader2 } from 'lucide-react';
import Magnetic from './Magnetic';

interface EmailFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => Promise<void>;
  title: string;
  description: string;
}

export interface FormData {
  naam: string;
  email: string;
  bedrijf: string;
  telefoon: string;
}

export default function EmailFormModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
}: EmailFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    email: '',
    bedrijf: '',
    telefoon: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.naam.trim()) {
      newErrors.naam = 'Naam is verplicht';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ongeldig email adres';
    }

    if (!formData.telefoon.trim()) {
      newErrors.telefoon = 'Telefoonnummer is verplicht';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      // Reset form after successful submission
      setFormData({ naam: '', email: '', bedrijf: '', telefoon: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Er ging iets fout. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative glass rounded-3xl max-w-md w-full p-8 border border-primary-500/30 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-500/20 rounded-2xl mb-4">
            <Download className="w-7 h-7 text-primary-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Naam */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Naam <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={formData.naam}
                onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${
                  errors.naam ? 'border-red-500' : 'border-white/10'
                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                placeholder="Uw naam"
              />
            </div>
            {errors.naam && (
              <p className="text-red-500 text-xs mt-1">{errors.naam}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${
                  errors.email ? 'border-red-500' : 'border-white/10'
                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                placeholder="uw@email.nl"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Bedrijf */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Bedrijf
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={formData.bedrijf}
                onChange={(e) => setFormData({ ...formData, bedrijf: e.target.value })}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Uw bedrijfsnaam"
              />
            </div>
          </div>

          {/* Telefoon */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Telefoonnummer <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="tel"
                value={formData.telefoon}
                onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
                className={`w-full pl-12 pr-4 py-3 bg-white/5 border ${
                  errors.telefoon ? 'border-red-500' : 'border-white/10'
                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors`}
                placeholder="06 12 34 56 78"
              />
            </div>
            {errors.telefoon && (
              <p className="text-red-500 text-xs mt-1">{errors.telefoon}</p>
            )}
          </div>

          {/* Privacy Notice */}
          <div className="glass p-4 rounded-xl border border-white/5">
            <p className="text-xs text-gray-400">
              Door dit formulier in te vullen gaat u akkoord met het opslaan van uw
              gegevens voor contact doeleinden. Wij sturen u een kopie van de
              berekening per email.
            </p>
          </div>

          {/* Submit Button */}
          <Magnetic strength={0.3}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Bezig met genereren...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download PDF Rapport</span>
                </>
              )}
            </button>
          </Magnetic>
        </form>
      </div>
    </div>
  );
}
