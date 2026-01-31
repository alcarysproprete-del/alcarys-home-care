import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, Clock, Euro, Users } from "lucide-react";

const Packs = () => {
  const packs = [
    {
      name: "Présence Totale",
      description: "Dépendance forte",
      price: "4 500",
      priceNote: "€/mois",
      duration: "160h (≈ 40h/semaine)",
      popular: true,
      resteACharge: "0 €",
      includes: [
        "Aide complète au quotidien",
        "Préparation des repas",
        "Aide à l'hygiène",
        "Mobilité et transferts",
        "Stimulation cognitive",
        "Coordination médico-sociale",
        "Activité holistique incluse",
      ],
    },
    {
      name: "Confort Total",
      description: "Quotidien renforcé",
      price: "3 000",
      priceNote: "€/mois",
      duration: "100h (≈ 25h/semaine)",
      popular: false,
      resteACharge: "0 €",
      includes: [
        "Assistance quotidienne",
        "Aide aux repas",
        "Sorties accompagnées",
        "Activités sociales",
        "Suivi bien-être",
        "Activité holistique incluse",
      ],
    },
    {
      name: "Mobilité Adaptée",
      description: "Accompagnement extérieur",
      price: "2 250",
      priceNote: "€/mois",
      duration: "75h (≈ 18h/semaine)",
      popular: false,
      resteACharge: "0 €",
      includes: [
        "Transport accompagné",
        "Visites médicales",
        "Courses accompagnées",
        "Sorties culturelles",
        "Maintien du lien social",
        "Activité holistique incluse",
      ],
    },
    {
      name: "Autonomie Active",
      description: "Stimulation cognitive et aide légère",
      price: "1 500",
      priceNote: "€/mois",
      duration: "50h (≈ 12h/semaine)",
      popular: false,
      resteACharge: "0 €",
      includes: [
        "Aide ponctuelle",
        "Stimulation mémoire",
        "Activités cognitives",
        "Soutien administratif",
        "Accompagnement léger",
        "Activité holistique incluse",
      ],
    },
    {
      name: "Pack CESU",
      description: "Heures complémentaires",
      price: "25",
      priceNote: "€/h",
      duration: "Flexible (selon besoin)",
      popular: false,
      resteACharge: "Variable",
      includes: [
        "Heures supplémentaires",
        "Aide administrative",
        "Accompagnement médical",
        "Sorties ponctuelles",
        "Soutien bien-être",
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6 animate-fade-up">
              Nos packs adaptés à chaque situation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Des formules claires, lisibles et <strong>finançables à 100%</strong> par les dispositifs publics (APA, PCH, CESU).
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Check className="w-4 h-4" />
              Zéro reste à charge dans la plupart des cas
            </div>
          </div>
        </div>
      </section>

      {/* Packs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <div
                key={index}
                className={`relative pack-card ${
                  pack.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-serenity to-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Le plus demandé
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-playfair mb-2">{pack.name}</h3>
                    <p className="text-muted-foreground">{pack.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-playfair font-bold text-gradient">
                      {pack.price}
                    </span>
                    <span className="text-muted-foreground">{pack.priceNote}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pack.duration}
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">
                        Reste à charge : {pack.resteACharge}
                      </span>
                    </div>
                    <p className="text-xs text-green-600 mt-1">100% APA/PCH</p>
                  </div>

                  <ul className="space-y-3">
                    {pack.includes.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-serenity-light flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="block">
                    <Button
                      variant={pack.popular ? "cta" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      Choisir ce pack
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              * Tous nos services sont intégralement financés par APA/PCH/CESU – reste à charge : 0 € ou minime selon le cas
            </p>
            <Link to="/financements">
              <Button variant="link" className="text-primary">
                En savoir plus sur les aides financières →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Activité Holistique */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Activité holistique <span className="text-gradient">incluse</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Chaque pack intègre notre approche holistique : bien-être, stimulation cognitive, 
              lien social et écoute active pour un accompagnement complet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Bien-être", desc: "Activités douces, relaxation, promenade" },
              { title: "Stimulation cognitive", desc: "Jeux mémoire, lecture, échanges" },
              { title: "Lien social", desc: "Sorties, visites, maintien des relations" },
            ].map((item, index) => (
              <div key={index} className="soft-card text-center">
                <h4 className="font-playfair text-xl mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Vous ne savez pas quel pack choisir ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Demandez une évaluation gratuite et sans engagement. 
              Nous vous conseillons le pack le plus adapté à votre situation.
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

export default Packs;
