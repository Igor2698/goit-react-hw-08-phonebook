import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { AiFillLock } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.Input} type="email" name="email" />
        <AiOutlineMail style={{ fontSize: '24px' }} className={css.formSvg} />
      </label>
      <label className={css.label}>
        Password
        <input className={css.Input} type="password" name="password" />
        <AiFillLock style={{ fontSize: '24px' }} className={css.formSvg} />
      </label>

      <button className={css.buttonForm} type="submit">
        Log In
      </button>
    </form>
  );
};
