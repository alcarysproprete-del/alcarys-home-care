import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Award } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Respect",
      description: "Nous traitons chaque personne avec dignité, en respectant ses choix, son rythme et son intimité.",
    },
    {
      icon: Shield,
      title: "Dignité",
      description: "Préserver l'autonomie et la fierté de chacun est au cœur de notre approche bienveillante.",
    },
    {
      icon: Users,
      title: "Humanité",
      description: "Au-delà des prestations, nous créons des liens sincères basés sur l'écoute et la confiance.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Des intervenants qualifiés, formés en continu pour un service de qualité optimale.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-playfair">
                À propos d'<span className="text-gradient">Alcarys</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Alcarys est née d'une conviction profonde : chaque personne mérite 
                de vivre chez elle, dans la dignité et le confort, quel que soit son âge 
                ou sa situation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Basée à Neuilly-sur-Marne, notre équipe accompagne les familles 
                de Seine-Saint-Denis avec professionnalisme et bienveillance depuis 
                notre création.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={teamPhoto}
                  alt="L'équipe Alcarys - Aide à domicile professionnelle"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-8">Notre mission</h2>
            <div className="glass-card p-8 md:p-12">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
                "Permettre à chacun de vivre sereinement chez soi, en proposant 
                un accompagnement humain, personnalisé et de qualité. Nous croyons 
                que le domicile est le lieu de tous les possibles, où l'on peut 
                vieillir heureux et entouré."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">Nos valeurs</h2>
            <p className="text-lg text-muted-foreground">
              Ces principes guident chacune de nos actions au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="soft-card text-center group">
                <div className="icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement qualité */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-playfair">
                Notre engagement qualité
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Sélection rigoureuse",
                    desc: "Chaque intervenant est soigneusement recruté, formé et accompagné.",
                  },
                  {
                    title: "Suivi personnalisé",
                    desc: "Un référent dédié suit votre dossier et reste à votre écoute.",
                  },
                  {
                    title: "Formation continue",
                    desc: "Nos équipes se forment régulièrement aux meilleures pratiques.",
                  },
                  {
                    title: "Évaluation régulière",
                    desc: "Nous ajustons nos prestations selon l'évolution de vos besoins.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-serenity mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-serenity-light via-parme-light to-background p-12 text-center shadow-soft">
                <div className="text-6xl font-playfair font-bold text-gradient mb-4">+500</div>
                <p className="text-xl text-foreground">familles accompagnées</p>
                <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-playfair font-bold text-primary">98%</div>
                    <p className="text-sm text-muted-foreground">satisfaction</p>
                  </div>
                  <div>
                    <div className="text-3xl font-playfair font-bold text-primary">24h</div>
                    <p className="text-sm text-muted-foreground">réactivité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Rejoignez la famille Alcarys
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Faites confiance à une équipe passionnée et dévouée. 
              Contactez-nous pour une première rencontre.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
