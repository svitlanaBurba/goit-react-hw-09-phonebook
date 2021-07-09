import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {authSelectors} from '../../redux/auth';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav className="navLinks">
      <NavLink to="/" exact className="navLink" activeClassName="navLinkActive">
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className="navLink"
          activeClassName="navLinkActive"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
