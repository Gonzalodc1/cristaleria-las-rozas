import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import heroImg from "@/assets/product-glass.jpg";

const features = [
    "Vidrios / Espejos",
    "Vidrios extraclaros",
    "Templados",
    "Laminares",
    "Doble acristalamiento",
    "Lacobel",
    "Carglas",
    "Impreso",
    "Vidrios de importación"
];

const VidrirosPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <section className="container py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Vidrios
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Realizamos todo tipo de trabajo a medida con la máxima calidad y profesionalidad.
                            Contamos con más de 30 años de experiencia en el sector, ofreciendo soluciones
                            personalizadas para cada proyecto.
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
                            <a href="/contacto">Solicitar Presupuesto <ArrowRight className="ml-2 w-4 h-4" /></a>
                        </Button>
                    </div>
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden relative shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
                        <img src={heroImg} alt="Vidrios y cristales profesionales" className="w-full h-full object-cover" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default VidrirosPage;
