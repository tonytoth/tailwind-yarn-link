import { ReactElement } from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TextareaInterface extends TextAreaProps {
  label?: string;
  placeholder?: string;
  helpText?: string;
  isValid: boolean;
  autosize?: boolean;
  validationMessage?: string;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
