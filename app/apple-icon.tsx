import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          background: '#C5001C',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ width: '100%', height: 10, background: '#ffffff', marginBottom: 8 }} />
        <div style={{ width: '100%', height: 10, background: '#ffffff', marginBottom: 8 }} />
        <div style={{ width: '100%', height: 10, background: '#ffffff', marginBottom: 14 }} />
      </div>
    </div>,
    size,
  );
}
