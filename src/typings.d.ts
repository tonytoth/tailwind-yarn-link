/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface AppButtonInterface extends ButtonProps {
  defaultClassName?: string | string[];
}

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export interface InputTextInterface extends InputTextProps {
  type: 'text' | 'password' | 'email';
  label?: string;
  placeholder?: string;
  helpText?: string;
  isValid: boolean;
  validationMessage?: string;
  leadingIcon?: svg;
  trailingIcon?: svg;
}
