import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Layers, Home, ShowerHead } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-living-room.png";

const panels = [
  {
    title: "Vidrios",
    icon: Layers,
    items: ["Espejos a medida", "Dobles acristalamientos", "Lacobel (vidrios lacados)", "Vidrios de seguridad", "Vidrios de importación", "Barandillas infinity", "Cortinas de cristal"],
    href: "/vidrios",
  },
  {
    title: "PVC / Aluminio",
    icon: Home,
    items: ["Kömmerling", "Aislamiento térmico", "Guardian sun", "Apertura oscilobatiente", "Cierre 5 puntos", "Persianas electricas de seguridad", "Garantía 15 años"],
    href: "/pvc-aluminio",
  },
  {
    title: "Mámparas de Baño",
    icon: ShowerHead,
    items: ["Ducha", "Bañera", "Diseño a medida"],
    href: "/mamparas",
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cristalería profesional - Vidrios y ventanas"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-8">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-white font-semibold">Empresa familiar desde 1980</span>
            <span className="text-white/60">|</span>
            <span className="text-white/80">45+ años de experiencia</span>
          </div>
        </motion.div>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Link
                to={panel.href}
                className="block h-full"
              >
                <div className="group relative h-full min-h-[280px] md:min-h-[340px] rounded-2xl border border-white/30 bg-black/40 backdrop-blur-lg p-6 md:p-8 transition-all duration-300 hover:bg-black/50 hover:border-white/50 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <panel.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {panel.title}
                  </h2>

                  {/* Items list */}
                  {panel.items.length > 0 && (
                    <ul className="space-y-1.5">
                      {panel.items.map((item) => (
                        <li
                          key={item}
                          className="text-white/80 text-sm font-medium"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Arrow indicator */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <Button variant="hero" size="xl" asChild>
            <Link to="/contacto">
              Solicita Tu Presupuesto Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-white/70"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Instalación profesional</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Presupuesto sin compromiso</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Garantía de calidad</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
