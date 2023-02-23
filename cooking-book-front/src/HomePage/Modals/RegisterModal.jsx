import { useRef } from "react";
import axios from "axios";
import classes from "./Modals.module.css";

function RegisterModal(props) {
  const refName = useRef(null);
  const refPass = useRef(null);
  const refPassConf = useRef(null);

  const checkImage = async (url) => {
    try {
      await axios.get(url);
      return url;
    } catch (err) {
      return "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    }
  };

  const registerUser = async (event) => {
    event.preventDefault();

    const imageUrl = await checkImage(event.target.imageUrl.value);

    const userToRegister = {
      userName: event.target.userName.value,
      imageUrl: imageUrl,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };

    // 5 < name.len < 30
    if (
      userToRegister.userName.length > 30 ||
      userToRegister.userName.length < 5
    ) {
      refName.current.classList.add(classes.err);
      refName.current.value = "";
      refName.current.placeholder =
        "Username must be between 5 and 30 characters";
      return;
    }

    console.log(userToRegister);

    // pass >= 5
    if (userToRegister.password.length < 5) {
      refPass.current.classList.add(classes.err);
      refPass.current.value = "";
      refPass.current.placeholder = "Password must have atleast 5 characters";
      return;
    }

    // pass constain whitespace
    if (userToRegister.password.indexOf(" ") >= 0) {
      refPass.current.classList.add(classes.err);
      refPass.current.value = "";
      refPass.current.placeholder = "Password can't contain whitespaces";
      return;
    }

    // pass1 == pass2
    if (userToRegister.password !== userToRegister.confirmPassword) {
      refPass.current.classList.add(classes.err);
      refPass.current.value = "";
      refPass.current.placeholder = "Password and Confirm Password don't match";
      refPassConf.current.classList.add(classes.err);
      refPassConf.current.value = "";
      refPassConf.current.placeholder =
        "Password and Confirm Password don't match";
      return;
    }

    try {
      const resp = await axios.post(
        "https://localhost:44371/api/user/register",
        userToRegister
      );
      alert("Account Created!");
      window.location.reload(false);
    } catch (err) {
      // username already exist
      refName.current.classList.add(classes.err);
      refName.current.value = "";
      refName.current.placeholder = "User already exists";
    }
  };

  const deleteError = () => {
    refName.current.classList.remove(classes.err);
    refPass.current.classList.remove(classes.err);
    refPassConf.current.classList.remove(classes.err);
    refName.current.placeholder = "User Name";
    refPass.current.placeholder = "Password";
    refPassConf.current.placeholder = "Confirm Password";
  };

  return (
    <div className={classes.backdrop} onClick={props.closeRegister}>
      <dialog open className={classes.modal} onClick={deleteError}>
        <span className={classes["heading"]}>Register</span>
        <form className={classes["form"]} onSubmit={registerUser}>
          <input
            type="text"
            name="userName"
            className={classes["input"]}
            placeholder="User Name"
            ref={refName}
          />
          <input
            type="text"
            name="imageUrl"
            className={classes["input"]}
            placeholder="Image Url"
          />
          <input
            type="password"
            name="password"
            className={classes["input"]}
            placeholder="Password"
            ref={refPass}
          />
          <input
            type="password"
            name="confirmPassword"
            className={classes["input"]}
            placeholder="Confirm Password"
            ref={refPassConf}
          />
          <button
            type="Submit"
            className={`${classes["btn"]} ${classes["btn--main"]} ${classes["btn--form"]}`}>
            Create Account
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default RegisterModal;
