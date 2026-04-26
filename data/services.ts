import { Globe, Smartphone, BarChart, Cpu, Layout, Image, Briefcase, Zap, Satellite, Wifi, Palette } from 'lucide-react'

export const services = [
  {
    slug: 'creation-site-web',
    title: 'Création de Site Web',
    icon: Globe,
    shortDesc: 'Des sites vitrines et e-commerce performants et élégants.',
    fullDesc: 'Nous concevons des sites web sur mesure qui allient design premium et performance technique. Que ce soit pour une vitrine professionnelle ou une boutique en ligne complexe, nous utilisons les dernières technologies (Next.js, React) pour garantir une expérience utilisateur fluide.',
    features: ['Design Responsive', 'Optimisation SEO initiale', 'Vitesse de chargement éclair', 'Interface d’administration intuitive'],
    imagePrompt: 'Premium modern web design agency portfolio, dark mode, glowing blue accents, glassmorphism UI'
  },
  {
    slug: 'installation-starlink',
    title: 'Installation Starlink',
    icon: Satellite,
    shortDesc: 'Internet par satellite haute vitesse, partout où vous êtes.',
    fullDesc: 'DigitalH est votre expert pour l’installation et la configuration de kits Starlink. Profitez d’une connexion internet stable et ultra-rapide, même dans les zones les plus reculées. Nous gérons le montage, le câblage et l’optimisation du signal.',
    features: ['Installation professionnelle', 'Configuration réseau Wi-Fi', 'Support technique dédié', 'Optimisation de la latence'],
    imagePrompt: 'Starlink satellite dish installation on a modern building roof, futuristic technology, clear sky, cinematic lighting'
  },
  {
    slug: 'application-mobile',
    title: 'Application Mobile Android',
    icon: Smartphone,
    shortDesc: 'Des apps intuitives et puissantes pour toucher vos clients sur mobile.',
    fullDesc: 'Nous développons des applications mobiles natives et hybrides qui offrent une expérience utilisateur exceptionnelle. De la conception UI/UX à la publication sur le Play Store, nous vous accompagnons à chaque étape.',
    features: ['Interface intuitive', 'Performances optimisées', 'Notifications push', 'Intégration API'],
    imagePrompt: 'Modern Android smartphone showing a premium financial app UI, dark mode, vibrant gradients, high-tech aesthetic'
  },
  {
    slug: 'seo',
    title: 'SEO (Référencement Naturel)',
    icon: BarChart,
    shortDesc: 'Dominez les premiers résultats de recherche sur Google.',
    fullDesc: 'Augmentez votre visibilité organique et attirez un trafic qualifié. Notre stratégie SEO repose sur un audit technique profond, une optimisation de contenu sémantique et une stratégie de netlinking robuste.',
    features: ['Audit SEO complet', 'Optimisation on-page', 'Stratégie de mots-clés', 'Rapports mensuels de performance'],
    imagePrompt: 'Search engine optimization data visualization, glowing 3D charts and graphs, dark professional background'
  },
  {
    slug: 'saas-immobilier',
    title: 'SaaS Immobilier',
    icon: Layout,
    shortDesc: 'Plateforme de gestion immobilière intelligente.',
    fullDesc: 'Une solution logicielle complète pour les agences immobilières. Gérez vos annonces, vos clients (CRM) et vos transactions sur une interface unique et ultra-moderne.',
    features: ['Gestion des annonces', 'CRM intégré', 'Suivi des paiements', 'Génération de contrats'],
    imagePrompt: 'Real estate management software dashboard on a laptop, modern clean UI, house icons, 3D architecture elements'
  },
  {
    slug: 'sea',
    title: 'SEA (Publicité Google)',
    icon: Zap,
    shortDesc: 'Visibilité immédiate et trafic qualifié via Google Ads.',
    fullDesc: 'Boostez vos ventes rapidement avec des campagnes publicitaires ciblées sur Google Search et Display. Nous optimisons vos enchères et vos annonces pour un ROI maximal.',
    features: ['Gestion de campagnes Ads', 'Ciblage précis', 'Optimisation du conversion rate', 'Suivi du budget'],
    imagePrompt: 'Digital advertising dashboard, Google Ads interface, glowing metrics, professional business growth'
  },
  {
    slug: 'abonnement-iptv',
    title: 'Abonnement IPTV',
    icon: Smartphone,
    shortDesc: 'Accès premium aux chaînes mondiales en haute définition.',
    fullDesc: 'Profitez d’un large choix de chaînes internationales, films et séries avec nos abonnements IPTV premium. Stabilité garantie et qualité 4K/UHD.',
    features: ['+10 000 chaînes', 'VOD incluse', 'Compatible tous supports', 'Support 24/7'],
    imagePrompt: 'Modern home cinema setup, smart TV showing a premium streaming interface, cozy living room, cinematic lighting'
  },
  {
    slug: 'antennes-vsat',
    title: 'Installation Antennes VSAT',
    icon: Satellite,
    shortDesc: 'Connectivité satellite professionnelle pour entreprises.',
    fullDesc: 'Installation de stations VSAT et antennes paraboliques pour les entreprises et institutions nécessitant une connexion internet ou TV robuste par satellite.',
    features: ['Installation VSAT Pro', 'Pointage haute précision', 'Maintenance préventive', 'Solutions sur mesure'],
    imagePrompt: 'Large professional VSat satellite station in an industrial environment, blue sky, high-tech communications'
  },
  {
    slug: 'gestion-reseaux-sociaux',
    title: 'Gestion Réseaux Sociaux',
    icon: BarChart,
    shortDesc: 'Engagez votre communauté et boostez votre image de marque.',
    fullDesc: 'Nous gérons votre présence sur Facebook, Instagram, LinkedIn et TikTok. Création de contenu, modération et stratégies d’engagement pour transformer vos abonnés en clients.',
    features: ['Calendrier éditorial', 'Création de contenu visuel', 'Gestion de communauté', 'Social Ads'],
    imagePrompt: 'Social media management workspace, smartphone and tablet showing social feeds, colorful aesthetic, modern creative agency'
  },
  {
    slug: 'creation-logo',
    title: 'Création de Logo',
    icon: Palette,
    shortDesc: 'Une identité visuelle unique et mémorable.',
    fullDesc: 'Votre logo est le visage de votre entreprise. Nous créons des identités visuelles fortes, modernes et déclinables sur tous vos supports de communication.',
    features: ['Design sur mesure', 'Plusieurs concepts', 'Fichiers HD & Vectoriels', 'Charte graphique de base'],
    imagePrompt: 'Graphic designer workspace, large monitor showing a logo design process, minimalist aesthetic, creative tools'
  },
  {
    slug: 'site-wordpress',
    title: 'Création Site WordPress',
    icon: Globe,
    shortDesc: 'La puissance de WordPress alliée à un design unique.',
    fullDesc: 'Nous créons des sites WordPress robustes, sécurisés et optimisés pour le référencement. Idéal pour les blogs, magazines et sites d’actualités nécessitant une gestion de contenu autonome.',
    features: ['Thème sur mesure', 'Sécurisation avancée', 'Formation à l’outil', 'Plugins premium inclus'],
    imagePrompt: 'WordPress logo 3D glass sculpture, glowing blue light, professional software development environment'
  },
  {
    slug: 'application-web',
    title: 'Application Web',
    icon: Layout,
    shortDesc: 'Des solutions métier complexes accessibles via navigateur.',
    fullDesc: 'Développement de plateformes web interactives, tableaux de bord et outils de gestion sur mesure utilisant les technologies les plus modernes (React, Next.js).',
    features: ['Architecture évolutive', 'Sécurité renforcée', 'Interface réactive', 'Multi-plateforme'],
    imagePrompt: 'Complex web application dashboard, dark mode, vibrant data visualizations, 3D UI elements'
  },
  {
    slug: 'logiciel-portefeuille',
    title: 'Logiciel de Gestion Portefeuille',
    icon: Briefcase,
    shortDesc: 'Gérez vos actifs et investissements en toute simplicité.',
    fullDesc: 'Une solution logicielle dédiée à la gestion de portefeuilles d’actifs, suivi des investissements et reporting financier en temps réel.',
    features: ['Suivi temps réel', 'Graphiques analytiques', 'Historique des transactions', 'Alertes personnalisées'],
    imagePrompt: 'Portfolio management software on a tablet, stock market charts, professional finance aesthetic, glowing neon lines'
  },
  {
    slug: 'affiches-publicitaires',
    title: 'Affiches Publicitaires',
    icon: Palette,
    shortDesc: 'Des visuels percutants pour vos campagnes physiques et digitales.',
    fullDesc: 'Conception graphique d’affiches, flyers et bannières publicitaires qui captent l’attention et transmettent votre message avec force.',
    features: ['Design créatif', 'Haute résolution', 'Formats adaptés', 'Retouches illimitées'],
    imagePrompt: 'Creative advertising poster design hanging in a modern art gallery, vibrant colors, minimalist typography'
  },
  {
    slug: 'automatisation',
    title: 'Automatisation de Processus',
    icon: Zap,
    shortDesc: 'Gagnez du temps en automatisant vos tâches répétitives.',
    fullDesc: 'Nous concevons des workflows automatisés pour connecter vos outils (Zapier, Make, Scripts sur mesure). Réduisez les erreurs humaines et libérez du temps pour vos tâches à haute valeur ajoutée.',
    features: ['Workflows sur mesure', 'Intégration d’outils SaaS', 'Scripts d’automatisation', 'Suivi de performance'],
    imagePrompt: 'Robot arm interacting with a digital interface, glowing blue lines, concept of automation and efficiency, dark tech background'
  },
  {
    slug: 'intelligence-artificielle',
    title: 'Intégration IA',
    icon: Cpu,
    shortDesc: 'Propulsez votre entreprise avec la puissance de l’IA générative.',
    fullDesc: 'Intégration de solutions basées sur l’intelligence artificielle (OpenAI, Anthropic, LLMs locaux) pour transformer votre service client, votre création de contenu ou votre analyse de données.',
    features: ['Chatbots intelligents', 'Analyse de données par IA', 'Génération de contenu auto', 'Consulting en stratégie IA'],
    imagePrompt: 'Futuristic AI brain representation, neural networks, glowing nodes, deep blue and purple aesthetic, high-tech'
  }
]
