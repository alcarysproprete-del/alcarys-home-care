import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { 
  CreditCard, 
  ShoppingCart, 
  ArrowLeft, 
  Check,
  Euro,
  Shield,
  Clock
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cb");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
  });

  const paymentMethods = [
    {
      id: "cb",
      name: "Carte Bancaire",
      icon: "💳",
      description: "Visa, Mastercard, CB",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: "🅿️",
      description: "Paiement sécurisé PayPal",
    },
    {
      id: "cesu",
      name: "CESU",
      icon: "🎫",
      description: "Chèque Emploi Service Universel",
    },
    {
      id: "virement",
      name: "Virement bancaire",
      icon: "🏦",
      description: "Paiement par virement",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Commande confirmée ! ✅",
      description: "Vous recevrez un email de confirmation sous peu.",
    });

    clearCart();
    setIsProcessing(false);
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto py-16">
            <ShoppingCart className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
            <h1 className="text-3xl font-playfair mb-4">Votre panier est vide</h1>
            <p className="text-muted-foreground mb-8">
              Découvrez nos packs et services pour commencer.
            </p>
            <Link to="/packs">
              <Button variant="cta" size="lg">
                Voir nos packs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="hero-bg section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6 animate-fade-up text-center">
              Finaliser votre commande
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up text-center" style={{ animationDelay: "0.1s" }}>
              Paiement 100% sécurisé
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal info */}
                <div className="soft-card">
                  <h2 className="font-playfair text-xl mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                    Vos informations
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input 
                        id="address" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Code postal</Label>
                      <Input 
                        id="postalCode" 
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input 
                        id="city" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment method */}
                <div className="soft-card">
                  <h2 className="font-playfair text-xl mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                    Mode de paiement
                  </h2>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          paymentMethod === method.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <RadioGroupItem value={method.id} id={method.id} />
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-muted-foreground">{method.description}</div>
                        </div>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Submit */}
                <div className="flex gap-4">
                  <Link to="/packs">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Retour
                    </Button>
                  </Link>
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="flex-1"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Traitement en cours...
                      </>
                    ) : (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Confirmer et payer {getTotalPrice().toFixed(2)} €
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="soft-card sticky top-24">
                <h2 className="font-playfair text-xl mb-6">Récapitulatif</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start pb-4 border-b border-border">
                      <div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item.type === 'pack' ? 'bg-bleu-doux/30' : 'bg-sauge/30'
                        }`}>
                          {item.type === 'pack' ? 'Pack' : 'Service'}
                        </span>
                        <h4 className="font-medium mt-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.hours}h - {item.startDate && format(parseISO(item.startDate), 'PPP', { locale: fr })}
                        </p>
                      </div>
                      <span className="font-bold">{(item.price * item.hours).toFixed(2)} €</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span>{getTotalPrice().toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frais de service</span>
                    <span className="text-sauge">Offerts</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-playfair text-lg">Total</span>
                    <span className="text-2xl font-bold text-gradient">
                      {getTotalPrice().toFixed(2)} €
                    </span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Shield className="w-5 h-5 text-sauge" />
                    <span>Paiement 100% sécurisé</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Euro className="w-5 h-5 text-sauge" />
                    <span>CESU et aides APA/PCH acceptés</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CreditCard className="w-5 h-5 text-sauge" />
                    <span>Facilités de paiement disponibles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
