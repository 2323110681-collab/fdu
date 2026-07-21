import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search, Menu, X, Construction } from 'lucide-react';

type DropdownItem = { label: string; to: string };

const fundacionItems: DropdownItem[] = [
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Mensaje del Presidente', to: '/mensaje-del-presidente' },
];

function UnderConstruction({ label }: { label: string }) {
  return (
    <div className="dropdown-enter absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 z-50">
      <div className="card-elevated bg-surface-container-low px-5 py-6 text-center">
        <Construction className="w-8 h-8 mx-auto mb-3 text-primary" strokeWidth={1.5} />
        <p className="text-sm font-medium text-on-surface-variant">En construcción</p>
        <p className="text-xs text-on-surface-variant/70 mt-1">{label} estará disponible próximamente.</p>
      </div>
    </div>
  );
}

function NavLink({
  label,
  to,
  items,
  active,
  onClick,
}: {
  label: string;
  to?: string;
  items?: DropdownItem[];
  active: boolean;
  onClick?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [showConstruction, setShowConstruction] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (items) setOpen(true);
    else if (to) setShowConstruction(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setShowConstruction(false);
    }, 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        onClick={onClick}
        className={`state-layer inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
          active ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
        }`}
      >
        {label}
        {items && <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />}
      </button>

      {items && open && (
        <div className="dropdown-enter absolute left-0 top-full pt-2 z-50">
          <div className="card-elevated bg-surface-container-low min-w-[220px] py-2">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="state-layer block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showConstruction && <UnderConstruction label={label} />}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-elevation-1'
          : 'bg-surface/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logoFundacion.png" alt="Logo Fundación DU" className="h-9 lg:h-11 w-auto" />
            <span className="text-base lg:text-lg font-semibold text-on-surface tracking-tight">
              Fundación DU
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink label="La Fundación" items={fundacionItems} active={isActive('/nosotros') || isActive('/mensaje-del-presidente')} />
            <NavLink label="Publicaciones" active={false} />
            <NavLink label="Agenda" active={false} />
            <NavLink label="Blog" active={false} />
            <NavLink label="Contactos" to="/contactos" active={isActive('/contactos')} />
          </div>

          {/* Right: search + mobile toggle */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen((s) => !s)}
              className="state-layer p-2.5 rounded-full text-on-surface-variant hover:text-primary transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <Link to="/contactos" className="hidden lg:inline-flex btn-primary ml-2">
              Contáctanos
            </Link>
            <button
              onClick={() => setMobileOpen((m) => !m)}
              className="state-layer lg:hidden p-2.5 rounded-full text-on-surface-variant"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="dropdown-enter pb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
              <input
                type="text"
                autoFocus
                placeholder="Buscar en la Fundación DU..."
                className="field-outlined pl-12 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="dropdown-enter lg:hidden pb-6 border-t border-outline-variant/40">
            <div className="flex flex-col gap-1 pt-4">
              <div className="px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant/60">La Fundación</p>
                <div className="mt-1 flex flex-col">
                  <Link to="/nosotros" className="state-layer px-3 py-2.5 rounded-xl text-sm text-on-surface hover:text-primary">Nosotros</Link>
                  <Link to="/mensaje-del-presidente" className="state-layer px-3 py-2.5 rounded-xl text-sm text-on-surface hover:text-primary">Mensaje del Presidente</Link>
                </div>
              </div>
              <div className="px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant/60">Secciones</p>
                <div className="mt-1 flex flex-col">
                  <div className="state-layer px-3 py-2.5 rounded-xl text-sm text-on-surface-variant flex items-center gap-2">
                    <Construction className="w-4 h-4" /> Publicaciones — En construcción
                  </div>
                  <div className="state-layer px-3 py-2.5 rounded-xl text-sm text-on-surface-variant flex items-center gap-2">
                    <Construction className="w-4 h-4" /> Agenda — En construcción
                  </div>
                  <div className="state-layer px-3 py-2.5 rounded-xl text-sm text-on-surface-variant flex items-center gap-2">
                    <Construction className="w-4 h-4" /> Blog — En construcción
                  </div>
                  <Link to="/contactos" className="state-layer px-3 py-2.5 rounded-xl text-sm text-on-surface hover:text-primary">Contactos</Link>
                </div>
              </div>
              <Link to="/contactos" className="btn-primary mt-3 mx-3">Contáctanos</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
