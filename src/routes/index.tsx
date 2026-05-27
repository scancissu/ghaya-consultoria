import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Users, Heart, GraduationCap, Sparkles, Target, HandHeart } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ghaya Consultoria — Conectando pessoas, talentos e propósito" },
      { name: "description", content: "Consultoria humanizada em recrutamento, desenvolvimento humano, NR1, saúde emocional e fortalecimento familiar." },
      { property: "og:title", content: "Ghaya Consultoria" },
      { property: "og:description", content: "Conectando pessoas, talentos e propósito." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const highlights = [
  { icon: Users, title: "Recrutamento Estratégico", desc: "Seleção alinhada à cultura e aos objetivos da sua empresa." },
  { icon: Heart, title: "NR1 e Saúde Emocional", desc: "Programas preventivos e bem-estar no ambiente corporativo." },
  { icon: GraduationCap, title: "Projetos Educacionais", desc: "Metodologias e conteúdos para escolas e instituições." },
  { icon: HandHeart, title: "Rodas Terapêuticas", desc: "Encontros para fortalecer vínculos familiares e relacionais." },
];

const differentials = [
  { icon: Sparkles, title: "Visão Humanizada", desc: "Pessoas saudáveis constroem empresas saudáveis." },
  { icon: Target, title: "Estratégia com Propósito", desc: "Resultados organizacionais aliados ao desenvolvimento humano." },
  { icon: Users, title: "Atuação Multidisciplinar", desc: "Educação, saúde emocional, recrutamento e desenvolvimento." },
  { icon: HandHeart, title: "Soluções Personalizadas", desc: "Cada projeto recebe estratégias sob medida." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img src={heroImg} alt="" width={1600} height={1100} className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Consultoria humanizada
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Conectando <span className="text-gradient-gold italic">pessoas</span>,<br />
              talentos e <span className="text-gradient-gold italic">propósito</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Promovemos transformação humana e organizacional por meio de estratégias inteligentes, educação, desenvolvimento emocional e fortalecimento das relações.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-gold-soft shadow-gold transition-smooth hover:-translate-y-0.5">
                Iniciar uma conversa <ArrowRight size={16} />
              </Link>
              <Link to="/servicos" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm text-primary-foreground transition-smooth hover:bg-primary-foreground/10">
                Nossos serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-soft py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/60">Quem somos</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
            Uma consultoria que une <span className="italic text-gradient-gold">estratégia</span> e acolhimento.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A Ghaya Consultoria é especializada em recrutamento estratégico, desenvolvimento humano, educação corporativa e projetos de fortalecimento familiar. Atuamos de forma humanizada e estratégica, conectando pessoas, talentos e propósito.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent-foreground/60">O que fazemos</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy">Áreas de atuação</h2>
            </div>
            <Link to="/servicos" className="text-sm text-navy hover:text-accent-foreground inline-flex items-center gap-1">
              Ver todos os serviços <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <article key={h.title} className="group relative rounded-2xl border border-border bg-card p-8 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-navy-deep mb-5">
                  <h.icon size={22} />
                </div>
                <h3 className="font-display text-xl text-navy">{h.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="bg-navy text-primary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-soft">Diferenciais</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Mais do que serviços, <span className="text-gradient-gold italic">transformação</span>.
            </h2>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              Acreditamos que relações saudáveis constroem ambientes mais fortes, produtivos e humanos. Nosso trabalho promove pertencimento e desenvolvimento integral.
            </p>
            <Link to="/sobre" className="mt-8 inline-flex items-center gap-2 text-gold-soft hover:text-gold transition-smooth">
              Conheça nossa essência <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {differentials.map((d) => (
              <div key={d.title} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] p-6 backdrop-blur transition-smooth hover:border-gold/40">
                <d.icon size={22} className="text-gold mb-3" />
                <h3 className="font-display text-lg">{d.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-soft py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
            Vamos construir ambientes mais <span className="italic text-gradient-gold">humanos</span> juntos?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Conte-nos sobre sua empresa, equipe ou projeto. Criamos soluções personalizadas para cada desafio.
          </p>
          <Link to="/contato" className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:bg-navy-deep">
            Fale com a Ghaya <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
