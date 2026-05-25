import { Link } from "@tanstack/react-router";
import { Phone, Globe, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-navy-deep font-display text-lg">G</span>
            <span className="font-display text-2xl">Ghaya Consultoria</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70 leading-relaxed">
            Conectando pessoas, talentos e propósito. Promovemos transformação humana e organizacional por meio de estratégia, educação e desenvolvimento emocional.
          </p>
        </div>
        <div>
          <h4 className="font-display text-base text-gold-soft mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-gold-soft transition-smooth">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-gold-soft transition-smooth">Sobre</Link></li>
            <li><Link to="/servicos" className="hover:text-gold-soft transition-smooth">Serviços</Link></li>
            <li><Link to="/projetos" className="hover:text-gold-soft transition-smooth">Projetos</Link></li>
            <li><Link to="/contato" className="hover:text-gold-soft transition-smooth">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base text-gold-soft mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> (11) 91528-0599</li>
            <li className="flex items-center gap-2"><Globe size={14} className="text-gold" /> bem-estar360.com</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-6 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Ghaya Consultoria. Todos os direitos reservados.
      </div>
    </footer>
  );
}