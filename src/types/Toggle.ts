import { ReactElement } from 'react';

export type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  toggleOptions: ToggleOptionsInterface;
  disabled: boolean;
};

export interface ToggleOptionsInterface {
  label: ReactElement;
  activeColor: string;
  defaultColor: string;
  screenReadOnlyText: string;
  focusClass: string;
}