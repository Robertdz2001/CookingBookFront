import classes from "./Card.module.css";
import classesApp from "../../App.module.css";
import CardIcons from "./CardIcons";

function Card() {
  return (
    <div className={classes["card"]}>
      <img src="./images/pizza.jpg" className={classes["card-img"]} />

      <div className={classes["card-content"]}>
        <div className={classes["card-author"]}>
          <img
            className={classes["card-author-img"]}
            src="images/customer-1.jpg"
          />
          <div className={classes["card-author-info"]}>
            <span>Recipe created by:</span>
            <span>User (rating) (recipes)</span>
          </div>
        </div>

        <div className={classes["card-recipe"]}>
          <h4 className={classes["card-recipe-header"]}>Neapolitan Pizza</h4>
          <div className={classes["card-recipe-info"]}>
            <CardIcons />
            <div className={classes["card-recipe-column"]}>
              <span
                className={`${classes["recipe-column-text"]} ${classes["value"]}`}>
                1200
              </span>
              <span
                className={`${classes["recipe-column-text"]} ${classes["value"]}`}>
                4.3
              </span>
              <span
                className={`${classes["recipe-column-text"]} ${classes["value"]}`}>
                60
              </span>
            </div>
            <div className={classes["card-recipe-column"]}>
              <span className={classes["recipe-column-text"]}>calories</span>
              <span className={classes["recipe-column-text"]}>
                rating (462)
              </span>
              <span className={classes["recipe-column-text"]}>minutes</span>
            </div>
          </div>
          <button
            className={`${classes["card-btn"]} ${classesApp["btn"]} ${classesApp["btn--main"]}`}>
            Show
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
