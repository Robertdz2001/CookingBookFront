import classes from "./AccordionSection.module.css";

import AccordionItem from "./AccordionItem";

function AccordionSection() {
  return (
    <section className={classes["container"]}>
      <div className={classes["accordion"]}>
        <AccordionItem
          title="How the rating of a recipe is calculated?"
          text="Users can rate recipes in scale from -5 to 5 points. 
          Then sum of points is divided by number of reviews multiplied by 2 and after that 2.5 is added. 
          After those operations recipe rating is in the range from 0 to 5."
          number="01"
        />
        <AccordionItem
          title="Are there any planned updates for the website?"
          text="Yes. In the future we are going to add a feature, 
          which allows users to create their own posts after they get certain number of points. 
          After that all users will be able to leave feedback and comment those posts."
          number="02"
        />
        <AccordionItem
          title="Do I have to pay for any features?"
          text="You don't have to pay for any of the features on this site as they are all provided free of charge.
           We want to ensure that our users have access to all the necessary tools and functionality to fully benefit from using 
           our platform without any additional cost."
          number="03"
        />
      </div>
    </section>
  );
}

export default AccordionSection;
