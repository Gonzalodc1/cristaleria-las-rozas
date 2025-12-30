import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ContactoPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Contacta con Nosotros
                    </h1>

                    {/* Primary Action */}
                    <div className="bg-card p-8 rounded-2xl shadow-lg border border-border max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                        <p className="text-xl text-muted-foreground mb-6">
                            La forma más rápida de obtener tu presupuesto es por WhatsApp. Envíanos fotos y medidas aproximadas.
                        </p>
                        <Button asChild size="xl" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-lg h-16 rounded-xl shadow-md">
                            <a
                                href="https://wa.me/34916370000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <Phone className="w-6 h-6 fill-current" />
                                Contactar por WhatsApp
                            </a>
                        </Button>
                        <p className="text-sm text-muted-foreground mt-4">
                            O llámanos al: <a href="tel:916370000" className="underline font-semibold">916 37 00 00</a>
                        </p>
                    </div>

                    {/* Google Map */}
                    <div className="mt-16 space-y-4">
                        <h2 className="text-2xl font-bold">Nuestra Ubicación</h2>
                        <p className="text-muted-foreground">Ven a visitarnos a nuestra exposición en Las Rozas</p>
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-card border border-border bg-muted">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12135.536789429432!2d-3.8749454!3d40.4913745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4183e601567ad1%3A0x628373844f234907!2sCristaler%C3%ADa%20Las%20Rozas!5e0!3m2!1ses!2ses!4v1709123456789!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactoPage;
