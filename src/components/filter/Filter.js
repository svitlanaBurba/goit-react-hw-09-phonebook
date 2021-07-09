import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyled';
import {handleChange} from '../../redux/contacts/contacts-actions';

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = useCallback(
    event => dispatch(handleChange(event.target.value)),
    [dispatch]
  );

  return (
    <>
      <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
      <InputContainer
        id="filter"
        type="text"
        onChange={onChange}
        name="filter"
      />
    </>
  );
}
