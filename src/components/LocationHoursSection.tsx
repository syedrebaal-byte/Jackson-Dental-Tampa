import React, { useState } from 'react';
import { MapPin, Phone, Clock, Car, ChevronDown, ChevronUp, Navigation, Calendar } from 'lucide-react';
import { CLINIC_INFO, FAQS } from '../data/dentalData';

interface LocationHoursProps {
  onOpenBooking: () => void;
}

export const LocationHoursSection: React.FC<LocationHoursProps> = ({ onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Location, Hours & Parking Instructions */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
                Downtown Tampa Facility
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 text-balance">
                Conveniently Located in Bank of America Plaza.
              </h2>
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                Positioned in the heart of Downtown Tampa’s business district, our third-floor suite offers convenient elevator access, validated parking, and serene skyline vistas.
              </p>
            </div>

            {/* Address & Parking Details Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">
                    {CLINIC_INFO.name}
                  </h3>
                  <div className="text-sm text-stone-600 mt-0.5">
                    {CLINIC_INFO.address.line1}
                  </div>
                  <div className="text-xs text-amber-900 font-medium mt-0.5">
                    {CLINIC_INFO.address.building}
                  </div>
                  <div className="text-sm text-stone-600">
                    {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                  </div>
                </div>
              </div>

              {/* Parking Guidance Note */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3 text-xs text-stone-700">
                <Car className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900">Parking & Valet:</strong>{' '}
                  {CLINIC_INFO.address.parkingNotice} Enter via Tampa St or Florida Ave and bring your ticket to Suite 300 for full validation.
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://maps.google.com/?q=Jackson+Dental+101+E+Kennedy+Blvd+Tampa+FL+33602`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-stone-600" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-800" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Hours of Operation Table */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-amber-800" />
                <h3 className="text-base font-bold text-stone-900">Hours of Operation</h3>
              </div>

              <div className="divide-y divide-stone-100 text-xs sm:text-sm">
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between">
                    <span className="font-semibold text-stone-800">{h.day}</span>
                    <div className="text-right">
                      <span className="font-mono text-stone-900 tabular-nums">{h.hours}</span>
                      <span className="block text-[11px] text-stone-500">{h.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
                Patient Inquiries
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Everything you need to know about your first appointment, insurance coverage, and parking validation.
              </p>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-stone-200 bg-white shadow-2xs overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-semibold text-stone-900 hover:text-amber-950 transition-colors text-sm sm:text-base"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct consultation prompt card */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-amber-950">Have a specific clinical question?</h4>
                <p className="text-xs text-amber-900/80 mt-0.5">
                  Our treatment coordinators are available during business hours.
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-bold text-stone-950 bg-amber-300 hover:bg-amber-200 rounded-lg shadow-xs transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
