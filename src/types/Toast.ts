import { ReactElement } from 'react';

export enum ToastType {
  warning = 'warning',
  info = 'info',
  error = 'error',
  success = 'success',
}

export interface ToastProps {
  onClose?: () => void;
  onAutoClose?: () => void;
  autoHide?: boolean;
  autoHideTimer?: number;
  isOpen: boolean;
  type: ToastType;
  title: string;
  icon: string;
  content?: ReactElement | string;
}
