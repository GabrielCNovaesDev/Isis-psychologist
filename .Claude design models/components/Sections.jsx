// Sections.jsx — Sobre, Abordagem, Temas, Audience, Process, Banner, FAQ

function About() {
  const photoRef = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!photoRef.current) return;
        const r = photoRef.current.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        const offset = (r.top - window.innerHeight / 2) * -0.04;
        photoRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo parallax-wrap" data-reveal>
            <img ref={photoRef} src="assets/sobre-isis.jpg" alt="Isis Novais sentada, em um momento de pausa" loading="lazy" />
          </div>

          <div className="about-content" data-reveal>
            <div className="eyebrow">Sobre mim</div>
            <h2 className="h-section">
              Olá, eu sou <em>Isis</em>.
            </h2>
            <p>
              Sou psicóloga clínica e minha missão é proporcionar e ajudar pessoas a ter
              qualidade de vida, bons relacionamentos, equilíbrio emocional e leveza de viver.
            </p>
            <p className="italic-pull">
              Acredito que a terapia é um espaço de reconexão — um lugar onde você tem
              liberdade para se expressar, se compreender e aprender a lidar com seus
              pensamentos e emoções de forma mais gentil.
            </p>
            <p>
              Trabalho para ajudar você a romper ciclos de repetição prejudiciais, gerenciar
              conflitos e construir limites saudáveis nas suas relações. Desejo que, a cada
              atendimento, você volte a se sentir bem consigo mesma — com escolhas funcionais.
            </p>

            <div className="formation" data-reveal-stagger>
              <div className="card">
                <span className="num">01</span>
                <span className="title">Gestalt-terapia</span>
                <span className="desc">Abordagem que valoriza a potência e a criatividade do ser humano.</span>
                <span className="badge">Especialização em andamento</span>
              </div>
              <div className="card">
                <span className="num">02</span>
                <span className="title">Terapia Cognitivo-Comportamental</span>
                <span className="desc">Padrão-ouro no tratamento da ansiedade e da depressão.</span>
                <span className="badge">Formação concluída</span>
              </div>
              <div className="card">
                <span className="num">03</span>
                <span className="title">Terapia de Casal &amp; Relacionamentos</span>
                <span className="desc">Para conflitos, comunicação e construção de vínculos mais saudáveis.</span>
                <span className="badge">Especialização em andamento</span>
              </div>
              <div className="card">
                <span className="num">04</span>
                <span className="title">13 anos de experiência</span>
                <span className="desc">Em prática clínica com jovens, adultos e casais.</span>
                <span className="badge">Desde 2013</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach" id="abordagem">
      <div className="container">
        <div className="approach-head" data-reveal>
          <div>
            <div className="eyebrow">Como eu trabalho</div>
          </div>
          <div>
            <h2 className="h-section">
              Três movimentos que sustentam o nosso <em>encontro</em>.
            </h2>
          </div>
        </div>

        <div className="pillars" data-reveal-stagger>
          <article className="pillar">
            <span className="num">i.</span>
            <CircleGlyph size={52} />
            <h3>Reconexão</h3>
            <p>
              Voltar a habitar quem você é. Criar espaço para o que sente, sem pressa
              e sem julgamento — um terreno seguro para se expressar.
            </p>
          </article>
          <article className="pillar">
            <span className="num">ii.</span>
            <SeedGlyph size={52} />
            <h3>Compreensão</h3>
            <p>
              Olhar para os ciclos que se repetem e para o que sustenta o sofrimento.
              Entender com gentileza, sem se reduzir a um diagnóstico.
            </p>
          </article>
          <article className="pillar">
            <span className="num">iii.</span>
            <FlowGlyph size={52} />
            <h3>Transformação</h3>
            <p>
              Construir escolhas mais funcionais, limites saudáveis e relações mais
              honestas. Mudar no seu ritmo, com leveza e propósito.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

const THEMES = [
  { t: "Ansiedade", d: "Quando a mente não para e o corpo vive em alerta — encontrar pausa e reorganizar prioridades." },
  { t: "Cansaço emocional", d: "Aquele esgotamento difícil de explicar, que pesa nos dias e nas relações mais próximas." },
  { t: "Autoconhecimento", d: "Olhar para dentro com curiosidade, e não cobrança — entender padrões, desejos e limites." },
  { t: "Relações desgastantes", d: "Vínculos que machucam, repetições que cansam — aprender a comunicar e a se posicionar." },
  { t: "Insegurança", d: "Aquele ruído interno que duvida de tudo. Construir segurança é treinar uma nova escuta de si." },
  { t: "Baixa autoestima", d: "Reaproximar-se de si com cuidado, reconhecer o próprio valor e suavizar o juízo interno." },
];

function Themes() {
  return (
    <section className="themes" id="temas">
      <div className="container">
        <div className="themes-head" data-reveal>
          <div className="eyebrow">Para quem é a terapia</div>
          <h2 className="h-section">
            Talvez você reconheça <em>um pouco de você</em> aqui.
          </h2>
          <p className="lead">
            Os temas que mais aparecem nos atendimentos. Você não precisa chegar com tudo
            nomeado — basta querer começar a conversa.
          </p>
        </div>

        <div className="themes-grid" data-reveal-stagger>
          {THEMES.map((th, i) => (
            <article className="theme-card" key={th.t}>
              <span className="ix">{String(i + 1).padStart(2, "0")}</span>
              <LeafGlyph size={20} className="glyph" />
              <h4>{th.t}</h4>
              <p>{th.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="audience" id="atendimento">
      <div className="container">
        <div data-reveal style={{ maxWidth: "780px" }}>
          <div className="eyebrow">Para quem atendo</div>
          <h2 className="h-section" style={{ marginTop: "16px" }}>
            Cada percurso é único — e <em>seu ritmo</em> é o ponto de partida.
          </h2>
        </div>

        <div className="audience-grid" data-reveal-stagger>
          <article className="audience-card">
            <span className="label">01 · Jovens</span>
            <h3>Jovens</h3>
            <p>
              Para quem está atravessando transições importantes — universidade, primeiras
              relações, escolhas profissionais — e busca um espaço seguro para se entender.
            </p>
          </article>
          <article className="audience-card">
            <span className="label">02 · Adultos</span>
            <h3>Adultos</h3>
            <p>
              Para você que carrega ciclos antigos, está exausta, ou simplesmente quer
              recolocar a vida em um curso mais coerente com quem é hoje.
            </p>
          </article>
          <article className="audience-card">
            <span className="label">03 · Casais</span>
            <h3>Casais</h3>
            <p>
              Quando o vínculo precisa de cuidado: comunicação, conflitos recorrentes,
              construção de limites e reaproximação afetiva.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="process-head" data-reveal>
          <div>
            <div className="eyebrow">Como funciona o atendimento</div>
            <h2 className="h-section" style={{ marginTop: "16px" }}>
              Um caminho simples — <em>do primeiro contato</em> ao acompanhamento contínuo.
            </h2>
          </div>
          <p className="lead">
            Atendimento presencial em Vitória da Conquista — BA, e online de qualquer lugar
            do Brasil. Sem complicações, sem promessas de resultados rápidos.
          </p>
        </div>

        <ol className="steps" data-reveal-stagger>
          <li className="step">
            <span className="num">i.</span>
            <h4>Primeira conversa pelo WhatsApp</h4>
            <p>Um contato inicial breve para alinhar disponibilidade, valores e tirar dúvidas.</p>
          </li>
          <li className="step">
            <span className="num">ii.</span>
            <h4>Agendamento da sessão</h4>
            <p>Escolhemos o melhor formato — presencial ou online — e o horário que cabe na sua semana.</p>
          </li>
          <li className="step">
            <span className="num">iii.</span>
            <h4>Sessão de acolhimento</h4>
            <p>Um primeiro encontro para escuta atenta da sua história e dos motivos que te trouxeram.</p>
          </li>
          <li className="step">
            <span className="num">iv.</span>
            <h4>Acompanhamento contínuo</h4>
            <p>Sessões semanais ou quinzenais, no seu ritmo — com revisão periódica do percurso.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Banner() {
  return (
    <section className="banner">
      <div className="banner-inner" data-reveal>
        <div className="eyebrow">Um respiro</div>
        <h2>
          Você não precisa fazer <em>isso sozinha</em>.
        </h2>
        <p className="banner-sub">
          Marcar a primeira conversa é um ato de cuidado consigo. Estou aqui quando você quiser começar.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-primary">
          <WhatsAppGlyph size={14} /> Agendar uma conversa
        </a>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Como funciona a primeira sessão?",
    a: "É uma sessão de acolhimento: escuto sua história, entendo o que te trouxe à terapia, esclareço dúvidas sobre o processo e combinamos juntas como seguir. Não há pressão para nomear tudo no primeiro encontro."
  },
  {
    q: "O atendimento é online ou presencial?",
    a: "Atendo presencialmente em Vitória da Conquista — BA, e online por videochamada para qualquer lugar do Brasil. A escolha depende do seu conforto e da sua rotina."
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "As sessões individuais têm cerca de 50 minutos. Os atendimentos de casal duram em torno de 60 minutos. A periodicidade — semanal ou quinzenal — é definida em conjunto."
  },
  {
    q: "E se eu nunca fiz terapia antes?",
    a: "Tudo bem. Muita gente chega pela primeira vez aqui. O processo é construído no seu ritmo, com gentileza e sem cobrança. Não é preciso saber explicar o que sente — basta querer começar."
  },
  {
    q: "Trabalha com plano de saúde ou reembolso?",
    a: "[A confirmar pela Isis] Forneço recibos para reembolso junto ao seu plano de saúde, conforme as regras de cada operadora. Posso te orientar sobre o procedimento na primeira conversa."
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div data-reveal>
            <div className="eyebrow">Dúvidas frequentes</div>
            <h2 className="h-section" style={{ marginTop: "16px" }}>
              Antes de <em>começar</em>.
            </h2>
            <p className="body" style={{ marginTop: "20px", maxWidth: "32ch" }}>
              Algumas perguntas que costumam aparecer no primeiro contato.
              Se a sua não estiver aqui, é só me chamar.
            </p>
          </div>

          <div className="faq-list" data-reveal>
            {FAQ_ITEMS.map((it, i) => (
              <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{it.q}</span>
                  <span className="plus" aria-hidden="true"></span>
                </button>
                <div className="answer">{it.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About, Approach, Themes, Audience, Process, Banner, FAQ });
