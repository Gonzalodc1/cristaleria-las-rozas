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

        // Create mailto link with form data
        const subject = encodeURIComponent(`Consulta de ${formData.nombre}`);
        const body = encodeURIComponent(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`);
        window.location.href = `mailto:cristalerialasrozas@hotmail.com?subject=${subject}&body=${body}`;

        toast({
            title: "Redirigiendo a tu cliente de email",
            description: "Se abrirá tu aplicación de correo para enviar el mensaje.",
        });

        setIsSubmitting(false);
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
                                    <Send className="w-5 h-5 mr-2" />
                                    Enviar Mensaje
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-center">Nuestra Ubicación</h2>
                        <p className="text-muted-foreground text-center">Ven a visitarnos a nuestra exposición en Las Rozas</p>
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
