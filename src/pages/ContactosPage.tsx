import { useState } from 'react';
import { Send, MapPin, Phone, Mail, User, Briefcase, CheckCircle } from 'lucide-react';

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'subject' | 'message', string>>;

const staff = [
  { position: 'Presidente', phone: '+51 1 234-5678', email: 'presidente@fundaciondu.pe' },
  { position: 'Directora Ejecutiva', phone: '+51 1 234-5679', email: 'directora@fundaciondu.pe' },
  { position: 'Coordinador de Proyectos', phone: '+51 1 234-5680', email: 'proyectos@fundaciondu.pe' },
  { position: 'Responsable de Comunicaciones', phone: '+51 1 234-5681', email: 'comunicaciones@fundaciondu.pe' },
];

export default function ContactosPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Ingrese su nombre completo.';
    if (!form.email.trim()) e.email = 'Ingrese su correo electrónico.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Correo electrónico inválido.';
    if (!form.phone.trim()) e.phone = 'Ingrese su número de teléfono.';
    else if (!/^[+\d\s()-]{6,}$/.test(form.phone)) e.phone = 'Número de teléfono inválido.';
    if (!form.subject.trim()) e.subject = 'Ingrese el asunto.';
    if (!form.message.trim()) e.message = 'Escriba su mensaje.';
    else if (form.message.trim().length < 10) e.message = 'El mensaje debe tener al menos 10 caracteres.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof Errors]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <div className="animate-fade-in pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-20 to-primary-30 py-16 lg:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-primary/80">Estamos para servirle</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-on-primary tracking-tight">Contactos</h1>
            <p className="mt-5 text-lg text-on-primary/85 leading-relaxed">
              Escríbanos. Su mensaje, consulta o propuesta de alianza será atendida por nuestro equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="card-elevated p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-on-surface mb-2">Formulario de contacto</h2>
              <p className="text-sm text-on-surface-variant mb-6">Todos los campos son obligatorios.</p>

              {submitted ? (
                <div className="rounded-2xl bg-primary-container px-6 py-10 text-center animate-slide-up">
                  <CheckCircle className="w-12 h-12 mx-auto text-on-primary-container mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-on-primary-container">¡Mensaje enviado!</h3>
                  <p className="mt-2 text-sm text-on-primary-container/85">Gracias por escribirnos. Le responderemos a la brevedad.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="btn-text mt-5 text-on-primary-container">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-1.5">Nombre completo</label>
                    <input id="name" type="text" value={form.name} onChange={(e) => update('name', e.target.value)} className={`field-outlined ${errors.name ? 'border-error focus:border-error focus:ring-error/20' : ''}`} placeholder="Juan Pérez García" />
                    {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-1.5">Correo electrónico</label>
                      <input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={`field-outlined ${errors.email ? 'border-error focus:border-error focus:ring-error/20' : ''}`} placeholder="juan@correo.com" />
                      {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-on-surface-variant mb-1.5">Teléfono</label>
                      <input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={`field-outlined ${errors.phone ? 'border-error focus:border-error focus:ring-error/20' : ''}`} placeholder="+51 999 888 777" />
                      {errors.phone && <p className="mt-1 text-xs text-error">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-on-surface-variant mb-1.5">Asunto</label>
                    <input id="subject" type="text" value={form.subject} onChange={(e) => update('subject', e.target.value)} className={`field-outlined ${errors.subject ? 'border-error focus:border-error focus:ring-error/20' : ''}`} placeholder="Consulta sobre programas" />
                    {errors.subject && <p className="mt-1 text-xs text-error">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-on-surface-variant mb-1.5">Mensaje</label>
                    <textarea id="message" rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} className={`field-outlined resize-none ${errors.message ? 'border-error focus:border-error focus:ring-error/20' : ''}`} placeholder="Escriba su mensaje..." />
                    {errors.message && <p className="mt-1 text-xs text-error">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Enviar mensaje <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="flex flex-col gap-6">
              <div className="card-elevated overflow-hidden flex-1">
                <div className="aspect-square lg:aspect-auto lg:h-full min-h-[320px]">
                  <iframe
                    title="Ubicación Fundación DU"
                    className="w-full h-full min-h-[320px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4137829!2d-76.9732!3d-12.0506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAzJzAyLjIiUyA3NsKwNTgnMjMuNSJX!5e0!3m2!1ses!4v0000000000"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="card-outlined p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-on-surface">Sede principal</p>
                    <p className="text-sm text-on-surface-variant mt-1">Bolivar S/N, Villa EL Salvador 15834</p>
                    <p className="text-sm text-on-surface-variant">Lun – Vie, 9:00 a.m. – 6:00 p.m.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff cards */}
      <section className="bg-surface-container-low">
        <div className="container-max section-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nuestro equipo</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-on-surface">Contactos del personal</h2>
            <p className="mt-4 text-on-surface-variant">Póngase en contacto directo con las áreas de la Fundación.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((s, idx) => (
              <div key={idx} className="card-elevated p-6 group">
                <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center mb-4">
                  <User className="w-7 h-7 text-on-primary-container" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-on-surface">{s.position}</h3>
                <div className="mt-4 space-y-2 text-sm text-on-surface-variant">
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-on-surface-variant/70" strokeWidth={1.5} /> {s.phone}</p>
                  <p className="flex items-center gap-2 truncate"><Mail className="w-4 h-4 text-on-surface-variant/70" strokeWidth={1.5} /> {s.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
