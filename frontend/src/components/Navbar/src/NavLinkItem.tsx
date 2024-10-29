import { memo } from 'react';
import './toggleCardInfo.css';
import { NavLink } from 'react-router-dom';

type NavLinkItemProps = {
  to: string;
  label: string;
};
const NavLinkItem = ({ to, label }: NavLinkItemProps) => {
  return (
    <li>
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
};

export default memo(NavLinkItem);
