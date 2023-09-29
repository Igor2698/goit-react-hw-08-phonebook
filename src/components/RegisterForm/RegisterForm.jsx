import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { AiFillLock } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      autoComplete="off"
      className={css.registerForm}
      onSubmit={handleSubmit}
    >
      <label className={css.registerLabel}>
        Username
        <input className={css.registerInput} type="text" name="name" />
        <FaUserEdit style={{ fontSize: '24px' }} className={css.formSvg} />
      </label>
      <label className={css.registerLabel}>
        Email
        <input
          className={css.registerInput}
          type="email"
          name="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
          title="The email address must contain the @ symbol and text after it. For example: email@mail.com"
        />
        <AiOutlineMail style={{ fontSize: '24px' }} className={css.formSvg} />
      </label>
      <label className={css.registerLabel}>
        Password
        <input
          className={css.registerInput}
          type="password"
          name="password"
          pattern=".{8,}"
          title="Password must be at least 8 characters long"
        />
        <AiFillLock style={{ fontSize: '24px' }} className={css.formSvg} />
      </label>
      <button className={css.registerButtonForm} type="submit">
        Register
      </button>
    </form>
  );
};
