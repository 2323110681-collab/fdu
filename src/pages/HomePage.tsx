import { Link } from 'react-router-dom';
import {
  ArrowRight, GraduationCap, Lightbulb, Users, HeartHandshake, BookOpen, Target, Eye, ShieldCheck,
} from 'lucide-react';

const pillars = [
  { icon: GraduationCap, title: 'Desarrollo Académico', desc: 'Impulsamos programas que elevan la calidad educativa universitaria en Lima Sur.' },
  { icon: Lightbulb, title: 'Innovación', desc: 'Fomentamos la investigación aplicada y soluciones tecnológicas con impacto regional.' },
  { icon: Users, title: 'Impacto Social', desc: 'Artículamos esfuerzos entre universidad, Estado y sociedad para transformar realidades.' },
  { icon: ShieldCheck, title: 'Transparencia', desc: 'Gestionamos recursos con honestidad, rendición de cuentas y gobernanza ética.' },
];

const values = [
  { icon: Target, title: 'Misión', desc: 'Promover el desarrollo universitario y el progreso social de Lima Sur.' },
  { icon: Eye, title: 'Visión', desc: 'Ser referente regional en educación, innovación y compromiso social.' },
  { icon: HeartHandshake, title: 'Valores', desc: 'Integridad, excelencia, inclusión y servicio a la comunidad.' },
];

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative pt-12 lg:pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-20 via-primary-30 to-primary-40" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-on-primary/15 text-on-primary text-xs font-medium backdrop-blur-sm">
              <BookOpen className="w-3.5 h-3.5" /> Fundación para el Desarrollo Universitario de Lima Sur
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-on-primary leading-[1.1] tracking-tight">
              Construyendo el futuro académico de Lima Sur
            </h1>
            <p className="mt-6 text-lg text-on-primary/85 leading-relaxed max-w-2xl">
              Una institución sin fines de lucro dedicada a impulsar la educación, la investigación y el desarrollo
              social, articulando esfuerzos entre la universidad y la comunidad.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/nosotros" className="btn-primary bg-on-primary text-primary hover:shadow-elevation-2">
                Conócenos <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contactos" className="btn-outlined border-on-primary/40 text-on-primary hover:bg-on-primary/10">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
        {/* Wave divider */}
        <svg className="block w-full h-10 lg:h-16 text-background" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* Stats removed as requested */}

      {/* Pillars */}
      <section className="section-padding mt-8">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nuestro compromiso</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-on-surface">Cuatro pilares, una misión</h2>
            <p className="mt-4 text-on-surface-variant">Trabajamos por una educación que transforme territorios y oportunidades.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="card-elevated p-7 group">
                <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <p.icon className="w-6 h-6 text-on-primary-container" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-on-surface">{p.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values preview */}
      <section className="bg-surface-container-low">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-outlined p-8">
                <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center mb-5">
                  <v.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-on-surface">{v.title}</h3>
                <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/nosotros" className="btn-primary">
              Ver más sobre nosotros <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-max px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-30 to-primary-40 px-8 py-16 lg:py-20 text-center">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-on-primary max-w-2xl mx-auto">
              Únete a nuestra misión por el desarrollo universitario
            </h2>
            <p className="mt-4 text-on-primary/85 max-w-xl mx-auto">
              Conoce cómo puedes participar, aliarte o apoyar las iniciativas de la Fundación DU.
            </p>
            <Link to="/contactos" className="btn-primary bg-on-primary text-primary mt-8 hover:shadow-elevation-2">
              Contáctanos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
