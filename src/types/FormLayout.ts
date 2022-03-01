import { SectionHeadingProps } from './SectionHeading';

export enum FormLayoutType {
  default = 'default',
  stacked = 'stacked',
}

export interface FormLayoutProps {
  type: FormLayoutType;
  children: React.ReactElement[];
}

export interface FormElementProps {
  label: string;
  formType: FormLayoutType;
  useSeparator: boolean;
  children: React.ReactElement[];
}

export interface FormSectionProps extends SectionHeadingProps {
  formType: FormLayoutType;
  useSeparator: boolean;
  children: React.ReactElement;
}
