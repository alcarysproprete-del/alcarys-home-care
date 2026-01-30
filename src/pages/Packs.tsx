import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Packs = () => {
  const packs = [
    {
      name: "Pack Autonomie",
      description: "Pour personnes autonomes",
      price: "12",
      priceNote: "€/h après aides",
      popular: false,
      includes: [
        "Ménage régulier",
        "Aide aux courses",
        "Préparation des repas",
        "Accompagnement sorties",
        "Compagnie et échanges",
      ],
    },
    {
      name: "Pack Modéré",
      description: "Perte d'autonomie légère",
      price: "9",
      priceNote: "€/h après APA",
      popular: true,
      includes: [
        "Aide à l'hygiène simple",
        "Préparation des repas",
        "Ménage et entretien",
        "Aide au lever/coucher",
        "Accompagnement quotidien",
      ],
    },
    {
      name: "Pack Présence",
      description: "Sécurité & réassurance",
      price: "15",
      priceNote: "€/h",
      popular: false,
      includes: [
        "Présence continue",
        "Surveillance discrète",
        "Compagnie rassurante",
        "Aide ponctuelle",
        "Appel d'urgence",
      ],
    },
    {
      name: "Pack Nuit Douce",
      description: "Présence nocturne",
      price: "65-90",
      priceNote: "€/nuit",
      popular: false,
      includes: [
        "Présence nocturne complète",
        "Surveillance du sommeil",
        "Aide aux levers",
        "Réassurance",
        "Intervention en cas de besoin",
      ],
    },
    {
      name: "Pack Mobilité Réduite",
      description: "Perte d'autonomie importante",
      price: "8",
      priceNote: "€/h après APA/PCH",
      popular: false,
      includes: [
        "Toilette et habillage",
        "Transferts sécurisés",
        "Préparation des repas",
        "Aide à l'alimentation",
        "Accompagnement complet",
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
              Des formules claires et transparentes pour un accompagnement 
              personnalisé selon vos besoins.
            </p>
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

                  <ul className="space-y-3">
                    {pack.includes.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-serenity-light flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
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
              * Les tarifs varient selon la situation et les aides dont vous pouvez bénéficier.
            </p>
            <Link to="/financements">
              <Button variant="link" className="text-primary">
                En savoir plus sur les aides financières →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
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
