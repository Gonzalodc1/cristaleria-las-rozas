import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import heroImg from "@/assets/product-terrace.png";

const features = [
    "Cortinas de Cristal",
    "Techos Móviles",
    "Sin Perfiles Verticales",
    "Apertura Total",
    "Vidrio Templado de Seguridad",
    "Instalación Rápida"
];

const CerramientosPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <section className="container py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Cerramientos de Terrazas
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Transforma tu terraza en una habitación extra. Gana espacio habitable
                            y aumenta el valor de tu propiedad sin obras complejas.
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
                            <a href="#contacto">Pedir Presupuesto Gratis <ArrowRight className="ml-2 w-4 h-4" /></a>
                        </Button>
                    </div>
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden relative shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent mix-blend-multiply" />
                        <img src={heroImg} alt="Terraza cerrada" className="w-full h-full object-cover" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CerramientosPage;
