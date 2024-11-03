import './Navbar.css';
import ToggleCardInfo from '@/components/Navbar/src/ToggleCardInfo';
import routes from '@/components/Navbar/src/routes';
import NavLinkItem from '@/components/Navbar/src/NavLinkItem';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <NavLinkItem key={route.path} to={route.path} label={route.name} />
        ))}
      </ul>
      <ToggleCardInfo />
    </nav>
  );
};

export default Navbar;
