import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, HeartPulse, GraduationCap, HandHeart, Briefcase, BookOpen, Mic, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Ghaya Consultoria" },
      { name: "description", content: "Recrutamento, desenvolvimento de equipes, NR1, saúde emocional, projetos educacionais, rodas terapêuticas, treinamentos e mentorias." },
      { property: "og:title", content: "Serviços — Ghaya Consultoria" },
      { property: "og:description", content: "Soluções humanizadas e estratégicas para empresas, equipes e instituições." },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

const servicos = [
  {
    icon: Users,
    title: "Recrutamento e Seleção Estratégica",
    desc: "Identificação, avaliação e seleção de profissionais alinhados à cultura e aos objetivos da sua empresa.",
    items: ["Divulgação de vagas", "Triagem curricular", "Entrevistas", "Avaliação comportamental", "Mapeamento de perfil", "Relatórios de candidatos"],
  },
  {
    icon: Briefcase,
    title: "Desenvolvimento de Equipes",
    desc: "Fortalecimento de equipes, comunicação, liderança, produtividade e clima organizacional.",
    items: ["Treinamentos corporativos", "Comunicação interpessoal", "Liderança", "Inteligência emocional", "Gestão de conflitos", "Engajamento"],
  },
  {
    icon: HeartPulse,
    title: "NR1 e Saúde Emocional",
    desc: "Programas preventivos e educativos voltados à saúde emocional, social e bem-estar corporativo.",
    items: ["Programas preventivos", "Escuta ativa", "Palestras", "Desenvolvimento emocional", "Bem-estar corporativo", "Saúde social"],
  },
  {
    icon: GraduationCap,
    title: "Projetos Educacionais",
    desc: "Programas, conteúdos e metodologias para escolas, instituições e projetos sociais.",
    items: ["Programas educacionais", "Metodologias", "Materiais didáticos", "Cursos", "Projetos socioemocionais"],
  },
  {
    icon: HandHeart,
    title: "Rodas Terapêuticas e Familiares",
    desc: "Encontros e rodas de conversa para fortalecimento emocional, familiar e relacional.",
    items: ["Rodas familiares", "Encontros terapêuticos", "Fortalecimento de vínculos", "Mediação relacional"],
  },
  {
    icon: Mic,
    title: "Treinamentos e Mentorias",
    desc: "Capacitações práticas e estratégicas para empresas, líderes, educadores e equipes.",
    items: ["Mentorias individuais", "Treinamentos in-company", "Programas de liderança", "Workshops práticos"],
  },
  {
    icon: BookOpen,
    title: "Conteúdo Formativo",
    desc: "Materiais educativos, apresentações, cursos, apostilas e conteúdos institucionais personalizados.",
    items: ["Apostilas e e-books", "Cursos online", "Conteúdo institucional", "Apresentações"],
  },
];

function ServicosPage() {
  return (
    <>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-soft">Serviços</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl leading-tight">
            Soluções <span className="italic text-gradient-gold">humanizadas</span> e estratégicas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Atendemos empresas, escolas, instituições sociais, clínicas, comunidades terapêuticas, líderes, educadores e famílias.
          </p>
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
          {servicos.map((s) => (
            <article key={s.title} className="rounded-2xl border border-border bg-card p-8 shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-gold text-navy-deep">
                  <s.icon size={24} />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-navy">{s.title}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Vamos desenhar a solução ideal para você?</h2>
          <Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold bg-navy-deep px-8 py-4 text-sm font-medium text-gold shadow-gold transition-smooth hover:-translate-y-0.5 hover:bg-navy">
            Solicitar uma proposta <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}