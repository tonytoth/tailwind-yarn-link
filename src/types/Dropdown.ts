export type DropdownItemValue = string | number;

export type DropdownItem = {
  value: DropdownItemValue;
  label: string;
  onClick?: (value: DropdownItemValue) => void;
};

export type DropdownItemProps = DropdownItem & {
  onClick?: (value: DropdownItemValue) => void;
};

export enum DropdownPosition {
  topLeft = 'topLeft',
  topRight = 'topRight',
  bottomLeft = 'bottomLeft',
  bottomRight = 'bottomRight',
}

export type DropdownContainerProps = {
  items: DropdownItem[];
  onItemClick?: (value: DropdownItemValue) => void;
};

export type DropdownProps = {
  isOpen: boolean;
  position?: DropdownPosition;
  items: DropdownItem[];
  children: React.ReactElement<any>;
  onClickOutside?: () => void;
};
