"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Método CRACS",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "573012255826";

    const text = `¡Hola Andrés! \n\nMi nombre es ${formData.name}.\nMi correo es: ${formData.email}\nEstoy interesado/a en: *${formData.service}*\n\n${
      formData.message ? `Te escribo porque: ${formData.message}` : ""
    }`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  // Animaciones de Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-surface flex items-center">
      {/* Efectos de fondo (Glow / Luces desenfocadas) */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-primary/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Columna Izquierda: Información */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8 "
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight">
                ¿Listo para <span className="text-primary">escalar</span> tus
                ventas?
              </h1>
              <p className="text-lg md:text-xl text-on-surface/80 leading-relaxed max-w-lg">
                Deja de perder tiempo en procesos manuales. Escríbenos y
                construyamos juntos un sistema que facture predeciblemente.
              </p>
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className=" block lg:hidden"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-surface/50 backdrop-blur-2xl border border-primary/20 p-8 sm:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col gap-6 relative overflow-hidden group"
              >
                {/* Brillo sutil dentro de la tarjeta */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

                <div className="space-y-1 relative z-10">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-on-surface/80 pl-1"
                  >
                    Nombre completo *
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-5 py-4 rounded-xl bg-on-surface/5 border border-on-surface/10 focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface/40 font-medium"
                  />
                </div>

                <div className="space-y-1 relative z-10">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-on-surface/80 pl-1"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@empresa.com"
                    className="w-full px-5 py-4 rounded-xl bg-on-surface/5 border border-on-surface/10 focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface/40 font-medium"
                  />
                </div>

                <div className="space-y-1 relative z-10">
                  <label
                    htmlFor="service"
                    className="text-sm font-bold text-on-surface/80 pl-1"
                  >
                    ¿Qué servicio te interesa? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-on-surface/5 border border-on-surface/10 focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface font-medium cursor-pointer"
                  >
                    <option value="Conferencias/Charlas">Conferencias</option>
                    <option value="Sistema de Ventas con IA">
                      Sistema de Ventas con IA
                    </option>
                    <option value="Consultoría Estratégica 1:1">
                      Consultoría Estratégica 1:1
                    </option>
                    <option value="Reputación Digital (SEO & IA)">
                      Reputación Digital (SEO & IA)
                    </option>
                    <option value="WhatsApp Marketing">
                      WhatsApp Marketing
                    </option>
                    <option value="Gestión de Redes Sociales & Ads">
                      Gestión de Redes Sociales & Ads
                    </option>
                  </select>
                </div>

                <div className="space-y-1 relative z-10">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-on-surface/80 pl-1"
                  >
                    Cuéntame sobre tu negocio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Actualmente facturamos X, y nuestro mayor reto es..."
                    className="w-full px-5 py-4 rounded-xl bg-on-surface/5 border border-on-surface/10 focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface/40 font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="relative z-10 mt-2 flex items-center justify-center gap-3 w-full bg-inverse-surface text-surface py-5 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl hover:shadow-primary/20 cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6" />
                  Enviar por WhatsApp
                </button>
              </form>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6 pt-6">
              <Link
                href="mailto:hola@andresricaurte.com?subject=Hola%20Andres&body=Hola%20Andres,%20quiero%20hablar%20contigo."
                className="block"
              >
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-on-surface/60 uppercase tracking-wider">
                      Correo
                    </p>

                    <p className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">
                      hola@andresricaurte.com
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/soyandresricaurte/"
                target="_blank"
                className="block"
              >
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-colors duration-300">
                    <MessageCircle className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-on-surface/60 uppercase tracking-wider">
                      Instagram
                    </p>

                    <p className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">
                      @soyandresricaurte
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/soyandresricaurte/"
                target="_blank"
                className="block"
              >
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-colors duration-300">
                    <MessageCircle className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-on-surface/60 uppercase tracking-wider">
                      Linkedin
                    </p>

                    <p className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">
                      @soyandresricaurte
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Formulario Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className=" lg:block hidden"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface/50 backdrop-blur-2xl border border-primary/20 p-8 sm:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col gap-6 relative overflow-hidden group"
            >
              {/* Brillo sutil dentro de la tarjeta */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

              <div className="space-y-1 relative z-10">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-on-surface/80 pl-1"
                >
                  Nombre completo *
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-5 py-4 rounded-xl bg-on-surface/5 border border-on-surface/10 focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface/40 font-medium"
                />
              </div>

              <div className="space-y-1 relative z-10">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-on-surface/80 pl-1"
                >
                  Correo electrónico *
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@empresa.com"
                  className="w-full px-5 py-4 rounded-xl bg-on-surface/5 border border-on-surface/10 focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface/40 font-medium"
                />
              </div>

              <div className="space-y-1 relative z-10">
                <label
                  htmlFor="service"
                  className="text-sm font-bold text-on-surface/80 pl-1"
                >
                  ¿Qué servicio te interesa? *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-on-surface/5 border border-on-surface/10 focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface font-medium cursor-pointer"
                >
                  <option value="Conferencias/Charlas">Conferencias</option>
                  <option value="Sistema de Ventas con IA">
                    Sistema de Ventas con IA
                  </option>
                  <option value="Consultoría Estratégica 1:1">
                    Consultoría Estratégica 1:1
                  </option>
                  <option value="Reputación Digital (SEO & IA)">
                    Reputación Digital (SEO & IA)
                  </option>
                  <option value="WhatsApp Marketing">WhatsApp Marketing</option>
                  <option value="Gestión de Redes Sociales & Ads">
                    Gestión de Redes Sociales & Ads
                  </option>
                </select>
              </div>

              <div className="space-y-1 relative z-10">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-on-surface/80 pl-1"
                >
                  Cuéntame sobre tu negocio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Actualmente facturamos X, y nuestro mayor reto es..."
                  className="w-full px-5 py-4 rounded-xl bg-on-surface/5 border border-on-surface/10 focus:border-primary/50 focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all outline-none text-on-surface placeholder:text-on-surface/40 font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="relative z-10 mt-2 flex items-center justify-center gap-3 w-full bg-inverse-surface text-surface py-5 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl hover:shadow-primary/20 cursor-pointer"
              >
                <MessageCircle className="w-6 h-6" />
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
