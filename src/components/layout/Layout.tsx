import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import NavigationButtons from "@/components/navigation/NavigationButtons";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const LayoutContent = ({ children }: LayoutProps) => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <NavigationButtons />
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContent>{children}</LayoutContent>;
};

export default Layout;
