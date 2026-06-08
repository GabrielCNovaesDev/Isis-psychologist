// Os links de WhatsApp estão hardcoded no HTML (cada <a data-whatsapp>
// já tem seu href real apontando para wa.me/557788877371).
// Esta é a fonte única de verdade — não sobrescrevemos em runtime
// para evitar problemas de cache/JS quebrado servindo href errado.

// Header: adiciona .scrolled ao passar 24px
const header = document.querySelector(".site-header");
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menu mobile
const menuBtn = document.querySelector(".menu-btn");
const drawer = document.querySelector(".mobile-drawer");
menuBtn.addEventListener("click", () => {
  const isOpen = drawer.classList.toggle("open");
  document.body.style.overflow = isOpen ? "hidden" : "";
  menuBtn.setAttribute("aria-expanded", isOpen);
});
drawer.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    drawer.classList.remove("open");
    document.body.style.overflow = "";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Reveal on scroll
// Estratégia defensiva:
// 1. Marcamos os elementos com .reveal-init (CSS põe opacity:0 + transform)
// 2. IntersectionObserver adiciona .in quando entra na viewport
// 3. Failsafe: após 1.5s, qualquer elemento ainda sem .in recebe .in
//    (evita página invisível se o observer falhar)
const revealTargets = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");

// Marca para iniciar a animação (só agora o CSS esconde os elementos)
revealTargets.forEach(el => {
  if (el.hasAttribute("data-reveal-stagger")) {
    el.classList.add("reveal-init-stagger");
  } else {
    el.classList.add("reveal-init");
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.01, rootMargin: "0px 0px 0px 0px" });

revealTargets.forEach(el => {
  revealObserver.observe(el);
});

// Failsafe: garante que após 1.5s todo conteúdo esteja visível,
// mesmo se o observer não disparar (carregamento lento, mobile antigo, etc.)
setTimeout(() => {
  document.querySelectorAll(".reveal-init:not(.in), .reveal-init-stagger:not(.in)").forEach(el => {
    el.classList.add("in");
  });
}, 1500);

// Parallax (hero photo + about photo) — rAF throttled, respeita prefers-reduced-motion
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const heroPhoto = document.querySelector(".hero-photo img");
  const aboutPhoto = document.querySelector(".about-photo img");
  let raf = 0;

  window.addEventListener("scroll", () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const y = window.scrollY;

      if (heroPhoto && y < window.innerHeight * 1.2) {
        heroPhoto.style.transform = `translate3d(0, ${y * 0.06}px, 0) scale(1.04)`;
      }

      if (aboutPhoto) {
        const r = aboutPhoto.closest(".about-photo").getBoundingClientRect();
        if (r.bottom > -200 && r.top < window.innerHeight + 200) {
          const offset = (r.top - window.innerHeight / 2) * -0.04;
          aboutPhoto.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
        }
      }
    });
  }, { passive: true });
}

// FAQ accordion
document.querySelectorAll(".faq-item button").forEach((btn, i, all) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    // fecha todos
    document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("open"));
    // abre o clicado se estava fechado
    if (!isOpen) item.classList.add("open");
  });
});
