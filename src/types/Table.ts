import { ColumnInstance, Row } from 'react-table';

export interface PaginationProps {
  previousPage?: (ev: React.SyntheticEvent) => void;
  nextPage?: (ev: React.SyntheticEvent) => void;
  pageOptions?: number[];
  gotoPage?: Function;
  canNextPage?: boolean;
  canPreviousPage?: boolean;
  results?: number;
  pageLength?: number;
  pageIndex: number;
  canClickNextPage?: boolean;
  canClickPrevPage?: boolean;
  itemsPerPage?: number;
}

export enum TableColumnAlignment {
  left = 'left',
  center = 'center',
  right = 'right',
}

/**
 // TODO Refactor in near future
 * I have used @types/react-table https://www.npmjs.com/package/@types/react-table for the useTable types/props
 * It is uncomplete and we need to re-check periodically for the updates and to refactor these types with value any or
 * any other updates that may be required
*/
export interface TableProps extends PaginationProps {
  dataColumns: any;
  dataRows: Record<string, React.ReactNode>[];
  striped?: boolean;
  fetchData?: Function;
  manualPagination?: boolean;
  Pagination?: React.ComponentType<PaginationProps>;
  itemsPerPage?: number;
  indexPage?: number;
  getTableProps?: () => void;
  getTableBodyProps?: () => void;
  prepareRow: Function;
  headerGroups?: any;
  page?: any;
  data?: any;
  pageCount?: number;
  totalCount?: number;
  loading?: boolean;
  renderRowSubComponent: any;
  visibleColumns: ColumnInstance<object>[];
  autoResetExpanded?: boolean;
  autoResetPage?: boolean;
  hiddenColumns?: string[];
  showTableLegend?: boolean;
  legendOptions?: TableLegendInterface;
  tableHeadCustomOptions?: TableHeadCustomOptions;
}

export interface TableHeadCustomOptions {
  tableName: string;
  element: React.ReactElement;
}

export interface AdditionalRowProps {
  row: Row;
  renderRowSubComponent: ({ row }: { row: Row }) => {};
  visibleColumns: ColumnInstance<object>[];
}

export interface TableLegendInterface {
  firstLabel?: TableLegendLabel;
  secondLabel?: TableLegendLabel;
}

export interface TableLegendLabel {
  color?: string;
  text?: string;
  borderColor?: string;
}
