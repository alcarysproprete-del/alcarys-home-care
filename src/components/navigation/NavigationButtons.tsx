import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const routes = [
  { path: "/", label: "Accueil" },
  { path: "/services", label: "Services" },
  { path: "/packs", label: "Packs" },
  { path: "/financements", label: "Financements" },
  { path: "/a-propos", label: "À propos" },
  { path: "/contact", label: "Contact" },
];

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = routes.findIndex(r => r.path === location.pathname);
  const prevRoute = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const nextRoute = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;

  if (currentIndex === -1) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
      <Button
        variant="outline"
        size="lg"
        onClick={() => prevRoute && navigate(prevRoute.path)}
        disabled={!prevRoute}
        className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        <span className="hidden sm:inline">{prevRoute?.label || "Précédent"}</span>
        <span className="sm:hidden">Préc.</span>
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        onClick={() => nextRoute && navigate(nextRoute.path)}
        disabled={!nextRoute}
        className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
      >
        <span className="hidden sm:inline">{nextRoute?.label || "Suivant"}</span>
        <span className="sm:hidden">Suiv.</span>
        <ChevronRight className="w-5 h-5 ml-1" />
      </Button>
    </div>
  );
};

export default NavigationButtons;
