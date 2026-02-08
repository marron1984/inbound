"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * SafeImage — A robust image wrapper for external URLs.
 *
 * - Uses `unoptimized` so the browser loads directly from the CDN,
 *   bypassing the Next.js server proxy (which may not reach Unsplash).
 * - Shows a shimmer animation while loading.
 * - Falls back to a gradient placeholder on error.
 * - Accepts custom `fallbackGradient` per usage context.
 */

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fallbackGradient?: string;
}

const defaultGradient =
  "linear-gradient(135deg, #f0ece4 0%, #e8e2d8 30%, #ddd6cb 60%, #f0ece4 100%)";

export default function SafeImage({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes = "100vw",
  priority = false,
  className = "object-cover",
  fallbackGradient = defaultGradient,
}: SafeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="absolute inset-0"
        style={{ background: fallbackGradient }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <>
      {/* Shimmer placeholder while loading */}
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ background: fallbackGradient }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        priority={priority}
        className={`${className} transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        unoptimized
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}
