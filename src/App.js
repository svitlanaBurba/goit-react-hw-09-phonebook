import {Route, Switch} from 'react-router';
import AppBar from './components/navigation/AppBar';
import {lazy, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {authOperations} from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import {Suspense} from 'react';

const HomeView = lazy(() => import('./views/homeView/HomeView'));
const RegisterView = lazy(() => import('./views/registerView/RegisterView'));
const LoginView = lazy(() => import('./views/loginView/LoginView'));
const ContactsView = lazy(() => import('./views/contactsView/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Suspense>
    </div>
  );
}
