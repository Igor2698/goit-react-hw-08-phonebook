import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { selectModalIsOpen } from 'redux/contacts/selectors';

import {
  StyledForm,
  Label,
  StyledField,
  ErrorMsg,
  InputContainer,
  ButtonForm,
} from './Form.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(3, 'Too Short!')
    .required('This field is required, please fill that'),
  number: Yup.string()
    .matches(/^\d+$/, 'Must be only numbers')
    .required('This field is required, please fill that'),
});

const MyForm = () => {
  const modal = useSelector(selectModalIsOpen);
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  return (
    !modal && (
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          const { name, number } = values;
          if (
            contacts.find(
              contact =>
                contact.name.toLowerCase() === name.toLowerCase() ||
                contact.number === number
            )
          ) {
            return alert('Phonebook already has this values');
          }

          dispatch(addContacts({ name, number }));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <InputContainer>
            <StyledField type="text" name="name" placeholder=" " />
            <Label htmlFor="name">Please enter name:</Label>

            <ErrorMsg name="name" component="div" />
          </InputContainer>
          <InputContainer>
            <StyledField type="tel" name="number" placeholder=" " />
            <Label htmlFor="number">Please enter number:</Label>

            <ErrorMsg name="number" component="div" />
          </InputContainer>

          <ButtonForm type="submit">Add contact</ButtonForm>
        </StyledForm>
      </Formik>
    )
  );
};

export default MyForm;
