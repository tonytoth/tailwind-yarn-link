import { Props as ReactSelectProps, ActionMeta, ValueType, OptionsType } from 'react-select';

export enum SelectAction {
  clear = 'clear',
  selectOption = 'select-option',
  removeValue = 'remove-value',
}

export type IOption = {
  label: string;
  value: string;
};

export interface IMultiSelectProps extends ReactSelectProps<IOption> {
  options: IOption[];
  isValid?: boolean;
  validationMessage?: string;
  allowSelectAll: boolean;
  allOption?: IOption;
}

interface BaseSelectProps {
  placeholder: string;
  options: IOption[];
  isDisabled?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  isValid?: boolean;
  validationMessage?: string;
  onSelect?: (value: ValueType<IOption>, action: ActionMeta<IOption>) => void;
}

export interface FilterSelectProps extends BaseSelectProps {
  selectedOptions?: IOption[];
  allowSelectAll?: boolean;
}

export interface SelectProps extends BaseSelectProps {
  selectedOption?: IOption;
  onChange?: (value: string) => void;
  onMenuScrollToBottom?: () => void;
}

export interface AsyncSelectProps {
  placeholder: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isValid?: boolean;
  validationMessage?: string;
  selectedOption?: IOption;
  onSelect?: (value: ValueType<IOption>, action: ActionMeta<IOption>) => void;
  loadOptions?: (inputValue: string, callback: (options: OptionsType<IOption>) => void) => void | Promise<[]>;
  onMenuScrollToBottom?: () => void;
}

export interface MultiSelectProps extends BaseSelectProps {
  selectedOptions?: IOption[];
}
