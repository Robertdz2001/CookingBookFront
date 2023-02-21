import classes from "./RegisterModal.module.css";

function LoginModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.closeRegister}>
      <dialog open className={classes.modal}>
        <span className={classes["heading"]}>Register</span>
        <form className={classes["register-form"]}>
          <input type="text" className={classes["register-input"]} />
          <input type="text" className={classes["register-input"]} />
          <input type="text" className={classes["register-input"]} />
          <input type="text" className={classes["register-input"]} />
        </form>
      </dialog>
    </div>
  );
}

export default LoginModal;