import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
// Common placeholder image path served by Vite from client/public
const PLACEHOLDER_IMAGE = "/project-placeholder.jpg"; // Put the provided image in client/public as project-placeholder.jpg
const projects = [
    {
        id: 1,
        title: 'Stratégie de Lancement pour une Startup Tech',
        category: 'strategy',
        audit: 'Analyse concurrentielle du marché des applications mobiles de productivité. Identification des forces (UI/UX innovante), faiblesses (équipe réduite), opportunités (marché en croissance) et menaces (concurrence accrue).',
        strategy: 'Objectif : Acquérir 500 bêta-testeurs en 3 mois. Positionnement : L\'outil de productivité le plus intuitif pour les freelances. Marketing Mix : Focus sur le produit (UX/UX) et la promotion (partenariats influenceurs).',
        actionPlan: '1. Création du kit de presse et dossier média. 2. Campagne d\'emailing de pré-lancement auprès de 1000 contacts. 3. Démarchage d\'influenceurs dans le domaine de la productivité. 4. Mise en place d\'un programme de parrainage.',
        editorialCalendar: '12 posts LinkedIn (conseils productivité, cas d\'usage), 8 stories Instagram (teasing fonctionnalités), 4 articles de blog (guides productivité).',
        tools: ['Google Sheets', 'Miro', 'Trello', 'Mailchimp'],
        img: "",
    },
    {
        id: 2,
        title: 'Refonte de Branding pour une PME Locale',
        category: 'strategy',
        audit: 'Analyse de l\'image de marque actuelle : logo daté, message peu clair, faible présence digitale. Étude concurrentielle révélant un besoin de modernisation. Perception client : marque peu accessible et peu innovante.',
        strategy: 'Objectif : Rajeunir l\'image de marque et augmenter la visibilité de 40% en 6 mois. Positionnement : PME innovante et accessible. Marketing Mix : Nouvelle identité visuelle, communication digitale renforcée, engagement communautaire.',
        actionPlan: '1. Création d\'une nouvelle identité visuelle (logo, palette, typographie). 2. Refonte du site web. 3. Lancement d\'une campagne de communication interne et externe. 4. Mise en place de partenariats locaux.',
        editorialCalendar: '20 posts réseaux sociaux/mois, 2 newsletters mensuelles, 1 événement de lancement.',
        tools: ['Figma', 'Adobe Creative Suite', 'Canva', 'WordPress'],
        img: "",
    },
    {
        id: 3,
        title: 'Stratégie SEO pour un Site E-commerce',
        category: 'strategy',
        audit: 'Audit SEO complet : site non optimisé pour les moteurs de recherche, peu de backlinks, contenu peu structuré. Trafic organique quasi inexistant. Analyse des mots-clés révélant des opportunités importantes.',
        strategy: 'Objectif : Augmenter le trafic organique de 200% en 12 mois. Positionnement : Leader en ligne dans la catégorie produits. Marketing Mix : Optimisation technique, création de contenu, netlinking.',
        actionPlan: '1. Optimisation technique du site (vitesse, mobile, structure). 2. Création de 50 pages de contenu optimisé. 3. Stratégie de netlinking et partenariats. 4. Mise en place d\'un système de suivi et d\'analyse.',
        editorialCalendar: '4 articles de blog/mois (1000-1500 mots), 8 fiches produits optimisées/mois, guides d\'achat.',
        tools: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Yoast SEO'],
        img: "",
    },
    {
        id: 4,
        title: 'Plan de Communication de Crise',
        category: 'strategy',
        audit: 'Analyse de vulnérabilité : absence de protocole de crise, pas de porte-parole désigné, communication interne insuffisante. Identification des risques potentiels (problème produit, crise RH, problème environnemental).',
        strategy: 'Objectif : Mettre en place un système de gestion de crise robuste et réactif. Positionnement : Entreprise transparente et responsable. Marketing Mix : Communication préventive, réactivité, dialogue stakeholders.',
        actionPlan: '1. Création d\'un manuel de crise et protocoles. 2. Désignation des porte-paroles et formation. 3. Mise en place d\'un système d\'alerte. 4. Simulation de crise et tests.',
        editorialCalendar: 'Contenus préventifs (1-2 par mois), messages de crise pré-rédigés, plan de communication d\'urgence.',
        tools: ['Notion', 'Google Drive', 'Slack', 'Crisis Communication Templates'],
        img: "",
    },
    {
        id: 5,
        title: 'Project : Management l’influensceuse',
        category: 'full',
        audit: 'Faible engagement sur Instagram (taux de 1.2%), audience vieillissante (35-55 ans), besoin de rajeunir l\'image. Analyse concurrentielle : concurrents plus actifs et engageants sur les réseaux.',
        strategy: 'Objectif : Augmenter le taux d\'engagement de 30% en 6 semaines. Positionnement : Mode éthique et accessible pour les millennials. Marketing Mix : Focus sur la communauté et le contenu UGC.',
        actionPlan: '1. Lancement d\'un challenge de style #StyleEthique. 2. Mise en place de publicités ciblées sur Meta. 3. Création d\'une série de Reels éducatifs. 4. Partenariats avec micro-influenceurs.',
        editorialCalendar: '3 Reels/semaine, 4 posts carrousel/semaine, 10 stories/jour, 2 lives/mois.',
        creation: 'Réalisation de 18 visuels statiques, 12 vidéos courtes (Reels), 5 modèles de stories interactives, 3 vidéos de présentation produit.',
        tools: ['Canva', 'Meta Business Suite', 'CapCut', 'ChatGPT Plus', 'Instagram Insights'],
        img: "image.png",
    },
    {
        id: 6,
        title: 'nova danse',
        category: 'full',
        audit: 'Nouveau produit révolutionnaire, marché peu connu des cibles, besoin de créer de la curiosité et de l\'anticipation. Analyse : audience tech-savvy, présente sur TikTok et YouTube.',
        strategy: 'Objectif : Générer 10 000 téléchargements en 1 mois. Positionnement : Innovation disruptive et accessible. Marketing Mix : Teasing, influenceurs, contenu viral.',
        actionPlan: '1. Campagne de teasing 2 semaines avant lancement. 2. Partenariats avec 20 micro-influenceurs. 3. Événement virtuel de lancement. 4. Campagne publicitaire TikTok et YouTube.',
        editorialCalendar: '5 posts/jour pendant la phase de teasing, 3 Reels/jour pendant le lancement, 2 lives/semaine.',
        creation: 'Création de 40 visuels teaser, 15 vidéos courtes, 1 vidéo de présentation produit (2 min), 10 graphiques animés.',
        tools: ['TikTok Ads', 'YouTube Ads', 'Canva', 'Adobe Premiere', 'ChatGPT Plus'],
        img: "2.png",
    },
    {
        id: 7,
        title: 'FONDATION NOOR',
        category: 'full',
        audit: 'Base de données de 50 000 contacts, taux d\'ouverture faible (15%), taux de clic très bas (2%). Emails génériques et peu personnalisés. Besoin de segmentation et de personnalisation.',
        strategy: 'Objectif : Augmenter le taux d\'ouverture à 35% et le taux de clic à 8%. Positionnement : Marque proche et personnalisée. Marketing Mix : Segmentation, personnalisation, A/B testing.',
        actionPlan: '1. Segmentation de la base de données (5 segments). 2. Création de 20 templates email personnalisés. 3. Mise en place d\'une stratégie d\'automation. 4. A/B testing systématique.',
        editorialCalendar: '3 emails/semaine (newsletters, promotions, contenus éducatifs), 2 campagnes email/mois (événements, lancements).',
        creation: 'Création de 20 templates email responsive, 50 visuels pour emails, 10 landing pages, 5 animations email.',
        tools: ['Mailchimp', 'Klaviyo', 'Canva', 'Google Analytics', 'Figma'],
        img: "3.png",
    },
    {
        id: 8,
        title: 'Plan and Strategy',
        category: 'full',
        audit: 'Communauté de 5 000 followers peu engagée (taux d\'engagement 0.8%), messages peu cohérents, absence de stratégie communautaire. Besoin de créer une véritable communauté engagée.',
        strategy: 'Objectif : Augmenter l\'engagement de 150% et créer une communauté de 15 000 followers en 1 an. Positionnement : ONG transparente et engagée. Marketing Mix : Contenu éducatif, storytelling, engagement communautaire.',
        actionPlan: '1. Création d\'une stratégie de contenu cohérente. 2. Mise en place d\'un calendrier éditorial. 3. Lancement de challenges et initiatives communautaires. 4. Modération et engagement quotidien.',
        editorialCalendar: '2 posts/jour, 15 stories/jour, 3 lives/mois, 1 newsletter/semaine.',
        creation: 'Création de 60 visuels/mois, 10 vidéos courtes/mois, 5 infographies/mois, 2 vidéos longues/mois.',
        tools: ['Meta Business Suite', 'Canva', 'Hootsuite', 'ChatGPT Plus', 'Mailchimp'],
        img: "4.png",
    },
    {
        id: 9,
        title: 'Stratégie d\'Acquisition de Leads B2B',
        category: 'full',
        audit: 'Entreprise B2B avec faible visibilité en ligne, peu de leads qualifiés, absence de stratégie de contenu. Cibles : décideurs IT et responsables marketing dans les PME.',
        strategy: 'Objectif : Générer 100 leads qualifiés/mois. Positionnement : Expert en solutions B2B innovantes. Marketing Mix : Contenu éducatif, LinkedIn, webinaires, partenariats.',
        actionPlan: '1. Création d\'une stratégie de contenu LinkedIn. 2. Lancement de 4 webinaires/trimestre. 3. Mise en place de campagnes LinkedIn Ads. 4. Création de lead magnets (guides, templates).',
        editorialCalendar: '3 posts LinkedIn/semaine, 1 article de blog/semaine, 1 webinaire/mois, 2 newsletters/mois.',
        creation: 'Création de 50 visuels LinkedIn, 4 vidéos de webinaire, 10 guides PDF, 5 templates, 20 infographies.',
        tools: ['LinkedIn Campaign Manager', 'HubSpot', 'Canva', 'Zoom', 'Google Analytics'],
        img: "",
    },
    {
        id: 10,
        title: 'Campagne de Sensibilisation Social Media',
        category: 'full',
        audit: 'Sujet : Durabilité et consommation responsable. Audience cible : jeunes adultes (18-35 ans), sensibles aux enjeux environnementaux. Besoin de créer du buzz et de l\'engagement.',
        strategy: 'Objectif : Atteindre 1M de vues et générer 50K interactions. Positionnement : Marque engagée et responsable. Marketing Mix : Contenu viral, influenceurs, hashtags trending.',
        actionPlan: '1. Création d\'une série de 10 vidéos courtes virales. 2. Partenariats avec 30 créateurs de contenu. 3. Campagne hashtag #ConsommationResponsable. 4. Challenges et concours.',
        editorialCalendar: '5 Reels/jour, 20 stories/jour, 2 posts/jour, 3 TikToks/jour, 1 live/semaine.',
        creation: 'Création de 100 visuels, 50 vidéos courtes (Reels/TikTok), 10 vidéos longues, 20 infographies animées.',
        tools: ['TikTok Ads', 'Instagram Ads', 'CapCut', 'Adobe Premiere', 'Canva', 'ChatGPT Plus'],
        img: "",
    }
];
function ProjectCard({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (<Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-playfair text-xl font-bold mb-2">
              {project.title}
            </h3>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'strategy'
            ? 'bg-muted text-foreground'
            : 'bg-primary text-primary-foreground'}`}>
              {project.category === 'strategy' ? 'Planning & Stratégie' : 'Full Marketing Digital'}
            </span>
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-primary hover:text-primary/80 transition">
            <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}/>
          </button>
        </div>

        {/* Project Placeholder Image (applies to all projects) */}
        <div className="photo-placeholder w-full h-75 mb-4 overflow-hidden rounded-md bg-muted">
          <img src={project.img || PLACEHOLDER_IMAGE} alt={`Visuel du projet ${project.title}`} className="w-full h-full object-contain" loading="lazy"/>
        </div>

        {/* Expanded Content */}
        {isExpanded && (<div className="mt-6 space-y-6 border-t pt-6">
            {/* Audit */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-2">📊 Audit</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.audit}</p>
            </div>

            {/* Stratégie */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-2">🎯 Stratégie</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.strategy}</p>
            </div>

            {/* Plan d'action */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-2">📋 Plan d'Action</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.actionPlan}</p>
            </div>

            {/* Calendrier éditorial */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-2">📅 Calendrier Éditorial</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.editorialCalendar}</p>
            </div>

            {/* Création (si applicable) */}
            {project.creation && (<div>
                <h4 className="font-playfair text-lg font-bold mb-2">🎨 Création</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.creation}</p>
              </div>)}

            {/* Outils utilisés */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-3">🛠️ Outils Utilisés</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (<span key={tool} className="skill-badge text-xs">
                    {tool}
                  </span>))}
              </div>
            </div>
          </div>)}
      </div>
    </Card>);
}
export function ProjectsSection() {
    const strategyProjects = projects.filter(p => p.category === 'strategy');
    const fullProjects = projects.filter(p => p.category === 'full');
    return (<section id="projects" className="py-20 md:py-32">
      <div className="container">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4">
          Projets Réalisés
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Découvrez mes 10 projets de marketing digital, du planning stratégique à la création de contenu complète. 
          Cliquez sur chaque projet pour voir tous les détails.
        </p>

        {/* Projets de Stratégie */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-muted"></span>
            Planning & Stratégie (4 Projets)
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {strategyProjects.map((project) => (<ProjectCard key={project.id} project={project}/>))}
          </div>
        </div>

        <div className="section-divider"></div>

        {/* Projets Full Marketing Digital */}
        <div>
          <h3 className="font-playfair text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
            Full Marketing Digital (6 Projets)
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {fullProjects.map((project) => (<ProjectCard key={project.id} project={project}/>))}
          </div>
        </div>
      </div>
    </section>);
}
