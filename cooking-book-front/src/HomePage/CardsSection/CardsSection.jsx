import classes from "./CardsSection.module.css";
import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import baseUrl from "../../Url";
function CardsSection() {
  const [topRecipes, setTopRecipes] = useState(false);

  const getTopRecipes = async () => {
    try {
      const response = await axios.get(`${baseUrl}/recipes/top`);

      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function getData() {
      const response = await getTopRecipes();
      setTopRecipes(response);
    }
    getData();
  }, []);

  if (!topRecipes) {
    return <div>LOADING...</div>;
  }

  return (
    <section
      id="cards-id"
      className={`${classes["cards-section"]} ${classes["section-margin"]} ${classes["container"]}`}>
      <span className={classes["cards-subheading"]}>Recipes</span>
      <h2 className={classes["cards-heading"]}>Explore new tastes</h2>
      <div className={classes["cards"]}>
        {topRecipes.map((recipe) => {
          return (
            <Card
              key={"card" + recipe.id}
              recipeImg={recipe.imageUrl}
              title={recipe.name}
              user={recipe.user.userName}
              userImg={recipe.user.imageUrl}
              calories={recipe.calories}
              rating={
                recipe.reviews.length !== 0
                  ? 0.5 * (recipe.recipeRating / recipe.reviews.length) + 2.5
                  : 0
              }
              time={recipe.prepTime}
              reviewsCount={recipe.reviews.length}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CardsSection;
