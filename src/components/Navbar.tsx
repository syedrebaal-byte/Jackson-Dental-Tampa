import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenSmileAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenSmileAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-stone-200/50 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single element, single-line) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-stone-900 group whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-200 flex items-center justify-center font-serif text-lg font-bold group-hover:bg-amber-950 transition-colors">
              J
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-stone-900 group-hover:text-amber-950 transition-colors">
                Jackson Dental
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-stone-500 -mt-1 hidden sm:block">
                Downtown Tampa · Suite 300
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a href="#services" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#technology" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Technology & Comfort
            </a>
            <a href="#about" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Our Doctors
            </a>
            <a href="#reviews" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Patient Reviews
            </a>
            <a href="#membership" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              $199 Special & Care Plans
            </a>
            <button
              onClick={onOpenSmileAssessment}
              className="text-amber-800 hover:text-amber-950 font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              Smile Evaluator
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-amber-800" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-4.5 py-2 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 active:scale-98 rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-stone-950 rounded-lg whitespace-nowrap shrink-0"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-stone-200 px-5 pt-3 pb-6 mt-3 space-y-3 shadow-lg">
          <div className="space-y-1">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-stone-950 border-b border-stone-100"
            >
              Services & Treatments
            </a>
            <a
              href="#technology"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-stone-950 border-b border-stone-100"
            >
              Technology & Comfort
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-stone-950 border-b border-stone-100"
            >
              Meet Dr. Jackson & Team
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-stone-950 border-b border-stone-100"
            >
              1,380+ Patient Reviews
            </a>
            <a
              href="#membership"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-stone-800 hover:text-stone-950 border-b border-stone-100"
            >
              $199 Welcome Special
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSmileAssessment();
              }}
              className="w-full text-left py-2 text-sm font-semibold text-amber-800 border-b border-stone-100"
            >
              Interactive Smile Assessment
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-stone-100 text-stone-800 font-semibold text-xs"
            >
              <Phone className="w-4 h-4 text-amber-800" />
              <span>Call Us: {CLINIC_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-stone-950 text-white font-semibold text-xs"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Request Appointment</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-stone-500 flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>Mon 9am–6pm · Tue–Wed 8:30am–4:30pm · Thu 8:30am–4pm</span>
          </div>
        </div>
      )}
    </header>
  );
};
