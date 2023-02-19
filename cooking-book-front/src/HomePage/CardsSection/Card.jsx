import classes from "./Card.module.css";
import classesApp from "../../App.module.css";
import CardIcons from "./CardIcons";

function Card(props) {
  return (
    <div className={classes["card"]}>
      <img src={props.recipeImg} className={classes["card-img"]} />

      <div className={classes["card-content"]}>
        <div className={classes["card-author"]}>
          <img className={classes["card-author-img"]} src={props.userImg} />
          <div className={classes["card-author-info"]}>
            <span>Recipe created by:</span>
            <span>{props.user}</span>
          </div>
        </div>

        <div className={classes["card-recipe"]}>
          <h4 className={classes["card-recipe-header"]}>{props.title}</h4>
          <div className={classes["card-recipe-info"]}>
            <CardIcons />
            <div className={classes["card-recipe-column"]}>
              <span
                className={`${classes["recipe-column-text"]} ${classes["value"]}`}>
                {props.calories}
              </span>
              <span
                className={`${classes["recipe-column-text"]} ${classes["value"]}`}>
                {props.rating}
              </span>
              <span
                className={`${classes["recipe-column-text"]} ${classes["value"]}`}>
                {props.time}
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
