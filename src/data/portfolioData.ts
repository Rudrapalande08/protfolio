import { Project, Service, ProcessStep, ExperienceItem, ToolItem, SocialReel } from '../types';

export const PERSONAL_INFO = {
  name: 'Shreehari Chougule',
  shortName: 'Shreehari',
  title: 'Creative Head',
  subtitle: 'Creative Head • Graphic Designer & Video Creator',
  tagline: 'Turning Raw Footage Into Stories That Move.',
  bio: "Hello there! I'm a creative designer with over four years of experience in transforming ideas into visually compelling realities. Having a BFA Degree in Art Studies from MIT World Peace University (Grade: A+), I blend artistic sensibility with a keen focus on functional design. My expertise spans graphic design, branding, digital illustration, and web design, with proficiency in Adobe Creative Suite. I thrive on challenges, finding innovative solutions that leave a lasting impact.",
  extendedBio: "From the first cut to the final color grade, I focus on rhythm, emotion, storytelling, and visual impact. Whether it's a cinematic film, social media reel, music video, advertisement, or brand campaign, every frame has a purpose.",
  portraitPhoto: 'assets/projects/shreehari_portrait.jpg',
  avatarPhoto: 'assets/projects/shreehari_avatar.jpg',
  location: 'Mumbai / Pune, India • Available for Full-Time, Remote & Freelance Roles',
  email: 'shreeharichougule.design@gmail.com',
  secondaryEmail: 'hello@shreehari.me',
  whatsapp: '+91 98765 43210',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
  behance: 'https://behance.net',
  linkedin: 'https://linkedin.com',
  vimeo: 'https://vimeo.com',
  stats: [
    { number: '4+', label: 'Years Experience', desc: 'Creative leadership & video production' },
    { number: 'BFA (A+)', label: 'Art Studies Degree', desc: 'MIT World Peace University' },
    { number: 'GD Art', label: 'Applied Art Program', desc: 'Abhinav Kala Mahavidyalaya' },
    { number: '3+', label: 'Agency Roles', desc: 'Digitally Bugged & Rhetorica' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'social-media-collection',
    title: 'SOCIAL MEDIA COLLECTION & CAMPAIGNS',
    category: 'Social Media',
    categoryLabel: 'Social Media Creatives & Ads',
    year: '2024',
    description: 'High-impact social media creatives, festival campaigns, luxury product showcases, and real estate visual branding crafted for maximum digital engagement, CTR, and brand recall.',
    longDescription: 'High-impact social media creatives, festival campaigns, luxury product showcases, and real estate visual branding crafted for maximum digital engagement, CTR, and brand recall. Features festival campaigns for Ariana Home (Ganesh Chaturthi, Happy Dhanteras, Gandhi Jayanti, Navratri, Happy Onam, Happy New Year, Independence Day) and luxury real estate branding for Kundan Spaces (Pearls of Luxury, Eternia 2.0).',
    technology: ['Adobe Photoshop', 'Adobe Illustrator', 'Creative Direction', 'Social Campaign Strategy'],
    thumbnail: 'assets/projects/detailed/instagram_posts_grid.jpg',
    aspectRatio: '16:9',
    featured: true,
    gallery: [
      'assets/projects/detailed/instagram_posts_grid.jpg',
      'assets/projects/logos/logo_01.jpg',
      'assets/projects/logos/logo_02.jpg',
      'assets/projects/logos/logo_03.jpg',
      'assets/projects/logos/logo_04.jpg',
      'assets/projects/logos/logo_05.jpg',
      'assets/projects/logos/logo_06.jpg',
      'assets/projects/logos/logo_07.jpg',
      'assets/projects/logos/logo_08.jpg',
      'assets/projects/logos/logo_09.jpg',
      'assets/projects/logos/logo_10.jpg'
    ],
    deliverables: ['Festival & Campaign Post Suites', 'Luxury Product Showcases', 'Real Estate Visual Branding', 'High-CTR Social Creatives']
  },
  {
    id: 'nexaedge-branding',
    title: 'BRAND IDENTITY & PACKAGING SUITE',
    category: 'Branding',
    categoryLabel: 'Brand Identity & Visual System',
    year: '2024',
    description: 'A strong brand is more than just a logo—it\'s an identity. I create cohesive and memorable brand designs that reflect your vision, connect with your audience, and leave a lasting impression. From logos to brand elements, every detail is crafted for impact.',
    longDescription: 'A strong brand is more than just a logo—it\'s an identity. I create cohesive and memorable brand designs that reflect your vision, connect with your audience, and leave a lasting impression. From logos to brand elements, every detail is crafted for impact. Includes complete corporate stationery, business cards, letterheads, branded packaging boxes with intricate motifs, and luxury gift suites.',
    technology: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Manual', 'Print Setup'],
    thumbnail: 'assets/projects/detailed/branding_stationery.jpg',
    aspectRatio: '16:9',
    featured: true,
    gallery: [
      'assets/projects/detailed/branding_stationery.jpg',
      'assets/projects/detailed/branding_packaging_boxes.jpg',
      'assets/projects/branding/nexaedge_branding_01.jpg',
      'assets/projects/branding/scandour_branding_01.jpg'
    ],
    deliverables: ['Corporate Stationery Suite', 'Luxury Gift Packaging', 'Brand Guidelines Manual', 'Business Cards & Letterheads']
  },
  {
    id: 'social-media-posts',
    title: 'SOCIAL MEDIA CREATIVES & INSTAGRAM POSTS',
    category: 'Print',
    categoryLabel: 'Instagram Posts & Banners',
    year: '2024',
    description: 'Captivating visuals designed to elevate your brand! My static social media creatives are crafted to grab attention, communicate messages effectively, and enhance engagement. Every design is a blend of strategy and aesthetics, ensuring a strong and lasting impact.',
    longDescription: 'Captivating visuals designed to elevate your brand! My static social media creatives are crafted to grab attention, communicate messages effectively, and enhance engagement. Every design is a blend of strategy and aesthetics, ensuring a strong and lasting impact. Features festival creatives (Maha Shivratri, Happy Onam, Happy New Year, Ganesh Chaturthi), healthcare & nutraceutical gummies product ads, and corporate LinkedIn banners.',
    technology: ['Adobe Photoshop', 'Adobe Illustrator', 'Typography', 'Color Harmony'],
    thumbnail: 'assets/projects/detailed/instagram_posts_grid.jpg',
    aspectRatio: '16:9',
    featured: true,
    gallery: [
      'assets/projects/detailed/instagram_posts_grid.jpg',
      'assets/projects/detailed/linkedin_banners_grid.jpg',
      'assets/projects/social/social_creative_01.jpg',
      'assets/projects/social/social_creative_02.jpg'
    ],
    deliverables: ['16+ Instagram Grid Creatives', '4+ LinkedIn Thought-Leadership Banners', 'Festival & Promotional Templates', 'High-CTR Ad Visuals']
  },
  {
    id: 'packaging-print-suite',
    title: 'PACKAGING & BROCHURE DESIGNS',
    category: 'Print',
    categoryLabel: 'Packaging & Brochure Media',
    year: '2024',
    description: 'Eye-catching, functional, and brand-focused—my packaging designs make products stand out and leave a lasting impression. Clean, elegant brochure layouts for corporate presentation.',
    longDescription: 'Eye-catching, functional, and brand-focused—my packaging designs make products stand out and leave a lasting impression. Includes multi-fold corporate brochures, Indian sweets/mithai packaging boxes with rich red and gold motifs, incense/fragrance gift packaging, and product catalogs.',
    technology: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop', '3D Mockup'],
    thumbnail: 'assets/projects/detailed/packaging_boxes_grid.jpg',
    aspectRatio: '16:9',
    featured: true,
    gallery: [
      'assets/projects/detailed/packaging_boxes_grid.jpg',
      'assets/projects/detailed/brochures_grid.jpg',
      'assets/projects/print/packaging_showcase_01.jpg',
      'assets/projects/print/brochure_showcase_01.jpg'
    ],
    deliverables: ['Print-Ready Die-Lines (CMYK)', 'Luxury Mithai & Sweet Boxes', 'Multi-Fold Corporate Brochures', 'Product Catalogs']
  },
  {
    id: 'menu-card-designs',
    title: 'MENU-CARD DESIGNS',
    category: 'Print',
    categoryLabel: 'Hospitality & Restaurant Print',
    year: '2024',
    description: 'Eye-catching, functional, and brand-focused—my menu-card designs elevate the dining experience with exquisite typography and rich visual hierarchy.',
    longDescription: 'Designed for upscale dining and hospitality brands. Features rich crimson and gold color palettes, traditional ornamental border motifs, clear typographic category hierarchy, and premium tactile print specifications.',
    technology: ['Adobe Illustrator', 'Adobe Photoshop', 'InDesign', 'Print Finishing'],
    thumbnail: 'assets/projects/detailed/menu_cards_grid.jpg',
    aspectRatio: '16:9',
    featured: true,
    gallery: [
      'assets/projects/detailed/menu_cards_grid.jpg',
      'assets/projects/print/menu_card_showcase_01.jpg'
    ],
    deliverables: ['Tri-Fold Restaurant Menu Cards', 'Table-Top Tent Menus', 'Foil Stamping Print Layers', 'Digital PDF Menu Version']
  },
  {
    id: 'lonza-web-experience',
    title: 'WEBSITE LANDING PAGE — LONZA & UC-II',
    category: 'UI/Web',
    categoryLabel: 'Website Landing Page',
    year: '2024',
    description: 'Clean, engaging, and conversion-focused—my landing page designs create a strong first impression and drive results.',
    longDescription: 'Clean, engaging, and conversion-focused—my landing page designs create a strong first impression and drive results. Created for Lonza / UC-II collagen health products, combining crisp typography, responsive layout hierarchy, clinical product benefit columns, and persuasive call-to-action buttons.',
    technology: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Layout'],
    thumbnail: 'assets/projects/detailed/lonza_laptop_landing.jpg',
    aspectRatio: '16:9',
    featured: true,
    gallery: [
      'assets/projects/detailed/lonza_laptop_landing.jpg',
      'assets/projects/web/lonza_landing_page.jpg'
    ],
    deliverables: ['Full Desktop & Mobile Landing Page', 'Product Authority Hero Section', 'Conversion Funnel Layout', 'Interactive Component UI']
  },
  {
    id: 'midnight-stories',
    title: 'MIDNIGHT STORIES',
    category: 'Cinematic',
    categoryLabel: 'Cinematic Short Film',
    year: '2026',
    description: 'A cinematic short film exploring ambition, loneliness, and the quiet moments between.',
    longDescription: 'Midnight Stories is a mood-driven narrative short film. The editing focused on building suspense through rhythmic slow pacing, subtle sound design layers, and an anamorphic teal-and-amber film grade in DaVinci Resolve.',
    technology: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound Design'],
    thumbnail: 'assets/projects/video/midnight_stories_thumb.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    aspectRatio: '16:9',
    featured: true,
    deliverables: ['Director Cut (08:30)', 'Theatrical Trailer (01:15)', 'Social Teasers (00:30)']
  },
  {
    id: 'urban-motion',
    title: 'URBAN MOTION',
    category: 'Commercial',
    categoryLabel: 'Commercial / Brand Film',
    year: '2025',
    description: 'A high-energy visual campaign combining fast-paced editing, motion graphics, and cinematic transitions.',
    longDescription: 'Created for a premier streetwear and urban lifestyle brand. This edit features seamless whip pans, speed ramping synced to 138 BPM trap percussion, kinetic 3D typography rendered in Blender, and dynamic sound design.',
    technology: ['Premiere Pro', 'After Effects', 'Blender 3D'],
    thumbnail: 'assets/projects/video/urban_motion_thumb.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    aspectRatio: '16:9',
    featured: true,
    deliverables: ['4K Commercial (00:60)', 'Instagram Cut (00:30)', 'TikTok 9:16 (00:15)']
  },
  {
    id: '30-seconds',
    title: '30 SECONDS',
    category: 'Reels',
    categoryLabel: 'Social Media Campaign',
    year: '2025',
    description: 'A collection of short-form videos designed for maximum retention, instant hooks, and viral engagement.',
    longDescription: 'Engineered specifically for short-attention spans on Instagram Reels and TikTok. Using psychology-based retention hooks in the first 2 seconds, punch-in zooms, bespoke animated subtitles, sound effect risers, and high-contrast color styling.',
    technology: ['Premiere Pro', 'After Effects', 'CapCut Pro'],
    thumbnail: 'assets/projects/video/30_seconds_thumb.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    aspectRatio: '9:16',
    featured: true,
    deliverables: ['12x Vertical Reels', 'Bespoke Subtitle Presets', 'Audio Hook Library']
  },
  {
    id: 'behind-the-lens',
    title: 'BEHIND THE LENS',
    category: 'YouTube',
    categoryLabel: 'YouTube / Documentary',
    year: '2025',
    description: 'Story-driven documentary editing combining interviews, evocative B-roll, sound design, and cinematic pacing.',
    longDescription: 'A 22-minute documentary following independent artisans and creators. The edit seamlessly interweaves emotional dialogue, multi-track atmospheric foley, archival photo animations (2.5D parallax), and golden-hour color grading.',
    technology: ['Premiere Pro', 'DaVinci Resolve', 'Photoshop'],
    thumbnail: 'assets/projects/video/behind_the_lens_thumb.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    aspectRatio: '16:9',
    featured: true,
    deliverables: ['Full Documentary (22:40)', 'High CTR Thumbnails', 'Chaptered YouTube Master']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand Identity',
    description: 'Building distinctive visual identities that make brands recognizable, consistent, and memorable.',
    deliverables: ['Logo Design & Visual Identity', 'Brand Guidelines', 'Typography & Color Systems', 'Brand Applications'],
    icon: 'Fingerprint',
    highlight: 'Visual Recognition'
  },
  {
    id: 'graphic-design',
    number: '02',
    title: 'Graphic Design',
    description: 'Strategic visual design for digital, print, campaigns, and brand communication.',
    deliverables: ['Social Media Creatives', 'Campaign & Advertising Design', 'Packaging Design', 'Marketing Collaterals'],
    icon: 'PenTool',
    highlight: 'Strategic Design'
  },
  {
    id: 'motion-design',
    number: '03',
    title: 'Motion Design',
    description: 'Dynamic motion graphics that bring brands, ideas, and visual communication to life.',
    deliverables: ['Kinetic Typography', 'Logo Animation', '2.5D & Motion Graphics', 'Visual Effects & Transitions'],
    icon: 'Layers',
    highlight: 'Dynamic Communication'
  },
  {
    id: 'video-editing',
    number: '04',
    title: 'Video Editing',
    description: 'Professional video editing built around strong storytelling, pacing, and visual rhythm.',
    deliverables: ['YouTube & Brand Films', 'Multi-Cam Editing', 'B-Roll Integration', 'Color Correction & Sound Sync'],
    icon: 'Film',
    highlight: 'Narrative Rhythm'
  },
  {
    id: 'ai-video-production',
    number: '05',
    title: 'AI Video Production',
    description: 'AI-powered visual production combining creative direction, generative visuals, and cinematic storytelling.',
    deliverables: ['AI Video Generation', 'AI Product Visuals', 'Image-to-Video Animation', 'AI-Assisted Creative Production'],
    icon: 'Sparkles',
    highlight: 'Generative Storytelling'
  },
  {
    id: 'social-media-content',
    number: '06',
    title: 'Social Media Content',
    description: 'Platform-focused content designed to capture attention, communicate quickly, and strengthen brand presence.',
    deliverables: ['Reels & Short-Form Videos', 'Social Media Campaigns', 'Carousel & Static Creatives', 'Content Adaptation & Formats'],
    icon: 'Smartphone',
    highlight: 'Engagement Optimization'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    shortDesc: 'Story, Audience & Direction',
    fullDesc: 'Understanding the story, audience, and creative direction. We analyze the creative brief, understand the emotional core of the narrative, analyze the target audience, and establish the visual tone, rhythm, and color palette.',
    keyAction: 'Creative brief analysis & moodboarding',
    deliverable: 'Visual direction & pacing guideline'
  },
  {
    number: '02',
    title: 'SELECT',
    shortDesc: 'Organizing & Hero Takes',
    fullDesc: 'Organizing footage and selecting the strongest shots. Ingesting raw rushes, syncing multi-track audio, logging footage, and cherry-picking the absolute strongest hero takes.',
    keyAction: 'Rushes logging & audio sync',
    deliverable: 'Organized project & selected selects'
  },
  {
    number: '03',
    title: 'EDIT',
    shortDesc: 'Pacing, Rhythm & Montage',
    fullDesc: 'Building the story through pacing, rhythm, and transitions. Precision assembly, cutting on action, fine-tuning beats to soundtrack tempo, and ensuring an unbroken emotional flow.',
    keyAction: 'Rough cut & rhythmic fine cut',
    deliverable: 'Locked cut (Picture Lock)'
  },
  {
    number: '04',
    title: 'ENHANCE',
    shortDesc: 'Color, Motion & Sound FX',
    fullDesc: 'Adding color grading, motion graphics, sound design, and visual effects. Applying DaVinci Resolve color grading, integrating After Effects motion graphics, foley sound design, and audio cleanup.',
    keyAction: 'Color grade, VFX & audio mixing',
    deliverable: 'Graded & mixed master candidate'
  },
  {
    number: '05',
    title: 'DELIVER',
    shortDesc: 'Final QC & Platform Delivery',
    fullDesc: 'Final quality control and exporting content optimized for its platform. Generating crisp 4K ProRes/MP4 masters and exporting platform-tailored formats (16:9, 9:16, 1:1).',
    keyAction: 'Quality check & platform optimization',
    deliverable: 'Final 4K masters & source archives'
  }
];

export const TOOLS_AND_SKILLS: { tools: ToolItem[]; skills: string[] } = {
  tools: [
    { name: 'Adobe Illustrator', category: 'Design & Vector', proficiency: 'Master', iconName: 'Ai', badge: 'Design, Vector Illustrations, Logos etc', color: '#FF9A00' },
    { name: 'Adobe Photoshop', category: 'Design & Vector', proficiency: 'Master', iconName: 'Ps', badge: 'Design, Illustrations, Photo Editing etc', color: '#31A8FF' },
    { name: 'Adobe After Effects', category: 'Motion & VFX', proficiency: 'Advanced', iconName: 'Ae', badge: 'Animations, Reels, UI Animations etc', color: '#D291FF' },
    { name: 'Adobe Premiere Pro', category: 'Video Editing', proficiency: 'Master', iconName: 'Pr', badge: 'Professional Video Editing & Rhythmic Cuts', color: '#9999FF' },
    { name: 'Blender 3D', category: '3D & CG', proficiency: 'Proficient', iconName: '3D', badge: '3D Modeling, Motion & Video Editing', color: '#F5792A' },
    { name: 'DaVinci Resolve', category: 'Color Grading', proficiency: 'Advanced', iconName: 'Dv', badge: 'Cinematic Color Grading & LUTs', color: '#FF764D' },
    { name: 'CapCut Pro', category: 'Video Editing', proficiency: 'Master', iconName: 'Cc', badge: 'High-Retention Short Form & Captions', color: '#00F2FE' }
  ],
  skills: [
    'Creative Direction',
    'Video Editing',
    'Color Grading',
    'Motion Graphics',
    'Visual Effects',
    'Sound Design',
    'Storytelling',
    'Cinematic Editing',
    'Short-Form Editing',
    'YouTube Editing',
    'Commercial Editing',
    'Brand Identity Systems',
    'Luxury Packaging & Print',
    'Website Landing Pages',
    'Social Media Creatives'
  ]
};

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Creative Head / Senior Graphic Designer',
    company: 'Digitally Bugged',
    period: 'Feb 2024 — Present · 1 yr 1 mo',
    type: 'Full-time',
    location: 'Mumbai, Maharashtra, India · Remote',
    description: 'Leading creative design direction, brand identity systems, social media creatives, print media, packaging, and high-impact digital video content for brands.',
    highlights: [
      'Spearheaded creative campaigns and motion assets for fast-growing brands',
      'Designed end-to-end visual identities for brands, digital products, and e-commerce campaigns'
    ]
  },
  {
    id: 'exp-2',
    role: 'Graphic Designer',
    company: 'Rhetorica-Politik',
    period: 'Nov 2022 — Nov 2023 · 1 yr 1 mo',
    type: 'Full-time',
    location: 'Pune, Maharashtra, India · Hybrid',
    description: 'Crafted impactful visual communication, political and corporate campaign creatives, dynamic video teasers, brochures, and digital presentations.',
    highlights: [
      'Designed high-impact print brochures, banners, and infographics under tight deadlines',
      'Produced video content viewed by broad audiences across digital platforms'
    ]
  },
  {
    id: 'exp-3',
    role: 'Graphic Designer',
    company: 'SocialChamps Media Pvt. Ltd.',
    period: 'Aug 2021 — Jan 2022 · 6 mos',
    type: 'Full-time',
    location: 'Bavdhan Khurd, Pune, Maharashtra, India',
    description: 'Executed high-impact static social media creatives, Instagram carousels, LinkedIn banners, and promotional content for diverse agency clients.',
    highlights: [
      'Produced creative assets with strategic visual appeal and brand consistency',
      'Designed conversion-focused campaign creatives for healthcare and consumer brands'
    ]
  },
  {
    id: 'exp-4',
    role: 'Independent Creative Head & Visual Storyteller',
    company: 'Freelance Studio',
    period: '2020 — Present',
    type: 'Freelance',
    location: 'Global (Remote)',
    description: 'Collaborating directly with YouTubers, brand founders, film directors, and marketing agencies globally to edit cinematic films, viral short-form reels, and commercial spots.',
    highlights: [
      'Delivered client projects with consistent high quality and positive feedback',
      'Mastered end-to-end post-production pipeline from raw footage to 4K delivery'
    ]
  },
  {
    id: 'edu-1',
    role: 'Bachelor of Fine Arts - BFA, Art / Art Studies, General',
    company: 'MIT World Peace University',
    period: 'May 2022 — May 2023',
    type: 'Education',
    location: 'Pune, India',
    description: 'Specialized in visual composition, color theory, aesthetics, and modern digital media. Graduated with top academic standing (Grade: A+).',
    highlights: ['Graduated Grade: A+', 'Specialized in Fine Arts, Visual Composition & Digital Media']
  },
  {
    id: 'edu-2',
    role: 'GD Art — applied art (4-Year Program)',
    company: "BKP Sabha's Abhinav Kala Maha Vidyalaya",
    period: '2018 — 2022',
    type: 'Education',
    location: 'Pune, India',
    description: 'Four-year rigorous foundation in traditional illustration, typography, advertising design, spatial balance, and visual communication.',
    highlights: ['Comprehensive 4-Year Applied Art Diploma', 'Strong foundation in typography, layout & illustration']
  }
];

export const BRANDS = [
  { name: 'DIGITALLY BUGGED', symbol: '● DIGITALLY BUGGED' },
  { name: 'RHETORICA-POLITIK', symbol: '◈ RHETORICA-POLITIK' },
  { name: 'SOCIALCHAMPS MEDIA', symbol: '▲ SOCIALCHAMPS MEDIA' },
  { name: 'LONZA & UC-II', symbol: '● LONZA & UC-II' },
  { name: 'MIT WORLD PEACE UNIVERSITY', symbol: '✦ MIT-WPU' },
  { name: 'AUGUSTBROWN', symbol: '◆ AUGUSTBROWN' },
  { name: 'NEXAEDGE', symbol: '■ NEXAEDGE' },
  { name: 'S-CANDOUR', symbol: '✦ S-CANDOUR' }
];

export const SOCIAL_REELS: SocialReel[] = [
  {
    id: 'reel-1',
    title: 'Motion Graphics & UI Transitions',
    category: 'After Effects',
    views: '1080x1920 (9:16)',
    thumbnail: 'assets/projects/video/reel_01.jpg',
    platform: 'Instagram',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: 'reel-2',
    title: 'Cinematic Color Grading & Film Look',
    category: 'DaVinci Resolve',
    views: 'Film LUT / 24FPS',
    thumbnail: 'assets/projects/video/reel_02.jpg',
    platform: 'Instagram',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    id: 'reel-3',
    title: 'Kinetic Typography & Dynamic Titles',
    category: 'Motion Design',
    views: 'After Effects',
    thumbnail: 'assets/projects/video/reel_03.jpg',
    platform: 'YouTube Shorts',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  },
  {
    id: 'reel-4',
    title: 'Streetwear Brand Commercial Promo',
    category: 'Video Editing',
    views: 'Premiere Pro',
    thumbnail: 'assets/projects/video/reel_04.jpg',
    platform: 'TikTok',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4'
  },
  {
    id: 'reel-5',
    title: 'High-Pacing Video Cutdown & Sync',
    category: 'Social Content',
    views: 'Rhythmic Cuts',
    thumbnail: 'assets/projects/video/reel_05.jpg',
    platform: 'Instagram',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: 'reel-6',
    title: 'Sound Design, Foley & VFX Drop',
    category: 'Post-Production',
    views: 'Spatial Audio',
    thumbnail: 'assets/projects/video/reel_06.jpg',
    platform: 'YouTube Shorts',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
  }
];

export const LOGOFOLIO_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: `logo-${i + 1}`,
  number: String(i + 1).padStart(2, '0'),
  image: `assets/projects/logos/logo_${String(i + 1).padStart(2, '0')}.jpg`,
  title: `Logomark Concept #${i + 1}`,
  category: 'Identity Design'
}));
