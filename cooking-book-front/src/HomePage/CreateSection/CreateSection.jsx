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

      <div className={classes["secondary-content"]}>
        <h3 className={classes["secondary-heading"]}>What else you can add</h3>
        <div className={classes["icon-list"]}>
          <div className={classes["icon-list-item"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              className={`${classes["icon"]} ${classes["icon-secondary"]}`}
              height="192"
              fill="#2f9e44"
              viewBox="0 0 256 256">
              <circle cx="156" cy="76" r="12"></circle>
              <path
                d="M16,184C247.8,234.7,223.8,75.5,217.2,45a8.2,8.2,0,0,0-6.2-6.2C180.5,32.2,21.3,8.2,72,240"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"></path>
              <path
                d="M201.3,152A96,96,0,0,1,104,54.6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"></path>
            </svg>
          </div>
          <div className={classes["icon-list-item"]}>
            <svg
              className={`${classes["icon"]} ${classes["icon-secondary"]}`}
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              viewBox="0 0 256 256">
              <path
                d="M218.9,71a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8L143,79l5.7,28.3L177,113Z"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"></path>
            </svg>
          </div>
          <div className={classes["icon-list-item"]}>
            <svg
              className={`${classes["icon"]} ${classes["icon-secondary"]}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path
                d="M200,246.84c8.81,58.62-7.33,90.67-52.91,97.41-50.65,7.49-71.52-26.44-80.33-85.06-11.85-78.88,16-127.94,55.71-131.1C158.61,125.22,191.18,188.23,200,246.84Z"
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                d="M223.65,409.53c3.13,33.28-14.86,64.34-42,69.66-27.4,5.36-58.71-16.37-65.09-49.19s17.75-34.56,47.32-40.21S219.87,369.39,223.65,409.53Z"
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                d="M312,150.83c-8.81,58.62,7.33,90.67,52.9,97.41,50.66,7.49,71.52-26.44,80.33-85.06,11.86-78.89-16-128.22-55.7-131.1C353.13,29.44,320.82,92.21,312,150.83Z"
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                d="M288.35,313.53c-3.13,33.27,14.86,64.34,42,69.66,27.4,5.36,58.71-16.37,65.09-49.19s-17.75-34.56-47.32-40.22S292.13,273.38,288.35,313.53Z"
                fill="none"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateSection;
