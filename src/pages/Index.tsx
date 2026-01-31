import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Clock, Award, Heart, Users, Shield, Sparkles, Activity, Smile,
  CheckCircle, Euro, PawPrint, FileCheck, UserCheck, Headphones
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

  const pillars = [
    {
      icon: Shield,
      title: "Santé",
      description: "Veiller au bien-être physique au quotidien",
      color: "from-serenity to-serenity-light",
    },
    {
      icon: Sparkles,
      title: "Autonomie",
      description: "Préserver l'indépendance et la dignité",
      color: "from-parme to-parme-light",
    },
    {
      icon: Activity,
      title: "Bien-être physique",
      description: "Maintenir une activité adaptée",
      color: "from-serenity to-parme",
    },
    {
      icon: Smile,
      title: "Bien-être moral",
      description: "Offrir présence et écoute bienveillante",
      color: "from-parme to-primary",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg relative overflow-hidden">
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
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-serenity to-primary flex items-center justify-center">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Pourquoi choisir <span className="text-gradient">Alcarys</span> ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous plaçons la personne au cœur du dispositif, en tenant compte de son corps, 
              de son esprit, de ses émotions et de son environnement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="soft-card text-center group">
                <div className="icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {features.slice(4).map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-serenity-light/30">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-serenity to-primary flex items-center justify-center flex-shrink-0">
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

      {/* Les 4 piliers */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
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
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} mx-auto mb-6 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Des packs adaptés à chaque situation
            </h2>
            <p className="text-lg text-muted-foreground">
              Formules claires, lisibles et finançables à 100% par les dispositifs publics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Présence Totale", price: "4 500 €/mois", hours: "160h" },
              { name: "Confort Total", price: "3 000 €/mois", hours: "100h" },
              { name: "Mobilité Adaptée", price: "2 250 €/mois", hours: "75h" },
              { name: "Autonomie Active", price: "1 500 €/mois", hours: "50h" },
            ].map((pack, index) => (
              <div key={index} className="soft-card text-center">
                <h4 className="font-playfair text-lg mb-2">{pack.name}</h4>
                <p className="text-2xl font-bold text-gradient mb-1">{pack.price}</p>
                <p className="text-sm text-muted-foreground mb-4">{pack.hours}/mois</p>
                <div className="inline-flex items-center gap-1 text-green-600 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  0 € reste à charge
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/packs">
              <Button variant="cta" size="lg">
                Voir tous nos packs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-serenity/20 via-parme/20 to-primary/20" />
        <div className="container-custom relative">
          <div className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Besoin d'aide à domicile ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Demandez votre évaluation gratuite et sans engagement. 
              Un conseiller Alcarys se déplace chez vous pour comprendre vos besoins.
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
