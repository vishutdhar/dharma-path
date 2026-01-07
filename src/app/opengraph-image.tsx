/**
 * Dynamic Open Graph Image Generator
 *
 * Next.js automatically serves this at /opengraph-image
 * and uses it for social media previews when sharing links.
 *
 * Size: 1200 x 630 pixels (standard OG image dimensions)
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Dharma Path - Finally Understand Hinduism';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #FEF3E2 0%, #FDE6C4 50%, #FDDAA4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative Om symbol watermark */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 400,
            opacity: 0.08,
            color: '#F97316',
          }}
        >
          ॐ
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          {/* Logo/Icon area */}
          <div
            style={{
              fontSize: 80,
              marginBottom: 20,
            }}
          >
            🙏
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#1F2937',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            Dharma Path
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: '#F97316',
              fontWeight: 600,
              marginBottom: 40,
            }}
          >
            Finally Understand Hinduism
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: '#4B5563',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            110 structured lessons covering the Bhagavad Gita,
            Upanishads, Vedas, and Hindu philosophy
          </div>
        </div>

        {/* Bottom decorative border */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #F97316 0%, #EA580C 50%, #F97316 100%)',
          }}
        />

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            fontSize: 20,
            color: '#9CA3AF',
          }}
        >
          mydharmapath.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
