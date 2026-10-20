import React from 'react';
import { Award, GraduationCap, ShieldCheck, Heart } from 'lucide-react';
import { DOCTORS } from '../data/dentalData';

interface MeetTeamProps {
  onOpenBooking: () => void;
}

export const MeetTeamSection: React.FC<MeetTeamProps> = ({ onOpenBooking }) => {
  const drJackson = DOCTORS[0];
  const associates = DOCTORS.slice(1);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
            Clinical Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 text-balance">
            Rooted in Advanced Science, Delivered with Personal Care.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Unlike corporate dental chains driven by production quotas, Jackson Dental remains an independent, doctor-owned practice where every patient receives dedicated one-on-one attention from top clinicians.
          </p>
        </div>

        {/* Featured Founder Profile: Dr. Geoffrey Jackson, DMD */}
        <div className="mt-12 rounded-3xl bg-stone-50 border border-stone-200/90 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Doctor Portrait */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
              <img
                src={drJackson.image || '/assets/images/dr-jackson.jpg'}
                alt="Dr. Geoffrey Jackson, DMD, Founder of Jackson Dental in Tampa FL"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent lg:hidden pointer-events-none" />
              <div className="absolute bottom-4 left-4 lg:hidden text-white">
                <div className="text-lg font-serif font-bold">{drJackson.name}, {drJackson.credentials}</div>
                <div className="text-xs text-amber-300 font-medium">{drJackson.role}</div>
              </div>
            </div>

            {/* Doctor Bio & Credentials */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-stone-500 mb-2">
                  <span>Founder & Clinical Director</span>
                  <span aria-hidden="true">·</span>
                  <span>Established Tampa Practice in 2013</span>
                </div>

                <h3 className="hidden lg:block text-2xl sm:text-3xl font-serif font-bold text-stone-950">
                  {drJackson.name}, {drJackson.credentials}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-xs text-stone-600">
                  <GraduationCap className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>{drJackson.education}</span>
                </div>

                <p className="mt-5 text-stone-700 text-sm sm:text-base leading-relaxed">
                  {drJackson.bio}
                </p>

                {/* Core Clinical Focus areas */}
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                    Areas of Clinical Focus
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {drJackson.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md bg-white border border-stone-200 text-xs font-medium text-stone-800"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Founder quote */}
              <div className="mt-8 pt-6 border-t border-stone-200/80 flex items-start gap-4">
                <Heart className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm italic text-stone-600 leading-relaxed">
                  &ldquo;Our promise is simple: we never rush your care, we explain every clinical detail transparently, and we treat your smile as if it were our own.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Associate Clinical Team Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950">
                Our Associate Dental Team
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Collaborative clinicians delivering exceptional general, surgical, and preventative care.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors"
            >
              <span>Schedule with a Doctor</span>
              <Award className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {associates.map((doc) => (
              <div
                key={doc.id}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between hover:bg-white transition-all shadow-2xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span>{doc.role}</span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-stone-950">
                    {doc.name}, {doc.credentials}
                  </h4>

                  <div className="mt-1 text-xs text-stone-500">
                    {doc.education}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {doc.bio}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">
                    Clinical Disciplines
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specialties.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
