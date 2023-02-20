import classes from "./CallToAction.module.css";

function CallToAction() {
  return (
    <section className={`${classes["section-margin"]} ${classes["container"]}`}>
      <div className={classes["cta"]}>
        <div className={classes["cta-content"]}>
          <h3 className={classes["cta-heading"]}>Create your account</h3>
          <p className={classes["cta-text"]}>
            Unleash your inner chef and join our recipe community and elevate
            your culinary skills today!
          </p>
          <button
            className={`${classes["btn"]} ${classes["btn--secondary"]} ${classes["cta-btn"]}`}>
            Sign up now
          </button>
        </div>
        <div className={classes["cta-img"]} />
      </div>
    </section>
  );
}

export default CallToAction;
