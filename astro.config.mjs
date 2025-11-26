import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import node from '@astrojs/node';
import react from '@astrojs/react'; // Denne må kanskje legges til manuelt hvis den mangler

export default defineConfig({
  integrations: [
    sanity({
      projectId: 'yhvccqet', // SFA-prosjektet.
      dataset: 'production',
      useCdn: true, // Raskere, men kan ta noen minutter før endringer vises
      studioBasePath: '/admin', // Her vil admin-panelet ditt leve
    }),
    react(), // Sanity Studio trenger React
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});