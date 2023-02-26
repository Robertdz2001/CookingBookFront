import classes from "./AllRecipesPage.module.css";
import { useNavigate } from "react-router-dom";

import SearchSection from "./SearchSection/SearchSection";

function AllRecipesPage() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <>
      <header className={classes["all-header"]}>
        <img src="/images/logo.png" className={classes["logo-image"]} />
        <ul className={classes["header-list"]}>
          <li
            className={classes["option"]}
            con={JSON.parse(localStorage.getItem("userInfo")).userName}>
            <img
              src={JSON.parse(localStorage.getItem("userInfo")).imageUrl}
              className={classes["icon"]}
            />
          </li>
          <li
            className={classes["option"]}
            con={
              "Points: " +
              JSON.parse(localStorage.getItem("userInfo")).userRating
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#b2f2bb"
              className={classes["icon"]}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </li>
          <li className={classes["option"]} con="Add New">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#b2f2bb"
              className={classes["icon"]}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </li>
          <li onClick={logout} className={classes["option"]} con="Log Out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#b2f2bb"
              className={classes["icon"]}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </li>
        </ul>
      </header>
      <SearchSection />
    </>
  );
}

export default AllRecipesPage;
