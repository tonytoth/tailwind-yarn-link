import { CSSProperties } from "react";

export enum IconType {
  home = 'home',
  team = 'team',
  calendar = 'calendar',
  projects = 'projects',
  documents = 'documents',
  reports = 'reports',
  close = 'close',
  key = 'key',
  pointer = 'pointer',
  menu = 'menu',
  menuAlt2 = 'menuAlt2',
  exclamation = 'exclamation',
  trash = 'trash',
  mail = 'mail',
  clipboardCopy = 'clipboardCopy',
  xCircle = 'xCircle',
  checkCircle = 'checkCircle',
  informationCircle = 'informationCircle',
  eye = 'eye',
  bookOpen = 'bookOpen',
  pencil = 'pencil',
  dotsVertical = 'dotsVertical',
  arrowCircleDown = 'arrowCircleDown',
  arrowCircleLeft = 'arrowCircleLeft',
  arrowCircleRight = 'arrowCircleRight',
  arrowCircleUp = 'arrowCircleUp',
  arrowDown = 'arrowDown',
  arrowLeft = 'arrowLeft',
  arrowRight = 'arrowRight',
  arrowUp = 'arrowUp',
  chevronDown = 'chevronDown',
  chevronLeft = 'chevronLeft',
  chevronRight = 'chevronRight',
  chevronUp = 'chevronUp',
  users = 'users',
  documentAdd = 'documentAdd',
}

export type IconProps = {
  icon: IconType;
  className?: string;
  style?: CSSProperties;
};
