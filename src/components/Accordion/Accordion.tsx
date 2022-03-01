import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import { AccordionProps } from 'types';
import { cx } from '@emotion/css';

const styles = {
  cssBase: 'flex flex-col justify-center rounded-lg shadow overflow-hidden px-3 py-2 transition duration-1000 cursor-pointer bg-sky-600',
  cssButtonDisabled: 'opacity-50 cursor-not-allowed',
  cssIsOpen: 'visible border-white hover:border-black',
};

const Accordion: React.FunctionComponent<AccordionProps> = ({
  title,
  showArrow,
  bgColor,
  showContent,
  onClick,
  children,
  duration,
}) => {
  const [isOpen, setIsOpen] = useState(showContent);

  useEffect(() => setIsOpen(showContent), [showContent]);

  const height = isOpen ? 'auto' : 0;
  const className = cx(styles.cssBase, { [styles.cssIsOpen]: isOpen });
  const onClickFn = (e: React.MouseEvent<HTMLSpanElement>) => (onClick ? onClick(e) : setIsOpen(!isOpen));

  const arrowUp = (
    <svg className={'h-5 w-5'} viewBox='2 3 20 20' fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z'
        clipRule='evenodd'
      />
    </svg>
  );

  const arrowDown = (
    <svg className={'h-5 w-5'} viewBox='2 3 20 20' fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'
        clipRule='evenodd'
      />
    </svg>
  );

  return (
    <div className={className}>
      <span className={'font-bold text-base'} onClick={(e) => onClickFn(e)}>
        {title}
        {showArrow && <div className={'inline-block'} style={{ float: "right" }}>{isOpen ? arrowUp : arrowDown}</div>}
      </span>
      <AnimateHeight duration={duration} height={height}>
        <div className={'mt-4'}>{children}</div>
      </AnimateHeight>
    </div>
  );
};

Accordion.defaultProps = {
  duration: 300,
  showContent: false,
};

export { Accordion };
