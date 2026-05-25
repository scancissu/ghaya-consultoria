import { createFileRoute, Link } from "@tanstack/react-router";
import projectsImg from "@/assets/projects.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Ghaya Consultoria" },
      { name: "description", content: "Projetos educacionais, corporativos e de fortalecimento familiar desenvolvidos pela Ghaya Consultoria." },
      { property: "og:title", content: "Projetos — Ghaya Consultoria" },
      { property: "og:description", content: "Projetos educacionais, corporativos e socioemocionais." },
      { property: "og:image", content: "/og-projetos.jpg" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosPage,
});

const projetos = [
  { tag: "Corporativo", title: "Programas de Bem-Estar 360º", desc: "Ações integradas de saúde emocional, social e laboral, alinhadas à NR1 e ao bem-estar corporativo." },
  { tag: "Educacional", title: "Metodologias Socioemocionais", desc: "Conteúdos e programas educacionais para escolas e instituições, com foco em desenvolvimento humano." },
  { tag: "Familiar", title: "Rodas de Fortalecimento Familiar", desc: "Encontros terapêuticos voltados ao fortalecimento das relações familiares e relacionais." },
  { tag: "Liderança", title: "Mentorias de Líderes", desc: "Capacitações estratégicas para desenvolvimento de líderes mais humanos e eficazes." },
  { tag: "Social", title: "Projetos para Instituições Sociais", desc: "Programas formativos para clínicas, comunidades terapêuticas e projetos sociais." },
  { tag: "Recrutamento", title: "Talentos com Propósito", desc: "Processos seletivos estratégicos focados em fit cultural e desenvolvimento de longo prazo." },
];

function ProjetosPage() {
  return (
    <>
      <section className="relative bg-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25 mix-blend-overlay">
          <img src={projectsImg} alt="" width={1400} height={900} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-soft">Projetos</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl leading-tight">
            Iniciativas que <span className="italic text-gradient-gold">transformam</span> pessoas e ambientes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Apresentação de projetos educacionais, corporativos e socioemocionais desenvolvidos pela Ghaya Consultoria.
          </p>
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <span className="self-start rounded-full bg-gold/15 px-3 py-1 text-xs uppercase tracking-widest text-accent-foreground">{p.tag}</span>
              <h2 className="mt-5 font-display text-2xl text-navy">{p.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <Link to="/contato" className="mt-6 inline-flex items-center gap-1 text-sm text-navy hover:text-accent-foreground">
                Saber mais <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-navy">Quer construir um projeto com a gente?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Criamos iniciativas sob medida para sua empresa, escola ou instituição.</p>
          <Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm text-primary-foreground transition-smooth hover:bg-navy-deep shadow-elegant">
            Vamos conversar <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}