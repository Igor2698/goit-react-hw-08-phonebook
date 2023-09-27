import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors/selectors';
import { selectVisibleContacts } from 'redux/selectors/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from 'components/Grid';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section>
        <Filter />
        {contacts.length > 0 && visibleContacts.length === 0 && (
          <p>No one found with that name</p>
        )}
        {contacts.length === 0 && !isLoading && (
          <p>Please add contact by click on "Add conctact" button</p>
        )}
        {isLoading && <Loader />}
        {contacts.length > 0 && <ContactsList />}
      </Section>
    </div>
  );
};
