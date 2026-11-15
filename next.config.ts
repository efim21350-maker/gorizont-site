import { withContentCollections } from '@content-collections/next';
import type { NextConfig } from 'next';

// Ruta relativa a propósito: el archivo de configuración se carga fuera del
// contexto de `paths` del tsconfig, así que el alias ~ no resolvería aquí.
import { SITE } from './src/config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
  poweredByHeader: false,
  images: {
    unoptimized: true,
    qualities: [50, 75],
  },
};

// withContentCollections debe envolver por fuera: ejecuta el builder al cargar
// la config y devuelve nextConfig intacto, sin tocar el bundler.
export default withContentCollections(nextConfig);
