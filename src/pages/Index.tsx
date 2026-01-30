import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Award, Heart, Users, Shield, Sparkles, Activity, Smile } from "lucide-react";
import heroImage from "@/assets/hero-home-care.jpg";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Interventions rapides",
      description: "Mise en place sous 48h pour répondre à vos besoins urgents",
    },
    {
      icon: Award,
      title: "Évaluation gratuite",
      description: "Un conseiller se déplace chez vous sans engagement",
    },
    {
      icon: Heart,
      title: "Aides financières",
      description: "Nous vous accompagnons pour l'APA, PCH et crédit d'impôt",
    },
    {
      icon: Users,
      title: "Intervenants qualifiés",
      description: "Équipe formée et sélectionnée avec soin",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight">
                Vivre mieux chez soi,{" "}
                <span className="text-gradient">chaque jour.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Aide à domicile humaine, professionnelle et adaptée à chaque situation. 
                À Neuilly-sur-Marne et ses environs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="cta" size="xl">
                    Demander une évaluation gratuite
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="xl">
                    Découvrir nos services
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
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">+500 familles</p>
                    <p className="text-sm text-muted-foreground">nous font confiance</p>
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
              Nous mettons l'humain au cœur de notre accompagnement pour vous offrir 
              un service de qualité, adapté à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {features.map((feature, index) => (
              <div key={index} className="soft-card text-center group">
                <div className="icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
