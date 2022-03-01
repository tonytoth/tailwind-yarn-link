import { IconType, SectionHeadingProps } from 'types';
import { DropdownItem, DropdownItemValue } from './Dropdown';
import { ReactElement, UIEventHandler } from 'react';

export type SidebarMenuListProps = {
  isMobile?: boolean;
};

export type SidebarMenuItemProps = {
  label: string;
  href: string;
  icon?: IconType;
  isSelected?: boolean;
  isExpanded?: boolean;
  isMobile?: boolean;
  items?: SidebarMenuItemProps[];
  onClick?: (href: string) => void;
};

export type SidebarExpMenuProps = {
  label: string;
  isExpanded?: boolean;
  isMobile?: boolean;
};

export type SidebarExpMenuItemProps = {
  label: string;
  href?: string;
  icon?: IconType;
  isMobile?: boolean;
  isSelected?: boolean;
  onClick?: (href: string) => void;
};

export type MobileSidebarProps = {
  isOpen: boolean;
  logoSrc?: string;
  logoAlt?: string;
  onClose: () => void;
};

export type DesktopSidebarProps = {
  logoSrc?: string;
  logoAlt?: string;
};

export type PageTitleProps = {
  title: string;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryActionClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onSecondaryActionClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export type PanelProps = {
  avatarSrc?: string;
  avatarInitials?: string;
  avatarMenuItems?: DropdownItem[];
  onOpenSidebar: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onAvatarMenuItemClick: (value: DropdownItemValue) => void;
};

export type PageWithSidebarProps = SectionHeadingProps &
  Omit<PanelProps, 'onOpenSidebar'> & {
    logoSrc?: string;
    logoAlt?: string;
    centered?: boolean;
    sidebarContent: ReactElement;
    onAvatarMenuItemClick: (value: DropdownItemValue) => void;
    onContentScroll?: UIEventHandler;
  };
