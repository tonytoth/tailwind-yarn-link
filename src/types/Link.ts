export type LinkProps = {
  href: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: string;
};
