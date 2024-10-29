import React from 'react';
import './listItem.css';
type ListItemProps = {
  Icon: React.ReactNode;
  label: string;
  spacing?:
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline'
    | undefined;
};
const ListItem = ({ Icon, label, spacing }: ListItemProps) => {
  return (
    <div style={{ justifyContent: spacing }} className={`listItem`}>
      <div className="listItem__icon">{Icon}</div>
      <div className="listItem__value">{label}</div>
    </div>
  );
};

export default ListItem;
