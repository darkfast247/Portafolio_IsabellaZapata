'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Tipos
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

type Service = {
  title: string;
  description: string;
  icon: string;
};

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
};

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const projects = [
    {
      id: 1,
      title: "Colección Primavera 2024",
      description: "Una fusión de elementos naturales y texturas sostenibles que celebran la renovación y el despertar de la naturaleza.",
      image: "/images/proyecto1.jpg",
      link: "#",
      tags: ["Sostenible", "Moda", "Primavera"]
    },
    {
      id: 2,
      title: "Vestuario Teatral - 'El Jardín de los Cerezos'",
      description: "Diseños que capturan la esencia de la Rusia del siglo XIX, mezclando autenticidad histórica con interpretación contemporánea.",
      image: "/images/proyecto2.jpg",
      link: "#",
      tags: ["Teatro", "Histórico", "Diseño de Vestuario"]
    },
    {
      id: 3,
      title: "Moda Sostenible - Colección Reciclada",
      description: "Una colección innovadora creada completamente a partir de materiales reciclados y técnicas sostenibles.",
      image: "/images/proyecto3.jpg",
      link: "#",
      tags: ["Sostenible", "Innovación", "Reciclaje"]
    }
  ];

  const skills = [
    "Diseño de Vestuario",
    "Ilustración de Moda",
    "Patronaje Digital",
    "Técnicas Sostenibles",
    "Diseño 3D",
    "Gestión de Proyectos"
  ];

  const services = [
    {
      title: "Diseño de Vestuario Teatral",
      description: "Creación de vestuario para producciones teatrales, ópera y danza.",
      icon: "🎭"
    },
    {
      title: "Consultoría de Moda",
      description: "Asesoramiento en tendencias, sostenibilidad y desarrollo de colecciones.",
      icon: "👗"
    },
    {
      title: "Diseño Sostenible",
      description: "Creación de prendas con enfoque en sostenibilidad y materiales reciclados.",
      icon: "🌱"
    },
    {
      title: "Vestuario para Cine",
      description: "Diseño y producción de vestuario para producciones audiovisuales.",
      icon: "🎬"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Directora de Teatro",
      text: "Isabella tiene un talento excepcional para capturar la esencia de cada personaje a través del vestuario.",
      image: "/images/testimonial1.jpg"
    },
    {
      name: "Carlos Rodríguez",
      role: "Productor de Cine",
      text: "Su atención al detalle y creatividad han elevado la calidad visual de nuestras producciones.",
      image: "/images/testimonial2.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="header">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Isabella Zapata Londoño</h1>
            <p className="text-text-secondary">Diseñadora de Vestuario</p>
          </div>
          <button
            onClick={toggleTheme}
            className="button p-2 rounded-full hover:bg-opacity-90"
            aria-label="Cambiar tema"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6 text-white" />
            ) : (
              <SunIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Hero Section con Parallax */}
      <section className="section pt-32 relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"/>
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Creando Historias a través del Vestuario
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Diseñadora de vestuario especializada en crear piezas únicas que dan vida a personajes y narrativas visuales.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button inline-block text-lg px-8 py-3"
          >
            Iniciar Proyecto
          </motion.a>
        </motion.div>
      </section>

      {/* Projects Carousel */}
      <section className="section bg-secondary py-24">
        <div className="container mx-auto px-4">
          <h3 className="section-title">Proyectos Destacados</h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="w-full max-w-4xl mx-auto"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="card overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-text-primary mb-2">{project.title}</h4>
                    <p className="text-text-secondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="button inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Proyecto Completo
                    </motion.a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Section */}
      <section className="section py-24">
        <div className="container mx-auto px-4">
          <h3 className="section-title">Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card p-6 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-bold text-text-primary mb-2">{service.title}</h4>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section con Animación */}
      <section className="section bg-secondary py-24">
        <div className="container mx-auto px-4">
          <h3 className="section-title">Habilidades</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center hover:border-primary"
              >
                <p className="text-text-primary font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section py-24">
        <div className="container mx-auto px-4">
          <h3 className="section-title">Testimonios</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">{testimonial.name}</h4>
                    <p className="text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section con Parallax */}
      <section className="section bg-secondary py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="section-title">Sobre Mí</h3>
            <p className="text-text-secondary mb-6">
              Soy una diseñadora de vestuario apasionada por crear piezas únicas que ayudan a contar historias a través de la moda.
              Mi trabajo se centra en la atención al detalle y la innovación en el diseño.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
                <p className="text-text-secondary">Proyectos</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary mb-2">10+</h4>
                <p className="text-text-secondary">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary mb-2">30+</h4>
                <p className="text-text-secondary">Clientes Satisfechos</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPositionY: ["0%", "100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-full h-full bg-[url('/images/pattern.png')] bg-repeat"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section py-24">
        <div className="container mx-auto px-4">
          <h3 className="section-title">Contacto</h3>
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="card p-8"
            >
              <p className="text-text-secondary mb-6 text-center">
                ¿Interesado en colaborar? ¡Contáctame!
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-text-primary mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg text-text-primary"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-primary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg text-text-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-text-primary mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg text-text-primary"
                    placeholder="Tu mensaje..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="button w-full text-center py-3"
                  type="submit"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-text-primary mb-4">Isabella Zapata</h4>
              <p className="text-text-secondary">Diseñadora de vestuario profesional especializada en teatro, cine y moda sostenible.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-text-primary mb-4">Contacto</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>📧 contacto@isabellazapata.com</li>
                <li>📱 +57 300 123 4567</li>
                <li>📍 Medellín, Colombia</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-text-primary mb-4">Redes Sociales</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  Behance
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-card-border pt-8 text-center">
            <p className="text-text-secondary">© 2024 Isabella Zapata Londoño. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
