// Navigation structure for Pro-Tech IT Consulting
// Used by Header (desktop nav + mobile nav) and Footer components

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Network Infrastructure', path: '/services/network-infrastructure' },
      { label: 'Structured Cabling & Fiber', path: '/services/structured-cabling' },
      { label: 'Wi-Fi & Wireless Solutions', path: '/services/wifi-wireless' },
      { label: 'VoIP & Unified Communications', path: '/services/voip-unified-comms' },
      { label: 'CCTV & Physical Security', path: '/services/cctv-security' },
      { label: 'Managed IT & Field Services', path: '/services/managed-it-support' },
      { label: 'Cloud & Hybrid Cloud', path: '/services/cloud-hybrid-cloud' },
      { label: 'Project Management & Deployment', path: '/services/project-management' },
    ],
  },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Network Infrastructure', path: '/services/network-infrastructure' },
    { label: 'Structured Cabling & Fiber', path: '/services/structured-cabling' },
    { label: 'Wi-Fi & Wireless', path: '/services/wifi-wireless' },
    { label: 'VoIP & Unified Comms', path: '/services/voip-unified-comms' },
    { label: 'CCTV & Physical Security', path: '/services/cctv-security' },
    { label: 'Managed IT & Field Services', path: '/services/managed-it-support' },
    { label: 'Cloud & Hybrid Cloud', path: '/services/cloud-hybrid-cloud' },
    { label: 'Project Management', path: '/services/project-management' },
  ],
};

export const ctaButton = {
  label: 'Get a Quote',
  path: '/contact',
};
