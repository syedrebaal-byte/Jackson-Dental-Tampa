import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../data/dentalData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredReviews = filter === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.treatment.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
              Verified Social Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 text-balance">
              Trusted by Over 1,380+ Downtown Tampa Patients.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs">
            <div className="text-right">
              <div className="text-xl font-bold font-serif text-stone-950 leading-tight">
                4.9 / 5.0
              </div>
              <div className="text-[11px] text-stone-500 font-medium">
                1,382+ Google & Birdeye Reviews
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                99.2% Positive Satisfaction
              </span>
            </div>
          </div>
        </div>

        {/* Filter segment tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            All Patient Stories
          </button>
          <button
            onClick={() => setFilter('veneers')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'veneers'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Veneers & Makeovers
          </button>
          <button
            onClick={() => setFilter('implant')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'implant'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Dental Implants
          </button>
          <button
            onClick={() => setFilter('invisalign')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'invisalign'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Invisalign® Clear
          </button>
          <button
            onClick={() => setFilter('gentle')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'gentle'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Gentle Cleaning & Anxiety
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
                    <span>{rev.source}</span>
                    <span aria-hidden="true">·</span>
                    <span>{rev.date}</span>
                  </div>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-stone-900">{rev.patientName}</div>
                  <div className="text-[11px] text-amber-800 font-medium">{rev.treatment}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Disclosure */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-xl mx-auto">
          Reviews are sourced from verified public patient submissions on Google My Business and Birdeye platform. Individual clinical results may vary depending on patient anatomy and periodontal health.
        </div>
      </div>
    </section>
  );
};
