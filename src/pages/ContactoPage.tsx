import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactoPage = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "bd523c78-3977-4bdb-940e-b6af9c317806", // Reemplazar con tu clave de Web3Forms
                    name: formData.nombre,
                    email: formData.email,
                    message: formData.mensaje,
                    subject: `Nueva consulta de ${formData.nombre} - Cristalería Las Rozas`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "¡Mensaje enviado!",
                    description: "Te responderemos lo antes posible.",
                });
                setFormData({ nombre: "", email: "", mensaje: "" });
            } else {
                throw new Error("Error al enviar");
            }
        } catch (error) {
            toast({
                title: "Error al enviar",
                description: "Por favor, contacta por WhatsApp o llama directamente.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-20">
                <section className="container max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">
                        Contacta con Nosotros
                    </h1>

                    {/* Contact Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {/* WhatsApp Card */}
                        <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-[#25D366]" />
                                </div>
                                <h2 className="text-xl font-bold">WhatsApp</h2>
                            </div>
                            <p className="text-muted-foreground mb-6">
                                La forma más rápida de obtener tu presupuesto. Envíanos fotos y medidas aproximadas.
                            </p>
                            <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-14 rounded-xl shadow-md">
                                <a
                                    href="https://wa.me/34633039377"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3"
                                >
                                    <Phone className="w-5 h-5" />
                                    Contactar por WhatsApp
                                </a>
                            </Button>
                            <p className="text-sm text-muted-foreground mt-4 text-center">
                                O llámanos al: <a href="tel:633039377" className="underline font-semibold">633 039 377</a>
                            </p>
                        </div>

                        {/* Email Form Card */}
                        <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-xl font-bold">Email</h2>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Tu nombre"
                                        value={formData.nombre}
                                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                        required
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Tu email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Tu mensaje"
                                        value={formData.mensaje}
                                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                        required
                                        className="min-h-[100px] resize-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full h-14 rounded-xl"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Enviar Mensaje
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-center">Nuestra Ubicación</h2>
                        <p className="text-muted-foreground text-center">
                            C. Reina Mercedes, 5, 28231 Las Rozas de Madrid, Madrid
                        </p>
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-card border border-border bg-muted">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.5567364665494!2d-3.8771342!3d40.4913745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4183e601567ad1%3A0x628373844f234907!2sCristaler%C3%ADa%20Las%20Rozas!5e0!3m2!1ses!2ses!4v1716300000000!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación Cristalería Las Rozas - C. Reina Mercedes, 5"
                            />
                        </div>
                        <div className="text-center">
                            <a
                                href="https://maps.app.goo.gl/uX3LhR8Z2qQ5o1s8A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm font-medium"
                            >
                                Abrir en Google Maps →
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactoPage;
