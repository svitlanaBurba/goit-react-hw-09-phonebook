import {useState} from 'react';
import {useDispatch} from 'react-redux';
import SignIn from '../../components/signIn/SignIn';
import {authOperations} from '../../redux/auth';

export default function LoginView() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'email': {
        setEmail(e.target.value);
        break;
      }
      case 'password': {
        setPassword(e.target.value);
        break;
      }
      default:
        throw new Error('ERROR');
    }
  };

  const dispatch = useDispatch();
  const onLogin = () => dispatch(authOperations.logIn({email, password}));

  const handleSubmit = e => {
    e.preventDefault();

    onLogin();
    setEmail('');
    setPassword('');
  };

  return (
    <SignIn
      onSubmit={handleSubmit}
      onChange={handleChange}
      email={email}
      password={password}
    />
  );
}
