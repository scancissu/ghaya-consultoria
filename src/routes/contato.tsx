import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Globe, MessageCircle, Building2, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Ghaya Consultoria" },
      { name: "description", content: "Fale com a Ghaya Consultoria. Telefone, WhatsApp e formulário de contato." },
      { property: "og:title", content: "Contato — Ghaya Consultoria" },
      { property: "og:description", content: "Entre em contato com a Ghaya Consultoria." },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const message = String(form.get("message") || "");
    const text = encodeURIComponent(`Olá, sou ${name}. ${message}`);
    window.open(`https://wa.me/5511915280599?text=${text}`, "_blank");
    setSent(true);
    toast.success("Mensagem preparada! Continue no WhatsApp.");
  };

  return (
    <>
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-soft">Contato</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl leading-tight">
            Vamos <span className="italic text-gradient-gold">conversar</span>?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Conte-nos sobre sua empresa, equipe ou projeto. Respondemos com soluções personalizadas.
          </p>
        </div>
      </section>

      <section className="py-24 bg-soft">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-5">
          <aside className="md:col-span-2 space-y-5">
            <ContactCard icon={Phone} label="Telefone" value="(11) 91528-0599" href="tel:+5511915280599" />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Enviar mensagem" href="https://wa.me/5511915280599" />
            <ContactCard icon={Globe} label="Site" value="bem-estar360.com" href="https://bem-estar360.com" />
            <ContactCard icon={Building2} label="Setor" value="Gestão de Recursos Humanos" />
          </aside>

          <form onSubmit={onSubmit} className="md:col-span-3 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card space-y-5">
            <h2 className="font-display text-3xl text-navy">Envie sua mensagem</h2>
            <p className="text-sm text-muted-foreground">Preencha o formulário e continue a conversa pelo WhatsApp.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Nome" required />
              <Field name="company" label="Empresa / Instituição" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="email" label="E-mail" type="email" required />
              <Field name="phone" label="Telefone" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Mensagem</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-gold focus:ring-2 focus:ring-gold/30"
                placeholder="Conte-nos brevemente sobre seu projeto ou necessidade…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:bg-navy-deep"
            >
              {sent ? "Enviado" : "Enviar mensagem"} <Send size={15} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-smooth hover:border-gold">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-navy-deep">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-display text-lg text-navy">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a> : inner;
}