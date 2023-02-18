import classes from "./HomePage.module.css";
import classesApp from "../App.module.css";

function HomePage() {
  return (
    <section className={classes["hero-section"]}>
      <header
        className={`${classes["hero-header"]} ${classesApp["container"]}`}>
        <div className={classes["hero-logo"]}>Logo</div>
        <nav>
          <ul className={classes["nav-list"]}>
            <li>
              <button
                className={`${classes["btn"]} ${classes["btn--secondary"]} ${classes["nav-button"]}`}>
                Login
              </button>
            </li>
            <li>
              <button
                className={`${classes["btn"]} ${classes["btn--main"]} ${classes["nav-button"]}`}>
                Register
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default HomePage;
