import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TechnologyComfortSection } from './components/TechnologyComfortSection';
import { MeetTeamSection } from './components/MeetTeamSection';
import { ReviewsSection } from './components/ReviewsSection';
import { MembershipPricingSection } from './components/MembershipPricingSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { SmileAssessmentModal } from './components/SmileAssessmentModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSmileAssessmentOpen, setIsSmileAssessmentOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string>('New Patient Welcome Experience ($199)');
  const [bookingNotes, setBookingNotes] = useState<string>('');

  const handleOpenBooking = (reason?: string, notes?: string) => {
    if (reason) setSelectedReason(reason);
    if (notes) setBookingNotes(notes);
    setIsBookingOpen(true);
  };

  const handleSelectTreatmentForBooking = (treatmentTitle: string) => {
    setSelectedReason(`${treatmentTitle} Consultation`);
    setBookingNotes(`Inquiring about ${treatmentTitle} at Jackson Dental Downtown Tampa.`);
    setIsBookingOpen(true);
  };

  const handleSelectSpecialForBooking = (specialTitle: string) => {
    setSelectedReason(specialTitle);
    setBookingNotes(`Requesting enrollment in: ${specialTitle}.`);
    setIsBookingOpen(true);
  };

  const handleSmileAssessmentProceed = (summary: string) => {
    setSelectedReason('Custom Smile Design Consultation');
    setBookingNotes(summary);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-950 pb-14 sm:pb-0">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenSmileAssessment={() => setIsSmileAssessmentOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenSmileAssessment={() => setIsSmileAssessmentOpen(true)}
        />

        {/* Clinical Services & Interactive 3D Anatomy Explorer */}
        <ServicesSection
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        {/* Technology & Boutique Comfort */}
        <TechnologyComfortSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Meet Dr. Geoffrey Jackson & Team */}
        <MeetTeamSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Verified Patient Reviews (Google & Birdeye) */}
        <ReviewsSection />

        {/* Membership Plans & $199 Welcome Special */}
        <MembershipPricingSection
          onOpenBooking={() => handleOpenBooking()}
          onSelectSpecialForBooking={handleSelectSpecialForBooking}
        />

        {/* Location, Parking Validation & FAQs */}
        <LocationHoursSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Quiet Professional Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialReason={selectedReason}
        initialNotes={bookingNotes}
      />

      {/* Interactive Smile Assessment Diagnostic Tool */}
      <SmileAssessmentModal
        isOpen={isSmileAssessmentOpen}
        onClose={() => setIsSmileAssessmentOpen(false)}
        onProceedToBooking={handleSmileAssessmentProceed}
      />
    </div>
  );
}
