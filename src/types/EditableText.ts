import { ChangeEvent } from 'react';
import { InputTextProps } from './Input';

export enum Key {
  Enter = 'Enter',
  Escape = 'Escape',
}

export enum BorderStyleEditableText {
  Dash = 'border-dashed',
  Dotted = 'border-dotted',
  Solid = 'border-solid',
}

export type EditableTextProps = InputTextProps & {
  onBlur?: (ev: ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  validationMessage?: string;
  maxWidth?: string;
  borderStyle?: BorderStyleEditableText;
};
