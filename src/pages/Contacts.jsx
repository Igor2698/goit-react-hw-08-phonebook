import Section from '../components/Section';
import { useDispatch } from 'react-redux';

import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Form />
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
