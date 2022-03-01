import { ReactElement } from 'react';

export type CheckboxFacetFilterItem = {
  name: string;
  content: ReactElement;
  checked?: boolean;
};

export type CheckboxFacetFilterProps = {
  title: string;
  isExpanded?: boolean;
  items: CheckboxFacetFilterItem[];
  onChange?: (event: React.MouseEvent<HTMLElement>) => void;
};
