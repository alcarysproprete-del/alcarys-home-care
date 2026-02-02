import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Euro, ShoppingCart } from "lucide-react";
import AddToCartModal from "@/components/cart/AddToCartModal";

const Packs = () => {
  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    type: 'pack' | 'service';
    name: string;
    description: string;
    price: number;
    priceUnit: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packs = [
    {
      id: "pack-autonomie",
      name: "Pack Autonomie",
      description: "Pour personnes autonomes",
      price: 12,
      priceNote: "€/h après aides",
      popular: false,
      resteACharge: "Variable",
      includes: [
        "Ménage et entretien",
        "Courses alimentaires",
        "Préparation des repas",
        "Accompagnement léger",
        "Activité holistique incluse",
      ],
    },
    {
      id: "pack-modere",
      name: "Pack Modéré",
      description: "Perte d'autonomie légère",
      price: 9,
      priceNote: "€/h après APA",
      popular: true,
      resteACharge: "0 € à minime",
      includes: [
        "Hygiène simple assistée",
        "Préparation des repas",
        "Ménage quotidien",
        "Accompagnement personnalisé",
        "Activité holistique incluse",
      ],
    },
    {
      id: "pack-presence",
      name: "Pack Présence",
      description: "Sécurité & réassurance",
      price: 15,
      priceNote: "€/h",
      popular: false,
      resteACharge: "Variable",
      includes: [
        "Présence continue",
        "Surveillance bienveillante",
        "Réassurance psychologique",
        "Accompagnement au quotidien",
        "Activité holistique incluse",
      ],
    },
    {
      id: "pack-nuit",
      name: "Pack Nuit Douce",
      description: "Présence nocturne",
      price: 75,
      priceNote: "€/nuit",
      popular: false,
      resteACharge: "Variable",
      includes: [
        "Présence nocturne rassurante",
        "Aide aux levers nocturnes",
        "Surveillance continue",
        "Appel d'urgence disponible",
      ],
    },
    {
      id: "pack-mobilite",
      name: "Pack Mobilité Réduite",
      description: "Perte d'autonomie importante",
      price: 8,
      priceNote: "€/h après APA/PCH",
      popular: false,
      resteACharge: "0 €",
      includes: [
        "Toilette simple assistée",
        "Transferts et mobilité",
        "Préparation des repas",
        "Aide complète au quotidien",
        "Activité holistique incluse",
      ],
    },
  ];

  const handleAddToCart = (pack: typeof packs[0]) => {
    setSelectedItem({
      id: pack.id,
      type: 'pack',
      name: pack.name,
      description: pack.description,
      price: pack.price,
      priceUnit: pack.priceNote,
    });
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6 animate-fade-up text-center">
              Nos packs adaptés à chaque situation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up text-center" style={{ animationDelay: "0.1s" }}>
              Des formules claires, lisibles et finançables grâce aux dispositifs publics (APA, PCH, CESU).
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-sauge/20 text-foreground px-4 py-2 rounded-full text-sm font-medium animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Check className="w-4 h-4 text-sauge" />
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
                    <div className="bg-gradient-to-r from-or to-or-fonce text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Le plus demandé
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-playfair mb-2 text-center">{pack.name}</h3>
                    <p className="text-muted-foreground text-center">{pack.description}</p>
                  </div>

                  <div className="text-center">
                    <span className="text-3xl font-playfair font-bold text-gradient">
                      {pack.price}
                    </span>
                    <span className="text-muted-foreground ml-1">{pack.priceNote}</span>
                  </div>

                  <div className="bg-sauge/10 border border-sauge/30 rounded-xl px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <Euro className="w-4 h-4 text-sauge" />
                      <span className="text-sm font-medium text-foreground">
                        Reste à charge : {pack.resteACharge}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {pack.includes.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-bleu-doux/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={pack.popular ? "cta" : "outline"}
                    className="w-full"
                    size="lg"
                    onClick={() => handleAddToCart(pack)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ajouter au panier
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4 text-justify max-w-2xl mx-auto">
              * Les tarifs indiqués sont après déduction des aides APA/PCH/CESU selon éligibilité. 
              Une évaluation gratuite permet de déterminer le reste à charge exact.
            </p>
          </div>
        </div>
      </section>

      {/* Activité Holistique */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Activité holistique <span className="text-gradient">incluse</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center">
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
              <div key={index} className="soft-card text-center card-holistique">
                <h4 className="font-playfair text-xl mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add to Cart Modal */}
      <AddToCartModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </>
  );
};

export default Packs;
