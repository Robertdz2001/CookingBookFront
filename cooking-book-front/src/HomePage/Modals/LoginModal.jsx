import classes from "./Modals.module.css";
import axios from "axios";
import baseUrl from "../../Url";

function LoginModal(props) {
  const loginUser = async (event) => {
    event.preventDefault();

    const userInfo = {
      userName: event.target.userName.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(`${baseUrl}/user/login`, userInfo);

      localStorage.setItem("token", response.data);

      try {
        const user = await axios.get(`${baseUrl}/user`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log(user.data);
        localStorage.setItem("userInfo", JSON.stringify(user.data));

        alert("Successfully logged in");
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.backdrop} onClick={props.closeLogin}>
      <dialog open className={`${classes["modal"]} ${classes["modal--login"]}`}>
        <span className={classes["heading"]}>Log In</span>
        <form className={classes["form"]} onSubmit={loginUser}>
          <input
            type="text"
            name="userName"
            className={classes["input"]}
            placeholder="User Name"
          />
          <input
            type="password"
            name="password"
            className={classes["input"]}
            placeholder="Password"
          />
          <button
            type="Submit"
            className={`${classes["btn"]} ${classes["btn--main"]} ${classes["btn--form"]}`}>
            Log In
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default LoginModal;
