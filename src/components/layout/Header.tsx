import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Nos services", path: "/services" },
  { name: "Nos packs", path: "/packs" },
  { name: "Financements", path: "/financements" },
  { name: "À propos", path: "/a-propos" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 blur-overlay border-b border-border/50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-or to-or-fonce flex items-center justify-center">
                <span className="text-primary-foreground font-playfair font-bold text-xl">A</span>
              </div>
              <span className="font-playfair text-xl font-semibold text-foreground hidden sm:block">Alcarys</span>
            </Link>

            {/* Desktop Navigation - Non déroulant */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`link-underline font-medium text-sm transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:0764160367" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium text-sm">07 64 16 03 67</span>
              </a>
              <Link to="/contact">
                <Button variant="cta" size="default">
                  Évaluation gratuite
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-6 border-t border-border/50 animate-fade-in">
              <div className="text-center mb-4">
                <span className="font-playfair text-lg font-semibold text-or-fonce">
                  Prendre soin autrement
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 font-medium transition-colors text-center ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <a 
                    href="tel:0764160367" 
                    className="flex items-center justify-center gap-2 text-primary font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    07 64 16 03 67
                  </a>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="cta" className="w-full">
                      Évaluation gratuite
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Bouton Retour en haut */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center hover:scale-110 transition-all duration-300 animate-fade-in"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Header;
