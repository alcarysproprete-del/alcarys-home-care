import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, CheckCircle, ExternalLink, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    postalCode: "",
  });

  // Questionnaire state
  const [questionnaire, setQuestionnaire] = useState({
    whoAreYou: "",
    age: "",
    situation: "",
    autonomy: "",
    needs: [] as string[],
    currentAids: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (field: string, value: string) => {
    setQuestionnaire({ ...questionnaire, [field]: value });
  };

  const handleCheckboxChange = (field: "needs" | "currentAids", value: string, checked: boolean) => {
    if (checked) {
      setQuestionnaire({ ...questionnaire, [field]: [...questionnaire[field], value] });
    } else {
      setQuestionnaire({ ...questionnaire, [field]: questionnaire[field].filter(v => v !== value) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.lastName || !formData.firstName || !formData.phone || !formData.email) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons sous 24h.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="hero-bg min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-or to-or-fonce mx-auto mb-8 flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 animate-fade-up">
              Merci pour votre demande !
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Un conseiller Alcarys vous contactera dans les <strong>24 heures</strong> pour 
              organiser votre évaluation gratuite à domicile.
            </p>
            <div className="glass-card p-6 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Shield className="w-8 h-8 text-sauge mx-auto mb-3" />
              <p className="text-foreground font-medium">
                Évaluation gratuite, confidentielle et sans engagement.
              </p>
            </div>
            <Button variant="cta" size="lg" onClick={() => setIsSubmitted(false)}>
              Envoyer une nouvelle demande
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6 animate-fade-up text-center">
              Vérifiez votre <span className="text-gradient">éligibilité</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up text-center" style={{ animationDelay: "0.1s" }}>
              Évaluation gratuite et sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-playfair mb-6 text-center lg:text-left">Coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-bleu-doux/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Neuilly-sur-Marne<br />
                        Seine-Saint-Denis (93)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-bleu-doux/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a href="tel:0764160367" className="text-primary hover:underline font-medium">
                        07 64 16 03 67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-bleu-doux/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@alcarys.fr" className="text-primary hover:underline">
                        contact@alcarys.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-bleu-doux/30 flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Site web</h3>
                      <a href="https://www.alcarys.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        www.alcarys.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-bleu-doux/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horaires</h3>
                      <p className="text-muted-foreground">
                        Lun - Ven : 8h - 19h<br />
                        Sam : 9h - 12h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Encadré rassurant */}
              <div className="glass-card p-6 card-holistique">
                <Shield className="w-8 h-8 text-sauge mb-3" />
                <p className="text-foreground font-medium text-sm text-justify">
                  Votre demande est traitée sous 24h. Évaluation gratuite, confidentielle et sans engagement.
                </p>
              </div>

              {/* Boutons d'action rapide */}
              <div className="space-y-3">
                <a href="tel:0764160367" className="block">
                  <Button variant="outline" className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Nous appeler : 07 64 16 03 67
                  </Button>
                </a>
              </div>
            </div>

            {/* Questionnaire Form */}
            <div className="lg:col-span-2">
              <div className="pack-card">
                <h2 className="text-2xl font-playfair mb-8 text-center">Questionnaire d'éligibilité</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* 1. Qui êtes-vous */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">1. Qui êtes-vous ?</h3>
                    <div className="space-y-2">
                      {["La personne concernée", "Un proche / aidant", "Un professionnel de santé"].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="whoAreYou"
                            value={option}
                            checked={questionnaire.whoAreYou === option}
                            onChange={() => handleRadioChange("whoAreYou", option)}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-foreground">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 2. Âge */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">2. Âge de la personne accompagnée</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["Moins de 60 ans", "60–74 ans", "75–84 ans", "85 ans et plus"].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="age"
                            value={option}
                            checked={questionnaire.age === option}
                            onChange={() => handleRadioChange("age", option)}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-foreground">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 3. Situation actuelle */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">3. Situation actuelle</h3>
                    <div className="space-y-2">
                      {["Vit à domicile", "Vit en résidence autonomie", "Vit chez un proche"].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="situation"
                            value={option}
                            checked={questionnaire.situation === option}
                            onChange={() => handleRadioChange("situation", option)}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-foreground">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 4. Niveau d'autonomie */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">4. Niveau d'autonomie</h3>
                    <div className="space-y-2">
                      {[
                        "Autonome mais besoin d'aide ponctuelle",
                        "Difficultés pour certaines tâches",
                        "Perte d'autonomie importante",
                        "Dépendance forte / besoin de présence quotidienne"
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="autonomy"
                            value={option}
                            checked={questionnaire.autonomy === option}
                            onChange={() => handleRadioChange("autonomy", option)}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-foreground">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 5. Besoins identifiés */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">5. Besoins identifiés</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        "Aide au lever / coucher",
                        "Aide à la toilette / hygiène",
                        "Préparation des repas",
                        "Courses / logistique",
                        "Accompagnement médical",
                        "Sorties culturelles / sociales",
                        "Stimulation cognitive",
                        "Aide administrative",
                        "Présence de nuit",
                        "Option animaux (promenade, soins)"
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 cursor-pointer transition-colors">
                          <Checkbox
                            checked={questionnaire.needs.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange("needs", option, checked as boolean)}
                          />
                          <span className="text-foreground text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 6. Aides actuelles */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">6. Aides actuelles</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["APA", "PCH", "CESU", "Aucune aide", "Je ne sais pas"].map((option) => (
                        <label key={option} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 cursor-pointer transition-colors">
                          <Checkbox
                            checked={questionnaire.currentAids.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange("currentAids", option, checked as boolean)}
                          />
                          <span className="text-foreground">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 7. Coordonnées */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">7. Vos coordonnées</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Votre nom"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Votre prénom"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="06 00 00 00 00"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre@email.fr"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Code postal</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="93330"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="space-y-4 pt-4">
                    <Button type="submit" variant="cta" size="xl" className="w-full">
                      Envoyer mon évaluation
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par Alcarys. 
                      Vos données sont protégées conformément à notre{" "}
                      <a href="/politique-confidentialite" className="text-primary hover:underline">
                        politique de confidentialité
                      </a>.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
