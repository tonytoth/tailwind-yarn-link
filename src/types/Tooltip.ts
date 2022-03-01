import { TippyProps } from '@tippyjs/react';

export enum TooltipPlacement {
  'top' = 'top',
  'bottom' = 'bottom',
  'right' = 'right',
  'left' = 'left',
  'top-start' = 'top-start',
  'top-end' = 'top-end',
  'bottom-start' = 'bottom-start',
  'bottom-end' = 'bottom-end',
  'right-start' = 'right-start',
  'right-end' = 'right-end',
  'left-start' = 'left-start',
  'left-end' = 'left-end',
}

export enum TooltipTrigger {
  hover = 'mouseenter',
  click = 'click',
  focus = 'focusin',
  manual = 'manual',
}

export interface TooltipProps extends TippyProps {
  wrap?: boolean;
  placement?: TooltipPlacement;
  trigger?: TooltipTrigger;
}
