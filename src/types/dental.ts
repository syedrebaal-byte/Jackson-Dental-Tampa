export interface Treatment {
  id: string;
  category: 'cosmetic' | 'implants' | 'invisalign' | 'general' | 'emergency';
  title: string;
  shortDesc: string;
  fullDesc: string;
  timeline: string;
  benefits: string[];
  idealFor: string[];
  image: string;
  badge?: string;
  priceEstimate?: string;
}

export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  role: string;
  bio: string;
  specialties: string[];
  education: string;
  image?: string;
}

export interface Review {
  id: string;
  patientName: string;
  treatment: string;
  rating: number;
  date: string;
  source: 'Google' | 'Birdeye';
  quote: string;
}

export interface MembershipPlan {
  id: string;
  title: string;
  priceMonthly: number;
  priceAnnual: number;
  audience: string;
  features: string[];
  highlight?: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  reason: string;
  preferredDay: string;
  preferredTime: string;
  isNewPatient: boolean;
  comfortRequests: string[];
  notes?: string;
}
