import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Award, Lightbulb, Eye, Target, CheckCircle } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
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
      icon: Eye,
      title: "Transparence",
      description: "Les familles savent ce qui est proposé, ce qui est financé, et comment.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous anticipons les besoins, structurons les offres et simplifions les démarches.",
    },
    {
      icon: Award,
      title: "Engagement",
      description: "Nous sommes présents, disponibles et responsables, à chaque étape du parcours.",
    },
  ];

  const whyChooseUs = [
    "Zéro reste à charge grâce à une ingénierie tarifaire maîtrisée (APA/PCH/CESU)",
    "Offres packagées lisibles, adaptées à chaque niveau de besoin",
    "Activité holistique incluse dans tous les accompagnements",
    "Suivi qualité et coordination médico-sociale intégrés",
    "Intervenants formés, bienveillants et disponibles",
    "Accompagnement administratif pour les familles et les prescripteurs",
    "Option animaux disponible pour un environnement apaisé et complet",
  ];

  const missions = [
    "Offrir des services clairs, lisibles et finançables à 100 % par les dispositifs publics (APA, PCH, CESU)",
    "Proposer des packs adaptés aux niveaux de dépendance, sans complexité ni reste à charge",
    "Garantir une coordination fluide avec les prescripteurs (médecins, infirmiers, CCAS, mutuelles)",
    "Mettre en œuvre une activité holistique dans chaque accompagnement : bien-être, stimulation cognitive, lien social, écoute active",
    "Recruter et fidéliser des intervenants qualifiés, formés à l'excellence et à l'empathie",
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Alcarys – Cocoon&Co
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-playfair">
                Une approche <span className="text-gradient">humaine, rigoureuse et holistique</span> du maintien à domicile
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Chez Alcarys, nous croyons que le maintien à domicile ne se résume pas à une assistance technique, 
                mais à une véritable présence humaine, bienveillante et structurée.
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

      {/* Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-circle">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair">Notre vision</h2>
            </div>
            <div className="glass-card p-8 md:p-12">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light mb-6">
                Notre ambition est de devenir <strong>la référence francilienne du soin à domicile premium</strong>, 
                en alliant qualité, coordination médico-sociale et zéro reste à charge.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous plaçons la personne au cœur du dispositif, en tenant compte de son corps, de son esprit, 
                de ses émotions et de son environnement. C'est cette <strong>approche holistique</strong> qui fait toute la différence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">Notre mission</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {missions.map((mission, index) => (
                <div key={index} className="flex gap-4 items-start soft-card">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-serenity to-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Alcarys */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Pourquoi choisir <span className="text-gradient">Alcarys</span> ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-serenity-light/30">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{item}</p>
              </div>
            ))}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="soft-card text-center group">
                <div className="icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
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
                    title: "Coordination médico-sociale",
                    desc: "Nous collaborons avec médecins, infirmiers, CCAS et mutuelles.",
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
