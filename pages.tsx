import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { scrollToSection } from './utils';
import { Hero, TripleImpact, BusinessUnits, HowWeWork, OurReach, Testimonials, FAQ } from './sections';
import { CompanyApplyForm, FinalCtaForm } from './forms';

// --- Home Page ---
export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, [location]);

  return (
    <main className="relative bg-background-soft">
      <Hero />
      
      {/* Sections with ID anchors */}
      
      <div id="empresas" className="scroll-mt-24" />
      <div id="profesionales" className="scroll-mt-24" />
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Luxury Background */}
        <div className="absolute inset-0 bg-background-soft pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-background to-background opacity-70" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply" />
        </div>
        <TripleImpact />
      </section>
      
      <div id="divisiones" className="scroll-mt-24" />
      <section className="bg-background-soft py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
        <BusinessUnits />
      </section>
      
      <div id="como-trabajamos" className="scroll-mt-24" />
      <section className="bg-background py-16 md:py-24">
        <HowWeWork />
      </section>
      
      {/* Added comunidad ID wrapper for navigation consistency */}
      <div id="comunidad" className="scroll-mt-24" />
      <div id="alcance" className="scroll-mt-24" />
      <section className="bg-background-soft pt-16 md:pt-24 pb-8 md:pb-12">
        <OurReach />
      </section>
      
      <div id="testimonios" className="scroll-mt-24" />
      <Testimonials />
      
      <div id="faq" className="scroll-mt-24" />
      <FAQ />
      
      <div id="contacto" className="scroll-mt-24" />
      <section className="bg-background py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none" />
        <FinalCtaForm />
      </section>
      
    </main>
  );
};

// --- Company Apply Page ---
export const CompanyApply = () => {
  return (
    <div className="min-h-screen bg-background-soft">
      {/* Simple Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted hover:text-brand-700 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-brand-900 hidden sm:block">Talent Acquisition Activo</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Intro */}
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-50 border border-brand-100 text-brand-600 font-bold tracking-wider uppercase text-xs mb-4">
              Para Empresas
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-900 mb-6 tracking-tight">
              Comienza tu búsqueda de talento
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Completa el formulario para conectarte con profesionales pre-validado en LATAM. 
              Te ayudaremos a encontrar el perfil ideal en tiempo récord.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            {[
              "Perfiles verificados en < 48h",
              "Soporte EOR y Legal incluido",
              "Garantía de reemplazo de 90 días"
            ].map((prop, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span className="text-sm font-medium text-brand-900">{prop}</span>
              </div>
            ))}
          </div>

          {/* Form Container */}
          <CompanyApplyForm />

        </div>
      </main>

      <footer className="bg-background border-t border-border py-8 mt-12 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Closer Connected. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
