import { Nav, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <header>
      <Nav>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/catalog'}>Catalog</StyledLink>
        <StyledLink to={'/favorite'}>Favorite</StyledLink>
      </Nav>
    </header>
  );
};

export default Header;
