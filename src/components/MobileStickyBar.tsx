import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 flex items-center justify-between gap-2 shadow-lg">
      <a
        href={`tel:${CLINIC_INFO.phoneClean}`}
        className="flex-1 py-2.5 px-3 rounded-lg bg-stone-100 text-stone-900 font-semibold text-xs flex items-center justify-center gap-1.5 active:bg-stone-200 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-amber-800" />
        <span>Call Office</span>
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-2.5 px-3 rounded-lg bg-stone-950 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:bg-stone-800 transition-colors shadow-xs"
      >
        <Calendar className="w-3.5 h-3.5 text-amber-300" />
        <span>Book Visit</span>
      </button>
    </div>
  );
};
