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
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default CardsSection;
