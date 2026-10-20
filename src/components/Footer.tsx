import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-white border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Address (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-serif text-lg font-bold">
                J
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Jackson Dental
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Founded in 2013 by Dr. Geoffrey Jackson, DMD. Providing bespoke porcelain smile design, dental implants, Invisalign, and gentle preventative wellness in Downtown Tampa.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  101 E Kennedy Blvd, Suite 300, Bank of America Plaza, Tampa, FL 33602
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Porcelain Veneers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Single & Full-Arch Dental Implants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Invisalign® Clear Aligners
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Ultrasonic Hygiene & Wellness
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Same-Day Emergency Relief
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-white transition-colors">
                  $199 New Patient Special
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Hours & Validation (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Practice Hours
            </div>
            <div className="text-xs text-stone-400 space-y-1.5">
              <div className="flex justify-between">
                <span>Monday:</span>
                <span className="text-stone-200">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday – Wednesday:</span>
                <span className="text-stone-200">8:30 AM – 4:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday:</span>
                <span className="text-stone-200">8:30 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday:</span>
                <span className="text-stone-200">By Appointment / Emergency</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday – Sunday:</span>
                <span className="text-stone-200">Closed</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 text-xs font-bold text-stone-950 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors text-center shadow-xs"
              >
                Schedule an Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal, ADA & Disclaimer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; 2013–{new Date().getFullYear()} Jackson Dental Tampa. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span>ADA Accessible</span>
            <span aria-hidden="true">·</span>
            <span>HIPAA Compliant</span>
            <span aria-hidden="true">·</span>
            <a href="#location" className="hover:text-white transition-colors">
              Validated Parking
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
