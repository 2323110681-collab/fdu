import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnConstruccionPage() {
  return (
    <div className="animate-fade-in pt-16 lg:pt-20">
      <section className="section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Construction className="w-12 h-12 mx-auto text-primary mb-4" strokeWidth={1.5} />
            <h1 className="text-3xl lg:text-4xl font-bold text-on-surface mb-2">En construcción</h1>
            <p className="text-on-surface-variant">Esta sección estará disponible próximamente. Gracias por su paciencia.</p>
            <div className="mt-6">
              <Link to="/" className="btn-text">Volver al inicio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
