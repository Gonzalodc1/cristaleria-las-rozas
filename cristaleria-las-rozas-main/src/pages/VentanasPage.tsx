import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import heroImg from "@/assets/product-window.png"; // Fallback or reuse generic

const features = [
    "Aislamiento Térmico (RPT)",
    "Vidrio Bajo Emisivo",
    "Apertura Oscilobatiente",
    "Máxima Seguridad",
    "Variedad de Colores (RAL)",
    "Garantía 10 años"
];

const VentanasPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <section className="container py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Ventanas de Alta Eficiencia
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Aísla tu hogar al 100%. Cero ruido de la calle, cero pérdidas de calor.
                            El confort que mereces con el ahorro que necesitas.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {features.map((f) => (
                                <li key={f} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <Button size="lg" className="mt-4" asChild>
                            <a href="#contacto">Solicitar Presupuesto <ArrowRight className="ml-2 w-4 h-4" /></a>
                        </Button>
                    </div>
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden relative shadow-xl">
                        {/* Placeholder or use Pexels logic later if needed for specific asset */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
                        <img src={heroImg} alt="Ventana aislante" className="w-full h-full object-cover" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default VentanasPage;
