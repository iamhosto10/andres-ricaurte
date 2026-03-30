"use client";

import { motion } from "framer-motion";
import { Course } from "@/types";

const courses: Course[] = [
  {
    title: "Cómo Ganar Elecciones con IA",
    category: "Marketing Político 6.0",
    link: "https://andresricaurte.com/wp-content/uploads/2025/09/Cursos-Web-Andres-Ricaurte-COMO-GANAR-ELECCIONES-CON-INTELIGENCIA-ARTIFICIAL-1-1024x682.png",
  },
  {
    title: "Cómo Aparecer en ChatGPT",
    category: "Posicionamiento de Marca",
    link: "https://andresricaurte.com/wp-content/uploads/2025/09/Cursos-Web-Andres-Ricaurte-COMO-APARECER-EN-CHATGPT-1024x682.png",
  },
  {
    title: "Vende Más con IA en Navidad",
    category: "Estrategias Estacionales",
    link: "https://andresricaurte.com/wp-content/uploads/2025/09/Cursos-Web-Andres-Ricaurte-VENDE-MAS-CON-INTELIGENCIA-ARTIFICIAL-EN-NAVIDAD-1024x682.png",
  },
];

export default function CourseSection() {
  return (
    <section className="py-24 bg-surface border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4 block">
            Cursos Virtuales
          </span>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-12">
            Virtual Master Class
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/10 text-left hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-video bg-surface-container-highest flex items-center justify-center">
                <img
                  src={course.link}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 space-y-4">
                <h4 className="font-bold text-on-surface">{course.title}</h4>
                <p className="text-sm text-on-surface-variant">
                  {course.category}
                </p>
                <button className="w-full py-2 bg-surface-container-highest text-on-surface text-sm font-bold rounded hover:bg-surface-container-highest/80 transition-colors">
                  Join Class
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
