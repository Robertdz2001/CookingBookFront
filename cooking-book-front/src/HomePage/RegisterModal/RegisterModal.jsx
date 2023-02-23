import classes from "./RegisterModal.module.css";

function RegisterModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.closeRegister}>
      <dialog open className={classes.modal}>
        <span className={classes["heading"]}>Register</span>
        <form className={classes["register-form"]}>
          <input
            type="text"
            className={classes["register-input"]}
            placeholder="User Name"
          />
          <input
            type="text"
            className={classes["register-input"]}
            placeholder="Image Url"
          />
          <input
            type="password"
            className={classes["register-input"]}
            placeholder="Password"
          />
          <input
            type="password"
            className={classes["register-input"]}
            placeholder="Confirm Password"
          />
          <button
            className={`${classes["btn"]} ${classes["btn--main"]} ${classes["btn--form"]}`}>
            Create Account
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default RegisterModal;
