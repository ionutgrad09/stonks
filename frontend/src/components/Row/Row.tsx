import { memo } from 'react';
import type { ReactNode } from 'react';
import './row.css';

type RowProps = {
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  className?: string;
};

const spacingMap = {
  xs: 'row--spacingXs',
  sm: 'row--spacingSm',
  md: 'row--spacingMd',
  lg: 'row--spacingLg',
  xl: 'row--spacingXl'
};

const Row = ({ spacing = 'xs', className, children }: RowProps) => {
  return (
    <div className={`row ${spacingMap[spacing]}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
};
export default memo(Row);
