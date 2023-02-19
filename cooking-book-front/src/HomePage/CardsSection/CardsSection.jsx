import classes from "./CardsSection.module.css";
import classesApp from "../../App.module.css";

import Card from "./Card";

function CardsSection() {
  return (
    <section
      className={`${classes["cards-section"]} ${classesApp["container"]}`}>
      <span className={classes["cards-subheading"]}>Recipes</span>
      <h2 className={classes["cards-heading"]}>Explore new tastes</h2>
      <div className={classes["cards"]}>
        <Card
          recipeImg="images/pizza.jpg"
          title="Neopolitan Pizza"
          user="User 1"
          userImg="images/customer-1.jpg"
          calories="1200"
          rating="4.6"
          time="80"
        />
        <Card
          recipeImg="images/burger.jpg"
          title="Burger with fries"
          user="User 2"
          userImg="images/customer-2.jpg"
          calories="1400"
          rating="4.8"
          time="50"
        />
        <Card
          recipeImg="images/toast.jpg"
          title="Toasts with eggs"
          user="User 3"
          userImg="images/customer-3.jpg"
          calories="300"
          rating="4.4"
          time="15"
        />
      </div>
    </section>
  );
}

export default CardsSection;
