"use client";

import { useState, useRef, useCallback } from "react";

interface TiltOptions {
  maxRotation?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
}

interface TiltPosition {
  x: number;
  y: number;
  rotationX: number;
  rotationY: number;
}

export function useTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const {
    maxRotation = 15,
    perspective = 1000,
    scale = 1.02,
    speed = 300,
    glare = true,
    maxGlare = 0.3,
  } = options;

  const ref = useRef<T>(null);
  const [transform, setTransform] = useState<TiltPosition>({
    x: 0,
    y: 0,
    rotationX: 0,
    rotationY: 0,
  });
  const [glareStyle, setGlareStyle] = useState<{ opacity: number; x: number; y: number }>({
    opacity: 0,
    x: 50,
    y: 50,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      const rotationX = y * -maxRotation;
      const rotationY = x * maxRotation;

      setTransform({ x, y, rotationX, rotationY });

      if (glare) {
        const glareX = (e.clientX - rect.left) / rect.width * 100;
        const glareY = (e.clientY - rect.top) / rect.height * 100;
        setGlareStyle({
          opacity: maxGlare,
          x: glareX,
          y: glareY,
        });
      }
    },
    [maxRotation, glare, maxGlare]
  );

  const handleMouseEnter = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    element.style.transition = `transform ${speed}ms ease-out`;
  }, [speed]);

  const handleMouseLeave = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    element.style.transition = `${speed}ms ease-out`;
    setTransform({ x: 0, y: 0, rotationX: 0, rotationY: 0 });
    setGlareStyle({ opacity: 0, x: 50, y: 50 });
  }, [speed]);

  const getStyle = useCallback(() => {
    return {
      transform: `perspective(${perspective}px) rotateX(${transform.rotationX}deg) rotateY(${transform.rotationY}deg) scale(${scale})`,
      transformStyle: "preserve-3d" as const,
    };
  }, [transform, perspective, scale]);

  const getGlareStyle = useCallback(() => {
    if (!glare) return {};
    return {
      background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255,255,255,${glareStyle.opacity}) 0%, rgba(255,255,255,0) 70%)`,
    };
  }, [glare, glareStyle]);

  return {
    ref,
    style: getStyle(),
    glareStyle: getGlareStyle(),
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}

