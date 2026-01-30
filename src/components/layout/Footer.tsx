import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-serenity to-parme flex items-center justify-center">
                <span className="text-foreground font-playfair font-bold text-xl">A</span>
              </div>
              <span className="font-playfair text-2xl font-semibold">Alcarys</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Aide à domicile humaine et professionnelle à Neuilly-sur-Marne. 
              Nous accompagnons chaque personne avec respect et bienveillance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-serenity transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-serenity transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-serenity transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-semibold">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  Entretien du logement
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  Aide aux repas
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  Accompagnement extérieur
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  Présence de nuit
                </Link>
              </li>
              <li>
                <Link to="/packs" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  Nos packs
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-semibold">Informations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/a-propos" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  À propos d'Alcarys
                </Link>
              </li>
              <li>
                <Link to="/financements" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  APA / PCH / CESU
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  Demander une évaluation
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-serenity flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Neuilly-sur-Marne<br />
                  Seine-Saint-Denis (93)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-serenity flex-shrink-0" />
                <a href="tel:+33100000000" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  01 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-serenity flex-shrink-0" />
                <a href="mailto:contact@alcarys.fr" className="text-primary-foreground/70 hover:text-serenity transition-colors">
                  contact@alcarys.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Alcarys. Tous droits réservés.</p>
            <p>Aide à domicile à Neuilly-sur-Marne et environs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
