import { motion } from "framer-motion";
import { AlertTriangle, ThermometerSun, Volume2, Banknote } from "lucide-react";

const problems = [
  {
    icon: ThermometerSun,
    title: "Frío en invierno, calor en verano",
    description: "Tus ventanas actuales no aíslan correctamente, dejando escapar el confort.",
  },
  {
    icon: Banknote,
    title: "Facturas de luz por las nubes",
    description: "Hasta el 30% de la energía de tu hogar se pierde por las ventanas.",
  },
  {
    icon: Volume2,
    title: "Ruido constante del exterior",
    description: "El tráfico, vecinos y la calle entran en tu casa sin permiso.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">¿Te suena familiar?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tus ventanas actuales son el principal culpable
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            de tus altas facturas y tu falta de confort en casa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
