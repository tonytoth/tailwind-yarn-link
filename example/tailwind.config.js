const reactTailwindLibraryPreset = require('../react-tw-presets.js');

const storybookConfig = {
  presets: [reactTailwindLibraryPreset],
  content: [
    './node_modules/react-tailwindcss/index.cjs.js',
    './src/stories/**/*',
    // '../dist/index.cjs.js',
  ],
}

module.exports = storybookConfig;
