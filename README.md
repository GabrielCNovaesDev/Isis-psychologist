# Isis Novais — Psicóloga Clínica

> Site institucional que apresenta os serviços de psicologia clínica de Isis Novais para potenciais pacientes em Vitória da Conquista — BA e online, convertendo visitantes em agendamentos via WhatsApp.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Deploy](https://img.shields.io/website?url=https%3A%2F%2Fwww.isisnovais.com&label=isisnovais.com)

---

## 🎯 Sobre o projeto

Site profissional desenvolvido para a psicóloga clínica Isis Novais, com o objetivo de comunicar sua abordagem terapêutica (Gestalt-terapia e TCC) e facilitar o primeiro contato de novos pacientes via WhatsApp.

O projeto resolve um problema concreto: a profissional dependia exclusivamente do Instagram para captar pacientes, sem um canal próprio que transmitisse credibilidade, explicasse seu método de trabalho e funcionasse como ponto de conversão direto. O site atua como landing page de alta conversão — cada seção conduz o visitante até o botão de agendamento.

Construído como projeto freelance real para a empresa CNTECH, com briefing, aprovação de design e entrega em produção.

## 🖼️ Demonstração

🔗 **[isisnovais.com](https://www.isisnovais.com/)**

## 🏗️ Arquitetura e decisões técnicas

```
┌─────────────────────────────────────────────┐
│              index.html                      │
│  (documento semântico, seções por âncora)    │
├─────────────────────────────────────────────┤
│         css/styles.css                       │
│  (design system com custom properties)       │
├─────────────────────────────────────────────┤
│          js/main.js                          │
│  (interações: scroll, parallax, accordion)   │
├─────────────────────────────────────────────┤
│           assets/                            │
│  (imagens otimizadas da profissional)        │
└─────────────────────────────────────────────┘
```

### Decisões técnicas com trade-offs

> **Decisão:** HTML/CSS/JS vanilla, sem framework ou bundler.
> **Alternativas consideradas:** React/Next.js, Astro, WordPress.
> **Por quê:** Site institucional de página única sem conteúdo dinâmico — um framework adicionaria complexidade de build, dependências e tempo de carregamento sem benefício funcional. A cliente precisa de manutenção simples e hosting barato.
> **Trade-off aceito:** Sem componentização reutilizável; qualquer mudança estrutural exige edição manual do HTML.

> **Decisão:** Design system via CSS Custom Properties em vez de Tailwind ou SASS.
> **Alternativas consideradas:** Tailwind CSS, SCSS com variáveis, CSS-in-JS.
> **Por quê:** Custom properties oferecem theming nativo, sem etapa de compilação, com excelente suporte de browsers. O escopo do projeto (uma página) não justifica a curva de setup de um pré-processador.
> **Trade-off aceito:** Sem nesting nativo em browsers mais antigos; classes utilitárias escritas manualmente.

> **Decisão:** IntersectionObserver para animações de reveal em vez de biblioteca (AOS, GSAP).
> **Alternativas consideradas:** AOS.js, GSAP ScrollTrigger, CSS scroll-driven animations.
> **Por quê:** Zero dependências externas, controle total sobre threshold e timing, respeita `prefers-reduced-motion` nativamente. Performance superior por não carregar ~15KB de JS extra.
> **Trade-off aceito:** Animações mais simples (fade + translate); efeitos complexos exigiriam mais código manual.

> **Decisão:** Parallax com requestAnimationFrame throttled.
> **Alternativas consideradas:** CSS `transform: translateZ()` com perspective, bibliotecas como Rellax.js.
> **Por quê:** rAF garante 60fps sem layout thrashing. Desativado automaticamente quando `prefers-reduced-motion: reduce` está ativo — acessibilidade sem código extra.
> **Trade-off aceito:** Efeito sutil (fator 0.04–0.06) para evitar motion sickness; não funciona em scroll containers customizados.

## 🛠️ Stack

| Camada | Tecnologia | Por que escolhi |
|--------|-----------|-----------------|
| Markup | HTML5 semântico | SEO, acessibilidade e estrutura clara sem overhead |
| Estilo | CSS3 + Custom Properties | Theming centralizado, zero build step, fluid typography com `clamp()` |
| Interação | JavaScript ES6+ vanilla | Scroll effects, accordion, mobile drawer — sem dependência externa |
| Tipografia | Google Fonts (Fraunces + Inter) | Fraunces traz personalidade editorial; Inter garante legibilidade em corpo de texto |
| Ícones | SVG inline | Controle total de cor via `currentColor`, sem requisição HTTP extra |
| Hosting | Domínio próprio | Credibilidade profissional para a cliente |

## 📁 Estrutura de pastas

```
Isis-psychologist/
├── assets/                  # Imagens da profissional (hero, sobre, abordagem)
├── css/
│   └── styles.css           # Design system completo — layout, tipografia, componentes
├── js/
│   └── main.js              # Interações: header scroll, mobile menu, parallax, FAQ
├── .Claude design models/   # Protótipos de referência usados durante o design (JSX/HTML)
└── index.html               # Página principal — todas as seções do site
```

## 🚀 Como rodar localmente

### Pré-requisitos

- Qualquer browser moderno (Chrome 90+, Firefox 88+, Safari 15+)
- Servidor HTTP local (opcional, mas recomendado para evitar problemas de CORS com fontes)

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/GabrielCNovaesDev/Isis-psychologist.git
cd Isis-psychologist
```

2. Inicie um servidor local (qualquer uma das opções):
```bash
# Com Python 3
python -m http.server 8080

# Com Node.js (npx, sem instalação)
npx serve .

# Com VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

3. Acesse no browser:
```
http://localhost:8080
```

4. Verifique que está funcionando: a página carrega com a hero section exibindo a foto e o botão "Agendar uma conversa".

## 📡 Funcionalidades principais

| Seção | Propósito | Conversão |
|-------|-----------|-----------|
| Hero | Apresentação imediata + CTA principal | Botão WhatsApp |
| Sobre | Credibilidade — formação, experiência, abordagem | Link para seção de contato |
| Abordagem | Diferenciação — explica o método terapêutico em 3 pilares | Educação do visitante |
| Temas | Identificação — o visitante se reconhece nos problemas listados | Reduz barreira emocional |
| Público-alvo | Segmentação — jovens, adultos, casais | Clareza de fit |
| Processo | Transparência — 4 passos do primeiro contato ao acompanhamento | Remove incerteza |
| FAQ | Objeções — responde dúvidas que travam a decisão | Elimina fricção |
| Footer/Contato | Conversão final — WhatsApp, Instagram, e-mail | CTA + dados de contato |

## 🧪 Testes

Este projeto não possui suite de testes automatizados (adequado para um site estático de página única). A validação foi feita manualmente:

- Responsividade testada em Chrome DevTools (mobile, tablet, desktop)
- Acessibilidade verificada com Lighthouse (aria-labels, contraste, semântica)
- Performance: zero dependências JS externas, imagens com `loading="lazy"`, fontes com `display=swap`
- Cross-browser: Chrome, Firefox, Safari, Edge

## 🗺️ Roadmap

- [x] Layout completo responsivo (mobile-first)
- [x] Design system com custom properties (paleta terracota editorial)
- [x] Animações de scroll com IntersectionObserver
- [x] Parallax performático com rAF + prefers-reduced-motion
- [x] Menu mobile com drawer animado
- [x] FAQ accordion acessível
- [x] SEO básico (meta description, title, semântica)
- [x] Deploy em domínio próprio
- [ ] Número real de WhatsApp configurado
- [ ] CRP real no header e footer
- [ ] Otimização de imagens (WebP com fallback)
- [ ] Favicon e Open Graph meta tags para compartilhamento
- [ ] Google Analytics ou Plausible para métricas de conversão
- [ ] Schema.org markup (LocalBusiness + Physician)

## 📚 Aprendizados

- Aprendi que CSS Custom Properties substituem SASS para projetos de escopo controlado — o theming fica centralizado em `:root` e qualquer ajuste de cor propaga instantaneamente sem build.

- Implementei `IntersectionObserver` pela primeira vez em produção e entendi por que é superior a scroll listeners: o browser otimiza internamente, não há cálculo de `getBoundingClientRect()` a cada frame, e o `unobserve` após reveal evita memory leaks.

- Descobri na prática que `clamp()` para tipografia fluida elimina a necessidade de 4-5 media queries — uma linha resolve o que antes exigia breakpoints manuais para cada tamanho de heading.

- Entendi a importância de `prefers-reduced-motion` ao testar com usuários reais: parallax que parece elegante para uns causa desconforto físico para outros. Desativar com uma media query é trivial e não negociável.

- Aprendi a estruturar um site como funil de conversão: cada seção responde uma objeção específica (credibilidade → método → identificação → processo → FAQ) antes de apresentar o CTA final. A ordem das seções não é estética — é estratégica.

## 📄 Licença

Este projeto é proprietário. Desenvolvido sob contrato para CNTECH. Todos os direitos reservados.

## 👤 Autor

**Gabriel Novaes** — Desenvolvedor Full Stack

- GitHub: [github.com/GabrielCNovaesDev](https://github.com/GabrielCNovaesDev)
- LinkedIn: [linkedin.com/in/gabrielhcnovaes](https://www.linkedin.com/in/gabrielhcnovaes/)

---

*Desenvolvido com foco em performance, acessibilidade e conversão.*

