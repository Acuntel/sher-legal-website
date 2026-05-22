export const site = {
  name: "Sher, LLP",
  shortName: "Sher LLP",
  tagline: "We know what we are doing, do what it takes to close a deal.",
  description:
    "A boutique transactional law firm focused on healthcare facility acquisitions, financings, HUD loans, and commercial real estate across the United States.",
  url: "https://sherlegal.com",
  address: {
    line1: "5750 Old Orchard Road",
    line2: "Suite 460",
    city: "Skokie",
    state: "IL",
    zip: "60077",
  },
  phone: "(847) 324-7990",
  phoneTel: "+18473247990",
  email: "info@sherlegal.com",
  hours: "Monday – Friday · 8:30am – 6:00pm",
  founded: 2006,
  social: {
    linkedin: "https://www.linkedin.com/company/sher-llp",
  },
} as const;

export type Attorney = {
  slug: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  phoneTel: string;
  focus: string[];
  bio: string[];
  isPartner?: boolean;
};

export const attorneys: Attorney[] = [
  {
    slug: "stephen-n-sher",
    name: "Stephen N. Sher",
    title: "Founder",
    email: "steve@sherlegal.com",
    phone: "847-324-7979",
    phoneTel: "+18473247979",
    isPartner: true,
    focus: [
      "Healthcare Facility Acquisitions",
      "Financings & HUD Loans",
      "Commercial Real Estate",
    ],
    bio: [
      "Stephen N. Sher founded Sher, LLP to deliver the responsiveness of a boutique with the firepower of a national platform. Over 25+ years of transactional practice, Steve has closed hundreds of acquisitions, sales, financings, leases, and joint ventures for healthcare facility owners and operators nationwide.",
      "Steve represents entrepreneurs, family businesses, REITs, private equity firms, and regional owners on transactions ranging from single-asset closings to large multi-state portfolios. Clients return to Steve because he understands the deal as well as the document — and because he gets to closing.",
    ],
  },
  {
    slug: "kimberly-e-scafuri",
    name: "Kimberly E. Scafuri",
    title: "Partner",
    email: "kimscafuri@sherlegal.com",
    phone: "847-324-7978",
    phoneTel: "+18473247978",
    isPartner: true,
    focus: [
      "CCRC Transactions",
      "Long-Term Care & Assisted Living",
      "Acquisitions & Financing",
    ],
    bio: [
      "Kimberly E. Scafuri is a partner at Sher, LLP whose practice centers on the acquisition and financing of continuing care retirement communities (CCRCs), long-term care facilities, and assisted living portfolios.",
      "Kim is known for moving complex, multi-party closings forward with calm precision — coordinating diligence, regulatory approvals, and lender requirements across stakeholders without losing the deal's economics.",
    ],
  },
  {
    slug: "jaret-s-glazer",
    name: "Jaret S. Glazer",
    title: "Partner",
    email: "jaret@sherlegal.com",
    phone: "847-324-7993",
    phoneTel: "+18473247993",
    isPartner: true,
    focus: [
      "Acquisitions, Leases & Dispositions",
      "Joint Ventures",
      "Healthcare Facility Financing",
    ],
    bio: [
      "Jaret S. Glazer is a partner at Sher, LLP focused on acquisitions, leases, dispositions, joint ventures, and the financing of healthcare facilities across the United States.",
      "Jaret advises owner-operators, capital partners, and institutional investors at every stage of the deal lifecycle — from term sheet through post-closing integration.",
    ],
  },
  {
    slug: "meghan-mcdonald",
    name: "Meghan McDonald",
    title: "Partner",
    email: "meghan@sherlegal.com",
    phone: "847-324-7994",
    phoneTel: "+18473247994",
    isPartner: true,
    focus: [
      "Acquisitions & Dispositions",
      "Healthcare Real Estate Leases",
      "Facility Financing",
    ],
    bio: [
      "Meghan McDonald is a partner at Sher, LLP whose practice covers acquisitions, leases, dispositions, and the financing of healthcare facilities.",
      "Meghan brings a sharp commercial eye to negotiations — anticipating the practical operational issues that come up after closing and drafting around them up front.",
    ],
  },
  {
    slug: "kimberly-r-vazquez",
    name: "Kimberly R. Vazquez",
    title: "Of Counsel",
    email: "kim@sherlegal.com",
    phone: "847-324-7980",
    phoneTel: "+18473247980",
    focus: [
      "HUD Loans",
      "HUD Third Party Agreements",
      "Healthcare Facility Transactions",
    ],
    bio: [
      "Kimberly R. Vazquez serves as Of Counsel at Sher, LLP, with a deep focus on HUD-insured lending — including HUD 232 and 232/223(f) loans for skilled nursing and assisted living facilities.",
      "Kim has navigated hundreds of HUD closings and Third Party Agreements, and is widely respected by lenders and HUD counsel for moving closings to the finish line.",
    ],
  },
  {
    slug: "jack-thursby",
    name: "Jack Thursby",
    title: "Associate Attorney",
    email: "jackt@sherlegal.com",
    phone: "847-324-7995",
    phoneTel: "+18473247995",
    focus: [
      "Healthcare Facility Transactions",
      "Commercial Real Estate Diligence",
      "Closing Support",
    ],
    bio: [
      "Jack Thursby is an associate attorney at Sher, LLP supporting healthcare facility transactions across the firm's practice — including acquisitions, dispositions, leases, and financings.",
      "Jack is the diligence engine on many of the firm's closings, ensuring nothing falls through the cracks between term sheet and funding.",
    ],
  },
  {
    slug: "jacob-b-krivitzkin",
    name: "Jacob B. Krivitzkin",
    title: "Associate Attorney",
    email: "jacob@sherlegal.com",
    phone: "847-324-7982",
    phoneTel: "+18473247982",
    focus: [
      "Senior Housing Commercial Real Estate",
      "Acquisitions & Financing",
    ],
    bio: [
      "Jacob B. Krivitzkin joined Sher, LLP as an associate attorney focused on senior housing and commercial real estate transactions.",
      "Jacob works closely with the firm's partners on acquisitions, financings, and lease negotiations for owner-operators and capital partners.",
    ],
  },
  {
    slug: "brina-a-mcconnell",
    name: "Brina A. McConnell",
    title: "Senior Paralegal",
    email: "brina@sherlegal.com",
    phone: "847-324-7981",
    phoneTel: "+18473247981",
    focus: [
      "HUD Loans",
      "Transactional Practice Support",
      "Closing Coordination",
    ],
    bio: [
      "Brina A. McConnell is the senior paralegal at Sher, LLP, supporting the firm's HUD-insured lending practice and transactional closings.",
      "Brina is the firm's closing quarterback — keeping checklists, signatures, and funding instructions perfectly aligned across all parties.",
    ],
  },
];

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  long: string[];
  bullets: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "healthcare-transactions",
    title: "Healthcare Facility Transactions",
    short:
      "Acquisitions, sales, leases, and joint ventures for skilled nursing, assisted living, CCRCs, and home health businesses.",
    long: [
      "Sher, LLP closes healthcare facility transactions across the country — from single-asset sales to multi-state portfolio acquisitions. We represent entrepreneurs, family operators, REITs, private equity firms, and regional owners on both sides of the table.",
      "Our practice covers the full deal lifecycle: letter of intent, structuring, due diligence, regulatory approvals, purchase agreement negotiation, closing, and post-closing operational handoff.",
    ],
    bullets: [
      "Skilled nursing facility acquisitions and dispositions",
      "Assisted living and memory care portfolios",
      "Continuing Care Retirement Communities (CCRCs)",
      "Home health and hospice businesses",
      "Joint venture and operating agreements",
      "Operations transfer agreements (OTAs)",
    ],
  },
  {
    slug: "commercial-real-estate-financing",
    title: "Commercial Real Estate Financing",
    short:
      "Term, revolving, mezzanine, and bridge financing for healthcare and commercial real estate borrowers and lenders.",
    long: [
      "We represent borrowers and lenders in commercial real estate financings of every shape — term loans, revolvers, mezzanine debt, bridge facilities, and bond transactions.",
      "Our team has the lender-side experience to anticipate what the credit committee will want and the borrower-side empathy to push back where it matters.",
    ],
    bullets: [
      "Term and revolving credit facilities",
      "Mezzanine and preferred equity",
      "Bridge financing",
      "Bond transactions",
      "Intercreditor and subordination agreements",
      "Refinancings and restructurings",
    ],
  },
  {
    slug: "hud-loans",
    title: "HUD-Insured Lending",
    short:
      "HUD 232 and 232/223(f) loans, HUD Third Party Agreements, and the full HUD closing process for skilled nursing and assisted living.",
    long: [
      "Sher, LLP has closed hundreds of HUD-insured loans for healthcare facility owners and operators. We know the HUD playbook cold — Lean queue, OHP requirements, Third Party Agreements, and the operational covenants that follow you for the life of the loan.",
      "We work seamlessly with HUD counsel, lenders, and operators to keep closings moving without surprises at the finish line.",
    ],
    bullets: [
      "HUD 232 new-construction and substantial rehabilitation loans",
      "HUD 232/223(f) refinances and acquisitions",
      "HUD Third Party Agreements",
      "Master Lease and Operations Transfer Agreements",
      "Regulatory Agreement compliance",
      "HUD closing coordination",
    ],
  },
  {
    slug: "joint-ventures-corporate",
    title: "Joint Ventures & Corporate Work",
    short:
      "Joint venture structuring, operating agreements, and general corporate work for healthcare and real estate owners.",
    long: [
      "Most of our clients hold their assets through a web of LLCs, joint ventures, and partnerships. We structure those vehicles, draft and negotiate operating agreements, and handle the corporate housekeeping that institutional capital partners expect.",
    ],
    bullets: [
      "Joint venture structuring",
      "Operating and partnership agreements",
      "Promote and waterfall negotiation",
      "Buy-sell and exit provisions",
      "Entity formation and corporate governance",
      "1031 exchange structuring",
    ],
  },
];

export const stats = [
  { value: "25+", label: "Years of transactional practice" },
  { value: "Hundreds", label: "Of closings nationwide" },
  { value: "50", label: "States served" },
  { value: "Boutique", label: "Senior attorney attention on every deal" },
];
