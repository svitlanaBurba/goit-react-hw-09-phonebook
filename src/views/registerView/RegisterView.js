import {useState} from 'react';
import {useDispatch} from 'react-redux';
import SignUp from '../../components/signUp/SignUp';
import {authOperations} from '../../redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () =>
    dispatch(
      authOperations.register({name: name, email: email, password: password})
    );

  const handleChange = e => {
    switch (e.target.name) {
      case 'name': {
        setName(e.target.value);
        break;
      }
      case 'email': {
        setEmail(e.target.value);
        break;
      }
      case 'password': {
        setPassword(e.target.value);
        break;
      }
      default:
        console.log('ERROR');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister();

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <SignUp
      onSubmit={handleSubmit}
      onChange={handleChange}
      name={name}
      email={email}
      password={password}
    />
  );
}
