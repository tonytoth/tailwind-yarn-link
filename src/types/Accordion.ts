export type AccordionProps = {
  title: string;
  showArrow?: boolean;
  bgColor?: string;
  showContent?: boolean;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  duration?: number;
};
