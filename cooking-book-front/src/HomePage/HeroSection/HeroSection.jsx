import classes from "./HeroSection.module.css";
import classesApp from "../../App.module.css";

function HeroSection() {
  function refresh() {
    document.location.reload();
  }

  return (
    <section className={classes["hero-section"]}>
      <header
        className={`${classes["hero-header"]} ${classesApp["container"]}`}>
        <div className={classes["hero-logo"]}>
          <img
            src="/images/logo.png"
            className={classes["logo-image"]}
            onClick={refresh}
          />
        </div>
        <nav>
          <ul className={classes["nav-list"]}>
            <li>
              <button
                className={`${classesApp["btn"]} ${classesApp["btn--secondary"]} ${classes["nav-button"]}`}>
                Login
              </button>
            </li>
            <li>
              <button
                className={`${classesApp["btn"]} ${classesApp["btn--main"]} ${classes["nav-button"]}`}>
                Register
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className={classes["hero-content"]}>
        <div className={classes["hero-content-box"]}>
          <h1 className={classes["hero-title"]}>
            Amazing recipes from all over the world
          </h1>
          <p className={classes["hero-text"]}>
            Discover new and exciting dishes from around the world, from spicy
            curries to comforting pastas, fresh salads, and indulgent desserts.
            Connect with other passionate foodies by commenting on and rating
            recipes, following other users.
          </p>
          <div className={classes["hero-buttons"]}>
            <button
              className={`${classesApp["btn"]} ${classesApp["btn--main"]}`}>
              Start Now
            </button>
            <a
              href="#cards-id"
              className={`${classesApp["btn"]} ${classesApp["btn--secondary"]} `}>
              Learn More &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
