import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from '../userMenu/UserMenu';
import {useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';
import {HeaderContainer} from './AppBarStyled';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <HeaderContainer>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </HeaderContainer>
  );
}
