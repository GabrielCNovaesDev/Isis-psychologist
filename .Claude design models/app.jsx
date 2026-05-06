// app.jsx — root: aplica tweaks e monta o site

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // Aplica atributos no <html> para CSS pegar
  React.useEffect(() => {
    document.documentElement.setAttribute("data-palette", t.palette);
    document.documentElement.setAttribute("data-density", t.density);
  }, [t.palette, t.density]);

  // Reveal-on-scroll observer
  React.useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [t.heroStyle]);

  return (
    <>
      <Header />
      <Hero variant={t.heroStyle} />
      <About />
      <Approach />
      <Themes />
      <Audience />
      <Process />
      <Banner />
      <FAQ />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Paleta" />
        <TweakRadio
          label="Cor primária"
          value={t.palette}
          options={[
            { value: "terracota", label: "Terracota" },
            { value: "sage", label: "Sage" },
            { value: "mista", label: "Mista" },
          ]}
          onChange={(v) => setTweak("palette", v)}
        />

        <TweakSection label="Hero" />
        <TweakSelect
          label="Estilo do hero"
          value={t.heroStyle}
          options={[
            { value: "editorial", label: "Editorial — foto à direita" },
            { value: "vertical",  label: "Vertical — recorte estreito" },
            { value: "type",      label: "Tipografia dominante" },
            { value: "fullbleed", label: "Full-bleed — foto + texto sobreposto" },
          ]}
          onChange={(v) => setTweak("heroStyle", v)}
        />

        <TweakSection label="Densidade" />
        <TweakRadio
          label="Espaçamento"
          value={t.density}
          options={[
            { value: "compacto",    label: "Compacto" },
            { value: "equilibrado", label: "Equilibrado" },
            { value: "espacoso",    label: "Espaçoso" },
          ]}
          onChange={(v) => setTweak("density", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
