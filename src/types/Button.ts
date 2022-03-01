export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}
import { IconType } from 'types';

export type ButtonColor = '';

export enum IconPosition {
  before = 'before',
  after = 'after',
}

export interface ButtonWithIcon extends AppButtonInterface {
  icon: IconType;
  iconPosition?: IconPosition;
  buttonText?: string;
}

export enum Size {
  verySmall = 'verySmall',
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extraLarge',
}

export type TextColor = 'white' | 'black';

export interface AppButtonInterface extends ButtonProps {
  size: Size;
}
