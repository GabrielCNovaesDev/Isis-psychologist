// Symbol.jsx — borboleta line-art (traço único contínuo)
// Também versões alternativas para variações de tweak/logo.

function ButterflyMark({ size = 32, stroke = 1.4, className = "" }) {
  // Borboleta abstrata — line-art, traço único, sutil sugestão de broto no centro.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* asa esquerda superior */}
      <path d="M32 34 C 22 18, 8 14, 6 22 C 4 30, 14 36, 32 34" />
      {/* asa esquerda inferior */}
      <path d="M32 34 C 24 44, 14 48, 12 42 C 10 36, 18 34, 32 34" />
      {/* asa direita superior */}
      <path d="M32 34 C 42 18, 56 14, 58 22 C 60 30, 50 36, 32 34" />
      {/* asa direita inferior */}
      <path d="M32 34 C 40 44, 50 48, 52 42 C 54 36, 46 34, 32 34" />
      {/* corpo / broto sutil no centro */}
      <path d="M32 22 C 30 26, 30 32, 32 34 C 34 32, 34 26, 32 22 Z" />
      {/* antenas */}
      <path d="M32 22 C 31 18, 28 16, 27 14" />
      <path d="M32 22 C 33 18, 36 16, 37 14" />
    </svg>
  );
}

function LeafGlyph({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
         className={className} aria-hidden="true">
      <path d="M4 20 C 4 10, 12 4, 20 4 C 20 12, 14 20, 4 20 Z" />
      <path d="M4 20 L 18 6" />
    </svg>
  );
}

function CircleGlyph({ size = 56 }) {
  // ícone abordagem: reconexão (dois círculos sobrepostos)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
         stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
         aria-hidden="true">
      <circle cx="24" cy="32" r="18" />
      <circle cx="40" cy="32" r="18" />
    </svg>
  );
}

function SeedGlyph({ size = 56 }) {
  // ícone abordagem: compreensão (semente germinando)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
         stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
         aria-hidden="true">
      <path d="M32 56 L 32 30" />
      <path d="M32 36 C 22 36, 16 28, 18 18 C 28 18, 34 26, 32 36 Z" />
      <path d="M32 30 C 42 30, 48 22, 46 12 C 36 12, 30 20, 32 30 Z" />
    </svg>
  );
}

function FlowGlyph({ size = 56 }) {
  // ícone abordagem: transformação (curva fluida + ponto)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
         stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
         aria-hidden="true">
      <path d="M8 44 C 18 24, 30 24, 34 36 C 38 48, 50 48, 56 28" />
      <circle cx="56" cy="28" r="2.5" fill="currentColor" />
    </svg>
  );
}

function HeroOrnament({ className = "" }) {
  // borrão orgânico atrás do hero
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ornGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M 300 80 C 420 80, 520 180, 520 300 C 520 420, 420 520, 300 520 C 180 520, 80 420, 80 300 C 80 200, 160 80, 300 80 Z"
        fill="url(#ornGrad)"
      />
    </svg>
  );
}

function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
         stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
         className="arrow" aria-hidden="true">
      <path d="M3 8 L 13 8" />
      <path d="M9 4 L 13 8 L 9 12" />
    </svg>
  );
}

function WhatsAppGlyph({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 C 6.5 2, 2 6.5, 2 12 c 0 1.8, 0.5 3.5, 1.4 5 L 2 22 l 5.2 -1.3 c 1.4, 0.8, 3.1, 1.3, 4.8, 1.3 c 5.5, 0, 10 -4.5, 10 -10 S 17.5 2, 12 2 Z m 5.2 14.2 c -0.2, 0.6 -1.2, 1.2 -1.7, 1.2 c -0.4, 0 -1, 0 -1.6 -0.2 c -0.4, -0.1 -0.9, -0.3 -1.5, -0.6 c -2.7, -1.2 -4.4, -3.9 -4.6, -4.1 c -0.1, -0.2 -1, -1.4 -1, -2.6 c 0, -1.2, 0.7, -1.8, 0.9, -2.1 c 0.2, -0.2, 0.5, -0.3, 0.7, -0.3 c 0.2, 0, 0.4, 0, 0.5, 0 c 0.2, 0, 0.4, -0.1, 0.7, 0.5 c 0.2, 0.6, 0.7, 1.8, 0.7, 1.9 c 0, 0.1, 0.1, 0.3, 0, 0.4 c -0.1, 0.2 -0.1, 0.3 -0.3, 0.4 c -0.1, 0.2 -0.3, 0.4 -0.4, 0.5 c -0.1, 0.2 -0.3, 0.3 -0.1, 0.6 c 0.2, 0.3, 0.7, 1.2, 1.6, 2 c 1.1, 1, 2, 1.3, 2.3, 1.5 c 0.3, 0.2, 0.5, 0.1, 0.6, -0.1 c 0.2, -0.2, 0.7, -0.8, 0.9, -1.1 c 0.2, -0.3, 0.4, -0.2, 0.6, -0.1 c 0.3, 0.1, 1.5, 0.7, 1.8, 0.8 c 0.3, 0.1, 0.5, 0.2, 0.5, 0.3 c 0.1, 0.2, 0.1, 0.7, -0.1, 1.2 Z"/>
    </svg>
  );
}

Object.assign(window, { ButterflyMark, LeafGlyph, CircleGlyph, SeedGlyph, FlowGlyph, HeroOrnament, ArrowRight, WhatsAppGlyph });
