import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import alias from '@rollup/plugin-alias';
import visualizer from 'rollup-plugin-visualizer';
import copy from 'rollup-plugin-copy';

const path = require('path');

const exclude = [
  '**/*.spec.ts',
  '**/*.test.ts',
  '**/*.stories.ts',
  '**/*.spec.tsx',
  '**/*.test.tsx',
  '**/*.stories.tsx',
  'node_modules',
  'bower_components',
  'jspm_packages',
  'dist',
];

const projectRootDir = path.resolve(__dirname);

export default {
  input: ['./src/index.ts'],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {}),'/@babel\\/runtime/'],
  // externals: ['react','react-dom','react-transition-group','react-table',],
  // external: ['react','react-dom','react-is','react-table','react-select','react-rating','react-transition-group','@bumaga/tabs'],
  context: 'this',
  output: [
    {
      file: `./dist/${pkg.module}`,
      format: 'es',
      // sourcemap: true,
    },
    {
      file: `./dist/${pkg.main}`,
      format: 'cjs',
      // sourcemap: true,
    },
  ],
  plugins: [
    visualizer(),
    postcss({
      extract: false,
      plugins: [],
      minimize: true,
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      typescript: require('typescript'),
      include: ['src/*.js+(|x)', 'src/**/*.js+(|x)'],
      exclude: exclude,
    }),
    babel({
      ...pkg.babel,
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
      exclude: exclude,
      babelHelpers: 'runtime',
    }),
    alias({
      entries: [
        { find: 'types', replacement: path.resolve(projectRootDir, 'src/types') },
        { find: 'components', replacement: path.resolve(projectRootDir, 'src/components') },
      ],
    }),
    url(),
    svgr(),
    resolve(),
    commonjs(),
    // terser(),
    copy({
      targets: [
        { src: 'LICENSE', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
        { src: 'react-tw-presets.js', dest: 'dist' },
        {
          src: 'package.json',
          dest: 'dist',
          transform: (content) => {
            const { scripts, devDependencies, husky, release, engines, ...keep } = JSON.parse(
              content.toString(),
            );
            return JSON.stringify(keep, null, 2);
          },
        },
      ],
    })
  ],
};
