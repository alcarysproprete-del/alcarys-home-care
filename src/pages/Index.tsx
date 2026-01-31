import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, Users, Shield, Sparkles, Activity, Smile,
  CheckCircle, Euro, PawPrint, FileCheck, UserCheck, Headphones,
  Leaf, CircleDot, Hand, Star, Phone, Mail, ExternalLink
} from "lucide-react";
import heroImage from "@/assets/hero-home-care.jpg";

const Index = () => {
  const features = [
    {
      icon: Euro,
      title: "Zéro reste à charge",
      description: "Ingénierie tarifaire maîtrisée (APA/PCH/CESU)",
    },
    {
      icon: FileCheck,
      title: "Offres packagées lisibles",
      description: "Adaptées à chaque niveau de besoin",
    },
    {
      icon: Sparkles,
      title: "Activité holistique incluse",
      description: "Bien-être, stimulation cognitive, lien social",
    },
    {
      icon: UserCheck,
      title: "Suivi qualité intégré",
      description: "Coordination médico-sociale complète",
    },
    {
      icon: Users,
      title: "Intervenants formés",
      description: "Bienveillants, qualifiés et disponibles",
    },
    {
      icon: Headphones,
      title: "Accompagnement administratif",
      description: "Pour les familles et prescripteurs",
    },
    {
      icon: PawPrint,
      title: "Option animaux",
      description: "Environnement apaisé et complet",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Humanité",
      description: "Chaque bénéficiaire est accompagné avec respect, écoute et chaleur.",
    },
    {
      icon: Shield,
      title: "Rigueur",
      description: "Nos prestations sont cadrées, suivies et conformes aux normes du secteur.",
    },
    {
      icon: Leaf,
      title: "Transparence",
      description: "Les familles savent ce qui est proposé, ce qui est financé, et comment.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Nous anticipons les besoins, structurons les offres, et simplifions les démarches.",
    },
    {
      icon: Hand,
      title: "Engagement",
      description: "Nous sommes présents, disponibles et responsables, à chaque étape du parcours.",
    },
  ];

  const pillars = [
    {
      icon: Shield,
      title: "Santé",
      description: "Veiller au bien-être physique au quotidien",
      color: "bg-bleu-doux",
    },
    {
      icon: Sparkles,
      title: "Autonomie",
      description: "Préserver l'indépendance et la dignité",
      color: "bg-sauge",
    },
    {
      icon: Activity,
      title: "Bien-être physique",
      description: "Maintenir une activité adaptée",
      color: "bg-lavande",
    },
    {
      icon: Smile,
      title: "Bien-être moral",
      description: "Offrir présence et écoute bienveillante",
      color: "bg-peche",
    },
  ];

  const testimonials = [
    {
      name: "Marie-Claire D.",
      role: "Fille d'une bénéficiaire",
      content: "Grâce à Alcarys, ma mère peut rester chez elle en toute sérénité. L'équipe est formidable, attentive et toujours disponible. Un grand merci !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Jean-Pierre M.",
      role: "Bénéficiaire",
      content: "Je me sens accompagné avec respect et bienveillance. Les intervenants sont ponctuels et très professionnels. Je recommande vivement.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sophie L.",
      role: "Proche aidante",
      content: "L'accompagnement administratif nous a permis d'obtenir toutes les aides. Zéro reste à charge comme promis. Service exceptionnel !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const packs = [
    { name: "Présence Totale", price: "4 500", hours: "160", savings: "~1 200" },
    { name: "Confort Total", price: "3 000", hours: "100", savings: "~750" },
    { name: "Mobilité Adaptée", price: "2 250", hours: "75", savings: "~550" },
    { name: "Autonomie Active", price: "1 500", hours: "50", savings: null },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="accueil" className="hero-bg relative overflow-hidden">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Alcarys – Cocoon&Co
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight">
                Vivre mieux chez soi,{" "}
                <span className="text-gradient">chaque jour.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-justify">
                Une approche humaine, rigoureuse et holistique du maintien à domicile. 
                Zéro reste à charge grâce à l'APA, PCH et CESU.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="cta" size="xl">
                    Demander une évaluation gratuite
                  </Button>
                </Link>
                <Link to="/packs">
                  <Button variant="outline" size="xl">
                    Découvrir nos packs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Aide à domicile bienveillante auprès d'une personne âgée"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-or to-or-fonce flex items-center justify-center">
                    <Euro className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">0 € reste à charge</p>
                    <p className="text-sm text-muted-foreground">grâce aux aides</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Vision */}
      <section id="vision" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Leaf className="w-10 h-10 text-sauge" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Notre <span className="text-gradient">Vision</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify mb-6">
              Chez Alcarys, nous croyons que le maintien à domicile ne se résume pas à une assistance technique, 
              mais à une véritable présence humaine, bienveillante et structurée.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Notre ambition est de devenir la <strong className="text-foreground">référence francilienne du soin à domicile premium</strong>, 
              en alliant qualité, coordination médico-sociale et zéro reste à charge.
            </p>
            <div className="mt-8 p-6 rounded-2xl card-holistique">
              <p className="text-foreground font-medium text-justify">
                Nous plaçons la personne au cœur du dispositif, en tenant compte de son <strong>corps</strong>, 
                de son <strong>esprit</strong>, de ses <strong>émotions</strong> et de son <strong>environnement</strong>. 
                C'est cette approche holistique qui fait toute la différence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section id="mission" className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <CircleDot className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Notre <span className="text-gradient">Mission</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="soft-card card-administratif">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-bleu-doux flex-shrink-0 mt-1" />
                <p className="text-foreground text-justify">
                  Offrir des services clairs, lisibles et finançables à 100 % par les dispositifs publics (APA, PCH, CESU).
                </p>
              </div>
            </div>
            <div className="soft-card card-administratif">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-bleu-doux flex-shrink-0 mt-1" />
                <p className="text-foreground text-justify">
                  Proposer des packs adaptés aux niveaux de dépendance, sans complexité ni reste à charge.
                </p>
              </div>
            </div>
            <div className="soft-card card-holistique">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-sauge flex-shrink-0 mt-1" />
                <p className="text-foreground text-justify">
                  Garantir une coordination fluide avec les prescripteurs (médecins, infirmiers, CCAS, mutuelles).
                </p>
              </div>
            </div>
            <div className="soft-card card-emotionnel">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-lavande flex-shrink-0 mt-1" />
                <p className="text-foreground text-justify">
                  Mettre en œuvre une activité holistique dans chaque accompagnement : bien-être, stimulation cognitive, lien social, écoute active.
                </p>
              </div>
            </div>
            <div className="soft-card md:col-span-2">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground text-justify">
                  Recruter et fidéliser des intervenants qualifiés, formés à l'excellence et à l'empathie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Alcarys */}
      <section id="pourquoi" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Pourquoi choisir <span className="text-gradient">Alcarys</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="soft-card text-center group">
                <div className="icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-justify">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {features.slice(4).map((feature, index) => (
              <div key={index} className={`flex items-start gap-4 p-4 rounded-xl ${index === 2 ? 'card-animaux' : 'bg-muted/30'}`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-or to-or-fonce flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section id="valeurs" className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <Heart className="w-10 h-10 text-peche" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Nos <span className="text-gradient">Valeurs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-or to-or-fonce mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 4 piliers */}
      <section id="piliers" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Les 4 piliers de notre accompagnement
            </h2>
            <p className="text-lg text-muted-foreground">
              Une approche globale pour un bien-être complet à domicile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="pack-card text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 rounded-2xl ${pillar.color} mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="font-playfair text-xl mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille Tarifaire */}
      <section id="tarifs" className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Des packs adaptés à chaque situation
            </h2>
            <p className="text-lg text-muted-foreground">
              Formules claires, lisibles et finançables à 100% par les dispositifs publics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packs.map((pack, index) => (
              <div key={index} className="soft-card text-center card-administratif">
                <h4 className="font-playfair text-lg mb-2">{pack.name}</h4>
                <p className="text-3xl font-bold text-gradient mb-1">{pack.price} €</p>
                <p className="text-sm text-muted-foreground mb-2">/mois</p>
                <p className="text-sm font-medium text-foreground mb-3">{pack.hours}h/mois</p>
                <div className="border-t border-border pt-3 space-y-2">
                  <div className="inline-flex items-center gap-1 text-sauge text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Prise en charge 100%
                  </div>
                  <div className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                    <Euro className="w-4 h-4" />
                    Reste à charge : 0 €
                  </div>
                  {pack.savings && (
                    <p className="text-xs text-muted-foreground">
                      Économie : {pack.savings} €/mois
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/packs">
              <Button variant="cta" size="lg">
                Voir tous nos packs et services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section id="avis" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <Star className="w-10 h-10 text-or" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Ce que disent <span className="text-gradient">nos clients</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-or/30"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-or text-or" />
                  ))}
                </div>
                <p className="text-muted-foreground text-justify italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Direct */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-or/10 via-sauge/10 to-lavande/10" />
        <div className="container-custom relative">
          <div className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Contactez-nous <span className="text-gradient">directement</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Besoin d'informations ou d'une évaluation gratuite ? 
              Notre équipe est à votre écoute pour vous accompagner.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a 
                href="tel:0764160367" 
                className="flex items-center gap-3 text-xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                07 64 16 03 67
              </a>
              <a 
                href="https://www.alcarys.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                www.alcarys.fr
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0764160367">
                <Button variant="cta" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyer un message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
