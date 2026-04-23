// Service data for Pro-Tech IT Consulting
// Slugs match route paths in src/router.jsx (/services/:slug)
// PLACEHOLDER — all content below is developer-generated placeholder text.
// Replace with client-approved copy before launch.

import networkDiagram from '@/assets/images/service-network-diagram.svg';
import structuredCablingDiagram from '@/assets/images/service-structured-cabling-diagram.svg';
import wirelessDiagram from '@/assets/images/service-wireless-diagram.svg';
import voipDiagram from '@/assets/images/service-voip-diagram.svg';
import securityDiagram from '@/assets/images/service-security-diagram.svg';
import managedItDiagram from '@/assets/images/service-managed-it-diagram.svg';
import fieldDiagram from '@/assets/images/service-field-diagram.svg';
import cloudDiagram from '@/assets/images/service-cloud-diagram.svg';

export const services = [
  {
    slug: 'network-infrastructure',
    name: 'Network Infrastructure',
    svgDiagram: networkDiagram,
    icon: 'LuNetwork',
    tagline: 'Robust network solutions built for performance and reliability', // PLACEHOLDER
    shortDescription:
      'Design, deploy, and manage enterprise-grade network infrastructure tailored to your business needs. From LAN/WAN to data center networking.', // PLACEHOLDER
    // PLACEHOLDER — full description for detail page
    description:
      'A reliable network is the backbone of every modern business. Pro-Tech IT Consulting designs and implements enterprise-grade network infrastructure that delivers the performance, security, and scalability your organization demands.\n\nOur network engineers work with leading platforms from Cisco, Juniper, and Aruba to architect LAN, WAN, and SD-WAN solutions tailored to your specific requirements. Whether you need a single-site office network or a multi-location enterprise deployment, we ensure seamless connectivity with built-in redundancy and failover.\n\nWe take a holistic approach that covers network design, hardware procurement, configuration, testing, and ongoing optimization. Every solution is documented with detailed network diagrams, IP schemas, and runbooks so your internal team can manage day-to-day operations with confidence.\n\nFrom initial assessment through deployment and post-installation support, Pro-Tech delivers network infrastructure that grows with your business and stands up to the demands of today and tomorrow.',
    // PLACEHOLDER — 3-6 feature items
    features: [
      {
        icon: 'LuServer',
        title: 'LAN & WAN Design',
        description:
          'Custom local and wide-area network architecture optimized for speed, reliability, scalability and security across all your locations.',
      },
      {
        icon: 'LuShieldCheck',
        title: 'Network Security',
        description:
          'Firewalls, intrusion detection, VPN tunnels, and segmentation strategies to protect your data and comply with industry regulations.',
      },
      {
        icon: 'LuGauge',
        title: 'Performance Monitoring',
        description:
          'Real-time network monitoring and analytics to identify bottlenecks, prevent downtime, and ensure optimal throughput.',
      },
      {
        icon: 'LuRefreshCw',
        title: 'Redundancy & Failover',
        description:
          'High-availability designs with automatic failover to keep your business running even when individual components fail.',
      },
      {
        icon: 'LuGlobe',
        title: 'SD-WAN Solutions',
        description:
          'Software-defined WAN technology that reduces costs and improves performance for multi-site and cloud-connected environments.',
      },
    ],
    // PLACEHOLDER — 4-step approach
    approach: [
      {
        step: 1,
        title: 'Assess',
        description:
          'We audit your current network, document pain points, and gather requirements for bandwidth, users, applications, and growth projections.',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Our engineers create a detailed network architecture with topology diagrams, hardware specifications, and a phased implementation plan.',
      },
      {
        step: 3,
        title: 'Deploy',
        description:
          'We install, configure, and test all network equipment with minimal disruption to your operations, following industry best practices.',
      },
      {
        step: 4,
        title: 'Support',
        description:
          'Post-deployment monitoring, documentation handoff, and ongoing support ensure your network continues to perform at its best.',
      },
    ],
    relatedIndustries: ['healthcare', 'finance', 'government'],
    relatedServices: ['structured-cabling', 'wifi-wireless'],
  },
  {
    slug: 'structured-cabling',
    name: 'Structured Cabling & Fiber',
    svgDiagram: structuredCablingDiagram,
    icon: 'LuCable',
    tagline: 'Professional cabling solutions for seamless connectivity', // PLACEHOLDER
    shortDescription:
      'End-to-end structured cabling and fiber optic installation for offices, data centers, and campus environments.', // PLACEHOLDER
    // PLACEHOLDER
    description:
      'The physical layer of your network is the foundation everything else depends on. Pro-Tech delivers professionally designed and installed structured cabling systems that meet TIA/EIA standards and support your current and future connectivity needs.\n\nOur certified technicians handle everything from Cat6/Cat6A copper cabling to single-mode and multi-mode fiber optic runs. Whether you are building out a new office, upgrading an aging infrastructure, or connecting multiple buildings on a campus, we deliver clean, organized, and fully tested installations.\n\nEvery project includes detailed cable pathway planning, proper labeling, thorough testing and certification, and comprehensive as-built documentation. We design with future growth in mind, ensuring your cabling plant can support increasing bandwidth demands without costly rework.\n\nPro-Tech partners with leading manufacturers to source enterprise-grade cabling components backed by manufacturer warranties of up to 25 years, giving you peace of mind that your investment is protected.',
    // PLACEHOLDER
    features: [
      {
        icon: 'LuCable',
        title: 'Copper Cabling',
        description:
          'Cat5e, Cat6, and Cat6A installations with proper termination, testing, and certification for reliable data and voice connectivity.',
      },
      {
        icon: 'LuZap',
        title: 'Fiber Optic Installation',
        description:
          'Single-mode and multi-mode fiber runs for high-bandwidth backbone connections, inter-building links, and data center interconnects.',
      },
      {
        icon: 'LuBuilding',
        title: 'Data Center Cabling',
        description:
          'Hot/cold aisle cabling, patch panel organization, and structured cable management for server rooms and data centers.',
      },
      {
        icon: 'LuClipboardCheck',
        title: 'Testing & Certification',
        description:
          'Every cable run is tested with Fluke certification equipment and documented with detailed test reports for warranty compliance.',
      },
      {
        icon: 'LuTag',
        title: 'Labeling & Documentation',
        description:
          'Industry-standard labeling systems and as-built documentation so your team can easily manage and troubleshoot the cabling plant.',
      },
    ],
    // PLACEHOLDER
    approach: [
      {
        step: 1,
        title: 'Survey',
        description:
          'We perform a detailed site survey to assess existing infrastructure, plan cable pathways, and identify any structural considerations.',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Our team creates cabling blueprints with rack elevations, pathway diagrams, and a bill of materials tailored to your needs.',
      },
      {
        step: 3,
        title: 'Install',
        description:
          'Certified technicians run, terminate, and dress all cables following TIA/EIA standards with minimal disruption to your operations.',
      },
      {
        step: 4,
        title: 'Certify',
        description:
          'Every cable run is tested, certified, and documented. We provide as-built drawings and test results for your records.',
      },
    ],
    relatedIndustries: ['education', 'healthcare', 'industrial'],
    relatedServices: ['network-infrastructure', 'wifi-wireless'],
  },
  {
    slug: 'wifi-wireless',
    name: 'Wi-Fi & Wireless Solutions',
    icon: 'LuWifi',
    svgDiagram: wirelessDiagram,
    tagline: 'Reliable wireless coverage for every corner of your space', // PLACEHOLDER
    shortDescription:
      'Enterprise Wi-Fi design, deployment, and optimization ensuring seamless connectivity across your entire facility.', // PLACEHOLDER
    // PLACEHOLDER
    description:
      "In today's mobile-first workplace, reliable Wi-Fi is not a luxury — it is a necessity. Pro-Tech designs and deploys enterprise wireless networks that deliver consistent, high-speed coverage across your entire facility, from open offices to warehouse floors.\n\nWe use predictive heat-mapping tools and on-site RF surveys to design wireless networks that eliminate dead zones and co-channel interference. Our solutions leverage Wi-Fi 6 and Wi-Fi 6E technology from vendors like Cisco Meraki, Aruba, and Ruckus to support high-density environments with hundreds or thousands of concurrent devices.\n\nSecurity is built into every wireless deployment. We implement WPA3 encryption, 802.1X authentication, guest network segmentation, and rogue AP detection to protect your network from unauthorized access and threats.\n\nWhether you need to cover a single-floor office, a multi-building campus, or an outdoor venue, Pro-Tech delivers wireless solutions that are fast, secure, and easy to manage through centralized cloud controllers.",
    // PLACEHOLDER
    features: [
      {
        icon: 'LuRadar',
        title: 'RF Site Surveys',
        description:
          'Predictive and on-site radio frequency surveys to optimize access point placement and eliminate coverage gaps.',
      },
      {
        icon: 'LuWifi',
        title: 'Wi-Fi Deployment',
        description:
          'Latest-generation wireless technology for faster speeds, lower latency, and better performance in high-density environments.',
      },
      {
        icon: 'LuShieldCheck',
        title: 'Wireless Security',
        description:
          'WPA3 encryption, 802.1X authentication, guest segmentation, and rogue device detection for comprehensive wireless protection.',
      },
      {
        icon: 'LuSmartphone',
        title: 'BYOD & Guest Access',
        description:
          'Secure bring-your-own-device policies and captive portal guest networks that keep visitors connected without compromising security.',
      },
      {
        icon: 'LuLayoutDashboard',
        title: 'Cloud Management',
        description:
          'Centralized cloud-based wireless controllers for easy monitoring, configuration, and troubleshooting from anywhere.',
      },
    ],
    // PLACEHOLDER
    approach: [
      {
        step: 1,
        title: 'Survey',
        description:
          'We conduct RF site surveys and gather requirements for user density, device types, and application bandwidth needs.',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Our engineers create a heat-mapped wireless design with optimal AP placement, channel planning, and power settings.',
      },
      {
        step: 3,
        title: 'Deploy',
        description:
          'We install and configure access points, controllers, and security policies, then validate coverage with post-installation surveys.',
      },
      {
        step: 4,
        title: 'Optimize',
        description:
          'Ongoing monitoring and periodic re-surveys ensure your wireless network adapts to changes in layout, usage, and technology.',
      },
    ],
    relatedIndustries: ['education', 'retail', 'healthcare'],
    relatedServices: ['network-infrastructure', 'structured-cabling'],
  },
  {
    slug: 'voip-unified-comms',
    name: 'VoIP & Unified Communications',
    icon: 'LuPhone',
    svgDiagram: voipDiagram,
    tagline: 'Modern communication systems that keep your team connected', // PLACEHOLDER
    shortDescription:
      'VoIP phone systems and unified communications platforms that streamline collaboration and reduce costs.', // PLACEHOLDER
    // PLACEHOLDER
    description:
      'Effective communication drives business success. Pro-Tech deploys VoIP phone systems and unified communications platforms that bring voice, video, messaging, and collaboration tools together into a single, easy-to-manage solution.\n\nWe partner with industry leaders like Cisco, Microsoft Teams, and RingCentral to deliver communication systems that work on desk phones, mobile devices, and desktops. Our solutions eliminate costly legacy PBX systems and reduce your monthly telecom spend while delivering superior call quality and features.\n\nEvery VoIP deployment is built on a network foundation that prioritizes voice traffic with proper QoS policies, ensuring crystal-clear call quality even during peak usage. We handle number porting, auto-attendant programming, call routing, and user training so your team can be productive from day one.\n\nWhether your team works from a single office, multiple locations, or remotely, Pro-Tech ensures your communications infrastructure keeps everyone connected and productive.',
    // PLACEHOLDER
    features: [
      {
        icon: 'LuPhone',
        title: 'VoIP Phone Systems',
        description:
          'Cloud-hosted and on-premises VoIP solutions with advanced call management, voicemail-to-email, and auto-attendant features.',
      },
      {
        icon: 'LuVideo',
        title: 'Video Conferencing',
        description:
          'High-quality video meeting rooms and desktop conferencing integrated with your existing communication platform.',
      },
      {
        icon: 'LuMessageSquare',
        title: 'Team Messaging',
        description:
          'Persistent chat, file sharing, and presence indicators that keep teams aligned and reduce email overload.',
      },
      {
        icon: 'LuPhoneForwarded',
        title: 'Call Routing & IVR',
        description:
          'Intelligent call routing, interactive voice response, and queue management to improve customer experience.',
      },
      {
        icon: 'LuLaptop',
        title: 'Softphone & Mobile',
        description:
          'Desktop and mobile softphone apps that let your team make and receive business calls from anywhere.',
      },
    ],
    // PLACEHOLDER
    approach: [
      {
        step: 1,
        title: 'Analyze',
        description:
          'We review your current phone system, call volumes, feature requirements, and integration needs to recommend the right platform.',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Our team designs your call flows, auto-attendant menus, user extensions, and network QoS policies for optimal voice quality.',
      },
      {
        step: 3,
        title: 'Migrate',
        description:
          'We port your numbers, configure the system, provision devices, and run parallel operation to ensure a seamless transition.',
      },
      {
        step: 4,
        title: 'Train',
        description:
          'Hands-on training for administrators and end users ensures your team gets the most out of the new communication tools.',
      },
    ],
    relatedIndustries: ['finance', 'government', 'healthcare'],
    relatedServices: ['network-infrastructure', 'cloud-hybrid-cloud'],
  },
  {
    slug: 'cctv-security',
    name: 'CCTV & Physical Security',
    icon: 'LuShield',
    svgDiagram: securityDiagram,
    tagline: 'Comprehensive security systems to protect what matters most', // PLACEHOLDER
    shortDescription:
      'IP-based CCTV, access control, and physical security systems designed to safeguard your premises and assets.', // PLACEHOLDER
    // PLACEHOLDER
    description:
      'Protecting your people, property, and assets requires an integrated approach to physical security. Pro-Tech designs and installs IP-based CCTV surveillance, access control, and intrusion detection systems that give you complete visibility and control over your facilities.\n\nOur security solutions leverage the latest in IP camera technology with features like 4K resolution, night vision, motion-triggered recording, and AI-powered analytics for license plate recognition and people counting. All footage is stored on network video recorders with configurable retention policies.\n\nAccess control systems integrate with your existing network infrastructure, supporting key card, biometric, and mobile credential technologies. We design layered security zones so you can control who enters which areas and maintain a complete audit trail of all access events.\n\nPro-Tech integrates all security components into a unified management platform, giving you a single pane of glass to monitor cameras, manage access permissions, and respond to alarms — whether you are on-site or viewing remotely from your mobile device.',
    // PLACEHOLDER
    features: [
      {
        icon: 'LuCamera',
        title: 'IP Camera Systems',
        description:
          '4K IP cameras with night vision, wide dynamic range, and motion-triggered recording for comprehensive facility coverage.',
      },
      {
        icon: 'LuDoorOpen',
        title: 'Access Control',
        description:
          'Key card, biometric, and mobile credential access systems with audit trails and customizable security zones.',
      },
      {
        icon: 'LuBell',
        title: 'Intrusion Detection',
        description:
          'Alarm systems with sensor integration, real-time alerts, and automated response protocols for after-hours protection.',
      },
      {
        icon: 'LuHardDrive',
        title: 'Video Storage & NVR',
        description:
          'Network video recorders with configurable retention policies, redundant storage, and remote playback capabilities.',
      },
      {
        icon: 'LuScanFace',
        title: 'AI-Powered Analytics',
        description:
          'Intelligent video analytics for people counting, license plate recognition, and unusual activity detection.',
      },
    ],
    // PLACEHOLDER
    approach: [
      {
        step: 1,
        title: 'Evaluate',
        description:
          'We conduct a physical security assessment to identify vulnerabilities, high-risk areas, and coverage requirements for your facility.',
      },
      {
        step: 2,
        title: 'Design',
        description:
          'Our team creates a security system layout with camera placements, access control zones, and network integration specifications.',
      },
      {
        step: 3,
        title: 'Install',
        description:
          'Certified technicians install and configure all cameras, access readers, NVRs, and management software with thorough testing.',
      },
      {
        step: 4,
        title: 'Monitor',
        description:
          'We provide training on the management platform and offer ongoing maintenance, firmware updates, and system health monitoring.',
      },
    ],
    relatedIndustries: ['retail', 'government', 'industrial'],
    relatedServices: ['network-infrastructure', 'structured-cabling'],
  },
  {
    slug: 'managed-it-support',
    name: 'Managed IT Services',
    icon: 'LuHeadset',
    tagline: 'Proactive IT management so your business never skips a beat',
    svgDiagram: managedItDiagram,
    shortDescription:
      'Proactive monitoring, maintenance, and support that keeps your systems healthy, secure, and performing at their best — 24/7.',
    description:
      "Technology should work for your business — not the other way around. Pro-Tech's Managed IT Services deliver proactive monitoring, maintenance, and support that keeps your systems healthy, secure, and performing at their best around the clock.\n\nOur team monitors your network, servers, and endpoints 24/7, catching and resolving issues before they ever impact your operations. From patch management and backup verification to security updates and performance tuning, we handle the day-to-day IT operations your business depends on — so you don't have to.\n\nEvery managed client gets a dedicated service plan tailored to their environment, with clearly defined response times, regular reporting, and a single point of contact who knows your infrastructure inside and out. We maintain detailed asset inventories and service histories so support is always informed, never reactive.\n\nWith flexible plans ranging from basic monitoring to fully managed IT, Pro-Tech scales our support to match your needs and budget — giving you enterprise-level IT expertise without the overhead of building and maintaining an in-house team.",
    // PLACEHOLDER
    features: [
      {
        icon: 'LuMonitorCheck',
        title: '24/7 Monitoring',
        description:
          'Round-the-clock monitoring of your network, servers, and endpoints with automated alerts and rapid incident response.',
      },
      {
        icon: 'LuWrench',
        title: 'On-Site Field Services',
        description:
          'Dispatched technicians for hardware installations, moves, troubleshooting, and break-fix work at your location.',
      },
      {
        icon: 'LuShieldCheck',
        title: 'Patch & Security Management',
        description:
          'Regular patching, firmware updates, and security hardening to protect your systems against vulnerabilities and threats.',
      },
      {
        icon: 'LuDatabase',
        title: 'Backup & Recovery',
        description:
          'Automated backup verification, disaster recovery planning, and tested restore procedures to protect your critical data.',
      },
      {
        icon: 'LuUsers',
        title: 'Help Desk Support',
        description:
          'Responsive help desk for end-user support, account management, and day-to-day IT requests via phone, email, or ticket.',
      },
    ],
    // PLACEHOLDER
    approach: [
      {
        step: 1,
        title: 'Onboard',
        description:
          'We inventory your IT assets, document your environment, and establish monitoring baselines and service level agreements.',
      },
      {
        step: 2,
        title: 'Stabilize',
        description:
          'Our team addresses outstanding issues, applies critical patches, and brings your systems up to a healthy, secure baseline.',
      },
      {
        step: 3,
        title: 'Manage',
        description:
          'Ongoing proactive monitoring, maintenance, and support keep your technology running smoothly and prevent problems before they occur.',
      },
      {
        step: 4,
        title: 'Improve',
        description:
          'Regular reviews and reporting identify opportunities to optimize performance, reduce costs, and align IT with your business goals.',
      },
    ],
    relatedIndustries: ['healthcare', 'finance', 'education'],
    relatedServices: ['field-services', 'network-infrastructure', 'cloud-hybrid-cloud'],
  },
  {
    slug: 'field-services',
    name: 'Field Services',
    icon: 'LuMapPin',
    tagline: 'Boots on the ground, coast to coast',
    svgDiagram: fieldDiagram,
    shortDescription:
      'Dispatched technicians across 10 provinces for hardware installations, moves, break-fix, and on-site troubleshooting — 24/7.',
    description:
      "When technology needs hands-on attention, Pro-Tech delivers. Our field service technicians are dispatched quickly across 10 provinces — from British Columbia to Newfoundland — to handle hardware installations, equipment moves, break-fix work, and on-site troubleshooting with the same professionalism and expertise you expect from our managed services.\n\nWe operate 24/7, including after-hours and emergency dispatch, because we understand that downtime doesn't follow a schedule. Whether it's a critical server failure at midnight or a planned office relocation on a weekend, our technicians arrive prepared — equipped with the right tools and a complete history of your environment.\n\nEvery field visit is backed by detailed asset inventories and service records, so our technicians arrive informed and your team stays in control. We don't just fix the issue — we document it, learn from it, and use that knowledge to make every future visit faster and more efficient.\n\nFrom single-site deployments to multi-location rollouts spanning multiple provinces, Pro-Tech Field Services gives you enterprise-grade, on-the-ground IT support without the cost of building and managing your own regional teams.",
    features: [
      {
        icon: 'LuMap',
        title: 'Multi-Province Coverage',
        description:
          'Certified technicians deployed across 10 provinces — BC, AB, SK, MB, ON, QC, NB, NS, PEI, and NL. One vendor, one point of contact, coast to coast.',
      },
      {
        icon: 'LuZap',
        title: '24/7 Emergency Dispatch',
        description:
          "After-hours, weekend, and holiday dispatch available across all provinces. When something breaks at the worst possible time, we're already on the way.",
      },
      {
        icon: 'LuServer',
        title: 'Hardware Installation & Rack/Stack',
        description:
          'Full hardware deployment services including server rack installation, network equipment mounting, cable management, and end-user device setup.',
      },
      {
        icon: 'LuTruck',
        title: 'Equipment Moves & Relocations',
        description:
          'Planned office moves, equipment relocations, and multi-site deployments handled end-to-end with zero guesswork and minimal downtime.',
      },
      {
        icon: 'LuWrench',
        title: 'Break-Fix & Troubleshooting',
        description:
          'Fast diagnosis and repair of failed hardware, connectivity issues, and on-site technical problems — with a focus on first-visit resolution.',
      },
      {
        icon: 'LuClipboardCheck',
        title: 'Site Surveys & Assessments',
        description:
          'Pre-deployment site walks, infrastructure assessments, and cabling surveys to ensure every project starts with accurate, actionable information.',
      },
      {
        icon: 'LuPackage',
        title: 'Asset Tagging & Inventory Management',
        description:
          'Every device tagged, catalogued, and entered into your asset register. Full visibility into what you own, where it is, and when it was last serviced.',
      },
      {
        icon: 'LuFileText',
        title: 'Detailed Service History',
        description:
          "Every visit documented with technician notes, photos, and resolution details. Your environment's complete service record — always accessible, always current.",
      },
    ],
    approach: [
      {
        step: 1,
        title: 'Dispatch',
        description:
          "Work order received; a certified technician is assigned with the right tools and your site's service history in hand.",
      },
      {
        step: 2,
        title: 'Arrive',
        description:
          'Technician arrives on site, confirms scope with your team, and verifies safety, access, and equipment requirements.',
      },
      {
        step: 3,
        title: 'Resolve',
        description:
          'Work executed to spec — installation, repair, or relocation — with quality checks and sign-off before we leave.',
      },
      {
        step: 4,
        title: 'Document',
        description:
          'Visit notes, photos, and asset changes logged to your service record so every future visit is informed.',
      },
    ],
    relatedIndustries: ['retail', 'government', 'industrial'],
    relatedServices: ['managed-it-support', 'network-infrastructure', 'structured-cabling'],
  },
  {
    slug: 'cloud-hybrid-cloud',
    name: 'Cloud & Hybrid Cloud',
    icon: 'LuCloud',
    tagline: 'Scalable cloud solutions tailored to your workload', // PLACEHOLDER
    svgDiagram: cloudDiagram,
    shortDescription:
      'Cloud migration, hybrid cloud architecture, and managed cloud services that scale with your business demands.', // PLACEHOLDER
    // PLACEHOLDER
    description:
      "The cloud offers unmatched flexibility and scalability, but getting there requires careful planning and execution. Pro-Tech helps businesses migrate to the cloud, architect hybrid environments, and manage cloud workloads so you can focus on innovation rather than infrastructure.\n\nWe work with Microsoft Azure, Amazon Web Services, and Google Cloud Platform to design cloud solutions that match your workload requirements, compliance needs, and budget. Whether you are moving a single application or your entire data center, our cloud architects create a migration roadmap that minimizes risk and downtime.\n\nFor organizations that need to keep some workloads on-premises, we design hybrid cloud architectures that seamlessly connect your local infrastructure with cloud resources. Unified management tools give your team a single view across all environments.\n\nPro-Tech's managed cloud services take the complexity out of day-to-day cloud operations. We handle provisioning, monitoring, cost optimization, security, and compliance so your team can focus on building and deploying applications that drive business value.",
    features: [
      {
        icon: 'LuCloud',
        title: 'Multi-Cloud Architecture',
        description:
          'We design and deploy across Microsoft Azure, Amazon Web Services, and Google Cloud Platform — choosing the right platform for each workload rather than locking you into a single vendor.',
      },
      {
        icon: 'LuLink',
        title: 'Hybrid Cloud Design',
        description:
          'For workloads that need to stay on-premises — whether for compliance, latency, or cost reasons — we architect seamless hybrid environments that connect your local infrastructure with cloud resources through secure, high-performance links.',
      },
      {
        icon: 'LuRocket',
        title: 'Cloud Migration Planning',
        description:
          'Every migration starts with a thorough assessment of your current environment. We build a detailed migration roadmap that prioritizes workloads, minimizes risk, and ensures zero unplanned downtime.',
      },
      {
        icon: 'LuBot',
        title: 'AI & ML Integration',
        description:
          'We help you leverage intelligent cloud services — Azure OpenAI, AWS Bedrock, Google Vertex AI and more — to embed AI-powered capabilities directly into your cloud workloads and business applications.',
      },
      {
        icon: 'LuDollarSign',
        title: 'Cloud Cost Optimization',
        description:
          'Cloud bills spiral without proper governance. We implement rightsizing, reserved instance planning, auto-scaling policies, and tagging frameworks so you only pay for what you actually use.',
      },
      {
        icon: 'LuShieldCheck',
        title: 'Security & Compliance',
        description:
          'Every cloud environment we build follows Zero Trust principles, with identity-based access controls, encryption at rest and in transit, and compliance alignment for standards like SOC 2, ISO 27001, and PIPEDA.',
      },
      {
        icon: 'LuLayoutDashboard',
        title: 'Unified Management',
        description:
          'A single pane of glass across all your environments — cloud, hybrid, and on-premises — so your team has full visibility into performance, costs, security posture, and compliance status at all times.',
      },
      {
        icon: 'LuSettings',
        title: 'Managed Cloud Operations',
        description:
          'Once deployed, we handle the day-to-day — provisioning, patching, monitoring, backup verification, and incident response — so your internal team stays focused on building and delivering business value.',
      },
    ],
    // PLACEHOLDER
    approach: [
      {
        step: 1,
        title: 'Discover',
        description:
          'We assess your current workloads, dependencies, and compliance requirements to identify the best cloud strategy for your business.',
      },
      {
        step: 2,
        title: 'Architect',
        description:
          'Our cloud engineers design a target architecture with networking, security, disaster recovery, and cost controls built in.',
      },
      {
        step: 3,
        title: 'Migrate',
        description:
          'We execute the migration in planned waves, testing thoroughly at each stage and maintaining rollback capabilities throughout.',
      },
      {
        step: 4,
        title: 'Optimize',
        description:
          'Continuous monitoring, cost analysis, and performance tuning ensure your cloud environment delivers maximum value over time.',
      },
    ],
    relatedIndustries: ['finance', 'healthcare', 'government'],
    relatedServices: ['network-infrastructure', 'managed-it-support'],
  },
  {
    slug: 'project-management',
    name: 'Project Management & Deployment',
    icon: 'LuClipboardList',
    svgDiagram: null,
    tagline: 'Expert project delivery from planning to go-live', // PLACEHOLDER
    shortDescription:
      'Full-lifecycle IT project management ensuring on-time, on-budget delivery of complex technology deployments.', // PLACEHOLDER
    // PLACEHOLDER
    description:
      "Complex IT projects demand disciplined planning, clear communication, and expert execution. Pro-Tech's project management team brings PMP-certified leadership to every engagement, ensuring your technology deployments are delivered on time, on budget, and to specification.\n\nFrom multi-site network rollouts to data center builds and office relocations, we manage the full project lifecycle. Our project managers coordinate vendors, track milestones, manage risks, and keep all stakeholders informed with regular status reporting and transparent communication.\n\nWe use proven project management methodologies adapted to the pace and demands of IT infrastructure work. Detailed project plans, resource schedules, and risk registers keep every workstream on track while change management processes ensure scope is controlled without stifling progress.\n\nWhether you need a dedicated project manager for a large-scale deployment or supplemental PM support for your internal team, Pro-Tech provides the leadership and structure that turns ambitious IT initiatives into successful outcomes.",
    // PLACEHOLDER
    features: [
      {
        icon: 'LuKanban',
        title: 'Project Planning',
        description:
          'Detailed project plans with milestones, resource allocation, dependencies, and critical path analysis for complex deployments.',
      },
      {
        icon: 'LuUsers',
        title: 'Vendor Coordination',
        description:
          'Multi-vendor management, procurement support, and logistics coordination to keep all project participants aligned.',
      },
      {
        icon: 'LuAlertTriangle',
        title: 'Risk Management',
        description:
          'Proactive risk identification, mitigation planning, and issue escalation to prevent delays and cost overruns.',
      },
      {
        icon: 'LuFileText',
        title: 'Status Reporting',
        description:
          'Regular status reports, executive dashboards, and stakeholder communication to maintain visibility throughout the project.',
      },
      {
        icon: 'LuCheckCircle',
        title: 'Quality Assurance',
        description:
          'Testing protocols, acceptance criteria, and sign-off procedures that ensure deliverables meet specifications before handover.',
      },
    ],
    // PLACEHOLDER
    approach: [
      {
        step: 1,
        title: 'Initiate',
        description:
          'We define the project scope, objectives, success criteria, and governance structure in a formal project charter.',
      },
      {
        step: 2,
        title: 'Plan',
        description:
          'Our PM builds a detailed work breakdown structure, resource plan, risk register, and communication plan for all stakeholders.',
      },
      {
        step: 3,
        title: 'Execute',
        description:
          'We manage day-to-day execution, coordinate teams and vendors, track progress against milestones, and resolve issues in real time.',
      },
      {
        step: 4,
        title: 'Close',
        description:
          'Formal project closure includes testing sign-off, documentation handover, lessons learned, and transition to operations support.',
      },
    ],
    relatedIndustries: ['government', 'industrial', 'education'],
    relatedServices: ['network-infrastructure', 'structured-cabling'],
  },
];
