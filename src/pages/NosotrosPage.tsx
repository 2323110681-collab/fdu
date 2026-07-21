import { Target, Eye, ShieldCheck, GraduationCap, Lightbulb, Users, HeartHandshake, Scale, BookOpen } from 'lucide-react';

const coreValues = [
  { icon: ShieldCheck, title: 'Integridad', desc: 'Actuamos con ética, honestidad y transparencia en cada decisión y proyecto.' },
  { icon: GraduationCap, title: 'Excelencia Académica', desc: 'Buscamos los más altos estándares de calidad educativa y formativa.' },
  { icon: HeartHandshake, title: 'Compromiso Social', desc: 'Ponemos el conocimiento al servicio del desarrollo de la comunidad.' },
  { icon: Lightbulb, title: 'Innovación', desc: 'Promovemos ideas y soluciones que transforman la realidad regional.' },
  { icon: Users, title: 'Inclusión', desc: 'Garantizamos oportunidades equitativas de acceso y participación.' },
  { icon: Scale, title: 'Justicia', desc: 'Defendemos la equidad y el respeto por la diversidad y los derechos.' },
];

export default function NosotrosPage() {
  return (
    <div className="animate-fade-in pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-20 to-primary-30 py-16 lg:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-primary/80">La Fundación</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-on-primary tracking-tight">Nosotros</h1>
            <p className="mt-5 text-lg text-on-primary/85 leading-relaxed">
              Somos una organización sin fines de lucro dedicada al desarrollo universitario y al progreso
              social de Lima Sur, articulando esfuerzos entre la academia, el Estado y la sociedad civil.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card-elevated p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-on-primary-container" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold text-on-surface">Misión</h2>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Promover el desarrollo integral de la educación universitaria en Lima Sur mediante programas
                académicos, de investigación y extensión universitaria, contribuyendo a la formación de
                profesionales comprometidos con el desarrollo sostenible, la innovación y el bienestar
                social de la región.
              </p>
            </div>
            <div className="card-elevated p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-on-secondary-container" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold text-on-surface">Visión</h2>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Ser la fundación referente en el sur de Lima en el impulso de la educación superior, la
                investigación aplicada y la responsabilidad social, reconocida por su transparencia,
                excelencia y capacidad de articular alianzas que generen impacto duradero en la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface-container-low">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nuestros principios</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-on-surface">Valores institucionales</h2>
            <p className="mt-4 text-on-surface-variant">Los principios que guían cada acción de la Fundación DU.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="card-outlined p-7 group hover:shadow-elevation-1 transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary-container flex items-center justify-center group-hover:scale-105 transition-transform">
                    <v.icon className="w-6 h-6 text-on-primary-container" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-on-surface">{v.title}</h3>
                    <p className="mt-1.5 text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional quote */}
      <section className="container-max px-4 sm:px-6 lg:px-8 py-20">
        <div className="card-filled p-10 lg:p-14 text-center relative overflow-hidden">
          <BookOpen className="w-10 h-10 mx-auto text-primary mb-6" strokeWidth={1} />
          <p className="text-xl lg:text-2xl font-medium text-on-surface max-w-3xl mx-auto leading-relaxed italic">
            "La educación es el motor más poderoso para transformar territorios. En Fundación DU trabajamos
            cada día para que Lima Sur sea región de oportunidades."
          </p>
          <p className="mt-6 text-sm font-semibold text-primary">— Fundación DU</p>
        </div>
      </section>
    </div>
  );
}
