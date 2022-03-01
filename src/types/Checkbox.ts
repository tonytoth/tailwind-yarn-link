import { ReactElement } from 'react';


export enum CheckboxSize {
  small = 'h-4 w-4',
  large = 'h-5 w-5',
}

export enum CheckboxColor {
  gray = 'text-gray-600 focus:ring-gray-500',
  red = 'text-red-600 focus:ring-red-500',
  yellow = 'text-yellow-600 focus:ring-yellow-500',
  green = 'text-green-600 focus:ring-green-500',
  blue = 'text-blue-600 focus:ring-blue-500',
  indigo = 'text-indigo-600 focus:ring-indigo-500',
  purple = 'text-purple-600 focus:ring-purple-500',
  pink = 'text-pink-600 focus:ring-pink-500',
}

export type CheckboxProps = {
  name: string;
  disabled?: boolean;
  size?: CheckboxSize;
  color?: CheckboxColor;
  checked?: boolean;
  children?: ReactElement;
  onChange?: (event: React.MouseEvent<HTMLElement>) => void;
};
