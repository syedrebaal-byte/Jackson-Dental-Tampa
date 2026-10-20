import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, MapPin, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';
import { AppointmentFormData } from '../types/dental';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialReason?: string;
  initialNotes?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialReason = 'New Patient Welcome Experience ($199)',
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    reason: initialReason,
    preferredDay: 'Monday',
    preferredTime: 'Morning (8:30am – 12:00pm)',
    isNewPatient: true,
    comfortRequests: [],
    notes: initialNotes
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (initialReason) {
      setFormData((prev) => ({ ...prev, reason: initialReason }));
    }
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialReason, initialNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMsg('Please provide a valid contact telephone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const toggleComfort = (req: string) => {
    if (formData.comfortRequests.includes(req)) {
      setFormData({
        ...formData,
        comfortRequests: formData.comfortRequests.filter((c) => c !== req)
      });
    } else {
      setFormData({
        ...formData,
        comfortRequests: [...formData.comfortRequests, req]
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/65 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-200 bg-stone-50/80 flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-200 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800">
                Jackson Dental · Suite 300
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-950">
                Request an Appointment
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh]">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-serif font-bold text-stone-950">
                Appointment Request Received
              </h4>

              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. Our concierge team at Bank of America Plaza has received your request for <strong>{formData.reason}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 max-w-md mx-auto text-left space-y-1.5">
                <div className="flex items-center justify-between border-b border-stone-200/60 pb-1.5">
                  <span className="text-stone-500">Booking Reference:</span>
                  <span className="font-mono font-semibold text-stone-900">JD-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Target Timeframe:</span>
                  <span className="font-semibold text-stone-900">{formData.preferredDay} · {formData.preferredTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Location:</span>
                  <span className="font-semibold text-stone-900">101 E Kennedy Blvd, Suite 300</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Parking:</span>
                  <span className="text-emerald-700 font-semibold">Validated at check-in</span>
                </div>
              </div>

              <p className="text-xs text-stone-500">
                A treatment coordinator will reach out to <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to confirm your exact appointment calendar slot.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-stone-950 hover:bg-stone-800 rounded-lg shadow-xs transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-sm text-stone-700">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                  Select Reason for Visit
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 text-xs sm:text-sm bg-white"
                >
                  <option value="New Patient Welcome Experience ($199)">New Patient Welcome Experience ($199 Special)</option>
                  <option value="Cosmetic Porcelain Veneers Consultation">Cosmetic Porcelain Veneers Consultation</option>
                  <option value="Dental Implants & Restorative">Dental Implants & Restorative Consultation</option>
                  <option value="Invisalign Clear Aligners Preview">Invisalign® Clear Aligners 3D Preview</option>
                  <option value="Same-Day Urgent / Emergency Dental Care">Same-Day Urgent / Emergency Tooth Pain</option>
                  <option value="Routine Preventative Cleaning & Checkup">Routine Preventative Cleaning & Checkup</option>
                  <option value="Jackson Dental Wellness Membership Inquiry">Jackson Dental Wellness Membership Inquiry</option>
                </select>
              </div>

              {/* Patient Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(813) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 text-xs sm:text-sm"
                />
              </div>

              {/* Timing Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                    Preferred Day
                  </label>
                  <select
                    value={formData.preferredDay}
                    onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 text-xs sm:text-sm bg-white"
                  >
                    <option value="Monday">Monday (9am – 6pm)</option>
                    <option value="Tuesday">Tuesday (8:30am – 4:30pm)</option>
                    <option value="Wednesday">Wednesday (8:30am – 4:30pm)</option>
                    <option value="Thursday">Thursday (8:30am – 4:00pm)</option>
                    <option value="First Available Urgent Slot">First Available Urgent Slot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                    Preferred Time of Day
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 text-xs sm:text-sm bg-white"
                  >
                    <option value="Morning (8:30am – 12:00pm)">Morning (8:30am – 12:00pm)</option>
                    <option value="Afternoon (12:00pm – 4:00pm)">Afternoon (12:00pm – 4:00pm)</option>
                    <option value="Evening (Monday 4:00pm – 6:00pm)">Late Evening (Monday 4:00pm – 6:00pm)</option>
                  </select>
                </div>
              </div>

              {/* Comfort Preferences */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Optional Patient Comfort Preferences
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Nitrous Oxide Sedation', 'Noise-Canceling Bose Audio', 'Warm Scented Towel', 'Unhurried Step-by-Step Guidance'].map((item) => {
                    const isChecked = formData.comfortRequests.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleComfort(item)}
                        className={`px-3 py-1.5 rounded-lg border transition-colors ${
                          isChecked
                            ? 'bg-amber-100 border-amber-300 text-amber-950 font-semibold'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                  Clinical Notes or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about previous dental experiences, specific tooth concerns, or timeline goals..."
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 text-xs sm:text-sm"
                />
              </div>

              {/* Parking validation notice */}
              <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-stone-600 text-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Complimentary parking validation included for Bank of America Plaza garage & valet.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-lg bg-stone-950 text-white font-semibold text-xs sm:text-sm hover:bg-stone-800 active:scale-99 transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Submit Appointment Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
