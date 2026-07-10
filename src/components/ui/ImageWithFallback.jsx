"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Wraps next/image with a graceful fallback.
 * If `src` is missing or fails to load, renders a clean placeholder
 * (gradient background + initials or an icon) instead of a broken image icon.
 */
export default function ImageWithFallback({
  src,
  alt,
  fill,
  className = "",
  initials,
  icon: Icon,
  fallbackClassName = "bg-gradient-to-br from-primary to-primary-dark",
  fallbackTextClassName = "text-white",
  ...props
}) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center ${
          fill ? "absolute inset-0" : "w-full h-full"
        } ${fallbackClassName}`}
      >
        {initials ? (
          <span
            className={`select-none font-heading text-lg font-bold tracking-wide ${fallbackTextClassName}`}
          >
            {initials}
          </span>
        ) : Icon ? (
          <Icon className={`text-3xl ${fallbackTextClassName} opacity-80`} aria-hidden="true" />
        ) : null}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}