import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

import { SITE } from '~/config';

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const font = await readFile(join(process.cwd(), 'src/assets/fonts/Manrope-SemiBold.ttf'));

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px',
        background: '#111111',
        color: '#ffffff',
        fontFamily: 'Manrope',
      }}
    >
      <div style={{ display: 'flex', fontSize: 28, letterSpacing: 6, color: '#C5001C' }}>ГОРИЗОНТ</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.02, letterSpacing: -1.5 }}>
          Благоустройство, дороги и наружные сети
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: '#d0d0d0' }}>Санкт-Петербург</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 980, height: 8, background: '#ffffff' }} />
        <div
          style={{
            width: 92,
            height: 92,
            marginLeft: -46,
            borderRadius: 46,
            background: '#C5001C',
          }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: 'Manrope', data: font, weight: 600, style: 'normal' }],
    },
  );
}
