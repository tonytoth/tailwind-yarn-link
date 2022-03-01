import { ReactChild } from 'react';

type BreadcrumbItemType = {
  url: string;
  name: string;
  active?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  className?: string;
};

type BreadcrumbItemsType = {
  items: BreadcrumbItemType[];
  separator: ReactChild;
};

interface BreadcrumbProps {
  separator?: ReactChild;
  items: BreadcrumbItemType[];
}

export { BreadcrumbItemType, BreadcrumbItemsType, BreadcrumbProps };
