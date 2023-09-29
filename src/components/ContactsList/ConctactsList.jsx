import { useDispatch, useSelector } from 'react-redux';

import {
  ContContactList,
  ContListUl,
  ContListText,
  ContListItem,
  ContListBtn,
  NoContactsText,
  NoFilteredText,
  SvgContainer,
  EditButton,
} from './ContactsList.styled';
import {
  selectVisibleContacts,
  selectAllContacts,
  selectModalIsOpen,
} from 'redux/contacts/selectors';

import { deleteContact, openModal } from 'redux/contacts/operations';

import { IoInformationCircleOutline } from 'react-icons/io5';

import { AiOutlineDelete } from 'react-icons/ai';
import { EditModal } from 'components/EditModal/Modal';
import styled from 'styled-components';

export const StyledDeleteIcon = styled(AiOutlineDelete)`
  font-size: 18px;
  width: 20px;

  height: 22px;

  // &:hover {
  //   color: white;
  // }
`;

export const StyledChangeIcon = styled(IoInformationCircleOutline)`
  width: 20px;
  height: 22px;

  // &:hover {
  //   color: white;
  // }
`;

const ContactsList = () => {
  const allContacts = useSelector(selectAllContacts);
  const modal = useSelector(selectModalIsOpen);

  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const handleOnClick = ({ id, name, number }) => {
    dispatch(openModal({ id, name, number }));
  };

  return (
    <>
      {modal && <EditModal />}
      {allContacts.length === 0 && (
        <NoContactsText>
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
                <ContListItem modalopen={modal} key={id}>
                  <ContListText>
                    {name}: <span className="number"> {number}</span>
                  </ContListText>
                  <SvgContainer>
                    <EditButton
                      className="editButton"
                      type="button"
                      onClick={() => handleOnClick({ id, name, number })}
                    >
                      <StyledChangeIcon />
                    </EditButton>

                    <ContListBtn
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      <StyledDeleteIcon />
                    </ContListBtn>
                  </SvgContainer>
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
