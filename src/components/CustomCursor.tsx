import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    const outerEl = outerRef.current;
    const dotEl = dotRef.current;
    const ringEl = ringRef.current;
    const labelEl = labelRef.current;
    if (!outerEl || !dotEl || !ringEl || !labelEl) return;

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let dotX = -100;
    let dotY = -100;
    let currentMode = 'default';
    let visible = false;
    let rafId = 0;
    let lastTime = performance.now();

    const applyMode = (mode: string, text: string) => {
      if (mode === currentMode && labelEl.textContent === text) return;
      currentMode = mode;
      labelEl.textContent = text;

      if (mode === 'default') {
        // Sleek translucent glass ring + crisp center dot
        ringEl.style.transform = 'translate3d(-50%, -50%, 0) scale(0.42)';
        ringEl.style.backgroundColor = 'rgba(255, 255, 255, 0.14)';
        ringEl.style.borderColor = 'rgba(255, 255, 255, 0.45)';
        ringEl.style.boxShadow = '0 0 16px rgba(255, 255, 255, 0.2)';
        dotEl.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
        dotEl.style.opacity = '0.9';
        labelEl.style.opacity = '0';
        labelEl.style.transform = 'scale(0.75)';
      } else if (mode === 'view') {
        // Translucent Netflix crimson glass pill for VIEW cards
        ringEl.style.transform = 'translate3d(-50%, -50%, 0) scale(1.08)';
        ringEl.style.backgroundColor = 'rgba(229, 9, 20, 0.58)';
        ringEl.style.borderColor = 'rgba(255, 255, 255, 0.45)';
        ringEl.style.boxShadow = '0 8px 30px rgba(229, 9, 20, 0.45)';
        dotEl.style.transform = 'translate3d(-50%, -50%, 0) scale(0)';
        dotEl.style.opacity = '0';
        labelEl.style.fontSize = '10px';
        labelEl.style.opacity = '1';
        labelEl.style.transform = 'scale(1)';
      } else if (mode === 'close') {
        ringEl.style.transform = 'translate3d(-50%, -50%, 0) scale(0.86)';
        ringEl.style.backgroundColor = 'rgba(24, 24, 32, 0.68)';
        ringEl.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        ringEl.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
        dotEl.style.transform = 'translate3d(-50%, -50%, 0) scale(0)';
        dotEl.style.opacity = '0';
        labelEl.style.fontSize = '12px';
        labelEl.style.opacity = '1';
        labelEl.style.transform = 'scale(1)';
      } else {
        // Play / Interactive mode: translucent crimson glass circle
        ringEl.style.transform = 'translate3d(-50%, -50%, 0) scale(0.88)';
        ringEl.style.backgroundColor = 'rgba(229, 9, 20, 0.52)';
        ringEl.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        ringEl.style.boxShadow = '0 6px 26px rgba(229, 9, 20, 0.42)';
        dotEl.style.transform = 'translate3d(-50%, -50%, 0) scale(0)';
        dotEl.style.opacity = '0';
        labelEl.style.fontSize = '12px';
        labelEl.style.opacity = '1';
        labelEl.style.transform = 'scale(1)';
      }
    };

    const inspectElement = (el: HTMLElement | null) => {
      if (!el) {
        applyMode('default', '');
        return;
      }
      const customAttrEl = el.closest('[data-cursor]') as HTMLElement | null;
      if (customAttrEl) {
        const cType = customAttrEl.getAttribute('data-cursor') || 'play';
        if (cType === 'view') {
          applyMode('view', 'VIEW');
        } else if (cType === 'close') {
          applyMode('close', '✕');
        } else if (cType === 'play') {
          applyMode('play', '▶');
        } else {
          applyMode('view', cType.toUpperCase());
        }
        return;
      }

      const clickable = el.closest('a, button, [role="button"]');
      if (clickable) {
        applyMode('play', '▶');
      } else {
        applyMode('default', '');
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!visible) {
        visible = true;
        ringX = targetX;
        ringY = targetY;
        dotX = targetX;
        dotY = targetY;
        outerEl.style.opacity = '1';
      }

      inspectElement(e.target as HTMLElement | null);
    };

    const onScroll = () => {
      if (!visible || targetX < 0 || targetY < 0) return;
      const hovered = document.elementFromPoint(targetX, targetY) as HTMLElement | null;
      inspectElement(hovered);
    };

    const tick = (now: number) => {
      const dt = Math.min(32, now - lastTime);
      lastTime = now;

      // Frame-rate independent exponential decay for ultra-fluid motion
      const ringAlpha = 1 - Math.exp(-0.028 * dt);
      const dotAlpha = 1 - Math.exp(-0.065 * dt);

      ringX += (targetX - ringX) * ringAlpha;
      ringY += (targetY - ringY) * ringAlpha;
      dotX += (targetX - dotX) * dotAlpha;
      dotY += (targetY - dotY) * dotAlpha;

      outerEl.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0)`;
      dotEl.style.left = `${(dotX - ringX).toFixed(2)}px`;
      dotEl.style.top = `${(dotY - ringY).toFixed(2)}px`;

      rafId = requestAnimationFrame(tick);
    };

    applyMode('default', '');
    rafId = requestAnimationFrame(tick);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        opacity: 0,
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform',
      }}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      {/* Translucent Glass Morphing Ring (fixed 54x54px, scaled via GPU transform only) */}
      <div
        ref={ringRef}
        style={{
          width: '54px',
          height: '54px',
          transform: 'translate3d(-50%, -50%, 0) scale(0.42)',
          backgroundColor: 'rgba(255, 255, 255, 0.14)',
          border: '1px solid rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          transition:
            'transform 260ms cubic-bezier(0.22, 1, 0.36, 1), background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
          willChange: 'transform, background-color',
        }}
        className="rounded-full flex items-center justify-center text-white"
      >
        <span
          ref={labelRef}
          style={{
            opacity: 0,
            transform: 'scale(0.75)',
            transition: 'opacity 180ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="font-bold uppercase tracking-widest select-none leading-none drop-shadow"
        />
      </div>

      {/* Crisp Inner Precision Dot */}
      <div
        ref={dotRef}
        style={{
          width: '6px',
          height: '6px',
          transform: 'translate3d(-50%, -50%, 0) scale(1)',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
          transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease',
        }}
        className="absolute top-0 left-0 rounded-full"
      />
    </div>
  );
};