import css from './Home.module.css';
const Home = () => {
  return (
    <div>
      <div className={css.homeTextContainer}>
        <h1>Welcome to PHONEBOOK!</h1>
        <p className={css.homeText}>
          Organize your contacts effortlessly with our user-friendly web app.
        </p>
        <h2>Key Features:</h2>
        <p>
          Add and Edit Contacts: Easily fill in contact details, including names
          and phone numbers, and update them whenever you need.
        </p>
        <h2>Effortless Search:</h2>
        <p>
          Quickly find the contacts you need without wasting time scrolling.
          Join our community and streamline your contact management. Sign up
          today to get started!
        </p>
      </div>
    </div>
  );
};

export default Home;

//
