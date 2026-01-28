import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  servicios: [
    { label: "Vidrios / Espejos", href: "/vidrios" },
    { label: "PVC / Aluminio", href: "/pvc-aluminio" },
    { label: "Mámparas de Baño", href: "/mamparas" },
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
              Más de 45 años instalando calidad y confort en hogares de Las Rozas y alrededores.
            </p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Las Rozas de Madrid</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-primary-foreground/60 text-xs mb-1">Móvil / WhatsApp</p>
                <a href="tel:+34633039377" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  633 039 377
                </a>
                <a href="tel:+34622955643" className="flex items-center gap-2 hover:text-primary-foreground transition-colors mt-1">
                  <Phone className="w-4 h-4" />
                  622 955 643
                </a>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-xs mb-1">Teléfono Fijo</p>
                <a href="tel:+34916373333" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  916 373 333
                </a>
              </div>
              <a href="mailto:cristalerialasrozas@hotmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="break-all">cristalerialasrozas@hotmail.com</span>
              </a>
              <div className="flex items-start gap-2 pt-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="text-primary-foreground/60 text-xs mb-1">Horario</p>
                  <p>L-V: 09:00 - 14:00</p>
                  <p>L-V: 17:00 - 20:00</p>
                </div>
              </div>
            </div>
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
