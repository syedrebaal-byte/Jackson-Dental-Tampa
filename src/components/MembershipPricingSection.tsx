import React, { useState } from 'react';
import { Check, ShieldCheck, CreditCard, Sparkles, HelpCircle } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/dentalData';

interface MembershipPricingProps {
  onOpenBooking: () => void;
  onSelectSpecialForBooking: (specialName: string) => void;
}

export const MembershipPricingSection: React.FC<MembershipPricingProps> = ({
  onOpenBooking,
  onSelectSpecialForBooking
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'annual' | 'monthly'>('annual');

  return (
    <section id="membership" className="py-20 lg:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
            Affordable Excellence & Transparent Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950 text-balance">
            Honest Pricing. Zero Surprise Fees. No Insurance Needed.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Whether utilizing PPO dental insurance or our in-house wellness membership, you receive direct upfront pricing with clear treatment proposals before any clinical procedure begins.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isFeatured = plan.highlight;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-stone-950 text-white shadow-xl ring-2 ring-amber-400/40 md:-translate-y-2'
                    : 'bg-stone-50 text-stone-900 border border-stone-200/90 shadow-2xs'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-amber-400 text-stone-950 font-bold text-[11px] uppercase tracking-wider shadow-xs">
                    Most Popular For New Patients
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-1">
                    {plan.audience}
                  </div>

                  <h3 className={`text-2xl font-serif font-bold ${isFeatured ? 'text-white' : 'text-stone-950'}`}>
                    {plan.title}
                  </h3>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-serif font-bold tabular-nums">
                      ${plan.priceAnnual}
                    </span>
                    <span className={`text-xs ${isFeatured ? 'text-stone-400' : 'text-stone-500'}`}>
                      {plan.id === 'welcome-special' ? 'total one-time visit' : '/ year ($39/mo equivalent)'}
                    </span>
                  </div>

                  <p className={`mt-2 text-xs leading-relaxed ${isFeatured ? 'text-stone-300' : 'text-stone-600'}`}>
                    {plan.id === 'welcome-special'
                      ? 'Comprehensive intro visit: exam, full 3D diagnostic x-rays, and healthy cleaning in the absence of gum disease.'
                      : 'Guaranteed preventive dental security without insurance pre-authorizations or claim denials.'}
                  </p>

                  <div className={`mt-6 pt-6 border-t ${isFeatured ? 'border-stone-800' : 'border-stone-200'}`}>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${isFeatured ? 'text-stone-300' : 'text-stone-800'}`}>
                      What is included:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isFeatured ? 'text-amber-400' : 'text-emerald-700'}`} />
                          <span className={isFeatured ? 'text-stone-200' : 'text-stone-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200/40">
                  <button
                    onClick={() => onSelectSpecialForBooking(plan.title)}
                    className={`w-full py-3 px-4 rounded-lg text-xs font-bold transition-all text-center ${
                      isFeatured
                        ? 'bg-amber-300 text-stone-950 hover:bg-amber-200 shadow-sm'
                        : 'bg-stone-900 text-white hover:bg-stone-800 shadow-2xs'
                    }`}
                  >
                    Claim {plan.id === 'welcome-special' ? '$199 Welcome Special' : 'Enroll in Membership'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Insurance & Flexible Financing Row */}
        <div className="mt-14 p-7 sm:p-9 rounded-2xl bg-stone-50 border border-stone-200/90 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-stone-900">PPO Insurance Welcome</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                We accept and file claims with major PPO insurance providers to help maximize your annual policy benefits with electronic claim processing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CreditCard className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-stone-900">0% Interest Financing</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Flexible payment terms through CareCredit and Sunbit with rapid pre-qualification that does not impact your credit score.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-stone-900">HSA & FSA Qualified</h4>
              <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                Utilize your pre-tax Health Savings Account or Flexible Spending Account for dental crowns, implants, aligners, and preventative cleanings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
