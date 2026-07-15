"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface ThemeButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ThemeButton({
  href,
  children,
  className = "",
}: ThemeButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const spotlightRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!buttonRef.current || !spotlightRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    gsap.to(spotlightRef.current, {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      scale: 30,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!buttonRef.current || !spotlightRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    gsap.to(spotlightRef.current, {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      scale: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`theme_button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={spotlightRef}
        className="button__spotlight"
      ></span>

      <span className="button__text">{children}</span>
    </Link>
  );
}