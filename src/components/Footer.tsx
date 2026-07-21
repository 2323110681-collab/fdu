import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/40 mt-20">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logoFundacion.png" alt="Logo Fundación DU" className="h-11 w-auto" />
              <div>
                <p className="font-semibold text-on-surface">Fundación DU</p>
                <p className="text-xs text-on-surface-variant">Desarrollo Universitario de Lima Sur</p>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-md">
              Promovemos el desarrollo académico, la innovación y el impacto social en la región de Lima Sur,
              articulando esfuerzos entre la universidad, el Estado y la sociedad civil.
            </p>
            <div className="flex gap-2 mt-5">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="state-layer p-2.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary transition-colors" aria-label="Red social">
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-on-surface mb-4">Navegación</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/nosotros" className="text-on-surface-variant hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/mensaje-del-presidente" className="text-on-surface-variant hover:text-primary transition-colors">Mensaje del Presidente</Link></li>
              <li><Link to="/contactos" className="text-on-surface-variant hover:text-primary transition-colors">Contactos</Link></li>
              <li><span className="text-on-surface-variant/60">Publicaciones</span></li>
              <li><span className="text-on-surface-variant/60">Blog</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-on-surface mb-4">Contacto</p>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" strokeWidth={1.5} />
                <span>Av. Universidad s/n, Lima Sur, Perú</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span>+51 1 234-5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span>contacto@fundaciondu.pe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row justify-between gap-3 text-xs text-on-surface-variant/70">
          <p>© {new Date().getFullYear()} Fundación para el Desarrollo Universitario de Lima Sur. Todos los derechos reservados.</p>
          <p>Diseñado con Material Design 3.</p>
        </div>
      </div>
    </footer>
  );
}
