import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, Users, Shield, Sparkles, Activity, Smile,
  CheckCircle, Euro, PawPrint, FileCheck, UserCheck, Headphones,
  Leaf, CircleDot, Hand, Star, Phone, Mail, Clock
} from "lucide-react";
import heroImage from "@/assets/hero-home-care.jpg";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Interventions rapides",
      description: "Mise en place sous 48h selon urgence",
    },
    {
      icon: Euro,
      title: "Évaluation gratuite",
      description: "Un conseiller se déplace à domicile",
    },
    {
      icon: FileCheck,
      title: "Aides financières APA/PCH",
      description: "Accompagnement dans vos démarches",
    },
    {
      icon: UserCheck,
      title: "Intervenants qualifiés",
      description: "Formés, bienveillants et disponibles",
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

  return (
    <>
      {/* Hero Section */}
      <section id="accueil" className="hero-bg relative overflow-hidden">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight">
                Vivre mieux chez soi,{" "}
                <span className="text-gradient">chaque jour.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-justify">
                Aide à domicile humaine, professionnelle et adaptée à chaque situation. 
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
                  alt="Aide à domicile bienveillante auprès d'une personne âgée à Neuilly-sur-Marne"
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

      {/* Pourquoi Alcarys */}
      <section id="pourquoi" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Pourquoi choisir <span className="text-gradient">Alcarys</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.map((feature, index) => (
              <div key={index} className="soft-card text-center group">
                <div className="icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 4 piliers */}
      <section id="piliers" className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Les 4 piliers de notre accompagnement
            </h2>
            <p className="text-lg text-muted-foreground text-center">
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

      {/* Témoignages */}
      <section id="avis" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Avis <span className="text-gradient">clients</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="soft-card">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={`Photo de ${testimonial.name}`}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-or text-or" />
                  ))}
                </div>
                <p className="text-muted-foreground text-justify">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Direct */}
      <section id="contact-direct" className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-playfair mb-4 text-center">
                Contact <span className="text-gradient">direct</span>
              </h2>
              <p className="text-muted-foreground text-center">
                Une question ? Besoin d'information ? Contactez-nous directement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-or to-or-fonce flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <a href="tel:0764160367" className="font-semibold text-lg hover:text-primary transition-colors">
                    07 64 16 03 67
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-or to-or-fonce flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Site web</p>
                  <a href="https://www.alcarys.fr" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-primary transition-colors">
                    www.alcarys.fr
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0764160367">
                <Button variant="cta" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Envoyer un message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Prêt à vivre mieux chez vous ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Demandez une évaluation gratuite et sans engagement. 
              Un conseiller Alcarys vous rappelle sous 24h.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Demander une évaluation gratuite
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
