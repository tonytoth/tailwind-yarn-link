import { SectionHeadingProps } from './SectionHeading';

export interface DescriptionListProps {
  children: React.ReactElement[];
}

export interface DescriptionListSectionProps extends SectionHeadingProps {
  title: string;
  description: string;
  children: React.ReactElement;
}

export interface DescriptionListElementProps {
  label: string;
  children: React.ReactElement;
}
