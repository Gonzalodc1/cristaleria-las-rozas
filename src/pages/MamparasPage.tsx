import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import heroImg from "@/assets/product-shower.png";

const features = [
    "Vidrio Templado de Seguridad",
    "Tratamiento Antical",
    "Perfiles Mínimos / Sin Perfiles",
    "Aperturas Correderas y Abatibles",
    "Diseño a Medida",
    "Estanqueidad Garantizada"
];

const MamparasPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container py-8 md:py-16 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Mamparas de Ducha y Baño
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Convierte tu baño en un espacio moderno y funcional.
                            Máxima seguridad y limpieza con nuestros vidrios tratados con tecnología antical.
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
                            <a href="/contacto">Pedir Presupuesto <ArrowRight className="ml-2 w-4 h-4" /></a>
                        </Button>
                    </div>
                    <div className="aspect-square md:aspect-[4/3] bg-muted rounded-xl overflow-hidden relative shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent mix-blend-multiply" />
                        <img src={heroImg} alt="Mampara de ducha moderna" className="w-full h-full object-cover" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MamparasPage;
