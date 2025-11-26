import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import node from '@astrojs/node';
import react from '@astrojs/react'; // Denne må kanskje legges til manuelt hvis den mangler

export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: 'yhvccqet', // MÅ VÆRE KORREKT
      dataset: 'production',         // Som regel 'production'
      useCdn: false,                 // Sett til 'false' under utvikling
      studioBasePath: '/admin',
    }),
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});