import React from 'react';
import { Sparkles, Scan, Waves, Music, ShieldCheck, Car, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface TechnologyComfortProps {
  onOpenBooking: () => void;
}

export const TechnologyComfortSection: React.FC<TechnologyComfortProps> = ({ onOpenBooking }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'Digital 3D Intraoral Scanning': <Scan className="w-5 h-5 text-amber-800" />,
    'Low-Radiation 3D CBCT Imaging': <Sparkles className="w-5 h-5 text-amber-800" />,
    'Anxiety-Free Conscious Sedation': <Waves className="w-5 h-5 text-amber-800" />,
    'Curated Operatory Comfort': <Music className="w-5 h-5 text-amber-800" />,
    'Bank of America Plaza Valet & Parking': <Car className="w-5 h-5 text-amber-800" />,
    'Transparent Upfront Estimates': <ShieldCheck className="w-5 h-5 text-amber-800" />
  };

  return (
    <section id="technology" className="py-20 lg:py-28 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
            The Patient Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 text-balance">
            Where Advanced Digital Dentistry Meets Boutique Hospitality.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            From the moment you arrive at Bank of America Plaza, every detail is engineered to eradicate clinical anxiety, respect your workday schedule, and provide microscopic restorative precision.
          </p>
        </div>

        {/* Visual Showcase: Dual Image Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tech Operatory Image */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm relative group bg-white">
            <div className="h-[280px] sm:h-[360px] overflow-hidden">
              <img
                src="/assets/images/technology.jpg"
                alt="Jackson Dental 3D digital intraoral scanner and diagnostic display"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>Clinical Infrastructure</span>
                <span aria-hidden="true">·</span>
                <span>Zero Goop Scanning</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-950">
                100% Digital Workflow: Optical 3D Impressions & Real-Time Simulations
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                We replaced uncomfortable goop impression trays with laser precision. Our digital intraoral scanner creates high-resolution 3D models in under 60 seconds, enabling immediate bite analysis and Invisalign simulation before you leave the chair.
              </p>
            </div>
          </div>

          {/* Boutique Lounge Image */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm relative group bg-white flex flex-col justify-between">
            <div className="h-[220px] sm:h-[260px] overflow-hidden">
              <img
                src="/assets/images/lounge.jpg"
                alt="Tranquil boutique patient reception lounge at Jackson Dental in Downtown Tampa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>Atmosphere & Ease</span>
                <span aria-hidden="true">·</span>
                <span>Suite 300 Lounge</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-950">
                Private Sanctuary Above the City Rush
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Step into a serene environment tailored with warm natural textures, acoustic dampening, and personal amenities designed to make your dental visit the most restorative hour of your week.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Patient Amenities Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_INFO.amenities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:border-stone-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4 border border-amber-100">
                {iconMap[item.title] || <CheckCircle className="w-5 h-5 text-amber-800" />}
              </div>
              <h4 className="text-base font-serif font-bold text-stone-950">
                {item.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comfort Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-stone-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
              Anxious or apprehensive about treatment?
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Experience Gentle, Stress-Free Dentistry with Nitrous & Oral Conscious Sedation.
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-xl">
              We customize the pace of every procedure. You remain comfortably awake, deeply relaxed, and in total control.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-stone-950 bg-white hover:bg-stone-100 rounded-lg shadow-sm whitespace-nowrap shrink-0 transition-colors self-start md:self-auto"
          >
            Request Anxiety-Free Visit
          </button>
        </div>
      </div>
    </section>
  );
};
