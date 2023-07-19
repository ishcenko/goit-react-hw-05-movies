import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <NavBar>
        <HeaderWrapper>
          <LinkWrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </LinkWrapper>
        </HeaderWrapper>
      </NavBar>
      <Outlet />
    </>
  );
};
