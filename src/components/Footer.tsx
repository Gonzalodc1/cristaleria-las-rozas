import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  servicios: [
    { label: "Ventanas de PVC", href: "#servicios" },
    { label: "Ventanas de Aluminio", href: "#servicios" },
    { label: "Cerramientos", href: "#servicios" },
    { label: "Mamparas de Ducha", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Proyectos", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Aviso Legal", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={logo}
                alt="Cristalería Las Rozas - Aluminios y PVC"
                className="h-14 w-auto brightness-200 invert mix-blend-screen"
              />
            </div>
            <p className="text-sm mb-6">
              Más de 30 años instalando calidad y confort en hogares de Las Rozas y alrededores.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+34916370000" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                916 37 00 00
              </a>
              <a href="mailto:info@cristalerialasrozas.es" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@cristalerialasrozas.es
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Las Rozas de Madrid</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Cristalería Las Rozas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
