import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import windowImage from "@/assets/product-window.png";
import terraceImage from "@/assets/product-terrace.png";
import showerImage from "@/assets/product-shower.png";

const services = [
  {
    title: "Ventanas",
    description: "Aísla tu hogar al 100%. Cero ruido de la calle, cero pérdidas de calor. El confort que mereces con el ahorro que necesitas.",
    image: windowImage,
    featured: true,
  },
  {
    title: "Cerramientos de Terrazas",
    description: "Transforma tu terraza en una habitación extra. Gana espacio habitable y aumenta el valor de tu propiedad sin obras.",
    image: terraceImage,
    featured: false,
  },
  {
    title: "Mamparas de Ducha",
    description: "Baño seguro y elegante. El acabado perfecto para evitar fugas y darle un toque moderno a tu baño.",
    image: showerImage,
    featured: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            La Solución Para Tu Hogar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Productos de alta calidad con instalación profesional y garantía extendida.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured service - spans full width on mobile, left side on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:row-span-2 group"
          >
            <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-card card-hover cursor-pointer">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-3">
                  Más Popular
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  {services[0].title}
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  {services[0].description}
                </p>
                <Button variant="hero" size="lg" className="group/btn" asChild>
                  <Link to="/ventanas">
                    Ver más
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Other services */}
          {services.slice(1).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="group"
            >
              <div className="relative h-full min-h-[240px] rounded-2xl overflow-hidden shadow-card card-hover cursor-pointer">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <Button variant="hero-outline" size="sm" className="group/btn" asChild>
                    <Link to={service.title.includes("Cerramientos") ? "/cerramientos" : service.title.includes("Mamparas") ? "/mamparas" : "/contacto"}>
                      Ver más
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
