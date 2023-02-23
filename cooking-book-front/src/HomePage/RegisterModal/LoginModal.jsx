import classes from "./RegisterModal.module.css";

function LoginModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.closeLogin}>
      <dialog open className={classes.modal}>
        <span className={classes["heading"]}>Log In</span>
        <form className={classes["register-form"]}>
          <input type="text" className={classes["register-input"]} />
          <input type="password" className={classes["register-input"]} />
          <button>Log In</button>
        </form>
      </dialog>
    </div>
  );
}

export default LoginModal;
