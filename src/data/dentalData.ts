import { Treatment, Doctor, Review, MembershipPlan } from '../types/dental';

export const CLINIC_INFO = {
  name: 'Jackson Dental',
  tagline: 'Modern Comprehensive & Cosmetic Dentistry in Downtown Tampa',
  founder: 'Dr. Geoffrey Jackson, DMD',
  foundedYear: 2013,
  phone: '(813) 701-3141',
  phoneClean: '8137013141',
  address: {
    line1: '101 E Kennedy Blvd, Suite 300',
    building: 'Bank of America Plaza (3rd Floor)',
    city: 'Tampa',
    state: 'FL',
    zip: '33602',
    parkingNotice: 'Complimentary parking validation available for the Bank of America Plaza garage and valet service.'
  },
  rating: {
    score: 4.9,
    totalCount: 1382,
    source: 'Google & Birdeye Verified Reviews'
  },
  hours: [
    { day: 'Monday', hours: '9:00 AM – 6:00 PM', note: 'Evening appointments available' },
    { day: 'Tuesday', hours: '8:30 AM – 4:30 PM', note: 'Early morning slots' },
    { day: 'Wednesday', hours: '8:30 AM – 4:30 PM', note: 'Full clinical schedule' },
    { day: 'Thursday', hours: '8:30 AM – 4:00 PM', note: 'Cosmetic & surgical sessions' },
    { day: 'Friday', hours: 'By Appointment / Emergency Triage', note: 'On-call emergency response' },
    { day: 'Saturday – Sunday', hours: 'Closed', note: 'Emergency line active' }
  ],
  amenities: [
    { title: 'Digital 3D Intraoral Scanning', desc: 'No gooey impression trays or gagging—instant photorealistic digital dental maps.' },
    { title: 'Low-Radiation 3D CBCT Imaging', desc: 'Ultra-low radiation cone beam 3D tomography for sub-millimeter implant precision.' },
    { title: 'Anxiety-Free Conscious Sedation', desc: 'Nitrous oxide and gentle oral conscious sedation for relaxed, pain-free appointments.' },
    { title: 'Curated Operatory Comfort', desc: 'Noise-canceling Bose headphones, overhead streaming television, and warm scented towelettes.' },
    { title: 'Bank of America Plaza Valet & Parking', desc: 'Validated parking directly under the tower with seamless elevator access to Suite 300.' },
    { title: 'Transparent Upfront Estimates', desc: 'Zero surprise bills with clear written treatment estimates before any procedure begins.' }
  ]
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'porcelain-veneers',
    category: 'cosmetic',
    title: 'Custom Porcelain Veneers',
    badge: 'Signature Specialty',
    shortDesc: 'Ultra-thin, master ceramist porcelain handcrafted to correct discoloration, gaps, chips, and tooth shape.',
    fullDesc: 'At Jackson Dental, our porcelain veneers are custom designed by Dr. Geoffrey Jackson and master ceramic laboratories to blend seamlessly with your facial contours, lip dynamics, and skin tone. We utilize digital mockups so you can test-drive your smile before final bonding.',
    timeline: '2 to 3 appointments over 2–3 weeks',
    benefits: [
      'Stain-resistant high-translucency feldspathic or lithium disilicate porcelain',
      'Minimal-prep conservative enamel preservation techniques',
      'Digital Smile Design preview prior to permanent placement',
      'Corrects wear, micro-fractures, deep intrinsic stains, and uneven spacing'
    ],
    idealFor: [
      'Patients with stubborn tetracycline or intrinsic stains resistant to whitening',
      'Individuals with chipped, uneven, or worn enamel from grinding',
      'Patients seeking a natural, symmetrical, high-confidence aesthetic transformation'
    ],
    image: '/assets/images/smile-makeover.jpg'
  },
  {
    id: 'dental-implants',
    category: 'implants',
    title: 'Individual & Full-Arch Dental Implants',
    badge: 'Permanent Restoration',
    shortDesc: 'State-of-the-art titanium and zirconia implant foundations that replace missing teeth with permanent strength and beauty.',
    fullDesc: 'Whether you require a single tooth replacement or a life-changing All-on-4 / Esteem Full Arch restoration, Dr. Jackson leverages 3D Cone Beam computed tomography (CBCT) and computer-guided surgical templates for microscopic precision, minimal recovery, and lasting bone health.',
    timeline: 'Surgical placement with immediate temporary crown, followed by full integration',
    benefits: [
      'Preserves facial jawbone density and prevents adjacent tooth shifting',
      'Computer-guided surgical placement for optimal aesthetic emergence profiles',
      'Custom screw-retained zirconia crowns that look and chew like biological teeth',
      'Lifetime durability with standard regular hygiene care'
    ],
    idealFor: [
      'Missing one or multiple teeth due to trauma, decay, or genetics',
      'Tired of loose, uncomfortable removable partials or dentures',
      'Seeking permanent bite restoration with no dietary restrictions'
    ],
    image: '/assets/images/technology.jpg'
  },
  {
    id: 'invisalign',
    category: 'invisalign',
    title: 'Invisalign® Clear Aligners',
    badge: 'Premier Provider',
    shortDesc: 'Discreet, removable clear orthodontic aligners custom-engineered with digital iTero 3D motion simulations.',
    fullDesc: 'Straighten your smile discreetly without metal wires or brackets. Dr. Jackson is an experienced Invisalign Premier Provider in Downtown Tampa, treating mild to complex malocclusions, crowding, overbites, and relapse for busy working professionals and adults.',
    timeline: 'Average 6 to 14 months depending on alignment goals',
    benefits: [
      'Virtually invisible SmartTrack® medical-grade medical polyurethane',
      'Removable for client meetings, fine dining, and effortless flossing',
      'Digital 3D outcome preview at your initial consultation before starting',
      'Fewer office visits with expedited progress checks'
    ],
    idealFor: [
      'Downtown Tampa professionals wanting discreet alignment without brackets',
      'Adults experiencing dental crowding, spacing, or post-braces shifting',
      'Patients preparing for cosmetic veneer symmetry or restorative balance'
    ],
    image: '/assets/images/smile-makeover.jpg'
  },
  {
    id: 'teeth-whitening',
    category: 'cosmetic',
    title: 'Professional In-Office & Take-Home Whitening',
    shortDesc: 'Medical-grade whitening solutions that safely brighten teeth by up to 8 shades while minimizing sensitivity.',
    fullDesc: 'Over-the-counter strips often cause intense gum sensitivity or uneven bleaching. Our clinical in-office whitening and custom-molded lab trays utilize buffered desensitizing agents to deliver dramatic, uniform results in just 60 minutes.',
    timeline: 'Single 60-minute in-office visit or 10-day custom tray kit',
    benefits: [
      'Up to 8 shades whiter in one relaxed clinical session',
      'Formulated with potassium nitrate and fluoride to prevent tooth sensitivity',
      'Custom-sculpted trays prevent bleach from contacting delicate gingival tissue',
      'Safe for natural enamel with long-lasting radiant results'
    ],
    idealFor: [
      'Patients preparing for weddings, speaking engagements, or photography',
      'Removal of stubborn coffee, red wine, tea, and tobacco discoloration'
    ],
    image: '/assets/images/cosmetic_smile_craft_1792478183083.jpg'
  },
  {
    id: 'preventative-hygiene',
    category: 'general',
    title: 'Comprehensive Exams & Ultrasonic Hygiene',
    shortDesc: 'Gentle, thorough preventative wellness appointments with oral cancer screenings, digital imaging, and periodontal care.',
    fullDesc: 'Preventative care at Jackson Dental is designed to be gentle, relaxing, and educational. Using gentle piezoelectric ultrasonic scaling, low-radiation digital x-rays, and intraoral cameras, we detect micro-cavities and gum inflammation years before they cause discomfort.',
    timeline: 'Standard 50–60 minute semi-annual wellness visit',
    benefits: [
      'Painless ultrasonic scaling with warm water irrigation',
      'Comprehensive oral cancer screening and digital periodontal charting',
      'Personalized oral wellness coaching and saliva balance evaluation',
      'Relaxed operatory atmosphere with noise-canceling headphones'
    ],
    idealFor: [
      'Adults and families seeking a trusted dental home in Downtown Tampa',
      'Patients with dental anxiety seeking gentle, empathetic hygienists',
      'New patients taking advantage of our $199 Welcome Special'
    ],
    image: '/assets/images/hero.jpg'
  },
  {
    id: 'emergency-dentistry',
    category: 'emergency',
    title: 'Same-Day Emergency Dental Care',
    badge: 'Immediate Relief',
    shortDesc: 'Priority same-day appointments for acute toothaches, fractured crowns, broken teeth, or dental trauma in Downtown Tampa.',
    fullDesc: 'A dental emergency can disrupt your workday and cause severe discomfort. Jackson Dental reserves dedicated daily emergency slots for Downtown Tampa workers and residents. We provide immediate pain management, diagnosis, and same-day stabilization.',
    timeline: 'Same-day evaluation and immediate pain relief',
    benefits: [
      'Same-day clinical appointments for urgent cases',
      'Gentle local anesthesia and sedation options for immediate comfort',
      'Advanced digital diagnostic x-rays to pinpoint root cause in minutes',
      'Convenient parking in Bank of America Plaza with direct elevator access'
    ],
    idealFor: [
      'Severe, throbbing toothaches or sudden dental swelling',
      'Broken, chipped, or knocked-out permanent teeth',
      'Dislodged crowns, lost fillings, or fractured restorations'
    ],
    image: '/assets/images/technology.jpg'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-geoffrey-jackson',
    name: 'Dr. Geoffrey Jackson',
    credentials: 'DMD',
    role: 'Founder & Clinical Director',
    education: 'Doctor of Dental Medicine, Advanced Cosmetic & Implantology Training',
    bio: 'Dr. Geoffrey Jackson founded Jackson Dental in 2013 with a clear mission: to bring uncompromised clinical excellence and boutique, human-centered hospitality to Downtown Tampa. Known for his meticulous eye for aesthetic harmony and gentle touch, Dr. Jackson combines high-resolution digital dentistry with personalized treatment planning. When not in the operatory, he is dedicated to ongoing postgraduate training in complex smile design, full-mouth reconstruction, and dental implantology.',
    specialties: ['Porcelain Smile Design', 'Complex Implant Restoration', 'Invisalign Premier Provider', 'Biomimetic Restorative Dentistry'],
    image: '/assets/images/dr-jackson.jpg'
  },
  {
    id: 'dr-sami-sreis',
    name: 'Dr. Sami Sreis',
    credentials: 'DMD',
    role: 'Associate Dentist',
    education: 'Doctor of Dental Medicine, Comprehensive Restorative Fellow',
    bio: 'Dr. Sami Sreis is committed to delivering gentle, precise care with a calm and reassuring chairside demeanor. He focuses on comprehensive preventative health, minimally invasive tooth restoration, and patient education that empowers individuals to take charge of their dental longevity.',
    specialties: ['Minimally Invasive Restorations', 'Periodontal Therapy', 'Preventative Care', 'Patient Comfort'],
    image: '/assets/images/dr_geoffrey_jackson_1792478181888.jpg'
  },
  {
    id: 'dr-kevin-fortier',
    name: 'Dr. Kevin Fortier',
    credentials: 'DMD',
    role: 'Associate Dentist',
    education: 'Doctor of Dental Medicine, Advanced Endodontic & Restorative Training',
    bio: 'Dr. Kevin Fortier excels in restorative engineering and rapid pain relief. His clinical focus includes same-day emergency triage, root canal therapies, and porcelain onlays that conserve natural tooth structure.',
    specialties: ['Endodontic Pain Relief', 'Emergency Dental Care', 'Ceramic Onlays', 'Crowns & Bridges']
  },
  {
    id: 'dr-sara-sheffield',
    name: 'Dr. Sara A. Sheffield',
    credentials: 'DMD',
    role: 'Associate Dentist',
    education: 'Doctor of Dental Medicine, Cosmetic & Preventative Focus',
    bio: 'Dr. Sara Sheffield brings artistic precision and an empathetic touch to routine care and smile makeovers. She specializes in helping anxious patients feel entirely at ease while achieving optimal aesthetic and functional results.',
    specialties: ['Cosmetic Bonding', 'Sedation Dentistry', 'Anxiety-Free Care', 'Pediatric & Adult Hygiene']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    patientName: 'Amanda L.',
    treatment: 'Porcelain Veneers & Smile Makeover',
    rating: 5,
    date: '3 weeks ago',
    source: 'Google',
    quote: 'Dr. Jackson is a true artist. I had spent years hiding my smile in photos because of chipped front teeth and old resin bonding. From the 3D digital preview to the final seating, the experience was flawless. The Bank of America Plaza office feels like a luxury spa, and my veneers look so natural people just tell me I have a beautiful smile.'
  },
  {
    id: 'rev-2',
    patientName: 'Marcus T.',
    treatment: 'Dental Implant & Crown',
    rating: 5,
    date: '1 month ago',
    source: 'Google',
    quote: 'I cracked a molar on a Tuesday morning and Jackson Dental saw me the very same day. Dr. Jackson explained my implant options without any high-pressure sales tactics. The 3D scan took literally seconds, no disgusting paste. The implant was placed smoothly and healed with zero complications. Best dental practice in Tampa hands down.'
  },
  {
    id: 'rev-3',
    patientName: 'Elena R.',
    treatment: 'Invisalign & Teeth Whitening',
    rating: 5,
    date: '2 months ago',
    source: 'Birdeye',
    quote: 'Working in downtown Tampa, having Jackson Dental right in Bank of America Plaza with validated parking is a game changer. I finished my Invisalign in 8 months, followed by their in-office whitening. The team is warm, punctual, and respects your time. Couldn’t be happier with the results.'
  },
  {
    id: 'rev-4',
    patientName: 'David K.',
    treatment: 'New Patient $199 Special & Gentle Cleaning',
    rating: 5,
    date: '1 month ago',
    source: 'Google',
    quote: 'I had avoided the dentist for nearly 4 years due to bad past experiences. The hygienist was so gentle and used the ultrasonic cleaner that caused zero pain. They even gave me noise-canceling headphones to listen to Spotify during the exam. I finally have a dental team I actually look forward to seeing.'
  },
  {
    id: 'rev-5',
    patientName: 'Sarah M.',
    treatment: 'Emergency Care & Broken Tooth',
    rating: 5,
    date: '2 months ago',
    source: 'Google',
    quote: 'Professional, calm, and extraordinarily capable. They fit me in during lunch break for an urgent repair. Validated valet parking in the building made it seamless. Dr. Jackson saved my tooth and was transparent about every step and cost before starting.'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'welcome-special',
    title: 'New Patient Welcome Experience',
    priceMonthly: 0,
    priceAnnual: 199,
    audience: 'First-time patients seeking comprehensive evaluation & care',
    highlight: true,
    features: [
      'Comprehensive doctor examination with Dr. Jackson or team',
      'Complete low-radiation digital bitewing & panoramic X-rays',
      'Healthy preventative dental prophylaxis cleaning (in absence of periodontal disease)',
      'Digital oral cancer and bite occlusion screening',
      'Personalized written treatment roadmap and insurance optimization plan'
    ]
  },
  {
    id: 'adult-wellness',
    title: 'Jackson Wellness Membership',
    priceMonthly: 39,
    priceAnnual: 429,
    audience: 'Uninsured professionals, entrepreneurs & retirees',
    features: [
      '2 Comprehensive doctor exams per year',
      '2 Regular preventative dental cleanings per year',
      'All routine digital checkup X-rays included at zero copay',
      '1 Emergency pain evaluation and diagnostic x-ray per year',
      '15% to 20% savings on all cosmetic, restorative, and periodontal procedures',
      'No waiting periods, no maximum caps, no insurance pre-authorization delays'
    ]
  },
  {
    id: 'periodontal-wellness',
    title: 'Periodontal Maintenance Plan',
    priceMonthly: 59,
    priceAnnual: 649,
    audience: 'Patients managing active gingival or periodontal health',
    features: [
      '3 to 4 Specialized periodontal maintenance cleanings per year',
      '2 Periodic doctor clinical examinations',
      'Annual digital periodontal probing & pocket depth tracking',
      'All diagnostic bitewing & periapical x-rays included',
      '20% savings on deep scaling, root planing, and site-specific antimicrobial treatments',
      'Immediate enrollment with no pre-existing condition exclusions'
    ]
  }
];

export const FAQS = [
  {
    q: 'Where do I park when visiting Jackson Dental at Bank of America Plaza?',
    a: 'We are located on the 3rd floor (Suite 300) of Bank of America Plaza at 101 E Kennedy Blvd. Patients can utilize the dedicated building parking garage or the convenient valet service at the main tower entrance. Bring your parking ticket to our front reception desk for complimentary validation.'
  },
  {
    q: 'Do you accept dental insurance?',
    a: 'Yes, we work with a wide range of PPO dental insurance providers. Our financial coordinators submit claims directly on your behalf to maximize your policy benefits. For patients without insurance, our $199 New Patient Special and in-house Jackson Wellness Membership provide transparent, predictable savings.'
  },
  {
    q: 'How long does a porcelain veneer consultation take?',
    a: 'Your initial cosmetic consultation lasts approximately 45 to 60 minutes. Dr. Jackson takes high-resolution digital photos, performs an intraoral 3D scan, and discusses your facial symmetry, shade preferences, and smile goals. You will leave with a clear timeline, digital preview concept, and exact fee breakdown.'
  },
  {
    q: 'What options are available if I experience dental anxiety?',
    a: 'Patient comfort is central to our philosophy. We offer nitrous oxide (laughing gas), gentle oral conscious sedation, noise-canceling headphones, ceiling entertainment monitors, and warm scented towelettes. We never rush and pause whenever you need a breather.'
  },
  {
    q: 'How quickly can I be seen for a dental emergency in Downtown Tampa?',
    a: 'We reserve same-day emergency appointments every Monday through Thursday. If you are experiencing acute pain, a broken tooth, or lost restoration, call our direct line at (813) 701-3141 immediately for priority triage.'
  }
];
