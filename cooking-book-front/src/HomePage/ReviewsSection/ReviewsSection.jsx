import classes from "./ReviewsSection.module.css";

function ReviewsSection() {
  return (
    <section className={`${classes["container"]} ${classes["section-margin"]}`}>
      <div className={classes["z-grid"]}>
        <div className={classes["z-item"]}>
          <img
            className={classes["z-img-main"]}
            src="images/review-header.jpg"
          />
        </div>
        <div className={`${classes["z-item"]} ${classes["z-title1"]}`}>
          <h2 className={classes["z-heading"]}>Reviews</h2>
          <p className={classes["z-text"]}>
            If you love to cook or bake, then you'll definitely want to take
            advantage of the feature that allows users to leave their feedback
            and opinion on recipes. Writing a recipe review is a simple and easy
            way to share your experiences and insights with others.
          </p>
        </div>
        <div className={`${classes["z-item"]} ${classes["z-title2"]}`}>
          <h3 className={classes["z-heading-secondary"]}>Self improvement</h3>
          <p className={classes["z-text-secondary"]}>
            This feature is a powerful tool for improving your cooking skills.
            By reading reviews from other users you can gain valuable insights
            into the cooking process and learn new techniques and tips to make
            your dishes even better.
          </p>
        </div>
        <div className={`${classes["z-item4"]} ${classes["z-item"]}`}>
          <img
            className={classes["z-img-secondary"]}
            src="images/improvement.jpg"
          />
        </div>
        <div className={`${classes["z-item4"]} ${classes["z-item"]}`}>
          <img
            className={classes["z-img-secondary"]}
            src="images/rate-others.jpg"
          />
        </div>
        <div className={`${classes["z-item"]} ${classes["z-title3"]}`}>
          <h3 className={classes["z-heading-secondary"]}>
            Share Your Expertise
          </h3>
          <p className={classes["z-text-secondary"]}>
            You can help others in the cooking community by sharing your
            experiences through recipe reviews. Writing a review doesn't have to
            be time-consuming or complicated. Just a few sentences about what
            you liked (or didn't like) about the recipe can be incredibly
            helpful to other users.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
