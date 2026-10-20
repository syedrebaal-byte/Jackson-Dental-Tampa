import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, ChevronRight, X, Sparkles, Shield, HeartPulse } from 'lucide-react';
import { TREATMENTS, CLINIC_INFO } from '../data/dentalData';
import { Treatment } from '../types/dental';
import { Dental3DViewer } from './Dental3DViewer';

interface ServicesSectionProps {
  onSelectTreatmentForBooking: (treatmentName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectTreatmentForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'cosmetic', label: 'Cosmetic & Veneers' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'invisalign', label: 'Invisalign Aligners' },
    { id: 'general', label: 'Preventative & Hygiene' },
    { id: 'emergency', label: 'Emergency Care' }
  ];

  const filteredTreatments = activeCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
              Comprehensive Clinical Specialties
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 text-balance">
              Disciplined Dental Artistry & Restorative Precision.
            </h2>
          </div>

          <p className="text-stone-600 text-sm sm:text-base max-w-md leading-relaxed">
            Every procedure at Jackson Dental is grounded in biomimetic science, conservative tooth structure preservation, and patient-centered comfort.
          </p>
        </div>

        {/* Filter Navigation (Interactive Segmented Tabs) */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-stone-950 text-white shadow-xs'
                  : 'bg-stone-100/80 text-stone-600 hover:text-stone-950 hover:bg-stone-200/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Bento Grid of Treatments */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTreatments.map((treatment, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={treatment.id}
                className={`group rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-stone-300 transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 shadow-xs hover:shadow-md ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-stone-50 via-white to-amber-50/20' : ''
                }`}
              >
                <div>
                  {/* Clean unboxed editorial metadata */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                    <span className="font-mono text-stone-400">0{index + 1}.</span>
                    <div className="flex items-center gap-2">
                      <span className="capitalize">{treatment.category}</span>
                      {treatment.badge && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-amber-800 font-medium">{treatment.badge}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 group-hover:text-amber-950 transition-colors">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {treatment.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-5 space-y-2 text-xs sm:text-sm text-stone-700">
                    {treatment.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span className="truncate max-w-[140px] sm:max-w-none">{treatment.timeline}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedTreatment(treatment)}
                      className="px-3 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors"
                    >
                      Clinical Details
                    </button>
                    <button
                      onClick={() => onSelectTreatmentForBooking(treatment.title)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-stone-950 bg-amber-100/70 hover:bg-amber-200/80 rounded-md transition-colors"
                    >
                      <span>Book</span>
                      <ArrowUpRight className="w-3 h-3 text-amber-900" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Ceramic & Implant Craft Callout Box */}
        <div className="mt-14 rounded-2xl bg-stone-900 text-white p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Micro-Engineered Dental Materials</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white text-balance">
                Digital 3D CAD/CAM & Hand-Layered Feldspathic Ceramics.
              </h3>

              <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                Rather than treating crowns and veneers like commodities, Jackson Dental collaborates with premier domestic dental master ceramists. Every contour, translucency gradient, and contact point is digitally milled and customized under surgical magnification for optimal bite occlusion and biological gum compatibility.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Biocompatible Zirconia & Lithium Disilicate (E.max)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <HeartPulse className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Sub-gingival margins designed to protect periodontal bone health</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onSelectTreatmentForBooking('Cosmetic & Ceramic Restoration')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-stone-950 bg-amber-200 hover:bg-amber-100 rounded-lg shadow-xs transition-colors"
                >
                  <span>Schedule Restorative Consultation</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-950" />
                </button>
              </div>
            </div>

            {/* Interactive 3D Component */}
            <div className="lg:col-span-5 bg-stone-950/70 p-3 sm:p-4 rounded-xl border border-stone-800">
              <Dental3DViewer />
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Detailed Modal / Drawer */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-200 flex items-start justify-between bg-stone-50/70">
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-amber-800 mb-1">
                  {selectedTreatment.category} Protocol
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-950">
                  {selectedTreatment.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTreatment(null)}
                className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-200/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-stone-700">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Clinical Overview
                </h4>
                <p className="leading-relaxed text-stone-600">
                  {selectedTreatment.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Key Patient Benefits
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedTreatment.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-800">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Ideal Candidate Profile
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-stone-600 text-xs sm:text-sm">
                  {selectedTreatment.idealFor.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between text-xs text-amber-900">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-800" />
                  <span><strong>Expected Timeline:</strong> {selectedTreatment.timeline}</span>
                </div>
                <span className="font-medium text-stone-600">Suite 300 · Downtown Tampa</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedTreatment(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  const title = selectedTreatment.title;
                  setSelectedTreatment(null);
                  onSelectTreatmentForBooking(title);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg shadow-xs transition-colors flex items-center gap-2"
              >
                <span>Request Appointment for {selectedTreatment.title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
