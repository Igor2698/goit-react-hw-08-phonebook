import css from './Home.module.css';
export const Home = () => {
  return (
    <div>
      {/* <img
        className={css.homeImg}
        src="https://png.pngtree.com/background/20230617/original/pngtree-old-corded-phone-in-cyberpunk-style-a-3d-render-on-a-picture-image_3702800.jpg"
        alt=""
      /> */}
      <div className={css.homeTextContainer}>
        <h1>Welcome to PHONEBOOK!</h1>
        <p  className={css.homeText}>
          Organize your contacts effortlessly with our user-friendly web app.
          <h2>Key Features:</h2>
          <p>
            Add and Edit Contacts: Easily fill in contact details, including
            names and phone numbers, and update them whenever you need.
          </p>
          <h2>Effortless Search:</h2>
          <p>
            Quickly find the contacts you need without wasting time scrolling.
            Join our community and streamline your contact management. Sign up
            today to get started!
          </p>
        </p>
      </div>
    </div>
  );
};

//
