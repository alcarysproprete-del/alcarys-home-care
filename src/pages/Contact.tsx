import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    address: "",
    situation: "",
    needs: "",
    urgency: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.lastName || !formData.firstName || !formData.phone || !formData.email) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="hero-bg min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-serenity to-primary mx-auto mb-8 flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 animate-fade-up">
              Merci pour votre demande !
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Un conseiller Alcarys vous contactera dans les 24 heures pour 
              organiser votre évaluation gratuite à domicile.
            </p>
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
            <h1 className="text-4xl md:text-5xl font-playfair mb-6 animate-fade-up">
              Demandez votre évaluation gratuite
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Un conseiller Alcarys se déplace gratuitement chez vous pour 
              évaluer vos besoins et vous proposer un accompagnement sur-mesure.
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
                <h2 className="text-2xl font-playfair mb-6">Coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-serenity-light flex items-center justify-center flex-shrink-0">
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
                    <div className="w-12 h-12 rounded-xl bg-serenity-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a href="tel:+33100000000" className="text-primary hover:underline">
                        01 00 00 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-serenity-light flex items-center justify-center flex-shrink-0">
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
                    <div className="w-12 h-12 rounded-xl bg-serenity-light flex items-center justify-center flex-shrink-0">
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

              <div className="glass-card p-6">
                <h3 className="font-playfair text-lg mb-3">Zone d'intervention</h3>
                <p className="text-muted-foreground text-sm">
                  Neuilly-sur-Marne et communes environnantes : Noisy-le-Grand, 
                  Gournay-sur-Marne, Le Perreux-sur-Marne, Bry-sur-Marne, 
                  Champs-sur-Marne, Rosny-sous-Bois...
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="pack-card">
                <h2 className="text-2xl font-playfair mb-8">Formulaire de contact</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
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

                  <div className="grid sm:grid-cols-2 gap-6">
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
                    <Label htmlFor="address">Adresse</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Adresse du bénéficiaire"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="situation">Situation du bénéficiaire</Label>
                      <Select onValueChange={(value) => handleSelectChange("situation", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="autonome">Personne autonome</SelectItem>
                          <SelectItem value="perte-legere">Perte d'autonomie légère</SelectItem>
                          <SelectItem value="perte-moderee">Perte d'autonomie modérée</SelectItem>
                          <SelectItem value="perte-importante">Perte d'autonomie importante</SelectItem>
                          <SelectItem value="handicap">Situation de handicap</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Niveau d'urgence</Label>
                      <Select onValueChange={(value) => handleSelectChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (sous 48h)</SelectItem>
                          <SelectItem value="rapide">Rapide (sous 1 semaine)</SelectItem>
                          <SelectItem value="normal">Normal (sous 2 semaines)</SelectItem>
                          <SelectItem value="planifie">Planifié (plus d'un mois)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="needs">Vos besoins</Label>
                    <Textarea
                      id="needs"
                      name="needs"
                      placeholder="Décrivez les prestations souhaitées, la fréquence, et toute information utile..."
                      rows={5}
                      value={formData.needs}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="xl" className="w-full">
                    Demander mon évaluation gratuite
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par Alcarys. 
                    Vos données sont protégées conformément à notre{" "}
                    <a href="/politique-confidentialite" className="text-primary hover:underline">
                      politique de confidentialité
                    </a>.
                  </p>
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
