import { NavLink } from '../../../node_modules/react-router-dom/dist/index';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/catalog'}>Catalog</NavLink>
        <NavLink to={'/favorite'}>Favorite</NavLink>
      </nav>
    </header>
  );
};

export default Header;
