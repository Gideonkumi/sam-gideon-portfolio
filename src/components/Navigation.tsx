import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Home, Info } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
            <Calculator className="w-6 h-6" />
            <span>ModernCalc</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/" className="flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </Button>
            
            <Button
              variant={location.pathname === "/about" ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/about" className="flex items-center space-x-2">
                <Info className="w-4 h-4" />
                <span>About</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;