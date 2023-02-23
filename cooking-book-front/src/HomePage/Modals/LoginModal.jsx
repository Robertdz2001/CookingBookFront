import classes from "./Modals.module.css";

function LoginModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.closeLogin}>
      <dialog open className={`${classes["modal"]} ${classes["modal--login"]}`}>
        <span className={classes["heading"]}>Log In</span>
        <form className={classes["form"]}>
          <input
            type="text"
            className={classes["input"]}
            placeholder="User Name"
          />
          <input
            type="password"
            className={classes["input"]}
            placeholder="Password"
          />
          <button
            className={`${classes["btn"]} ${classes["btn--main"]} ${classes["btn--form"]}`}>
            Log In
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default LoginModal;
