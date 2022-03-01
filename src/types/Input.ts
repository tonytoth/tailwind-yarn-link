import { ReactElement } from 'react';

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface InputTextInterface extends InputTextProps {
  type: 'text' | 'password' | 'email' | 'number';
  label?: string;
  placeholder?: string;
  helpText?: string;
  isValid: boolean;
  validationMessage?: string;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
