// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema';

export default defineConfig({
  name: 'default',
  title: 'Samfunn For Alle',

  projectId: 'yhvccqet', // Husk å bytte ut!
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});