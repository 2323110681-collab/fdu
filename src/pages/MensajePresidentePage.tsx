import { Quote, PlayCircle } from 'lucide-react';

export default function MensajePresidentePage() {
  return (
    <div className="animate-fade-in pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-20 to-primary-30 py-16 lg:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-primary/80">La Fundación</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-on-primary tracking-tight">Mensaje del Presidente</h1>
            <p className="mt-5 text-lg text-on-primary/85 leading-relaxed">
              Una palabra de bienvenida y reflexión sobre el rumbo de la Fundación DU.
            </p>
          </div>
        </div>
      </section>

      {/* Portrait + intro */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevation-3 bg-surface-container">
                  <img
                    src="https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Retrato del Presidente de la Fundación DU"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-on-primary rounded-2xl px-5 py-3 shadow-elevation-2">
                  <p className="text-sm font-semibold">Jose Carlos Goicochea Ponce</p>
                  <p className="text-xs text-on-primary/80">Presidente, Fundación DU</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Quote className="w-10 h-10 text-primary/30" strokeWidth={1} />
              <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-on-surface leading-snug">
                Bienvenidos a la Fundación para el Desarrollo Universitario de Lima Sur
              </h2>
              <p className="mt-5 text-on-surface-variant leading-relaxed">
                Es un honor dirigir unas palabras a quienes nos visitan. La Fundación DU nació con el
                propósito de articular el talento universitario, la investigación y el compromiso social
                para responder a los desafíos de Lima Sur. Creemos firmemente que la educación es la
                palanca más eficaz para construir comunidades prósperas, justas e innovadoras.
              </p>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Los invito a conocer nuestras iniciativas y a sumarse a esta causa. El siguiente video
                resume nuestra visión y los retos que asumimos con entusiasmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="container-max px-4 sm:px-6 lg:px-8 pb-16">
        <div className="card-elevated p-3 lg:p-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-container">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://youtu.be/XQaUrw4TgXU"
              title="Mensaje del Presidente - Fundación DU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Full message */}
      <section className="bg-surface-container-low">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-semibold text-on-surface mb-6">Mensaje completo</h2>
            <div className="space-y-5 text-on-surface-variant leading-relaxed">
              <p>
                Estimados amigos, aliados y miembros de la comunidad universitaria: es para mí un gusto
                saludarles en nombre de la Fundación para el Desarrollo Universitario de Lima Sur. Desde
                nuestra creación, hemos sostenido una convicción firme: el desarrollo de una región
                comienza por la calidad y la pertinencia de su educación superior.
              </p>
              <p>
                En Lima Sur existen talentos, ideas y energía de sobra. Lo que ha faltado históricamente
                son puentes que conecten el aula con el territorio, la investigación con la empresa y la
                universidad con las necesidades concretas de la población. Nuestra fundación se ha
                construido precisamente para tender esos puentes.
              </p>
              <p>
                En los últimos años hemos acompañado a miles de estudiantes, impulsado proyectos de
                investigación aplicada y firmado alianzas con instituciones públicas y privadas. Cada
                beca otorgada, cada programa ejecutado y cada investigación publicada representa un paso
                hacia una Lima Sur más equitativa y próspera.
              </p>
              <p>
                Sin embargo, los retos siguen siendo enormes. La brecha digital, la deserción universitaria
                y la empleabilidad juvenil son problemas que requieren respuestas sistémicas. Por eso
                estamos llamando a más aliados: universidades, gobiernos locales, empresas y ciudadanos
                comprometidos. La transformación no es tarea de unos pocos; es una construcción colectiva.
              </p>
              <p>
                Los invito a recorrer este sitio, conocer nuestras líneas de trabajo y, sobre todo, a
                sumarse a esta misión. La Fundación DU es y será un espacio abierto, transparente y
                orientado al servicio. Gracias por su confianza y por acompañarnos en este camino.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4 pt-6 border-t border-outline-variant">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                <span className="text-on-primary-container font-semibold">P</span>
              </div>
              <div>
                <p className="font-semibold text-on-surface">Jose Carlos Goicochea Ponce</p>
                <p className="text-sm text-on-surface-variant">Presidente de la Fundación DU</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
