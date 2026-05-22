export const site = {
  name: "Sher, LLP",
  shortName: "Sher LLP",
  tagline:
    "Senior counsel for healthcare facility transactions, commercial real estate, and HUD-insured finance.",
  description:
    "Sher, LLP is a boutique transactional law firm representing owners, operators, and lenders in the acquisition, sale, lease, and financing of healthcare facilities across the United States.",
  url: "https://sherlegal.com",
  address: {
    line1: "5750 Old Orchard Road",
    line2: "Suite 420",
    city: "Skokie",
    state: "IL",
    zip: "60077",
  },
  phone: "(847) 324-7990",
  phoneTel: "+18473247990",
  email: "steve@sherlegal.com",
  founded: 2006,
  social: {
    linkedin: "https://www.linkedin.com/company/sher-llp-law",
  },
} as const;

export const clientTypes = [
  "Entrepreneurs",
  "Family operators",
  "REITs",
  "Private equity firms",
  "Regional owners",
  "Healthcare lenders",
  "Capital partners",
];

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
  imageSrc: string;
};

export const attorneys: Attorney[] = [
  {
    slug: "stephen-n-sher",
    name: "Stephen N. Sher",
    title: "Founder",
    email: "steve@sherlegal.com",
    phone: "847.324.7979",
    phoneTel: "+18473247979",
    isPartner: true,
    focus: [
      "Healthcare Facility Acquisitions",
      "HUD-Insured Lending",
      "Commercial Real Estate",
    ],
    bio: [
      "Stephen N. Sher founded Sher, LLP after more than two decades closing transactional matters for healthcare facility owners and lenders. His practice covers acquisitions, sales, leases, joint ventures, and the financing of skilled nursing, assisted living, and continuing care communities across the country.",
      "Steve represents entrepreneurs, family businesses, REITs, private equity firms, and regional owners on transactions ranging from single facility closings to multi-state portfolios.",
    ],
    imageSrc: "/people/stephen-n-sher.jpg",
  },
  {
    slug: "kimberly-e-scafuri",
    name: "Kimberly E. Scafuri",
    title: "Partner",
    email: "kimscafuri@sherlegal.com",
    phone: "847.324.7978",
    phoneTel: "+18473247978",
    isPartner: true,
    focus: [
      "CCRC Transactions",
      "Long-Term Care & Assisted Living",
      "Acquisitions & Financing",
    ],
    bio: [
      "Kimberly E. Scafuri is a partner at Sher, LLP whose practice focuses on the acquisition and financing of continuing care retirement communities, long-term care facilities, and assisted living portfolios.",
      "Kim coordinates complex multi-party closings, including the diligence, regulatory approvals, and lender requirements that come with them.",
    ],
    imageSrc: "/people/kimberly-e-scafuri.jpg",
  },
  {
    slug: "jaret-s-glazer",
    name: "Jaret S. Glazer",
    title: "Partner",
    email: "jaret@sherlegal.com",
    phone: "847.324.7993",
    phoneTel: "+18473247993",
    isPartner: true,
    focus: [
      "Acquisitions, Leases & Dispositions",
      "Joint Ventures",
      "Facility Financing",
    ],
    bio: [
      "Jaret S. Glazer is a partner at Sher, LLP whose practice covers acquisitions, leases, dispositions, joint ventures, and the financing of healthcare facilities across the United States.",
      "Jaret advises owner-operators, capital partners, and institutional investors at every stage of the transaction, from term sheet through post-closing.",
    ],
    imageSrc: "/people/jaret-s-glazer.jpg",
  },
  {
    slug: "meghan-mcdonald",
    name: "Meghan McDonald",
    title: "Partner",
    email: "meghan@sherlegal.com",
    phone: "847.324.7994",
    phoneTel: "+18473247994",
    isPartner: true,
    focus: [
      "Acquisitions & Dispositions",
      "Healthcare Real Estate Leases",
      "Facility Financing",
    ],
    bio: [
      "Meghan McDonald is a partner at Sher, LLP focused on acquisitions, leases, dispositions, and the financing of healthcare facilities.",
      "Meghan brings a commercial perspective to her drafting, anticipating the operational issues that arise after closing and addressing them in the documents.",
    ],
    imageSrc: "/people/meghan-mcdonald.jpg",
  },
  {
    slug: "kimberly-r-vazquez",
    name: "Kimberly R. Vazquez",
    title: "Of Counsel",
    email: "kim@sherlegal.com",
    phone: "847.324.7980",
    phoneTel: "+18473247980",
    focus: [
      "HUD Loans",
      "HUD Third Party Agreements",
      "Healthcare Facility Transactions",
    ],
    bio: [
      "Kimberly R. Vazquez serves as Of Counsel at Sher, LLP, with a deep focus on HUD-insured lending, including HUD 232 and 232/223(f) loans for skilled nursing and assisted living facilities.",
      "Kim has navigated hundreds of HUD closings and Third Party Agreements and is widely respected by lenders and HUD counsel for moving closings to the finish line.",
    ],
    imageSrc: "/people/kimberly-r-vazquez.jpg",
  },
  {
    slug: "jack-thursby",
    name: "Jack Thursby",
    title: "Associate Attorney",
    email: "jackt@sherlegal.com",
    phone: "847.324.7995",
    phoneTel: "+18473247995",
    focus: [
      "Healthcare Facility Transactions",
      "Commercial Real Estate Diligence",
      "Closing Support",
    ],
    bio: [
      "Jack Thursby is an associate attorney at Sher, LLP supporting healthcare facility transactions across the firm's practice, including acquisitions, dispositions, leases, and financings.",
      "Jack manages diligence on many of the firm's closings.",
    ],
    imageSrc: "/people/jack-thursby.jpg",
  },
  {
    slug: "jacob-b-krivitzkin",
    name: "Jacob B. Krivitzkin",
    title: "Associate Attorney",
    email: "jacob@sherlegal.com",
    phone: "847.324.7982",
    phoneTel: "+18473247982",
    focus: [
      "Senior Housing Commercial Real Estate",
      "Acquisitions & Financing",
    ],
    bio: [
      "Jacob B. Krivitzkin is an associate attorney at Sher, LLP focused on senior housing and commercial real estate transactions.",
      "Jacob works closely with the firm's partners on acquisitions, financings, and lease negotiations.",
    ],
    imageSrc: "/people/jacob-b-krivitzkin.jpg",
  },
  {
    slug: "brina-a-mcconnell",
    name: "Brina A. McConnell",
    title: "Senior Paralegal",
    email: "brina@sherlegal.com",
    phone: "847.324.7981",
    phoneTel: "+18473247981",
    focus: [
      "HUD Loans",
      "Transactional Practice Support",
      "Closing Coordination",
    ],
    bio: [
      "Brina A. McConnell is the senior paralegal at Sher, LLP, supporting the firm's HUD-insured lending practice and transactional closings.",
      "Brina coordinates checklists, signatures, and funding instructions across the parties on every closing.",
    ],
    imageSrc: "/people/brina-a-mcconnell.jpg",
  },
];

export type PracticeArea = {
  slug: string;
  number: string;
  title: string;
  short: string;
  long: string[];
  bullets: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "healthcare-transactions",
    number: "01",
    title: "Healthcare Facility Transactions",
    short:
      "Acquisitions, sales, leases, and joint ventures for skilled nursing, assisted living, CCRCs, and home health businesses.",
    long: [
      "Sher, LLP closes healthcare facility transactions across the country. We represent entrepreneurs, family operators, REITs, private equity firms, and regional owners on both sides of the table.",
      "Our practice covers the full deal lifecycle: letter of intent, structuring, due diligence, regulatory approvals, purchase agreement negotiation, closing, and post-closing operational handoff.",
    ],
    bullets: [
      "Skilled nursing facility acquisitions and dispositions",
      "Assisted living and memory care portfolios",
      "Continuing Care Retirement Communities (CCRCs)",
      "Home health and hospice businesses",
      "Joint venture and operating agreements",
      "Operations transfer agreements",
    ],
  },
  {
    slug: "commercial-real-estate-financing",
    number: "02",
    title: "Commercial Real Estate Financing",
    short:
      "Term, revolving, mezzanine, and bridge financing for healthcare and commercial real estate borrowers and lenders.",
    long: [
      "We represent borrowers and lenders in commercial real estate financings of every shape: term loans, revolvers, mezzanine debt, bridge facilities, and bond transactions.",
      "The team has the lender-side experience to anticipate what the credit committee will want and the borrower-side experience to push back where it matters.",
    ],
    bullets: [
      "Term and revolving credit facilities",
      "Mezzanine and preferred equity",
      "Bridge financing",
      "Bond transactions",
      "Local counsel opinions",
      "Intercreditor and subordination agreements",
      "Refinancings and restructurings",
    ],
  },
  {
    slug: "regulatory-licensure",
    number: "03",
    title: "Healthcare Regulatory & Licensure",
    short:
      "Changes of ownership, UPL/IGT leases, management agreements, and the regulatory layer that surrounds every healthcare facility transaction.",
    long: [
      "Healthcare facility transactions live or die on the regulatory layer that surrounds them. We handle changes of ownership for skilled nursing facilities, structure UPL and IGT leases, and draft management agreements that satisfy operators, capital partners, and state regulators.",
    ],
    bullets: [
      "Skilled nursing facility changes of ownership (CHOW)",
      "UPL and IGT leases",
      "Management agreements",
      "Operations transfer agreements",
      "Operator licensure transitions",
      "Regulatory diligence and structuring",
    ],
  },
  {
    slug: "hud-loans",
    number: "04",
    title: "HUD-Insured Lending",
    short:
      "HUD 232 and 232/223(f) loans, HUD Third Party Agreements, and the full HUD closing process for skilled nursing and assisted living facilities.",
    long: [
      "Sher, LLP has closed hundreds of HUD-insured loans for healthcare facility owners and operators. The team works seamlessly with HUD counsel, lenders, and operators to keep closings moving.",
      "We handle the Lean queue, OHP requirements, Third Party Agreements, and the operational covenants that follow the loan for its life.",
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
    number: "05",
    title: "Joint Ventures & Corporate",
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
