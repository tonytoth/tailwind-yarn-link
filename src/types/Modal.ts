export enum ModalMaxWidth {
  sm = 'sm:max-w-sm',
  lg = 'sm:max-w-lg',
  xl = 'sm:max-w-xl',
  xl2 = 'sm:max-w-2xl',
  xl3 = 'sm:max-w-3xl',
  xl4 = 'sm:max-w-4xl',
  xl5 = 'sm:max-w-5xl',
  xl6 = 'sm:max-w-6xl',
  xl7 = 'sm:max-w-7xl',
}

export type ModalProps = {
  isOpen: boolean;
  maxWidth?: ModalMaxWidth;
  padding?: string;
};

export type ConfirmationModalProps = Omit<ModalProps, 'isOpen'> & {
  isOpen: boolean;
  title: string;
  description: string;
  confirmAction?: string;
  denyAction?: string;
  onConfirm: (event: React.MouseEvent<HTMLDivElement>) => void;
  onDeny: (event: React.MouseEvent<HTMLDivElement>) => void;
};
