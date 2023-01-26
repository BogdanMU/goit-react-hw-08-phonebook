import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  AuthLink,
  AuthNav,
  Header,
  PageLink,
  PagesNav,
  UserBtn,
  UserMenu,
} from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Header>
      <PagesNav>
        <PageLink to="/">Home</PageLink>
        {isLoggedIn && <PageLink to="/contacts">Contacts</PageLink>}
      </PagesNav>
      {isLoggedIn ? (
        <UserMenu>
          <p>Welcome, {user.name}</p>
          <UserBtn type="button" onClick={() => dispatch(logOut())}>
            Logout
          </UserBtn>
        </UserMenu>
      ) : (
        <AuthNav>
          <AuthLink to="/register">Register</AuthLink>
          <AuthLink to="/login">Log In</AuthLink>
        </AuthNav>
      )}
    </Header>
  );
};
