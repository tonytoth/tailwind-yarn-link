import { TitleTagName } from "types";
import { DropdownItem } from "types";

export type SectionHeadingProps = {
  title: string;
  tagName?: TitleTagName;
  headingType?: string;
  description?: string;
  useSeparator?: boolean;
  useWrapper?: boolean;
  primaryAction?: string;
  secondaryAction?: string;
  thirdAction?: string;
  onPrimaryActionClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onSecondaryActionClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onThirdActionClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  menuOptions?: DropdownItem[];
};
