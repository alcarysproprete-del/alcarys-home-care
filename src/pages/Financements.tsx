import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Euro, CreditCard, Wallet, ArrowRight, Check } from "lucide-react";

const Financements = () => {
  const financements = [
    {
      icon: Euro,
      title: "APA – Allocation Personnalisée d'Autonomie",
      description: "L'APA est destinée aux personnes de 60 ans et plus en perte d'autonomie. Elle permet de financer une partie des aides à domicile.",
      eligibility: [
        "Avoir 60 ans ou plus",
        "Résider en France de manière stable",
        "Être en perte d'autonomie (GIR 1 à 4)",
        "Sans condition de ressources (montant variable)",
      ],
      coverage: "Jusqu'à 100% des frais selon GIR et ressources",
      color: "from-serenity to-serenity-light",
    },
    {
      icon: CreditCard,
      title: "PCH – Prestation de Compensation du Handicap",
      description: "La PCH finance les aides humaines liées au handicap pour toute personne en situation de handicap, sans limite d'âge.",
      eligibility: [
        "Difficulté absolue pour une activité",
        "Ou difficulté grave pour au moins 2 activités",
        "Résider en France",
        "Handicap survenu avant 60 ans (ou APA sinon)",
      ],
      coverage: "Prise en charge jusqu'à 100% selon ressources",
      color: "from-parme to-parme-light",
    },
    {
      icon: Wallet,
      title: "CESU – Crédit d'impôt 50%",
      description: "Tous les particuliers employeurs bénéficient d'un crédit d'impôt de 50% sur les sommes versées pour l'aide à domicile.",
      eligibility: [
        "Tous les contribuables français",
        "Emploi direct ou via un organisme",
        "Plafonné à 12 000€ par an",
        "Majoré pour personnes invalides ou +65 ans",
      ],
      coverage: "50% des dépenses remboursées",
      color: "from-serenity to-primary",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6 animate-fade-up">
              Aides financières disponibles
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              De nombreuses aides existent pour financer votre aide à domicile. 
              Nous vous accompagnons dans vos démarches.
            </p>
          </div>
        </div>
      </section>

      {/* Financements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {financements.map((financement, index) => (
              <div key={index} className="pack-card p-8 md:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Header */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${financement.color} flex items-center justify-center shadow-glow`}>
                        <financement.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-playfair">{financement.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {financement.description}
                    </p>
                  </div>

                  {/* Coverage Badge */}
                  <div className="flex items-center justify-center">
                    <div className="glass-card p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-2">Prise en charge</p>
                      <p className="text-xl font-playfair font-semibold text-gradient">{financement.coverage}</p>
                    </div>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold mb-4">Conditions d'éligibilité</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {financement.eligibility.map((item, iIndex) => (
                      <div key={iIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-serenity-light flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Comment bénéficier des aides ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous vous accompagnons à chaque étape de vos démarches.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Évaluation gratuite", desc: "Un conseiller évalue vos besoins à domicile" },
              { step: "2", title: "Constitution du dossier", desc: "Nous vous aidons à rassembler les documents" },
              { step: "3", title: "Dépôt de demande", desc: "Soumission auprès des organismes concernés" },
              { step: "4", title: "Mise en place", desc: "Début des prestations dès accord reçu" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-serenity to-primary mx-auto mb-4 flex items-center justify-center text-2xl font-playfair font-bold text-primary-foreground group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-playfair text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground/30 absolute top-6 -right-4" />
                )}
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
              Vérifiez votre éligibilité
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une évaluation gratuite de votre situation 
              et découvrez les aides auxquelles vous pouvez prétendre.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Vérifier mon éligibilité
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Financements;
