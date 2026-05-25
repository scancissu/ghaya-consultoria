import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { Heart, Eye, Compass } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Ghaya Consultoria" },
      { name: "description", content: "Nossa missão, visão e valores. Conheça a essência da Ghaya Consultoria." },
      { property: "og:title", content: "Sobre — Ghaya Consultoria" },
      { property: "og:description", content: "Missão, visão e valores da Ghaya Consultoria." },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const valores = [
  "Humanização", "Ética", "Escuta ativa", "Desenvolvimento contínuo",
  "Respeito às individualidades", "Saúde emocional", "Excelência",
  "Transformação social", "Relacionamentos saudáveis", "Inovação educacional",
];

function SobrePage() {
  return (
    <>
      <section className="relative bg-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25 mix-blend-overlay">
          <img src={aboutImg} alt="" width={1400} height={900} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-soft">Sobre a Ghaya</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl leading-tight">
            Pessoas saudáveis constroem <span className="italic text-gradient-gold">empresas saudáveis</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Unimos desenvolvimento profissional, saúde mental, educação e fortalecimento das relações humanas para criar ambientes mais produtivos, saudáveis e sustentáveis.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Compass, title: "Missão", text: "Promover transformação humana e organizacional por meio de estratégias inteligentes, educação, desenvolvimento emocional e fortalecimento das relações interpessoais." },
            { icon: Eye, title: "Visão", text: "Ser referência em consultoria humanizada, reconhecida por integrar desenvolvimento humano, educação e saúde emocional em empresas, instituições e famílias." },
            { icon: Heart, title: "Propósito", text: "Impactar pessoas e organizações através do desenvolvimento humano, da educação e da transformação das relações." },
          ].map((b) => (
            <article key={b.title} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-navy-deep">
                <b.icon size={22} />
              </div>
              <h2 className="mt-5 font-display text-2xl text-navy">{b.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-soft py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/60">Nossos valores</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy">Princípios que nos guiam</h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {valores.map((v) => (
              <span key={v} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground shadow-card transition-smooth hover:border-gold hover:text-navy">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/60">Metodologia</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy">Como atuamos</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {[
              ["01", "Diagnóstico", "Compreensão profunda das necessidades."],
              ["02", "Planejamento", "Criação de soluções personalizadas."],
              ["03", "Desenvolvimento", "Execução prática das ações."],
              ["04", "Acompanhamento", "Monitoramento e ajustes estratégicos."],
              ["05", "Transformação", "Fortalecimento de pessoas e resultados."],
            ].map(([n, t, d]) => (
              <div key={n} className="relative">
                <span className="font-display text-3xl text-gradient-gold">{n}</span>
                <h3 className="mt-2 font-display text-lg text-navy">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}