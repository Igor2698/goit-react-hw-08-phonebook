import Section from '../components/Section';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectLoading } from 'redux/contacts/selectors';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const Contacts = () => {
  const isLoading = useSelector(selectAllContacts);

  const allContacts = useSelector(selectAllContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
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
