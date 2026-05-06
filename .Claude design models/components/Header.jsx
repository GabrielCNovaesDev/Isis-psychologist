// Header.jsx — header fixo + brand + nav

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXXX";

function Header({ onCtaClick }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className={"site-header" + (scrolled ? " scrolled" : "")}>
        <a href="#top" className="brand" aria-label="Isis Novais — Início">
          <span className="brand-symbol"><ButterflyMark size={32} stroke={1.3} /></span>
          <span className="brand-mark">
            Isis Novais
            <small>Psicóloga Clínica</small>
          </span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#abordagem">Abordagem</a>
          <a href="#temas">Temas</a>
          <a href="#atendimento">Atendimento</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="btn btn-primary nav-cta-desktop"
        >
          <WhatsAppGlyph size={14} />
          Agendar conversa
        </a>

        <button className="menu-btn" aria-label="Abrir menu"
                onClick={() => setDrawerOpen(o => !o)}>
          <span></span>
        </button>
      </header>

      <div className={"mobile-drawer" + (drawerOpen ? " open" : "")}>
        <a href="#sobre" onClick={closeDrawer}>Sobre</a>
        <a href="#abordagem" onClick={closeDrawer}>Abordagem</a>
        <a href="#temas" onClick={closeDrawer}>Temas</a>
        <a href="#atendimento" onClick={closeDrawer}>Atendimento</a>
        <a href="#contato" onClick={closeDrawer}>Contato</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-primary" onClick={closeDrawer}>
          <WhatsAppGlyph size={14} /> Agendar conversa
        </a>
      </div>
    </>
  );
}

window.Header = Header;
window.WHATSAPP_URL = WHATSAPP_URL;
