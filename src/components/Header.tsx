import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const serviceLinks = [
  { href: "/vidrios", label: "Vidrios / Espejos" },
  { href: "/pvc-aluminio", label: "PVC / Aluminio" },
  { href: "/mamparas", label: "Mámparas de Baño" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-card border-b border-border transition-all duration-300"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/favicon.png"
            alt="Cristalería Las Rozas"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Servicios Dropdown with Hover */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <button className="flex items-center gap-1 font-medium transition-colors hover:text-primary text-foreground outline-none py-2">
              Servicios
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesHovered ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Content */}
            <div
              className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                isServicesHovered
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#ventajas"
            className="font-medium transition-colors hover:text-primary text-foreground"
          >
            Ventajas
          </a>

          <Link
            to="/contacto"
            className="font-medium transition-colors hover:text-primary text-foreground"
          >
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contacto">
              <Phone className="w-4 h-4" />
              Solicita Presupuesto
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80">
            <nav className="flex flex-col gap-4 mt-8">
              {/* Mobile Servicios Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  Servicios
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-3">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#ventajas"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                Ventajas
              </a>

              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </Link>

              <Button variant="hero" size="lg" className="mt-4" asChild>
                <Link to="/contacto" onClick={() => setIsOpen(false)}>
                  <Phone className="w-4 h-4" />
                  Solicita Presupuesto
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
