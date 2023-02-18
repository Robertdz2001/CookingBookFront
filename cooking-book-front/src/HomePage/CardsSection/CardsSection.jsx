import classes from "./CardsSection.module.css";
import classesApp from "../../App.module.css";
function CardsSection() {
  return (
    <section
      className={`${classes["cards-section"]} ${classesApp["container"]}`}>
      <span className={classes["cards-subheading"]}>Recipes</span>
      <h2 className={classes["cards-heading"]}>Explore new tastes</h2>
      <div className={classes["cards"]}>
        <div className={classes["card"]}>card 1</div>
        <div className={classes["card"]}>card 2</div>
        <div className={classes["card"]}>card 3</div>
      </div>
    </section>
  );
}

export default CardsSection;
