import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, Utensils, MapPin, Droplets, FileText, Moon,
  Stethoscope, ShoppingCart, Theater, Brain, Heart, PawPrint
} from "lucide-react";
import cleaningImage from "@/assets/service-cleaning.jpg";
import mealsImage from "@/assets/service-meals.jpg";
import accompanimentImage from "@/assets/service-accompaniment.jpg";
import nightImage from "@/assets/service-night.jpg";
import AddToCartModal from "@/components/cart/AddToCartModal";

const Services = () => {
  const [selectedItem, setSelectedItem] = useState<{
    id: string;
    type: 'pack' | 'service';
    name: string;
    description: string;
    price: number;
    priceUnit: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Home,
      title: "Entretien du logement",
      description: "Un intérieur propre et rangé pour un quotidien serein. Nos intervenants assurent le ménage, le rangement, le repassage et l'entretien du linge avec soin et discrétion.",
      image: cleaningImage,
      features: ["Ménage et dépoussiérage", "Repassage et linge", "Rangement", "Vitres accessibles"],
    },
    {
      icon: Utensils,
      title: "Aide aux repas",
      description: "Préparation de repas équilibrés adaptés aux goûts et régimes alimentaires. Nous veillons à la nutrition et au plaisir de manger.",
      image: mealsImage,
      features: ["Courses alimentaires", "Préparation des repas", "Aide à la prise des repas", "Respect des régimes"],
    },
    {
      icon: MapPin,
      title: "Accompagnement extérieur",
      description: "Sorties et rendez-vous accompagnés pour maintenir le lien social et l'autonomie. Nous vous aidons à rester actif et connecté.",
      image: accompanimentImage,
      features: ["Rendez-vous médicaux", "Promenades", "Courses accompagnées", "Visites familiales"],
    },
    {
      icon: Droplets,
      title: "Aide à l'hygiène",
      description: "Accompagnement respectueux et bienveillant pour la toilette quotidienne (non médicale). Nous préservons votre dignité et votre confort.",
      image: null,
      features: ["Aide à la toilette", "Habillage", "Coiffure simple", "Lever et coucher"],
    },
    {
      icon: FileText,
      title: "Aide administrative",
      description: "Gestion des courriers, classement des documents et aide aux démarches. Nous simplifions votre quotidien administratif.",
      image: null,
      features: ["Tri du courrier", "Aide aux démarches", "Classement documents", "Prise de rendez-vous"],
    },
    {
      icon: Moon,
      title: "Présence de nuit",
      description: "Surveillance et réassurance nocturne pour des nuits paisibles. Une présence rassurante pour vous et vos proches.",
      image: nightImage,
      features: ["Surveillance continue", "Aide aux levers", "Réassurance", "Appel d'urgence"],
    },
  ];

  const servicesAlaCarte = [
    {
      id: "service-medical",
      icon: Stethoscope,
      title: "Accompagnement médical",
      price: 45,
      priceDisplay: "45 €/h",
      description: "Transport et assistance lors de rendez-vous médicaux",
    },
    {
      id: "service-courses",
      icon: ShoppingCart,
      title: "Courses et logistique",
      price: 40,
      priceDisplay: "40 €/h",
      description: "Courses alimentaires, pharmacie, démarches administratives",
    },
    {
      id: "service-sorties",
      icon: Theater,
      title: "Sorties culturelles et sociales",
      price: 50,
      priceDisplay: "50 €/h",
      description: "Accompagnement au théâtre, musée, cinéma, événements sociaux",
    },
    {
      id: "service-admin",
      icon: FileText,
      title: "Aide administrative",
      price: 35,
      priceDisplay: "35 €/h",
      description: "Gestion du courrier, formulaires, demandes APA/PCH, suivi de dossiers",
    },
    {
      id: "service-cognitif",
      icon: Brain,
      title: "Stimulation cognitive personnalisée",
      price: 45,
      priceDisplay: "45 €/h",
      description: "Ateliers mémoire, jeux cognitifs, activités adaptées",
    },
    {
      id: "service-bienetre",
      icon: Heart,
      title: "Soutien bien-être",
      price: 50,
      priceDisplay: "50 €/h",
      description: "Activités douces : lecture, promenade, relaxation, écoute",
    },
    {
      id: "service-nuit",
      icon: Moon,
      title: "Intervention ponctuelle de nuit",
      price: 80,
      priceDisplay: "80 €/nuit",
      description: "Présence rassurante et assistance nocturne exceptionnelle",
    },
    {
      id: "service-animaux",
      icon: PawPrint,
      title: "Option Animaux",
      price: 20,
      priceDisplay: "20 €/h",
      description: "Promenade, alimentation, soins de base pour animaux de compagnie",
    },
  ];

  const handleAddService = (service: typeof servicesAlaCarte[0]) => {
    setSelectedItem({
      id: service.id,
      type: 'service',
      name: service.title,
      description: service.description,
      price: service.price,
      priceUnit: "/h",
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
              Nos services d'aide à domicile
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up text-center" style={{ animationDelay: "0.1s" }}>
              Des prestations complètes et personnalisées pour vous accompagner au quotidien, 
              dans le respect de vos habitudes et de votre autonomie.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div className="icon-circle">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-playfair">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-sauge" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/packs">
                    <Button variant="cta" size="lg">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Voir nos packs
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  {service.image ? (
                    <div className="rounded-3xl overflow-hidden shadow-card">
                      <img
                        src={service.image}
                        alt={`Service ${service.title} - Aide à domicile Alcarys`}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  ) : (
                    <div className="rounded-3xl bg-gradient-to-br from-bleu-doux/30 via-lavande/30 to-background h-80 flex items-center justify-center shadow-soft">
                      <service.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services à la carte */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Services à la carte <span className="text-gradient">(optionnels)</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              Des prestations complémentaires pour répondre à tous vos besoins spécifiques.
              Cliquez pour ajouter au panier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesAlaCarte.map((service, index) => (
              <div 
                key={index} 
                className={`soft-card group hover:shadow-card transition-all cursor-pointer ${index === 7 ? 'card-animaux' : ''}`}
                onClick={() => handleAddService(service)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-or to-or-fonce flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-xl font-bold text-gradient">{service.priceDisplay}</div>
                </div>
                <h3 className="font-playfair text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ajouter au panier
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center">
              Besoin d'un service personnalisé ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
              Chaque situation est unique. Contactez-nous pour une évaluation gratuite 
              et un plan d'accompagnement sur-mesure.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Demander une évaluation gratuite
              </Button>
            </Link>
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

export default Services;
