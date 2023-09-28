import { useDispatch, useSelector } from 'react-redux';

import {
  ContContactList,
  ContListUl,
  ContListText,
  ContListItem,
  ContListBtn,
  NoContactsText,
  NoFilteredText,
} from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { selectAllContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { css } from 'styled-components';
const ContactsList = () => {
  const allContacts = useSelector(selectAllContacts);
  console.log(allContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  console.log(visibleContacts);

  const dispatch = useDispatch();

  return (
    <>
      {allContacts.length === 0 && (
        <NoContactsText className={css.noContactsText}>
          There are no any contacts yet. Please add a contact by clicking the
          "Add contact" button.
        </NoContactsText>
      )}

      {allContacts.length > 0 && visibleContacts.length === 0 && (
        <NoFilteredText>No one found with that name</NoFilteredText>
      )}

      {visibleContacts.length > 0 && (
        <ContContactList>
          <>
            <ContListUl>
              {visibleContacts.map(({ id, name, number }) => (
                <ContListItem key={id}>
                  <ContListText>
                    {name}: <span className="number"> {number}</span>
                  </ContListText>

                  <ContListBtn
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </ContListBtn>
                </ContListItem>
              ))}
            </ContListUl>
          </>
        </ContContactList>
      )}
    </>
  );
};

export default ContactsList;
