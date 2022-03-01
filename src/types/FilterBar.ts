import { FilterBar } from '../components/FilterBar/FilterBar';
import { Filter } from '../components/FilterBar/Filter';

export type FilterBarProps = {
  children: React.ReactElement[];
};

export type FilterProps = {
  label: string;
  children: React.ReactElement;
};

export type InternalFilterBarType = typeof FilterBar;
export type FilterBarType = InternalFilterBarType & {
  Filter: typeof Filter;
};
