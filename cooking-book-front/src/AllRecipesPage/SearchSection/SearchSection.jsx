import classes from "./SearchSection.module.css";

function SearchSection(props) {
  const changeSearchParams = (event) => {
    event.preventDefault();
    console.log(event.target.recipeName.value);
    console.log(event.target.userName.value);
    const newSearchParams = {
      recipeName: event.target.recipeName.value,
      userName: event.target.userName.value,
      sortBy: event.target.sortBy.value,
      descending: event.target.descending.value,
      pageNumber: 1,
    };
    props.onSearchParamsChange(newSearchParams);
  };

  return (
    <section className={`${classes["search-section"]} ${classes["container"]}`}>
      <h1 className={classes["search-header"]}>SEARCH FOR RECIPES</h1>
      <form className={classes["search-form"]} onSubmit={changeSearchParams}>
        <div className={classes["search-form-inputs"]}>
          <input
            type="text"
            className={classes["search-form-input"]}
            name="recipeName"
          />
          <input
            type="text"
            className={classes["search-form-input"]}
            name="userName"
          />
        </div>
        <div className={classes["search-form-selections"]}>
          <select
            className={classes["search-form-select"]}
            name="sortBy"
            defaultValue="4">
            <option value="0"> name </option>
            <option value="1"> prep </option>
            <option value="2"> kcal </option>
            <option value="3"> date </option>
            <option value="4">rate</option>
          </select>
          <select className={classes["search-form-select"]} name="descending">
            <option value="true"> des </option>
            <option value="false"> asc </option>
          </select>
        </div>
        <button
          type="Submit"
          className={`${classes["btn"]} ${classes["btn--main"]} ${classes["search-button"]}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            className={classes["search-icon"]}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}

export default SearchSection;
