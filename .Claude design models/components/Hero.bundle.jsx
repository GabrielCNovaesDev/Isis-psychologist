// Hero.jsx

function Hero({ variant = "editorial" }) {
  const heroRef = React.useRef(null);
  const photoRef = React.useRef(null);

  // parallax leve na foto do hero (rAF throttled, respeita reduced-motion)
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!photoRef.current) return;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.2) return; // só anima quando hero está visível
        photoRef.current.style.transform = `translate3d(0, ${y * 0.06}px, 0) scale(1.04)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [variant]);

  return (
    <section className="hero" id="top" ref={heroRef} data-variant={variant}>
      <HeroOrnament className="hero-orn" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text" data-reveal>
            <div className="eyebrow hero-eyebrow">Psicologia clínica · Aceitando novos pacientes</div>
            <h1 className="h-display">
              Um espaço para <em>reconectar</em> com você mesma — com leveza e propósito.
            </h1>
            <p className="lead">
              Sou Isis Novais, psicóloga clínica. Acompanho jovens, adultos e casais em
              um percurso terapêutico gentil, baseado em Gestalt-terapia e Terapia Cognitivo-Comportamental.
            </p>
            <div className="hero-meta">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-primary">
                <WhatsAppGlyph size={14} />
                Agendar uma conversa
              </a>
              <a href="#sobre" className="btn btn-ghost">
                Sobre mim <ArrowRight />
              </a>
              <span className="divider" aria-hidden="true"></span>
              <span className="crp">CRP&nbsp;XX/XXXXX&nbsp;·&nbsp;Vitória da Conquista — BA &amp; Online</span>
            </div>
          </div>

          <div className="hero-photo parallax-wrap" data-reveal>
            <img ref={photoRef} src={window.__resources?.heroIsis || "assets/hero-isis.jpg"} alt="Retrato de Isis Novais, psicóloga clínica" loading="eager" />
            <div className="hero-tag">
              <span className="yr">Em prática clínica desde 2013</span>
              <span className="num"><em>13</em>&nbsp;anos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
