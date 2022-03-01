/// <reference types="typescript" />
// Type definitions for react-tailwindcss
// Project: react-tailwindcss
// Definitions by: God

/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// declare module '*.module.css' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

export * from './types';
