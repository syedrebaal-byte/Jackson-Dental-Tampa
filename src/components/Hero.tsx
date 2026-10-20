import React from 'react';
import { Calendar, Phone, ArrowUpRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenSmileAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenSmileAssessment }) => {
  return (
    <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-stone-100/70 via-stone-50 to-white">
      {/* Subtle architectural ambient background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Unboxed clean metadata kicker (Zero-Pill discipline) */}
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 mb-4 tracking-wide uppercase">
                <span>Downtown Tampa</span>
                <span aria-hidden="true" className="text-amber-800">·</span>
                <span>Bank of America Plaza</span>
                <span aria-hidden="true" className="text-amber-800">·</span>
                <span>Est. 2013</span>
              </div>

              {/* Master Headline with balanced text wrap */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] font-serif font-bold text-stone-950 tracking-tight text-balance">
                Elevated Dentistry for Tampa’s Discerning Smiles.
              </h1>

              {/* Patient-Focused Narrative Prose */}
              <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                Led by <span className="text-stone-900 font-semibold">Dr. Geoffrey Jackson, DMD</span> on the 3rd floor of Bank of America Plaza, our boutique practice unites high-precision porcelain cosmetic artistry, computer-guided dental implants, and anxiety-free patient wellness in an unhurried downtown sanctuary.
              </p>

              {/* Direct Conversion Actions */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-950 hover:bg-stone-800 active:scale-[0.99] rounded-lg shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Request Appointment</span>
                </button>

                <button
                  onClick={onOpenSmileAssessment}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg shadow-2xs transition-all whitespace-nowrap"
                >
                  <span>Evaluate My Smile (60s)</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500" />
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-stone-600 hover:text-stone-950 transition-colors sm:ml-2"
                >
                  <Phone className="w-4 h-4 text-amber-800" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
              </div>

              {/* Special Promotion Callout */}
              <div className="mt-7 pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-4 text-xs text-stone-600">
                <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                  <span className="w-2 h-2 rounded-full bg-amber-700" />
                  <span>New Patient Special: $199</span>
                </div>
                <span className="text-stone-400">·</span>
                <span>Includes Comprehensive Exam, Full 3D X-Rays & Preventive Cleaning</span>
                <span className="text-stone-400">·</span>
                <a href="#membership" className="text-amber-800 hover:underline font-medium">
                  View details
                </a>
              </div>
            </div>

            {/* Verified Social Proof Strip */}
            <div className="mt-8 flex items-center gap-3 bg-stone-50/90 border border-stone-200/90 rounded-xl p-3 max-w-lg">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <div className="text-xs text-stone-700">
                <span className="font-bold text-stone-900">4.9 / 5.0 Rating</span> from{' '}
                <span className="font-semibold text-stone-900">1,382+ Verified Reviews</span> on Google & Birdeye
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Masterpiece with Scrim and Floating Trust Pill */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-stone-200/80 shadow-md group">
              <img
                src="/assets/images/hero.jpg"
                alt="Jackson Dental modern penthouse operatory in Downtown Tampa with floor-to-ceiling city views"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Refined gradient scrim for maximum text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Bottom Overlaid Metadata Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/85 backdrop-blur-md border border-stone-700/60 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold tracking-wide">Bank of America Plaza · 3rd Floor</div>
                      <div className="text-[11px] text-stone-300">101 E Kennedy Blvd, Suite 300, Tampa FL</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 font-medium block">
                      Valet & Garage
                    </span>
                    <span className="text-[11px] text-stone-300">Validated Parking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Trust Strip below the 2-column split (Mandatory per Section 5 Checklist #13) */}
        <div className="mt-14 pt-10 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-950 tabular-nums">
              12+ Years
            </div>
            <div className="mt-1 text-xs sm:text-sm text-stone-600 font-medium">
              Serving Downtown Tampa Since 2013
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-950 tabular-nums">
              1,382+
            </div>
            <div className="mt-1 text-xs sm:text-sm text-stone-600 font-medium">
              4.9-Star Patient Reviews
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
              Diamond / Premier
            </div>
            <div className="mt-1 text-xs sm:text-sm text-stone-600 font-medium">
              Invisalign® Clear Aligner Provider
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
              100% Digital
            </div>
            <div className="mt-1 text-xs sm:text-sm text-stone-600 font-medium">
              3D Scanners & Low-Dose Imaging
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
