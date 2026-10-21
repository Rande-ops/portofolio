/* Smooth scroll (Lenis). Dilewati kalau pengguna memilih "kurangi animasi". */
import Lenis from "https://unpkg.com/lenis@1.3.23/dist/lenis.mjs";

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.5, anchors: true });
  requestAnimationFrame(function raf(t) { lenis.raf(t); requestAnimationFrame(raf); });
}
