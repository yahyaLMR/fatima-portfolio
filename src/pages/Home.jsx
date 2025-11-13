import { Mail, MapPin, Phone, Award, Code, Globe, Heart, Briefcase, Download, Sparkles, Target, Zap, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProjectsSection } from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[oklch(0.92_0.06_350)] shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.88_0.15_350)] to-[oklch(0.78_0.20_350)] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg font-playfair">FZ</span>
            </div>
            <span className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)]">Fatima Lakrafi</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#about" className="text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.88_0.15_350)] transition-colors">À propos</a></li>
            <li><a href="#skills" className="text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.88_0.15_350)] transition-colors">Compétences</a></li>
            <li><a href="#projects" className="text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.88_0.15_350)] transition-colors">Projets</a></li>
            <li><a href="#contact" className="text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.88_0.15_350)] transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero / Présentation */}
      <section className="bg-gradient-to-br from-[oklch(0.995_0.001_0)] via-[oklch(0.97_0.08_45)] to-[oklch(0.95_0.06_350)] py-20 md:py-32 relative overflow-hidden">
        {/* Décoration de fond */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[oklch(0.88_0.15_350)] rounded-full opacity-5 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[oklch(0.92_0.08_45)] rounded-full opacity-5 -ml-36 -mb-36"></div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[oklch(0.3_0.01_65)] mb-4">
                Fatima Lakrafi
              </h1>
              <p className="text-2xl md:text-3xl font-montserrat font-medium text-[oklch(0.88_0.15_350)] mb-6">
                Spécialiste en Marketing Digital & Communication Stratégique
              </p>
              <p className="text-lg text-[oklch(0.5_0.01_65)] mb-8 italic">
                "La communication est une compétence que l'on peut apprendre. C'est comme faire du vélo ou taper à la machine. Si vous êtes prêt à y travailler, vous pouvez améliorer radicalement la qualité de chaque partie de votre vie." - Brian Tracy
              </p>
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[oklch(0.88_0.15_350)]" />
                  <span>zfati598@gmail.com </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[oklch(0.88_0.15_350)]" />
                  <span>0657501386</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[oklch(0.88_0.15_350)]" />
                  <span>Diyar bouskoura immobile 09 appartement 2</span>
                </div>
              </div>
                <div className="flex flex-col sm:flex-row gap-4">
                 <a href='cv fatima zhra.pdf' target='_blank'><Button  className="bg-[oklch(0.88_0.15_350)] hover:bg-[oklch(0.78_0.20_350)] text-white">
                  
                  Télécharger CV
                </Button></a>
                <a href="#projects"><Button variant="outline" className="bg-[oklch(0.88_0.15_350)] text-white hover:bg-[oklch(0.78_0.20_350)]" >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Voir Projets
                </Button></a>
              </div>
            </div>
            <div className="photo-placeholder w-full h-96 md:h-full shadow-lg">
              <div  className="text-center"> <img src="pfp.jpeg" alt="" />
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="py-20 md:py-32">
        <div className="container">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.3_0.01_65)]">
            À propos de moi
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[oklch(0.5_0.01_65)] mb-8 leading-relaxed">
              Passionnée par l'intersection du <strong>Marketing Digital</strong> et de la <strong>Communication Visuelle</strong>, je m'engage à transformer les idées en stratégies percutantes qui génèrent de la croissance et un impact social positif. Mon approche est guidée par une compréhension approfondie des dynamiques numériques et une volonté constante d'innover dans la création de contenu engageant.
            </p>
            <div className="bg-[oklch(0.95_0.06_350)] rounded-lg p-8 border border-[oklch(0.92_0.06_350)] shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-playfair text-2xl font-bold text-[oklch(0.3_0.01_65)] mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[oklch(0.88_0.15_350)]" />
                Compétences Clés
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-[oklch(0.88_0.15_350)] flex-shrink-0" />
                  <span>Digital Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[oklch(0.88_0.15_350)] flex-shrink-0" />
                  <span>Content Creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[oklch(0.88_0.15_350)] flex-shrink-0" />
                  <span>Social Media Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[oklch(0.88_0.15_350)] flex-shrink-0" />
                  <span>Community Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Compétences */}
      <section id="skills" className="py-20 md:py-32 bg-[oklch(0.995_0.001_0)]">
        <div className="container">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.3_0.01_65)]">
            Compétences
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hard Skills */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[oklch(0.3_0.01_65)] mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-[oklch(0.88_0.15_350)]" />
                Compétences Techniques
              </h3>
              <div className="space-y-3">
                {['Marketing Digital', 'Gestion des Réseaux Sociaux', 'Création de Contenu & Storytelling', 'Branding', 'Email Marketing', 'Marketing Automation', 'Analyse de Persona', 'Gestion de Projets'].map((skill) => (
                  <div key={skill} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[oklch(0.3_0.01_65)] mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-[oklch(0.88_0.15_350)]" />
                Compétences Comportementales
              </h3>
              <div className="space-y-3">
                {['Créativité', 'Leadership', 'Organisation', 'Communication Persuasive', 'Capacité à Convaincre'].map((skill) => (
                  <div key={skill} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Formation */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.3_0.01_65)]">
            Formation
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 border-l-4 border-l-[oklch(0.88_0.15_350)] bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[oklch(0.88_0.15_350)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)]">Baccélauréat</h3>
                  <p className="text-[oklch(0.5_0.01_65)] mt-1">[Intitulé du Baccélauréat] - [Année]</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-[oklch(0.88_0.15_350)] bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[oklch(0.88_0.15_350)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)]">Diplôme OFPPT</h3>
                  <p className="text-[oklch(0.5_0.01_65)] mt-1">[Intitulé du Diplôme] - [Année]</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-l-4 border-l-[oklch(0.88_0.15_350)] bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[oklch(0.88_0.15_350)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)]">Formation Marketing Digital – Programme JADARA</h3>
                  <p className="text-[oklch(0.5_0.01_65)] mt-1">[Détails de la formation] - [Année]</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Langues */}
      <section className="py-20 md:py-32 bg-[oklch(0.995_0.001_0)]">
        <div className="container">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.3_0.01_65)]">
            Langues
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { lang: 'Arabe', level: 'Langue maternelle', icon: '🇲🇦' },
              { lang: 'Français', level: 'Bilingue / Courant', icon: '🇫🇷' },
              { lang: 'Anglais', level: 'Professionnel / Courant', icon: '🇬🇧' }
            ].map((item) => (
              <Card key={item.lang} className="p-6 text-center bg-white hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)] mb-2">{item.lang}</h3>
                <p className="text-[oklch(0.5_0.01_65)]">{item.level}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Outils */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.3_0.01_65)]">
            Outils Maîtrisés
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)] mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[oklch(0.88_0.15_350)]" />
                Réseaux Sociaux & Publicité
              </h3>
              <ul className="space-y-2 text-[oklch(0.5_0.01_65)]">
                <li>• Meta Business Suite</li>
                <li>• LinkedIn Campaign Manager</li>
                <li>• TikTok Ads Manager</li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)] mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[oklch(0.88_0.15_350)]" />
                Création de Contenu
              </h3>
              <ul className="space-y-2 text-[oklch(0.5_0.01_65)]">
                <li>• Canva</li>
                <li>• Adobe Express</li>
                <li>• CapCut</li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)] mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-[oklch(0.88_0.15_350)]" />
                Analyse & SEO
              </h3>
              <ul className="space-y-2 text-[oklch(0.5_0.01_65)]">
                <li>• Google Analytics</li>
                <li>• Google Search Console</li>
                <li>• SEMrush (notions)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold text-[oklch(0.3_0.01_65)] mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[oklch(0.88_0.15_350)]" />
                IA & Automatisation
              </h3>
              <ul className="space-y-2 text-[oklch(0.5_0.01_65)]">
                <li>• ChatGPT Plus</li>
                <li>• Midjourney (notions)</li>
                <li>• Zapier (notions)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Centres d'intérêt */}
      <section className="py-20 md:py-32 bg-[oklch(0.995_0.001_0)]">
        <div className="container">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-[oklch(0.3_0.01_65)]">
            Centres d'Intérêt
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { title: 'Développement Personnel', desc: 'Lecture d\'ouvrages sur le leadership et la psychologie', icon: '📚' },
              { title: 'Art & Culture', desc: 'Photographie, Cinéma indépendant', icon: '🎬' },
              { title: 'Bénévolat', desc: 'Participation à des initiatives de développement social', icon: '🤝' },
              { title: 'Voyages', desc: 'Découverte de nouvelles cultures et pratiques', icon: '✈️' }
            ].map((item) => (
              <Card key={item.title} className="p-6 bg-white hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-playfair text-lg font-bold text-[oklch(0.3_0.01_65)] mb-2">{item.title}</h3>
                <p className="text-[oklch(0.5_0.01_65)] text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projets Réalisés */}
      <ProjectsSection />

      <div className="section-divider"></div>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-[oklch(0.88_0.15_350)] to-[oklch(0.78_0.20_350)]">
        <div className="container text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">
            Parlons de votre projet
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Je suis disponible pour discuter de vos besoins en marketing digital et communication stratégique.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Open Gmail compose with pre-filled fields */}
            <Button asChild className="bg-white text-[oklch(0.88_0.15_350)] hover:bg-[oklch(0.95_0.06_350)]">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zfati598@gmail.com&su=Contact%20depuis%20le%20portfolio&body=Bonjour%20Fatima%20Zahra%2C%0A%0AJe%20vous%20contacte%20%C3%A0%20propos%20de%20..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir Gmail pour envoyer un email"
              >
                <Mail className="w-4 h-4 mr-2" />
                Envoyer un Email
              </a>
            </Button>

            {/* Open WhatsApp chat */}
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <a
                href="https://wa.me/212657501386?text=Bonjour%20Fatima%20Zahra%2C%20je%20souhaite%20discuter%20de%20votre%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.3_0.01_65)] text-white py-8">
        <div className="container text-center">
          <p className="mb-2">© 2025 Fatima Zahra Lakrafi. Tous droits réservés.</p>
          <p className="text-sm text-white/70">
            Spécialiste en Marketing Digital & Communication Stratégique
          </p>
        </div>
      </footer>
    </div>
  );
}
