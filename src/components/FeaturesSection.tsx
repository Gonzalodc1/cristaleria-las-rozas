import { motion } from "framer-motion";
import { Thermometer, Shield, Sparkles, Clock, Award, Wrench } from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Aislamiento Térmico",
    description: "Mantén tu hogar a la temperatura perfecta todo el año.",
  },
  {
    icon: Shield,
    title: "Máxima Durabilidad",
    description: "Materiales de primera calidad con 10 años de garantía.",
  },
  {
    icon: Sparkles,
    title: "Estética Premium",
    description: "Diseños modernos que aumentan el valor de tu propiedad.",
  },
  {
    icon: Clock,
    title: "Instalación Rápida",
    description: "Equipo profesional, mínimas molestias en tu día a día.",
  },
  {
    icon: Award,
    title: "Certificación CE",
    description: "Productos certificados con los más altos estándares.",
  },
  {
    icon: Wrench,
    title: "Servicio Post-Venta",
    description: "Te acompañamos después de la instalación.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="ventajas" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Por Qué Elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Calidad y Servicio Garantizado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 30 años de experiencia nos respaldan
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
