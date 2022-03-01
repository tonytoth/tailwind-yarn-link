

export enum HorizontalSpace {
  'space0.5' = 'space-x-0.5',
  'space1' = 'space-x-1',
  'space1.5' = 'space-x-1.5',
  'space2' = 'space-x-2',
  'space2.5' = 'space-x-2.5',
  'space3' = 'space-x-3',
  'space3.5' = 'space-x-3.5',
  'space4' = 'space-x-4',
  'space5' = 'space-x-5',
  'space6' = 'space-x-6',
  'space7' = 'space-x-7',
  'space8' = 'space-x-8',
  'space9' = 'space-x-9',
  'space10' = 'space-x-10',
  'space11' = 'space-x-11',
  'space12' = 'space-x-12',
  'space14' = 'space-x-14',
  'space16' = 'space-x-16',
  'space20' = 'space-x-20',
  'space24' = 'space-x-24',
  'space28' = 'space-x-28',
  'space32' = 'space-x-32',
  'space36' = 'space-x-36',
  'space40' = 'space-x-40',
  'space44' = 'space-x-44',
  'space48' = 'space-x-48',
  'space52' = 'space-x-52',
  'space56' = 'space-x-56',
  'space60' = 'space-x-60',
  'space64' = 'space-x-64',
  'space72' = 'space-x-72',
  'space80' = 'space-x-80',
  'space96' = 'space-x-96',
}

export enum VerticalSpace {
  'space0.5' = 'space-y-0.5 ',
  'space1' = 'space-y-1',
  'space1.5' = 'space-y-1.5',
  'space2' = 'space-y-2',
  'space2.5' = 'space-y-2.5',
  'space3' = 'space-y-3',
  'space3.5' = 'space-y-3.5',
  'space4' = 'space-y-4',
  'space5' = 'space-y-5',
  'space6' = 'space-y-6',
  'space7' = 'space-y-7',
  'space8' = 'space-y-8',
  'space9' = 'space-y-9',
  'space10' = 'space-y-10',
  'space11' = 'space-y-11',
  'space12' = 'space-y-12',
  'space14' = 'space-y-14',
  'space16' = 'space-y-16',
  'space20' = 'space-y-20',
  'space24' = 'space-y-24',
  'space28' = 'space-y-28',
  'space32' = 'space-y-32',
  'space36' = 'space-y-36',
  'space40' = 'space-y-40',
  'space44' = 'space-y-44',
  'space48' = 'space-y-48',
  'space52' = 'space-y-52',
  'space56' = 'space-y-56',
  'space60' = 'space-y-60',
  'space64' = 'space-y-64',
  'space72' = 'space-y-72',
  'space80' = 'space-y-80',
  'space96' = 'space-y-96',
}

export enum FlexSpace {
  'space0.5' = 'space0.5',
  'space1' = 'space1',
  'space1.5' = 'space1.5',
  'space2' = 'space2',
  'space2.5' = 'space2.5',
  'space3' = 'space3',
  'space3.5' = 'space3.5',
  'space4' = 'space4',
  'space5' = 'space5',
  'space6' = 'space6',
  'space7' = 'space7',
  'space8' = 'space8',
  'space9' = 'space9',
  'space10' = 'space10',
  'space11' = 'space11',
  'space12' = 'space12',
  'space14' = 'space14',
  'space16' = 'space16',
  'space20' = 'space20',
  'space24' = 'space24',
  'space28' = 'space28',
  'space32' = 'space32',
  'space36' = 'space36',
  'space40' = 'space40',
  'space44' = 'space44',
  'space48' = 'space48',
  'space52' = 'space52',
  'space56' = 'space56',
  'space60' = 'space60',
  'space64' = 'space64',
  'space72' = 'space72',
  'space80' = 'space80',
  'space96' = 'space96',
}

export enum FlexWrap {
  noWrap = 'flex-nowrap',
  wrap = 'flex-wrap',
  wrapReverse = 'flex-wrap-reverse',
}

export enum FlexDirection {
  'row' = 'flex-row',
  'rowReverse' = 'flex-row-reverse',
  'column' = 'flex-col',
  'columnReverse' = 'flex-col-reverse',
}

export enum FlexJustifyContent {
  flexStart = 'justify-start',
  flexEnd = 'justify-end',
  center = 'justify-center',
  spaceBetween = 'justify-between',
  spaceAround = 'justify-around',
  spaceEvenly = 'justify-evenly',
}

export enum FlexAlignItems {
  flexStart = 'items-start',
  flexEnd = 'items-end',
  center = 'items-center',
  baseline = 'items-baseline',
  itemsStretch = 'items-stretch',
}

export type HorizontalLayoutProps = {
  space: HorizontalSpace;
};

export type VerticalLayoutProps = {
  space: VerticalSpace;
};

export type FlexBoxProps = {
  space: FlexSpace;
  wrap?: FlexWrap;
  direction?: FlexDirection;
  alignItems?: FlexAlignItems;
  justifyContent?: FlexJustifyContent;
};
