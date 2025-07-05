// Types for the homepage data structure
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isButton?: boolean;
  targetSection?: string;
}

export interface Section {
  id: string;
  type: string; // Component type (Hero, About, Services, etc.)
  className?: string;
  data: Record<string, unknown>; // Component-specific data
}

export interface HomepageData {
  navigation: NavigationItem[];
  sections: Section[];
  sectionOrder: string[]; // Order of sections to render
  metadata: {
    title: string;
    description: string;
  };
}

// Centralized homepage data
export const homepageData: HomepageData = {
  navigation: [
    {
      id: 'about-nav',
      label: 'About',
      href: '#about',
      targetSection: 'about',
    },
    {
      id: 'services-nav',
      label: 'Services',
      href: '#services',
      targetSection: 'services',
    },
    {
      id: 'why-us-nav',
      label: 'Why Us',
      href: '#why-us',
      targetSection: 'why-us',
    },
    {
      id: 'testimonials-nav',
      label: 'Testimonials',
      href: '#testimonials',
      targetSection: 'testimonials',
    },
    {
      id: 'contact-nav',
      label: 'Contact Us',
      href: '#contact',
      targetSection: 'contact',
      isButton: true,
    },
  ],
  sections: [
    {
      id: 'hero',
      type: 'Hero',
      className: '',
      data: {
        title: 'Your Financial Journey Starts Here',
        subtitle:
          'WealthSetu is your trusted partner in creating comprehensive financial solutions for a secure future.',
        ctaText: 'Get Started Today',
        ctaHref: '#contact',
      },
    },
    {
      id: 'about',
      type: 'About',
      className: 'py-20 bg-gray-50',
      data: {
        title: 'About WealthSetu',
        description:
          'We are a team of experienced financial advisors dedicated to helping you achieve your financial goals.',
        features: [
          {
            title: 'Expert Guidance',
            description:
              'Professional financial advisors with years of experience',
            icon: 'IconUserCheck',
          },
          {
            title: 'Personalized Solutions',
            description: 'Tailored financial plans based on your unique needs',
            icon: 'IconTarget',
          },
          {
            title: 'Comprehensive Services',
            description: 'One-stop solution for all your financial needs',
            icon: 'IconShieldCheck',
          },
        ],
      },
    },
    {
      id: 'services',
      type: 'Services',
      className: 'py-20 bg-white',
      data: {
        title: 'Our Services',
        description: 'Comprehensive financial solutions tailored to your needs',
        services: [
          {
            title: 'Mutual Funds',
            description:
              'Strategic investment solutions designed to help you achieve your financial goals through diversified portfolios.',
            icon: 'IconChartPie4Filled',
            features: [
              'Customized Portfolio Management',
              'Risk-Adjusted Returns',
              'Regular Portfolio Review',
            ],
            highlightText: 'AMFI Registered Mutual Fund Distributor',
          },
          {
            title: 'Life Insurance',
            description:
              'Comprehensive protection plans ensuring financial security for you and your loved ones.',
            icon: 'IconShieldHeart',
            features: [
              'Term Life Insurance',
              'Unit-Linked Insurance Plans',
              'Child Education Planning',
            ],
            highlightText: 'Partners: LIC, TATA AIA, and more',
          },
          {
            title: 'Health & General Insurance',
            description:
              'Complete protection against medical emergencies and coverage for your valuable assets.',
            icon: 'IconEmergencyBed',
            features: [
              'Health Insurance Plans',
              'Motor Insurance',
              'Property Insurance',
            ],
            highlightText: 'Comprehensive Coverage Solutions',
          },
        ],
      },
    },
    {
      id: 'why-us',
      type: 'WhyUs',
      className: 'py-20 bg-green-50',
      data: {
        title: 'Why Choose WealthSetu?',
        description: 'Discover what makes us your trusted financial partner',
        reasons: [
          {
            title: 'Expert Team',
            description:
              'Certified financial advisors with extensive experience',
            icon: 'IconUsers',
          },
          {
            title: 'Personalized Approach',
            description:
              'Tailored solutions based on your unique financial goals',
            icon: 'IconTarget',
          },
          {
            title: 'Transparent Process',
            description: 'Clear communication and honest advice throughout',
            icon: 'IconEye',
          },
          {
            title: 'Ongoing Support',
            description: 'Continuous guidance and portfolio monitoring',
            icon: 'IconHeadset',
          },
        ],
      },
    },
    {
      id: 'process',
      type: 'Process',
      className: 'py-20 bg-white',
      data: {
        title: 'Our Process',
        description: 'Simple steps to achieve your financial goals',
        steps: [
          {
            step: '01',
            title: 'Initial Consultation',
            description:
              'We start with a comprehensive discussion about your financial goals and current situation.',
          },
          {
            step: '02',
            title: 'Financial Analysis',
            description:
              'Our experts analyze your financial profile and create a personalized strategy.',
          },
          {
            step: '03',
            title: 'Plan Implementation',
            description:
              'We help you implement the financial plan with the best-suited products.',
          },
          {
            step: '04',
            title: 'Regular Review',
            description:
              'Ongoing monitoring and periodic reviews to ensure your plan stays on track.',
          },
        ],
      },
    },
    {
      id: 'testimonials',
      type: 'Testimonials',
      className: 'py-20 bg-gray-50',
      data: {
        title: 'What Our Clients Say',
        description: 'Real stories from satisfied clients',
        testimonials: [
          {
            name: 'Rahul Sharma',
            role: 'Software Engineer',
            content:
              'WealthSetu helped me create a comprehensive financial plan that perfectly aligns with my goals. Their expertise and personalized approach made all the difference.',
            rating: 5,
          },
          {
            name: 'Priya Patel',
            role: 'Business Owner',
            content:
              'The team at WealthSetu is incredibly professional and knowledgeable. They took the time to understand my business needs and provided excellent investment advice.',
            rating: 5,
          },
          {
            name: 'Amit Kumar',
            role: 'Doctor',
            content:
              'I was overwhelmed with financial decisions until I found WealthSetu. Their systematic approach and ongoing support have given me peace of mind.',
            rating: 5,
          },
        ],
      },
    },
    {
      id: 'contact',
      type: 'Contact',
      className: 'py-20 bg-green-50',
      data: {
        title: 'Get Started Today',
        description:
          'Take the first step towards securing your financial future. Schedule a free consultation with our experts.',
        contactInfo: [
          {
            icon: 'IconMapPinFilled',
            title: 'Office Address',
            value: '123 Financial District, Mumbai 400001',
          },
          {
            icon: 'IconPhoneFilled',
            title: 'Phone',
            value: '+91 98765 43210',
          },
          {
            icon: 'IconMailFilled',
            title: 'Email',
            value: 'contact@wealthsetu.com',
          },
        ],
        businessHours: [
          { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
          { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
          { day: 'Sunday', hours: 'Closed' },
        ],
      },
    },
    {
      id: 'partners',
      type: 'Partners',
      className: 'py-20 bg-white',
      data: {
        title: 'Our Partners',
        description: 'Trusted by leading financial institutions',
        partners: [
          {
            name: 'LIC',
            logo: '/partners/lic-logo.png',
            description: 'Life Insurance Corporation of India',
          },
          {
            name: 'TATA AIA',
            logo: '/partners/tata-aia-logo.png',
            description: 'TATA AIA Life Insurance',
          },
          {
            name: 'HDFC Life',
            logo: '/partners/hdfc-life-logo.png',
            description: 'HDFC Life Insurance',
          },
          {
            name: 'ICICI Prudential',
            logo: '/partners/icici-pru-logo.png',
            description: 'ICICI Prudential Life Insurance',
          },
        ],
      },
    },
  ],
  sectionOrder: [
    'hero',
    'about',
    'services',
    'why-us',
    'process',
    'testimonials',
    'contact',
    'partners',
  ],
  metadata: {
    title: 'WealthSetu - Your Financial Journey Starts Here',
    description: 'WealthSetu - Your Financial Journey Starts Here',
  },
};
