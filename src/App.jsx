import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Lock, FileCheck2, BookOpenCheck, Siren, CircuitBoard,
  LineChart, Network, GlobeLock, Users, Mail, MapPin, ArrowRight,
  BadgeCheck, Presentation, Bug, Menu, X
} from "lucide-react";

const BRAND = { magenta:"#cc5fcb", purple:"#2f1c70", lilac:"#9369b6", navy:"#201e65" };
const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.6}} };
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const SITE = {
  brand: "ARSEG",
  tagline: "\"Seguridad inteligente, negocios resilientes.\"",
  email: "ventas@arseg.com.mx",
  phone: "+52 56 1068 4320",
  address: "Ciudad de México, MX",
  whatsapp: "https://wa.me/525610684320",
  brochure: "#",
  logoSrc: "/LogoArseg.png",
};

const services = [
  { icon: ShieldCheck, title: "GRC Gestionada", desc: "Gobierno, Riesgos y Cumplimiento como servicio: CISO virtual, comité ISSC, KRIs/KPIs y gestión de políticas.", bullets: ["Gobierno (COBIT 5 / ISO 27014)", "Gestión de riesgos cibernéticos", "Ciclo de políticas"] },
  { icon: FileCheck2, title: "Cumplimiento & Auditorías", desc: "Alineación frente a NIST CSF v2, ISO 27001, TISAX, Indeval/SPEI, SWIFT y marcos sectoriales.", bullets: ["Gap assessment", "Evidencias y trazabilidad", "Acompañamiento en auditorías"] },
  { icon: Lock, title: "Operación de Controles", desc: "IAM/MFA, EDR/XDR, SIEM, VM, Hardening, SASE/CASB, WAF/AntiDDoS.", bullets: ["Identidades y accesos", "VM & Patch", "Hardening end-to-end"] },
  { icon: Siren, title: "Detección & Respuesta (IR)", desc: "Playbooks, monitoreo y respuesta a incidentes. Forense y crisis.", bullets: ["Runbooks y tabletop", "Respuesta co-managed 24/7", "Mejora continua"] },
  { icon: GlobeLock, title: "Ciberinteligencia & Marca", desc: "Vigilancia de superficie, deep/dark web y protección de marca.", bullets: ["Alerta de IOCs", "Exposición de credenciales", "Impersonación / phishing"] },
  { icon: BookOpenCheck, title: "Concientización & Formación", desc: "Programas por rol, simulaciones y métricas de adopción.", bullets: ["Phishing sim", "Rutas por función", "KPIs de adopción"] },
  { icon: CircuitBoard, title: "DevSecOps & AppSec", desc: "SAST/DAST, SBOM, secretos, revisión de código y pipelines.", bullets: ["Gates en CI/CD", "APIs y microservicios", "Dependencias/secretos"] },
  { icon: Network, title: "Terceros & Proveedores (TPRM)", desc: "Cuestionarios, evidencias, SLAs y monitoreo continuo.", bullets: ["Due diligence", "Cláusulas de seguridad", "Monitoreo de cumplimiento"] },
];

const plans = [
  { name: "Start", price: "Desde $9,900/mes", pitch: "Para iniciar el programa de GRC y ciberseguridad.", features: ["CISO virtual (4 hrs/mes)", "Gestión básica de riesgos", "Políticas esenciales", "Revisión trimestral"] },
  { name: "Growth", price: "Desde $24,900/mes", highlight: true, pitch: "Operación de controles clave y madurez intermedia.", features: ["CISO virtual (12 hrs/mes)", "KRIs y reporting", "VM & Patch co-managed", "Playbooks IR + tabletop", "Reportes mensuales"] },
  { name: "Enterprise", price: "A la medida", pitch: "Compliance multi-marco y operación 24/7.", features: ["Multi-empresa", "ISO/NIST/TISAX", "SOC/SIEM co-managed 24/7", "TPRM y ciberinteligencia", "OKR ejecutivos"] },
];

export default function ARSEGWebsite() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen text-slate-200 antialiased"
      style={{ background: `radial-gradient(1200px 800px at 20% -10%, ${BRAND.purple} 0%, ${BRAND.navy} 60%, #0b0a1a 100%)` }}>
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur">
        <Section className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            {/* 2.5x: móvil h-28, desktop h-32; quita cualquier bg envolvente; intenta mezclar blancos */}
            <img src={SITE.logoSrc} alt={`${SITE.brand} logo`} className="h-28 w-auto md:h-32" style={{ mixBlendMode: 'multiply', background: 'transparent' }} />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-base font-semibold md:flex">
            <a href="#servicios" className="text-white/90 hover:text-white">Servicios</a>
            <a href="#metodo" className="text-white/90 hover:text-white">Método</a>
            <a href="#novasec" className="text-white/90 hover:text-white">Plataforma</a>
            <a href="#planes" className="text-white/90 hover:text-white">Planes</a>
            <a href="#contacto" className="text-white/90 hover:text-white">Contacto</a>
          </nav>

          {/* CTA desktop */}
          <a href="#contacto" className="hidden items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold text-[#0f0d24] shadow-lg md:inline-flex"
             style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }}>
            Agendar llamada <ArrowRight className="h-4 w-4" />
          </a>

          {/* Hamburger mobile */}
          <button className="inline-flex items-center justify-center rounded-xl border border-white/15 p-2 text-white md:hidden" onClick={() => setOpen(v => !v)} aria-label="Abrir menú">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Section>

        {/* Mobile panel */}
        {open && (
          <div className="border-t border-white/10 bg-black/40 backdrop-blur md:hidden">
            <Section className="flex flex-col gap-4 py-4">
              <a onClick={()=>setOpen(false)} href="#servicios" className="text-lg font-semibold">Servicios</a>
              <a onClick={()=>setOpen(false)} href="#metodo" className="text-lg font-semibold">Método</a>
              <a onClick={()=>setOpen(false)} href="#novasec" className="text-lg font-semibold">Plataforma</a>
              <a onClick={()=>setOpen(false)} href="#planes" className="text-lg font-semibold">Planes</a>
              <a onClick={()=>setOpen(false)} href="#contacto" className="text-lg font-semibold">Contacto</a>
              <a onClick={()=>setOpen(false)} href="#contacto" className="mt-2 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-bold text-[#0f0d24]" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }}>Agendar llamada</a>
            </Section>
          </div>
        )}
      </header>

      {/* Hero */}
      <Section id="inicio" className="pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium">
              Alineados a NIST CSF v2 & ISO 27001
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              GRC y Ciberseguridad <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }}>operada para tu negocio</span>
            </h1>
            <p className="max-w-xl text-lg text-white/80">Implementamos y operamos capacidades de seguridad de punta a punta.</p>
            <p className="italic text-white/70">{SITE.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0f0d24]" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }}>
                Solicitar diagnóstico
              </a>
              <a href={SITE.brochure} className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/90">
                Descargar brochure
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <MiniStat icon={LineChart} label="Madurez" value="↑ ML3" hint="Objetivo/roadmap" />
                <MiniStat icon={Bug} label="Vulnerabilidades" value="-37%" hint="90 días" />
                <MiniStat icon={Lock} label="MFA adopción" value="96%" hint="Usuarios críticos" />
                <MiniStat icon={Siren} label="MTTR" value="< 4h" hint="Incidentes P1" />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Servicios */}
      <Section id="servicios" className="py-16 sm:py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 sm:mb-12">
          <h2 className="text-3xl font-extrabold">Servicios administrados y consultivos</h2>
          <p className="mt-2 max-w-2xl text-white/80">Acompañamos tu ruta de madurez: diagnóstico, roadmap, implementación y operación continua.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (<ServiceCard key={i} {...s} />))}
        </div>
      </Section>

      {/* Método */}
      <Section id="metodo" className="py-16 sm:py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl font-extrabold">Cómo trabajamos</h2>
          <p className="mt-2 text-white/80">Ciclo continuo para elevar y sostener capacidades.</p>
        </motion.div>
        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Step num={1} title="Assessment" icon={LineChart}>Gap vs. marco objetivo, riesgos y prioridades.</Step>
          <Step num={2} title="Roadmap" icon={Presentation}>Iniciativas, recursos, dependencias y quick-wins.</Step>
          <Step num={3} title="Implementación" icon={BadgeCheck}>Políticas, controles y procesos con métricas.</Step>
          <Step num={4} title="Operación" icon={Users}>Co-gestión, reporting ejecutivo y mejora continua.</Step>
        </ol>
      </Section>

      {/* NovaSec */}
      <Section id="novasec" className="py-16 sm:py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl font-extrabold">Plataforma GRC: NovaSec</h2>
          <p className="mt-2 text-white/80">Usamos la plataforma GRC de <b>NovaSec</b> para la gestión integral de riesgos, cumplimiento y seguridad.</p>
        </motion.div>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <img src="/NovaSec-diagrama.png" alt="Diagrama Software GRC NovaSec" className="mx-auto max-h-96 w-auto object-contain rounded-2xl border border-white/10 bg-white/5 p-4" />
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Módulos del sistema</h3>
            <ul className="list-disc space-y-1 pl-5 text-white/85">
              <li>Activos, riesgos, eventos e incidentes</li>
              <li>Políticas, planes, auditoría e indicadores</li>
              <li>Hallazgos, BIA, pruebas y continuidad</li>
            </ul>
            <h3 className="pt-2 text-xl font-bold">Licenciamiento SaaS</h3>
            <ul className="list-disc space-y-1 pl-5 text-white/85">
              <li>Pago del servicio por los módulos requeridos</li>
              <li>Suscripción por año (1 mes de valor agregado)</li>
              <li>SaaS en nube AWS con controles de seguridad y resiliencia</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Planes */}
      <Section id="planes" className="py-16 sm:py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl font-extrabold">Planes de servicio</h2>
          <p className="mt-2 text-white/80">Selecciona un paquete o pídelo a la medida.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (<PlanCard key={i} {...p} />))}
        </div>
      </Section>

      {/* Contacto (FormSubmit) */}
      <Section id="contacto" className="py-16 sm:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-extrabold">Conversemos</h3>
            <p className="mt-2 text-white/80">Cuéntanos tu contexto y agenda una reunión de descubrimiento.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              <li className="flex items-center gap-2">
                {/* WhatsApp icon */}
                <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M19.11 17.15c-.28-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.61.14-.18.28-.7.89-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.45-.61-.45-.16 0-.35-.02-.53-.02s-.49.07-.74.35c-.25.28-.97.95-.97 2.32s1 2.69 1.14 2.88c.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.61-.66 1.84-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.53-.32z"/>
                  <path d="M26.7 5.3C24.1 2.7 20.7 1.3 17.1 1.3c-7 0-12.7 5.7-12.7 12.7 0 2.2.6 4.3 1.7 6.2L4 30.7l10.7-2.8c1.8 1 3.9 1.6 6 1.6 7 0 12.7-5.7 12.7-12.7 0-3.4-1.4-6.8-4-9.4zM17.1 27.6c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-6.3 1.6 1.7-6.1-.2-.4c-1-1.6-1.5-3.5-1.5-5.5 0-5.9 4.8-10.7 10.7-10.7 2.9 0 5.6 1.1 7.6 3.2 2 2 3.1 4.7 3.1 7.6 0 5.9-4.8 10.7-10.7 10.7z"/>
                </svg>
                <a href={SITE.whatsapp} className="underline underline-offset-4">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">{SITE.email}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {SITE.address}</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            {/* FormSubmit endpoint without opening email client */}
            <form action="https://formsubmit.co/ventas@arseg.com.mx" method="POST" className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow">
              {/* Options: success redirect and captcha off */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Nuevo contacto desde sitio ARSEG" />
              <input type="hidden" name="_next" value="https://vercel.com/success" />
              
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nombre" id="nombre" required />
                <Field label="Empresa" id="empresa" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" id="email" type="email" required />
                <Field label="Teléfono" id="telefono" />
              </div>
              <div>
                <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-white/90">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={5} className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 shadow-sm focus:border-white/40 focus:outline-none" placeholder="Contexto, objetivos, plazos..." />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/60">Al enviar, aceptas nuestro aviso de privacidad.</p>
                <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0f0d24]" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }}>
                  Enviar
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <footer className="mt-12 border-t border-white/10 bg-black/20">
        <Section className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={SITE.logoSrc} alt={`${SITE.brand} logo`} className="h-10 w-auto" style={{ mixBlendMode: 'multiply' }} />
            <span className="text-sm text-white/80">© {new Date().getFullYear()} {SITE.brand}. Todos los derechos reservados.</span>
          </div>
          <nav className="flex gap-6 text-sm text-white/80">
            <a href="#" className="hover:text-white">Aviso de privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#inicio" className="hover:text-white">Inicio</a>
          </nav>
        </Section>
      </footer>
    </div>
  );
}

// Components
function ServiceCard({ icon: Icon, title, desc, bullets }) {
  return (
    <motion.article variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:shadow-md">
      <div>
        <div className="mb-3 inline-flex rounded-2xl border border-white/10 bg-black/20 p-2">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/80">{desc}</p>
        <ul className="mt-3 space-y-1 text-sm text-white/85">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
          Conocer más <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

function Step({ num, title, icon: Icon, children }) {
  return (
    <motion.li variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl font-bold text-[#0f0d24]" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }}>{num}</div>
        <Icon className="h-5 w-5 text-white" />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-white/80">{children}</p>
    </motion.li>
  );
}

function PlanCard({ name, price, pitch, features, highlight }) {
  const highlightStyles = highlight
    ? { backgroundImage: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.navy})`, color: "#fff", border: "1px solid rgba(255,255,255,0.1)" }
    : { backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" };
  return (
    <motion.article variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="flex h-full flex-col rounded-3xl p-6 shadow-sm" style={highlightStyles}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className={`mt-1 text-sm ${highlight ? "text-white/85" : "text-white/80"}`}>{pitch}</p>
      </div>
      <div className="mb-4 text-2xl font-bold">{price}</div>
      <ul className="mb-6 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }} />
            <span className="text-white/90">{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <a href="#contacto" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0f0d24]" style={{ backgroundImage: `linear-gradient(90deg, ${BRAND.magenta}, ${BRAND.lilac})` }}>
          Cotizar
        </a>
      </div>
    </motion.article>
  );
}

function Field({ id, label, type = "text", required }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-white/90">
        {label} {required && <span className="text-pink-300">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 shadow-sm focus:border-white/40 focus:outline-none"
      />
    </div>
  );
}

function MiniStat({ icon: Icon, label, value, hint }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-white/60">{label}</div>
          <div className="text-lg font-semibold text-white">{value}</div>
        </div>
        <div className="inline-flex rounded-xl border border-white/10 bg-black/20 p-2 text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {hint && <div className="mt-1 text-xs text-white/60">{hint}</div>}
    </div>
  );
}
