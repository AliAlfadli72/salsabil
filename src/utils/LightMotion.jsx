/**
 * LightMotion — lightweight animation utilities using CSS + IntersectionObserver.
 * Drop-in replacement for simple Framer Motion fade/slide wrappers.
 * Zero external dependencies, ~0.1KB gzipped.
 */
import { useRef, useEffect, forwardRef } from "react";

// ─── Base hook: fires callback once element enters viewport ───
function useIntersect(ref, callback, options = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      callback(true); // SSR / old browsers: always visible
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { callback(true); observer.disconnect(); } },
      { threshold: 0.08, rootMargin: "-40px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

// ─── FadeUp: fades + slides up once visible ───
export function FadeUp({ children, delay = 0, className = "" }) {
  const ref  = useRef(null);
  useIntersect(ref, () => {
    if (ref.current) {
      ref.current.style.opacity   = "1";
      ref.current.style.transform = "translateY(0)";
    }
  });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    0,
        transform:  "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// ─── FadeSection: same as FadeUp but exposed as section-level fade ───
export const FadeSection = FadeUp;

// ─── StaggerChildren: staggers each direct child with CSS delays ───
export function StaggerSection({ children, className = "" }) {
  const ref = useRef(null);
  useIntersect(ref, () => {
    if (!ref.current) return;
    const kids = Array.from(ref.current.children);
    kids.forEach((child, i) => {
      child.style.opacity   = "1";
      child.style.transform = "translateY(0)";
      child.style.transitionDelay = `${i * 0.08}s`;
    });
  });

  // Set initial hidden state on children via a useEffect
  useEffect(() => {
    if (!ref.current) return;
    Array.from(ref.current.children).forEach(child => {
      child.style.opacity   = "0";
      child.style.transform = "translateY(24px)";
      child.style.transition = "opacity 0.55s ease, transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)";
    });
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
