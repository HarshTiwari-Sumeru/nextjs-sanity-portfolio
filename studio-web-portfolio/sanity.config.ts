import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import hero from './schemas/hero';
import project from './schemas/project';

export default defineConfig({
  name: 'default',
  title: 'studio-web-portfolio',

  projectId: 's70y6l3m',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  schema: {
    types: [hero, project],
  },
});
