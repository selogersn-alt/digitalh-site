import { Globe, Smartphone, BarChart, Cpu, Layout, Image, Briefcase, Zap, Satellite, Wifi, Palette, Rocket, Shield, HeartHandshake, Headphones } from 'lucide-react'

export const services = [
  {
    slug: 'creation-site-web',
    title: 'Création de Site Web Premium',
    icon: Globe,
    shortDesc: 'Des sites vitrines et e-commerce performants, élégants et optimisés pour la conversion.',
    fullDesc: 'Dans l’économie numérique actuelle, votre site web est bien plus qu’une simple carte de visite ; c’est votre moteur de croissance principal. Chez DigitalH, nous ne nous contentons pas de "faire des sites". Nous concevons des écosystèmes digitaux sur mesure, bâtis sur les technologies les plus avancées comme Next.js et React. Notre approche combine une esthétique minimaliste haut de gamme avec une ingénierie de précision pour garantir des temps de chargement records et une sécurité infaillible. Chaque pixel est pensé pour refléter l’excellence de votre marque et transformer chaque visiteur en client fidèle.',
    qualityDesc: 'Notre accompagnement ne s’arrête pas à la mise en ligne. Nous vous formons à la gestion de votre interface et assurons une maintenance proactive pour que votre site reste à la pointe de l’innovation.',
    process: [
      { title: 'Stratégie & UX', desc: 'Analyse de vos besoins et conception d’un parcours utilisateur optimisé.' },
      { title: 'Design & Prototype', desc: 'Création d’une interface visuelle unique et moderne sous Figma.' },
      { title: 'Développement Clean Code', desc: 'Codage robuste avec les meilleures pratiques SEO et performance.' },
      { title: 'Lancement & Support', desc: 'Déploiement sécurisé et suivi technique continu.' }
    ],
    features: ['Architecture Next.js 15', 'Design Responsive Mobile-First', 'Optimisation SEO & Web Vitals', 'Interface d’administration sécurisée'],
    imagePrompt: 'Premium modern web design agency portfolio, dark mode, glowing blue accents, glassmorphism UI'
  },
  {
    slug: 'installation-starlink',
    title: 'Expertise Installation Starlink',
    icon: Satellite,
    shortDesc: 'Internet par satellite haute vitesse, partout, même là où la fibre ne va pas.',
    fullDesc: 'DigitalH révolutionne votre connectivité avec les solutions Starlink de SpaceX. Que vous soyez une entreprise en zone rurale, un site minier ou un particulier exigeant, nous apportons le haut débit là où les infrastructures classiques échouent. Notre expertise va au-delà de la simple pose : nous réalisons des audits de couverture, optimisons le placement de l’antenne pour éviter toute obstruction et configurons des réseaux Wi-Fi Mesh capables de couvrir de vastes surfaces. Avec DigitalH, oubliez les coupures et la lenteur ; entrez dans l’ère du haut débit universel.',
    qualityDesc: 'Nous assurons une installation propre, sans câbles apparents, et une configuration logicielle optimisée pour une latence minimale, idéale pour le streaming et le télétravail.',
    process: [
      { title: 'Audit de Site', desc: 'Vérification du champ de vision satellite et choix de l’emplacement idéal.' },
      { title: 'Installation Physique', desc: 'Fixation robuste et passage de câbles professionnel.' },
      { title: 'Configuration Réseau', desc: 'Paramétrage du routeur et déploiement de bornes Wi-Fi.' },
      { title: 'Tests de Débit', desc: 'Validation de la stabilité et de la vitesse de connexion.' }
    ],
    features: ['Installation Kit Starlink V2/V3', 'Extension Wi-Fi longue portée', 'Configuration via application', 'Support technique prioritaire'],
    imagePrompt: 'Starlink satellite dish installation on a modern building roof, futuristic technology, clear sky, cinematic lighting'
  },
  {
    slug: 'applications-mobiles',
    title: 'Développement Mobile Natif',
    icon: Smartphone,
    shortDesc: 'Des applications intuitives et puissantes pour Android & iOS.',
    fullDesc: 'Le mobile est le point de contact numéro un entre vous et vos clients. Nous développons des applications qui ne sont pas seulement fonctionnelles, mais addictives par leur fluidité. En utilisant Flutter ou le développement natif, nous créons des outils capables de gérer des milliers d’utilisateurs simultanés. Que vous ayez besoin d’un système de géolocalisation complexe, d’une intégration de paiement sécurisée ou de notifications push intelligentes, notre équipe transforme votre idée en un produit de classe mondiale, prêt à dominer les stores.',
    qualityDesc: 'Chaque application subit une batterie de tests rigoureux sur plusieurs appareils réels pour garantir une stabilité totale et une expérience utilisateur sans faille.',
    process: [
      { title: 'Concept & Wireframing', desc: 'Définition des fonctionnalités clés et du flux utilisateur.' },
      { title: 'Design UI/UX Mobile', desc: 'Création d’une interface tactile ergonomique et attrayante.' },
      { title: 'Développement & API', desc: 'Codage de l’app et connexion avec vos systèmes backend.' },
      { title: 'Publication & Suivi', desc: 'Soumission sur Play Store/App Store et maintenance.' }
    ],
    features: ['Design Adaptatif', 'Mode Hors-ligne', 'Sécurité des données', 'Performance native'],
    imagePrompt: 'Modern Android smartphone showing a premium financial app UI, dark mode, vibrant gradients, high-tech aesthetic'
  },
  {
    slug: 'seo',
    title: 'SEO & Croissance Organique',
    icon: BarChart,
    shortDesc: 'Dominez les premiers résultats de recherche et attirez du trafic qualifié sans payer de pub.',
    fullDesc: 'Le SEO n’est pas une option, c’est une nécessité de survie digitale. Notre approche du référencement naturel est scientifique et axée sur les données. Nous ne nous arrêtons pas aux balises méta : nous optimisons la structure technique de votre site, la sémantique de vos contenus et votre autorité globale sur le web (netlinking). Notre objectif est de positionner votre entreprise devant vos concurrents sur les mots-clés les plus rentables de votre secteur. À long terme, c’est le canal de vente le plus puissant et le plus rentable de votre stratégie marketing.',
    qualityDesc: 'Nous fournissons des rapports transparents chaque mois pour suivre vos positions et ajuster la stratégie en fonction de l’évolution des algorithmes de Google.',
    process: [
      { title: 'Audit Technique', desc: 'Analyse complète de la santé de votre site actuel.' },
      { title: 'Recherche Sémantique', desc: 'Identification des mots-clés stratégiques à fort volume.' },
      { title: 'Optimisation de Contenu', desc: 'Rédaction et structuration pour plaire à Google et aux humains.' },
      { title: 'Netlinking', desc: 'Acquisition de liens de haute autorité pour booster votre score.' }
    ],
    features: ['Audit Technique Profond', 'Rédaction SEO optimisée', 'Stratégie de backlinks', 'Monitoring Search Console'],
    imagePrompt: 'Search engine optimization data visualization, glowing 3D charts and graphs, dark professional background'
  },
  {
    slug: 'intelligence-artificielle',
    title: 'Intégration IA & LLMs',
    icon: Cpu,
    shortDesc: 'Augmentez votre productivité grâce à la puissance de l’IA générative.',
    fullDesc: 'L’intelligence artificielle n’est plus une fiction, c’est un levier de productivité massif. DigitalH vous aide à intégrer des solutions d’IA sur mesure au cœur de vos processus. Imaginez un chatbot capable de répondre à vos clients 24/7 avec la précision d’un humain, ou un outil d’analyse de données capable de prédire vos tendances de vente. Nous utilisons les technologies d’OpenAI, d’Anthropic et de modèles locaux pour créer des assistants intelligents qui font gagner des heures de travail à vos équipes tout en réduisant les coûts opérationnels.',
    qualityDesc: 'Nous mettons un point d’honneur sur l’éthique et la sécurité des données : vos informations restent confidentielles et les modèles sont entraînés pour respecter votre identité de marque.',
    process: [
      { title: 'Consulting IA', desc: 'Identification des tâches automatisables par l’IA dans votre entreprise.' },
      { title: 'Architecture Modèle', desc: 'Choix du meilleur modèle (GPT-4, Claude, Llama) pour votre besoin.' },
      { title: 'Intégration API', desc: 'Développement du pont entre l’IA et vos logiciels actuels.' },
      { title: 'Fine-Tuning', desc: 'Ajustement du modèle pour qu’il connaisse parfaitement votre métier.' }
    ],
    features: ['Chatbots IA intelligents', 'Analyse prédictive', 'Génération de contenu auto', 'Automatisation par LLM'],
    imagePrompt: 'Futuristic AI brain representation, neural networks, glowing nodes, deep blue and purple aesthetic'
  },
  {
    slug: 'automatisation',
    title: 'Automatisation de Processus (No-Code/Code)',
    icon: Zap,
    shortDesc: 'Éliminez les tâches répétitives et libérez le potentiel de vos équipes.',
    fullDesc: 'Pourquoi perdre du temps sur des tâches que des robots peuvent faire mieux que nous ? DigitalH connecte vos outils entre eux pour créer des workflows 100% automatiques. De la facturation automatique à la gestion des leads en passant par la synchronisation de vos stocks, nous utilisons des outils comme Zapier, Make et des scripts personnalisés pour que votre entreprise tourne toute seule. L’automatisation n’est pas seulement un gain de temps, c’est une garantie contre l’erreur humaine et un accélérateur de croissance sans précédent.',
    qualityDesc: 'Nous concevons des automatisations robustes avec des systèmes de "Error Handling" pour qu’en cas de bug, vous soyez alerté et que le processus ne s’arrête jamais vraiment.',
    process: [
      { title: 'Audit de Workflow', desc: 'Observation de vos processus actuels et détection des points de friction.' },
      { title: 'Cartographie Logicielle', desc: 'Choix des outils de connexion (Zapier, Make, Python).' },
      { title: 'Construction du Tunnel', desc: 'Création et tests des scénarios d’automatisation.' },
      { title: 'Déploiement & Formation', desc: 'Mise en production et formation pour que vous restiez maître de l’outil.' }
    ],
    features: ['Intégration CRM/ERP', 'Workflows Multi-étapes', 'Notifications automatiques', 'Reporting en temps réel'],
    imagePrompt: 'Robot arm interacting with a digital interface, glowing blue lines, automation and efficiency'
  },
  {
    slug: 'saas-immobilier',
    title: 'Plateforme SaaS Immobilier',
    icon: Layout,
    shortDesc: 'Une solution tout-en-un pour digitaliser votre agence immobilière.',
    fullDesc: 'Le secteur de l’immobilier exige une réactivité et une organisation sans faille. Notre SaaS dédié aux agences immobilières transforme votre façon de travailler. Centralisez vos annonces, gérez vos prospects avec un CRM intelligent, automatisez la génération de vos contrats et suivez vos commissions en temps réel. Fini les fichiers Excel éparpillés ; notre plateforme offre une vue à 360 degrés sur votre activité. Conçue avec les retours de professionnels du terrain, elle est l’outil indispensable pour toute agence souhaitant passer à la vitesse supérieure.',
    qualityDesc: 'Notre plateforme est évolutive : nous ajoutons régulièrement des fonctionnalités basées sur vos besoins spécifiques pour rester la meilleure solution du marché.',
    process: [
      { title: 'Migration de Données', desc: 'Transfert sécurisé de vos annonces et clients actuels.' },
      { title: 'Personnalisation', desc: 'Configuration de l’interface aux couleurs de votre agence.' },
      { title: 'Lancement Client', desc: 'Ouverture des accès pour vos agents et formation.' },
      { title: 'Maintenance Cloud', desc: 'Hébergement haute disponibilité et mises à jour de sécurité.' }
    ],
    features: ['Gestion de parc immobilier', 'CRM Prospect intelligent', 'Génération de PDF auto', 'Tableau de bord financier'],
    imagePrompt: 'Real estate management software dashboard on a laptop, modern clean UI, 3D architecture'
  },
  {
    slug: 'abonnement-iptv',
    title: 'Abonnement IPTV Premium',
    icon: Smartphone,
    shortDesc: 'Le meilleur de la télévision mondiale en 4K, sans aucune coupure.',
    fullDesc: 'Accédez au futur de la télévision avec nos abonnements IPTV haut de gamme. Nous proposons une infrastructure serveur ultra-stable située en Europe pour garantir un streaming sans buffering, même pour les événements sportifs en direct. Profitez de plus de 10 000 chaînes mondiales, ainsi qu’une bibliothèque VOD de films et séries mise à jour quotidiennement. Que ce soit sur votre Smart TV, smartphone ou box Android, DigitalH vous offre une expérience cinéma directement dans votre salon avec une qualité d’image époustouflante (UHD/4K).',
    qualityDesc: 'Notre service client est disponible 7j/7 pour vous aider à configurer vos appareils et résoudre tout problème technique en moins de 15 minutes.',
    process: [
      { title: 'Test de Débit', desc: 'Vérification de la compatibilité de votre connexion.' },
      { title: 'Activation Rapide', desc: 'Envoi des codes d’accès immédiatement après paiement.' },
      { title: 'Guide de Configuration', desc: 'Tutoriels détaillés pour chaque support (Smart TV, Box, App).' },
      { title: 'Support Continu', desc: 'Assistance en ligne pour toute question ou demande de chaînes.' }
    ],
    features: ['Qualité 4K/UHD', 'Stabilité Anti-Buffering', 'VOD Illimitée', 'Multi-support'],
    imagePrompt: 'Modern home cinema setup, smart TV showing a premium streaming interface'
  }
]
