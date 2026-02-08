/**
 * Centralized Image Configuration
 *
 * All placeholder images are defined here for easy replacement.
 * When production images are ready, simply update the URLs below.
 *
 * Current: Unsplash stock photos (free, no attribution required)
 * Replace with: Your own photography from /public/images/
 *
 * Note: Images are loaded with `unoptimized` via SafeImage component,
 * meaning the browser fetches directly from the CDN (no server proxy).
 * Unsplash's own ?auto=format&fit=crop handles optimization.
 */

export const images = {
  hero: {
    background: {
      src: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?auto=format&fit=crop&w=1920&q=80",
      alt: "Modern clinical interior with advanced medical equipment",
    },
  },
  heroCards: {
    stay: {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury hotel suite with warm ambient lighting",
    },
    medical: {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80",
      alt: "Modern clean medical treatment room",
    },
    nutrition: {
      src: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=800&q=80",
      alt: "Elegant Japanese cuisine presentation",
    },
  },
  philosophy: {
    morning: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
      alt: "Bright luxury interior with morning light flooding through windows",
    },
  },
  pillars: {
    stay: {
      src: "https://images.unsplash.com/photo-1590490360182-c33d4b021b9e?auto=format&fit=crop&w=960&q=80",
      alt: "Luxury hotel suite with warm lighting and panoramic city view",
    },
    nutrition: {
      src: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a?auto=format&fit=crop&w=960&q=80",
      alt: "Artistic Japanese cuisine on handcrafted ceramics",
    },
    medicine: {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=960&q=80",
      alt: "Modern clean medical treatment room",
    },
  },
  packages: {
    suite: {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      alt: "Premium hotel suite with panoramic city view",
    },
    medical: {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80",
      alt: "State-of-the-art treatment room",
    },
    vip: {
      src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
      alt: "Exclusive VIP lounge with personalized concierge service",
    },
  },
} as const;

/**
 * Fallback gradients per section context.
 * Shown while images load or if they fail.
 */
export const fallbackGradients = {
  hero: "linear-gradient(135deg, #e8f0f2 0%, #d4e4e8 25%, #c8dce4 50%, #d8e6ea 75%, #eef4f6 100%)",
  medical: "linear-gradient(135deg, #e6eef4 0%, #d0dfe8 50%, #e6eef4 100%)",
  stay: "linear-gradient(135deg, #f0ece4 0%, #e8e2d8 50%, #f0ece4 100%)",
  nutrition: "linear-gradient(135deg, #f0ede4 0%, #e4ddd0 50%, #f0ede4 100%)",
  philosophy: "linear-gradient(135deg, #faf8f4 0%, #f0ece4 50%, #faf8f4 100%)",
} as const;
