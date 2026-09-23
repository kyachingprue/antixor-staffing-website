import {
  ShieldCheck,
  Zap,
  Globe2,
  HeartHandshake,
  Headset,
  Users,
  Building2,
  Search,
  Laptop2,
  HeartPulse,
  Factory,
  Wifi,
  ScissorsSquare,
  BadgeCheck,
  Clock,
  Sparkles,
} from 'lucide-react'

export const img = {
  hero: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
  about: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  opportunities: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop',
  cta: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  officeWide: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
  contact: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop',
  jobSeekers: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  employers: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  blog1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop',
  blog2: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=900&auto=format&fit=crop',
  blog3: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=900&auto=format&fit=crop',
  blog4: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900&auto=format&fit=crop',
  blog5: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop',
  blog6: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop',
}

export const trustBadges = [
  { icon: ShieldCheck, label: 'Trusted & Verified' },
  { icon: Zap, label: 'Fast & Easy Hiring Process' },
  { icon: Globe2, label: 'Global Talent Pool' },
  { icon: HeartHandshake, label: 'Long Term Partnership' },
  { icon: Headset, label: '24/7 Support' },
]

export const services = [
  { icon: Users, title: 'Permanent Staffing', desc: 'Build your core team with skilled and experienced professionals.' },
  { icon: Clock, title: 'Temporary Staffing', desc: 'Get the right talent for short-term and project-based needs.' },
  { icon: Search, title: 'Executive Search', desc: 'Find top-level leaders to drive your business forward.' },
  { icon: Laptop2, title: 'IT & Tech Recruitment', desc: 'Hire specialized tech talent for your digital transformation.' },
  { icon: HeartPulse, title: 'Healthcare Staffing', desc: 'Skilled healthcare professionals for better patient care.' },
  { icon: Factory, title: 'Industrial Staffing', desc: 'Reliable workforce for manufacturing and industrial sectors.' },
  { icon: Wifi, title: 'Remote Hiring', desc: 'Access global talent from anywhere in the world.' },
  { icon: ScissorsSquare, title: 'HR Consulting', desc: 'Strategic HR solutions for long-term success.' },
]

export const jobs = [
  {
    id: 1,
    icon: Laptop2,
    title: 'Senior Software Engineer',
    company: 'TechNova Solutions',
    location: 'New York, USA',
    type: 'Full Time',
    workMode: 'On-site',
    category: 'Software Development',
    salary: '$120,000 - $150,000 / year',
    experience: '4-6 Years',
    education: "Bachelor's Degree in Computer Science",
    vacancies: 2,
    postedAt: '2 days ago',
    deadline: 'October 15, 2026',
    description:
      'We are looking for a Senior Software Engineer to design, develop, and maintain scalable web applications and software solutions.',
    requirements: [
      '4+ years of professional software development experience',
      'Strong knowledge of JavaScript or TypeScript',
      'Experience with React and Node.js',
      'Understanding of REST APIs and databases',
      'Good problem-solving and communication skills'
    ],
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'Git'
    ]
  },

  {
    id: 2,
    icon: Building2,
    title: 'Marketing Manager',
    company: 'BrightWave Digital',
    location: 'London, UK',
    type: 'Full Time',
    workMode: 'Hybrid',
    category: 'Marketing',
    salary: '£45,000 - £60,000 / year',
    experience: '3-5 Years',
    education: "Bachelor's Degree in Marketing or Business",
    vacancies: 1,
    postedAt: '1 day ago',
    deadline: 'October 20, 2026',
    description:
      'We are seeking a creative Marketing Manager to lead digital marketing campaigns and develop strategies to increase brand awareness.',
    requirements: [
      '3+ years of marketing experience',
      'Experience with digital marketing campaigns',
      'Strong analytical and communication skills',
      'Knowledge of SEO and social media marketing',
      'Ability to manage multiple projects'
    ],
    skills: [
      'Digital Marketing',
      'SEO',
      'Google Analytics',
      'Social Media',
      'Content Strategy'
    ]
  },

  {
    id: 3,
    icon: HeartPulse,
    title: 'Registered Nurse',
    company: 'MapleCare Hospital',
    location: 'Toronto, Canada',
    type: 'Full Time',
    workMode: 'On-site',
    category: 'Healthcare',
    salary: 'CAD 70,000 - 90,000 / year',
    experience: '2-4 Years',
    education: 'Bachelor of Nursing',
    vacancies: 5,
    postedAt: '3 days ago',
    deadline: 'November 5, 2026',
    description:
      'Join our healthcare team as a Registered Nurse and provide high-quality patient care in a professional hospital environment.',
    requirements: [
      'Valid nursing license',
      '2+ years of clinical experience',
      'Strong patient communication skills',
      'Ability to work flexible shifts',
      'Knowledge of healthcare procedures'
    ],
    skills: [
      'Patient Care',
      'Clinical Skills',
      'Healthcare',
      'Communication',
      'Emergency Care'
    ]
  },

  {
    id: 4,
    icon: ScissorsSquare,
    title: 'Project Manager',
    company: 'GlobalTech Industries',
    location: 'Sydney, Australia',
    type: 'Full Time',
    workMode: 'Hybrid',
    category: 'Management',
    salary: 'AUD 100,000 - 125,000 / year',
    experience: '5-7 Years',
    education: "Bachelor's Degree",
    vacancies: 2,
    postedAt: '4 days ago',
    deadline: 'October 30, 2026',
    description:
      'We are hiring an experienced Project Manager to lead cross-functional teams and deliver projects within scope, budget, and timeline.',
    requirements: [
      '5+ years of project management experience',
      'Experience managing software projects',
      'Excellent leadership skills',
      'Strong knowledge of Agile methodologies',
      'Excellent communication and organizational skills'
    ],
    skills: [
      'Project Management',
      'Agile',
      'Scrum',
      'Jira',
      'Leadership',
      'Risk Management'
    ]
  },

  {
    id: 5,
    icon: Users,
    title: 'HR Business Partner',
    company: 'PeopleFirst Group',
    location: 'Berlin, Germany',
    type: 'Full Time',
    workMode: 'Hybrid',
    category: 'Human Resources',
    salary: '€55,000 - €70,000 / year',
    experience: '3-5 Years',
    education: "Bachelor's Degree in HR or Business",
    vacancies: 1,
    postedAt: '5 days ago',
    deadline: 'October 25, 2026',
    description:
      'Support business leaders with employee relations, talent management, recruitment, and organizational development initiatives.',
    requirements: [
      '3+ years of HR experience',
      'Strong knowledge of employment practices',
      'Excellent communication skills',
      'Experience with employee engagement programs',
      'Strong organizational skills'
    ],
    skills: [
      'Human Resources',
      'Recruitment',
      'Employee Relations',
      'Talent Management',
      'Communication'
    ]
  },

  {
    id: 6,
    icon: Factory,
    title: 'Warehouse Supervisor',
    company: 'PrimeLogistics Inc.',
    location: 'Chicago, USA',
    type: 'Contract',
    workMode: 'On-site',
    category: 'Logistics',
    salary: '$55,000 - $70,000 / year',
    experience: '2-4 Years',
    education: 'High School Diploma or Bachelor’s Degree',
    vacancies: 3,
    postedAt: '1 week ago',
    deadline: 'October 18, 2026',
    description:
      'Manage daily warehouse operations, supervise employees, and ensure efficient inventory and shipping processes.',
    requirements: [
      '2+ years of warehouse experience',
      'Previous supervisory experience',
      'Knowledge of inventory management',
      'Strong organizational skills',
      'Ability to work in a fast-paced environment'
    ],
    skills: [
      'Warehouse Management',
      'Inventory',
      'Logistics',
      'Leadership',
      'Operations'
    ]
  },

  {
    id: 7,
    icon: Laptop2,
    title: 'Frontend Developer',
    company: 'PixelCraft Studio',
    location: 'San Francisco, USA',
    type: 'Full Time',
    workMode: 'Remote',
    category: 'Software Development',
    salary: '$90,000 - $120,000 / year',
    experience: '2-4 Years',
    education: "Bachelor's Degree in Computer Science",
    vacancies: 3,
    postedAt: '2 days ago',
    deadline: 'October 28, 2026',
    description:
      'Build modern, responsive, and accessible user interfaces using React and modern frontend technologies.',
    requirements: [
      '2+ years of frontend development experience',
      'Strong React knowledge',
      'Excellent HTML, CSS, and JavaScript skills',
      'Experience with responsive design',
      'Knowledge of Git and REST APIs'
    ],
    skills: [
      'React',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3'
    ]
  },

  {
    id: 8,
    icon: Laptop2,
    title: 'Backend Developer',
    company: 'CloudCore Technologies',
    location: 'Toronto, Canada',
    type: 'Full Time',
    workMode: 'Remote',
    category: 'Software Development',
    salary: 'CAD 85,000 - 110,000 / year',
    experience: '2-5 Years',
    education: "Bachelor's Degree in Computer Science",
    vacancies: 2,
    postedAt: '3 days ago',
    deadline: 'November 1, 2026',
    description:
      'Develop secure and scalable backend services, APIs, and database systems for our cloud-based applications.',
    requirements: [
      '2+ years of backend development experience',
      'Strong Node.js knowledge',
      'Experience with REST APIs',
      'Knowledge of SQL and NoSQL databases',
      'Understanding of authentication and security'
    ],
    skills: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'REST API',
      'Docker'
    ]
  },

  {
    id: 9,
    icon: Laptop2,
    title: 'Full Stack Developer',
    company: 'WebSphere Labs',
    location: 'Amsterdam, Netherlands',
    type: 'Full Time',
    workMode: 'Hybrid',
    category: 'Software Development',
    salary: '€60,000 - €80,000 / year',
    experience: '3-5 Years',
    education: "Bachelor's Degree",
    vacancies: 2,
    postedAt: '6 days ago',
    deadline: 'October 31, 2026',
    description:
      'Work across frontend and backend systems to build scalable web applications for international clients.',
    requirements: [
      '3+ years of full-stack development experience',
      'Strong React and Node.js knowledge',
      'Experience with PostgreSQL or MongoDB',
      'Knowledge of REST APIs',
      'Experience with Git and cloud deployment'
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS']
  },

  {
    id: 10,
    icon: Building2,
    title: 'UI/UX Designer',
    company: 'CreativePixel Agency',
    location: 'Paris, France',
    type: 'Contract',
    workMode: 'Remote',
    category: 'Design',
    salary: '€40,000 - €55,000 / year',
    experience: '2-4 Years',
    education: "Bachelor's Degree in Design",
    vacancies: 1,
    postedAt: '1 week ago',
    deadline: 'October 22, 2026',
    description:
      'Design intuitive digital experiences and modern interfaces for web and mobile applications.',
    requirements: [
      '2+ years of UI/UX design experience',
      'Strong portfolio',
      'Experience with Figma',
      'Understanding of user-centered design',
      'Good communication skills'
    ],
    skills: [
      'Figma',
      'UI Design',
      'UX Design',
      'Wireframing',
      'Prototyping',
      'User Research'
    ]
  },

  {
    id: 11,
    icon: Users,
    title: 'Talent Acquisition Specialist',
    company: 'TalentBridge',
    location: 'Singapore',
    type: 'Full Time',
    workMode: 'Hybrid',
    category: 'Human Resources',
    salary: 'SGD 55,000 - 75,000 / year',
    experience: '2-4 Years',
    education: "Bachelor's Degree",
    vacancies: 2,
    postedAt: '2 days ago',
    deadline: 'October 27, 2026',
    description:
      'Manage recruitment processes, source qualified candidates, and work closely with hiring managers.',
    requirements: [
      '2+ years of recruitment experience',
      'Strong sourcing skills',
      'Experience with applicant tracking systems',
      'Excellent communication skills',
      'Ability to manage multiple vacancies'
    ],
    skills: [
      'Recruitment',
      'Talent Acquisition',
      'LinkedIn Recruiting',
      'Interviewing',
      'HR'
    ]
  },

  {
    id: 12,
    icon: Factory,
    title: 'Operations Manager',
    company: 'GlobalTrade Solutions',
    location: 'Dubai, UAE',
    type: 'Full Time',
    workMode: 'On-site',
    category: 'Operations',
    salary: 'AED 180,000 - 240,000 / year',
    experience: '5-8 Years',
    education: "Bachelor's Degree in Business",
    vacancies: 1,
    postedAt: '4 days ago',
    deadline: 'November 10, 2026',
    description:
      'Oversee daily business operations and improve processes, productivity, and operational performance.',
    requirements: [
      '5+ years of operations experience',
      'Strong leadership skills',
      'Experience with process improvement',
      'Excellent analytical abilities',
      'Strong communication skills'
    ],
    skills: [
      'Operations',
      'Leadership',
      'Process Improvement',
      'Management',
      'Analytics'
    ]
  },

  {
    id: 13,
    icon: Laptop2,
    title: 'DevOps Engineer',
    company: 'CloudMatrix',
    location: 'Austin, USA',
    type: 'Full Time',
    workMode: 'Remote',
    category: 'DevOps',
    salary: '$105,000 - $135,000 / year',
    experience: '3-5 Years',
    education: "Bachelor's Degree in Computer Science",
    vacancies: 2,
    postedAt: '3 days ago',
    deadline: 'November 3, 2026',
    description:
      'Build and maintain reliable cloud infrastructure and automate deployment pipelines for production applications.',
    requirements: [
      '3+ years of DevOps experience',
      'Experience with AWS or Azure',
      'Knowledge of Docker and Kubernetes',
      'Experience with CI/CD pipelines',
      'Strong Linux knowledge'
    ],
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'GitHub Actions']
  },

  {
    id: 14,
    icon: HeartPulse,
    title: 'Medical Assistant',
    company: 'HealthPlus Clinic',
    location: 'Vancouver, Canada',
    type: 'Part Time',
    workMode: 'On-site',
    category: 'Healthcare',
    salary: 'CAD 35 - 45 / hour',
    experience: '1-3 Years',
    education: 'Medical Assistant Certification',
    vacancies: 4,
    postedAt: '5 days ago',
    deadline: 'October 29, 2026',
    description:
      'Assist healthcare professionals with patient care, administrative duties, and clinical procedures.',
    requirements: [
      'Relevant medical certification',
      '1+ year of healthcare experience',
      'Strong communication skills',
      'Basic computer skills',
      'Patient-focused approach'
    ],
    skills: [
      'Patient Care',
      'Medical Records',
      'Healthcare',
      'Communication',
      'Administration'
    ]
  },

  {
    id: 15,
    icon: Building2,
    title: 'Financial Analyst',
    company: 'CapitalEdge Finance',
    location: 'Frankfurt, Germany',
    type: 'Full Time',
    workMode: 'Hybrid',
    category: 'Finance',
    salary: '€55,000 - €75,000 / year',
    experience: '2-4 Years',
    education: "Bachelor's Degree in Finance or Accounting",
    vacancies: 2,
    postedAt: '1 week ago',
    deadline: 'November 8, 2026',
    description:
      'Analyze financial data, prepare reports, and support business decisions through detailed financial analysis.',
    requirements: [
      '2+ years of financial analysis experience',
      'Strong Excel skills',
      'Knowledge of financial reporting',
      'Strong analytical skills',
      'Good attention to detail'
    ],
    skills: [
      'Financial Analysis',
      'Excel',
      'Accounting',
      'Data Analysis',
      'Reporting'
    ]
  },

  {
    id: 16,
    icon: Laptop2,
    title: 'React.js Developer',
    company: 'CodeCraft Bangladesh',
    location: 'Dhaka, Bangladesh',
    type: 'Full Time',
    workMode: 'Remote',
    category: 'Software Development',
    salary: 'BDT 60,000 - 100,000 / month',
    experience: '1-3 Years',
    education: "Bachelor's Degree in Computer Science or related field",
    vacancies: 4,
    postedAt: '1 day ago',
    deadline: 'October 30, 2026',
    description:
      'Join our frontend engineering team to build scalable and responsive web applications using React.js.',
    requirements: [
      '1+ year of React.js experience',
      'Strong JavaScript fundamentals',
      'Experience with REST APIs',
      'Knowledge of Git and GitHub',
      'Good understanding of responsive design'
    ],
    skills: [
      'React.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Git'
    ]
  },

  {
    id: 17,
    icon: Laptop2,
    title: 'Next.js Developer',
    company: 'DigitalPeak Studio',
    location: 'Chattogram, Bangladesh',
    type: 'Full Time',
    workMode: 'Hybrid',
    category: 'Software Development',
    salary: 'BDT 50,000 - 90,000 / month',
    experience: '1-3 Years',
    education: "Bachelor's Degree in Computer Science or related field",
    vacancies: 2,
    postedAt: '3 days ago',
    deadline: 'October 26, 2026',
    description:
      'Develop fast, SEO-friendly, and production-ready web applications using Next.js and TypeScript.',
    requirements: [
      'Experience with Next.js',
      'Strong TypeScript knowledge',
      'Experience with React',
      'Understanding of server-side rendering',
      'Experience with REST APIs'
    ],
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'REST API'
    ]
  },

  {
    id: 18,
    icon: Users,
    title: 'Customer Support Specialist',
    company: 'SupportPro',
    location: 'Lisbon, Portugal',
    type: 'Part Time',
    workMode: 'Remote',
    category: 'Customer Service',
    salary: '€20,000 - €28,000 / year',
    experience: '1-2 Years',
    education: "Bachelor's Degree preferred",
    vacancies: 5,
    postedAt: '2 days ago',
    deadline: 'October 24, 2026',
    description:
      'Help customers resolve technical and account-related issues while providing a positive support experience.',
    requirements: [
      'Excellent written and verbal communication',
      'Basic technical knowledge',
      'Customer service experience preferred',
      'Ability to solve problems quickly',
      'Good English communication skills'
    ],
    skills: [
      'Customer Support',
      'Communication',
      'Problem Solving',
      'CRM',
      'Technical Support'
    ]
  },

  {
    id: 19,
    icon: ScissorsSquare,
    title: 'Graphic Designer',
    company: 'DesignHub Creative',
    location: 'Melbourne, Australia',
    type: 'Contract',
    workMode: 'Remote',
    category: 'Design',
    salary: 'AUD 65,000 - 85,000 / year',
    experience: '2-4 Years',
    education: "Bachelor's Degree in Graphic Design",
    vacancies: 2,
    postedAt: '6 days ago',
    deadline: 'November 2, 2026',
    description:
      'Create visual content for websites, social media, marketing campaigns, and digital products.',
    requirements: [
      '2+ years of graphic design experience',
      'Strong design portfolio',
      'Experience with Adobe Creative Suite',
      'Strong understanding of typography and color',
      'Creative problem-solving skills'
    ],
    skills: [
      'Photoshop',
      'Illustrator',
      'Figma',
      'Graphic Design',
      'Branding',
      'Typography'
    ]
  },

  {
    id: 20,
    icon: Factory,
    title: 'Supply Chain Manager',
    company: 'Pacific Logistics Group',
    location: 'Tokyo, Japan',
    type: 'Full Time',
    workMode: 'On-site',
    category: 'Supply Chain',
    salary: '¥7,000,000 - ¥9,000,000 / year',
    experience: '5-8 Years',
    education: "Bachelor's Degree in Supply Chain or Business",
    vacancies: 1,
    postedAt: '1 week ago',
    deadline: 'November 15, 2026',
    description:
      'Manage supply chain operations, vendor relationships, inventory planning, and logistics performance.',
    requirements: [
      '5+ years of supply chain experience',
      'Strong vendor management skills',
      'Experience with inventory planning',
      'Strong analytical skills',
      'Excellent negotiation and communication skills'
    ],
    skills: [
      'Supply Chain',
      'Logistics',
      'Inventory Management',
      'Procurement',
      'Vendor Management',
      'Analytics'
    ]
  }
]

export const testimonials = [
  {
    quote:
      'Antixor Staffing delivered exceptional talent for our team. Their professionalism and understanding of our needs made the hiring process seamless.',
    name: 'Michael R. Thompson',
    role: 'HR Director, Global Solutions',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    quote:
      'I found my dream job through Antixor Staffing. Their team supported me at every step and helped me build a better future.',
    name: 'Sarah Johnson',
    role: 'Software Developer',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    quote:
      'Reliable, efficient and professional. Antixor Staffing is our go-to partner for all our recruitment needs.',
    name: 'David Chen',
    role: 'Operations Manager',
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
  {
    quote:
      'From onboarding to offer letter, the whole process took days, not months. Antixor understood exactly what we needed.',
    name: 'Priya Nair',
    role: 'Talent Acquisition Lead',
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
]

export const stats = [
  { value: '5,000+', label: 'Successful Placements' },
  { value: '500+', label: 'Happy Clients' },
  { value: '15+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

export const whyChooseUs = [
  'Access to pre-screened & skilled candidates',
  'Industry-specific hiring expertise',
  'Flexible and cost-effective solutions',
  'Dedicated support team',
]

export const processSteps = [
  { icon: Search, title: 'Understand Your Needs', desc: 'We start by learning your goals, culture and the role you need to fill.' },
  { icon: Users, title: 'Source & Screen', desc: 'We tap our talent pool and rigorously vet every candidate we put forward.' },
  { icon: BadgeCheck, title: 'Match & Interview', desc: 'You meet only the candidates who truly fit the role and your team.' },
  { icon: Sparkles, title: 'Onboard & Support', desc: 'We help with onboarding and stay close through the first months.' },
]

export const blogPosts = [
  {
    image: 'blog1',
    category: 'Hiring Tips',
    date: 'Sep 12, 2026',
    title: 'How to Reduce Time-to-Hire Without Cutting Corners',
    excerpt: 'Practical ways to speed up your hiring pipeline while still finding the right fit for your team.',
  },
  {
    image: 'blog2',
    category: 'Career Advice',
    date: 'Sep 3, 2026',
    title: '5 Interview Questions That Reveal Real Potential',
    excerpt: 'Move past scripted answers with questions that show how candidates actually think and work.',
  },
  {
    image: 'blog3',
    category: 'Workforce Trends',
    date: 'Aug 24, 2026',
    title: 'The Rise of Hybrid Teams and What It Means for Hiring',
    excerpt: 'Why flexible work arrangements are reshaping how companies source and retain talent.',
  },
  {
    image: 'blog4',
    category: 'Employer Guide',
    date: 'Aug 15, 2026',
    title: 'Building an Employer Brand Candidates Actually Notice',
    excerpt: 'Small, consistent signals that make your company stand out to the people you want to hire.',
  },
  {
    image: 'blog5',
    category: 'Career Advice',
    date: 'Aug 2, 2026',
    title: 'Switching Industries? Here\u2019s How to Position Your Resume',
    excerpt: 'How to translate your experience so it speaks the language of a new industry.',
  },
  {
    image: 'blog6',
    category: 'Healthcare Staffing',
    date: 'Jul 21, 2026',
    title: 'Solving Seasonal Staff Shortages in Healthcare',
    excerpt: 'A look at how flexible staffing models keep patient care steady through demand spikes.',
  },
]

export const faqs = [
  {
    q: 'How quickly can Antixor Staffing fill a role?',
    a: 'For most roles we present a shortlist within 5-7 business days, and can move faster for temporary or urgent placements.',
  },
  {
    q: 'Which industries do you specialize in?',
    a: 'We place talent across technology, healthcare, industrial and manufacturing, finance, and corporate operations.',
  },
  {
    q: 'Do you offer temporary and contract staffing?',
    a: 'Yes. Alongside permanent placements, we offer temporary, contract and contract-to-hire staffing models.',
  },
  {
    q: 'Is there a fee for job seekers?',
    a: 'No. Our services are always free for candidates - employers cover our placement fees.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We support clients across North America, Europe and Australia, with remote hiring available worldwide.',
  },
]
