import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateContactDate } from 'redux/contacts/selectors';
import { editContact } from 'redux/contacts/operations';
import css from './EditModal.module.css';

export const EditModal = () => {
  const dates = useSelector(selectUpdateContactDate);
  console.log(dates);
  const { id, name: nameDates, number: numberDates } = dates;

  const [name, setName] = useState(nameDates);
  const [number, setNumber] = useState(numberDates);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    dispatch(editContact({ id, name, number }));

    // const newContact = { name, number, id };

    // console.log(newContact);
    // if (newContact.name.trim() === '') {
    //   return alert('Enter your name');
    // }

    // dispatch(updateContact(newContact));
    // reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  return (
    <form className={css.modalForm} onSubmit={onSubmit}>
      <input
        className={css.inputForm}
        onChange={handleInputChange}
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        required
      />
      <input
        className={css.inputForm}
        onChange={handleInputChange}
        type="tel"
        name="number"
        placeholder="Enter changed phone"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        required
      />
      <div className={css.buttonsContainer}>
        <button
          className={`${css.modalButton}  ${css.editButton}`}
          type="submit"
        >
          Edit contact
        </button>
        <button
          className={css.modalButton}
          onClick={() => {
            // dispatch(closeModal());
          }}
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
