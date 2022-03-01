type RequireAtLeastOne<T> = { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>> }[keyof T];

type Feed = {
  src: string;
  initials: string;
};

export type AvatarProps = RequireAtLeastOne<Feed> & {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
