import Section from '../components/Section';
import { useDispatch } from 'react-redux';

import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Grid';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectLoading);

  return (
    <>
      <Section>
        <Form />
        <Filter />
        {loading && Loader}
        <ContactsList />
      </Section>
    </>
  );
};

export default Contacts;
