
export interface SplitImageCallToActionProps {
  title: string;
  description: string;
  imageSrc: string;
  logo: React.ReactElement;
  ctaText: string;
  onClickHandler: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  alt?: string;
}