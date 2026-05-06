// Footer.jsx

function Footer() {
  return (
    <footer className="footer-cta" id="contato">
      <div className="container">
        <div className="footer-grid">
          <div data-reveal>
            <div className="eyebrow" style={{ color: "#E5B891" }}>Contato</div>
            <h2 className="h-section" style={{ marginTop: "16px" }}>
              Vamos conversar — <em>quando você quiser começar</em>.
            </h2>
            <p className="lead">
              Toda terapia começa com um primeiro passo, e ele pode ser pelo WhatsApp.
              Respondo pessoalmente, geralmente no mesmo dia.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-primary">
              <WhatsAppGlyph size={14} /> Agendar uma conversa
            </a>
          </div>

          <div className="contact-list" data-reveal>
            <div className="contact-item">
              <span className="label">WhatsApp</span>
              <a className="value" href={WHATSAPP_URL} target="_blank" rel="noopener">
                +55 (XX) XXXXX-XXXX
              </a>
            </div>
            <div className="contact-item">
              <span className="label">Instagram</span>
              <a className="value" href="https://www.instagram.com/psicologaisisnovais/" target="_blank" rel="noopener">
                @psicologaisisnovais
              </a>
            </div>
            <div className="contact-item">
              <span className="label">E-mail</span>
              <a className="value" href="mailto:contato@isisnovais.com.br">
                contato@isisnovais.com.br <span style={{opacity:0.5,fontSize:'0.7em'}}>(a confirmar)</span>
              </a>
            </div>
            <div className="contact-item">
              <span className="label">Atendimento</span>
              <span className="value">
                Vitória da Conquista — BA<br/>
                <span style={{opacity:0.7, fontSize:'0.85em'}}>e online de qualquer lugar</span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="brand" style={{ gap: "14px" }}>
            <span className="brand-symbol" style={{ color: "#E5B891" }}>
              <ButterflyMark size={28} stroke={1.3} />
            </span>
            <span className="brand-mark">
              Isis Novais
              <small>Psicóloga Clínica</small>
            </span>
          </div>
          <div className="crp-block">CRP&nbsp;XX/XXXXX</div>
        </div>

        <p className="footer-disclaimer" style={{ marginTop: "24px" }}>
          As informações deste site são de caráter informativo e não substituem
          uma avaliação clínica individualizada. © {new Date().getFullYear()} Isis Novais. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

window.Footer = Footer;
