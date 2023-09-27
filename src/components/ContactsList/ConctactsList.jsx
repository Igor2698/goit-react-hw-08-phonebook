import { useDispatch, useSelector } from 'react-redux';

import {
  ContContactList,
  ContListUl,
  ContListText,
  ContListItem,
  ContListBtn,
} from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/selectors/selectors';
import { deleteContact } from 'redux/operations';
const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  return (
    <ContContactList>
      <ContListUl>
        {visibleContacts.map(({ id, name, phone }) => (
          <ContListItem key={id}>
            <ContListText>
              {name}: <span className="number"> {phone}</span>
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
    </ContContactList>
  );
};

export default ContactsList;
