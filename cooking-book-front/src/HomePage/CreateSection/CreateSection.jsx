import classes from "./CreateSection.module.css";
import classesApp from "../../App.module.css";

function CreateSection() {
  return (
    <section className={`${classesApp["container"]}`}>
      <div className={classes["heading-container"]}>
        <div className={classes["heading"]}>
          <img
            className={classes["heading-img"]}
            src="images/create-heading.jpg"
          />
          <div className={classes["content"]}>
            <h2 className={classes["content-heading"]}>
              Create your own recipes
            </h2>
            <div className={classes["content-text"]}>
              <p className={classes["content-paragraph"]}>
                Join our community and showcase your culinary skills by
                submitting your favorite recipes to our site - you never know
                who you might inspire to try something new! Share your cooking
                ideas with other users, providing:
              </p>
              <ul>
                <li className={classes["list-item"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={classes["icon"]}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>

                  <span>The name of your dish</span>
                </li>
                <li className={classes["list-item"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={classes["icon"]}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <span>Magnificient food image</span>
                </li>
                <li className={classes["list-item"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={classes["icon"]}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Overall meal preparation time</span>
                </li>
              </ul>
            </div>
          </div>
          <button
            className={`${classes["join-btn"]} ${classesApp["btn"]} ${classes["btn--secondary"]}`}>
            Join Now!
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateSection;
