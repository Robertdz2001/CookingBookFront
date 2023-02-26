import Card from "../../HomePage/CardsSection/Card";
import classes from "./CardsList.module.css";
function CardsList(props) {
  return (
    <ul className={classes["cards"]}>
      {props.recipes.map((recipe) => {
        return (
          <li>
            <Card
              key={"card" + recipe.id}
              recipeImg={recipe.imageUrl}
              title={recipe.name}
              user={recipe.user.userName}
              userImg={recipe.user.imageUrl}
              calories={recipe.calories}
              rating={0.5 * (recipe.recipeRating / recipe.reviews.length) + 2.5}
              time={recipe.prepTime}
              reviewsCount={recipe.reviews.length}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CardsList;
