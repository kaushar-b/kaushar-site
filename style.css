/* Liquid Glass Prism – core styles */

.glass-prism {
  background: rgba(30, 58, 138, 0.15); /* indigo base with transparency */
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(165, 180, 252, 0.18); /* soft purple border */
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5),
              inset 0 0 20px rgba(165, 180, 252, 0.08);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.glass-prism:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.4),
              inset 0 0 30px rgba(165, 180, 252, 0.15);
}

/* Refraction canvas full cover */
#refraction-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: -1;
}

/* Glow pulse for accents */
@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.9; }
}
.animate-glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }

/* Float animation for hero elements */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.animate-float { animation: float 12s ease-in-out infinite; }

/* Smooth everything */
* { transition: all 0.4s ease; }
html { scroll-behavior: smooth; }
