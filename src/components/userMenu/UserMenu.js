import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authSelectors, authOperations} from '../../redux/auth';
import {UserMenuContainer} from './UserMenuStyled';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);

  const dispatch = useDispatch();
  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch]
  );

  return (
    <UserMenuContainer>
      <p className="userMenuRext">
        Welcome, <b>{userName}</b>
      </p>
      <p className="userMenuRext">
        Email: <b>{userEmail}</b>
      </p>
      <button type="button" className="navLink" onClick={onLogout}>
        Sign off
      </button>
    </UserMenuContainer>
  );
}
