import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake, Calendar } from 'lucide-react';

interface SmileAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBooking: (assessmentSummary: string) => void;
}

export const SmileAssessmentModal: React.FC<SmileAssessmentModalProps> = ({
  isOpen,
  onClose,
  onProceedToBooking
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>('As soon as convenient');
  const [comfortPreference, setComfortPreference] = useState<string>('Standard gentle care');

  if (!isOpen) return null;

  const goals = [
    { id: 'whiten', label: 'Whiten stubborn stains or yellowing', desc: 'Medical-grade in-office or take-home system' },
    { id: 'veneers', label: 'Fix chips, gaps, or uneven tooth shapes', desc: 'Handcrafted custom porcelain veneers' },
    { id: 'straighten', label: 'Straighten crowded or crooked teeth', desc: 'Discreet Invisalign clear aligners' },
    { id: 'implant', label: 'Replace missing tooth or broken crown', desc: 'Permanent titanium & zirconia dental implants' },
    { id: 'health', label: 'Routine wellness & gentle cleaning', desc: 'Ultrasonic hygiene & comprehensive checkup' },
    { id: 'anxiety', label: 'Overcome fear with sedation options', desc: 'Nitrous oxide and calm, unhurried care' }
  ];

  const handleToggleGoal = (label: string) => {
    if (selectedGoals.includes(label)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== label));
    } else {
      setSelectedGoals([...selectedGoals, label]);
    }
  };

  const handleFinish = () => {
    const summary = `Smile Evaluation Goals: ${selectedGoals.join(', ') || 'General consultation'}; Desired Timeline: ${timeline}; Comfort: ${comfortPreference}`;
    onProceedToBooking(summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/65 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 bg-stone-50/80 flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800">
                Interactive Diagnostic Tool · Step {step} of 3
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-950">
                Personal Smile Assessment
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[70vh]">
          {step === 1 && (
            <div>
              <h4 className="text-base font-bold text-stone-900 mb-1">
                What are your primary goals for your smile?
              </h4>
              <p className="text-xs text-stone-500 mb-4">
                Select all that apply to help Dr. Jackson customize your consultation.
              </p>

              <div className="space-y-2.5">
                {goals.map((g) => {
                  const isSelected = selectedGoals.includes(g.label);
                  return (
                    <div
                      key={g.id}
                      onClick={() => handleToggleGoal(g.label)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-amber-800 bg-amber-50/50 shadow-2xs'
                          : 'border-stone-200 hover:border-stone-300 bg-stone-50/30'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-stone-900">
                          {g.label}
                        </div>
                        <div className="text-[11px] text-stone-500">
                          {g.desc}
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ml-3 ${
                          isSelected
                            ? 'bg-amber-800 border-amber-800 text-white'
                            : 'border-stone-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 className="text-base font-bold text-stone-900 mb-1">
                When would you like to achieve your results?
              </h4>
              <p className="text-xs text-stone-500 mb-4">
                We coordinate around your work schedule and important calendar events.
              </p>

              <div className="space-y-2.5">
                {[
                  'As soon as possible / Immediate concern',
                  'Within the next 1 to 2 months',
                  'Preparing for an upcoming wedding or major life event',
                  'Exploring options and gathering transparent pricing'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setTimeline(item)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      timeline === item
                        ? 'border-amber-800 bg-amber-50/60 shadow-2xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-medium text-stone-900">{item}</span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        timeline === item ? 'border-amber-800 bg-amber-800' : 'border-stone-300'
                      }`}
                    >
                      {timeline === item && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h4 className="text-base font-bold text-stone-900 mb-1">
                How can we make your visit most comfortable?
              </h4>
              <p className="text-xs text-stone-500 mb-4">
                At Jackson Dental, comfort is customized to your preferences.
              </p>

              <div className="space-y-2.5">
                {[
                  'Standard gentle care with unhurried explanations',
                  'Nitrous Oxide (Laughing Gas) for mild relaxation',
                  'Oral Conscious Sedation for deeper anxiety relief',
                  'Noise-canceling headphones & private entertainment'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setComfortPreference(item)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      comfortPreference === item
                        ? 'border-amber-800 bg-amber-50/60 shadow-2xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-medium text-stone-900">{item}</span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        comfortPreference === item ? 'border-amber-800 bg-amber-800' : 'border-stone-300'
                      }`}
                    >
                      {comfortPreference === item && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Assessment Summary Box */}
              <div className="mt-6 p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700 space-y-1">
                <div className="font-semibold text-stone-900">Your Consultation Summary:</div>
                <div>Focus: {selectedGoals.length ? selectedGoals.join(', ') : 'Comprehensive Review'}</div>
                <div>Timeline: {timeline}</div>
                <div>Comfort: {comfortPreference}</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-6 py-2.5 text-xs font-semibold text-stone-950 bg-amber-300 hover:bg-amber-200 rounded-lg shadow-xs flex items-center gap-2 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Proceed to Booking with these Preferences</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
