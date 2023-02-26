import classes from "./SearchSection.module.css";

function SearchSection() {
  return (
    <section className={`${classes["search-section"]} ${classes["container"]}`}>
      <h1 className={classes["search-header"]}>SEARCH FOR RECIPES</h1>
      <form className={classes["search-form"]}>
        <div className={classes["search-form-inputs"]}>
          <input type="text" className={classes["search-form-input"]} />
          <input type="text" className={classes["search-form-input"]} />
        </div>
        <div className={classes["search-form-selections"]}>
          <select className={classes["search-form-select"]}>
            <option value="name">name</option>
            <option value="prep">prep</option>
            <option value="kcal">kcal</option>
            <option value="date">date</option>
            <option value="rate">rate</option>
          </select>
          <select className={classes["search-form-select"]}>
            <option value="des">des</option>
            <option value="asc">asc</option>
          </select>
        </div>
        <button
          type="submit"
          className={`${classes["btn"]} ${classes["btn--main"]} ${classes["search-button"]}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            className={classes["search-icon"]}>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}

export default SearchSection;
