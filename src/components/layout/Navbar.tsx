"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Cursos", href: "/cursos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll para cambiar el estilo del Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_rgb(0,0,0,0.03)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-7">
        <div className="flex justify-between items-center h-12">
          {/* Logo Tipográfico Atractivo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="relative group flex items-baseline tracking-tighter transition-transform hover:scale-[1.02] active:scale-95 duration-300"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-on-surface"
              >
                Andrés
              </motion.span>

              <div className="relative ml-1">
                {/* Texto en color neutro que aparece primero */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="inline-block text-2xl md:text-3xl lg:text-4xl font-extrabold text-on-surface/80"
                >
                  Ricaurte
                </motion.span>
                {/* Efecto de 'llenado' suave al color principal usando clipPath */}
                <motion.span
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                  className="absolute left-0 top-0 text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary"
                  aria-hidden="true"
                >
                  Ricaurte
                </motion.span>
              </div>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-2 bg-surface/50 p-1.5 rounded-full border border-primary/10 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  link.name === "Contacto"
                    ? "bg-inverse-surface text-surface hover:scale-105 shadow-md"
                    : "text-on-surface/80 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Botón menú hamburguesa (Mobile / Tablet) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navegación Mobile Flotante */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-4 p-4 bg-surface/95 backdrop-blur-2xl border border-primary/20 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-5 py-4 text-lg font-bold rounded-2xl transition-all ${
                      link.name === "Contacto"
                        ? "bg-inverse-surface text-surface shadow-lg mt-2"
                        : "text-on-surface/80 hover:text-primary hover:bg-primary/10 group"
                    }`}
                  >
                    {link.name}
                    <ChevronRight
                      className={`w-5 h-5 ${link.name === "Contacto" ? "text-surface/70" : "text-primary/40 group-hover:text-primary"}`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
