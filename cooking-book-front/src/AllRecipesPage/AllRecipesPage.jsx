import classes from "./AllRecipesPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchSection from "./SearchSection/SearchSection";
import baseUrl from "../Url";
import axios from "axios";
import CardsList from "./CardsList/CardsList";
import Pagination from "./Pagination/Pagination";

function AllRecipesPage() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useState({
    recipeName: "",
    userName: "",
    sortBy: 4,
    descending: true,
    pageNumber: 1,
  });

  const [recipes, setRecipes] = useState(false);

  const [totalPages, setTotalPages] = useState(false);

  const changeSearchParams = (newSearchParams) => {
    setSearchParams(newSearchParams);
  };

  const changePageNumber = (newPageNumber) => {
    setSearchParams({
      recipeName: searchParams.recipeName,
      userName: searchParams.userName,
      sortBy: searchParams.sortBy,
      descending: searchParams.descending,
      pageNumber: newPageNumber,
    });
  };

  const getRecipes = async () => {
    try {
      const searchParamsString = `?SearchByRecipeName=${searchParams.recipeName}&SearchByUserName=${searchParams.userName}&SortBy=${searchParams.sortBy}&SortByDescending=${searchParams.descending}&PageNumber=${searchParams.pageNumber}&PageSize=1`;

      const response = await axios.get(
        `${baseUrl}/recipes` + searchParamsString,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function getData() {
      const response = await getRecipes();
      setRecipes(response.items);
      setTotalPages(response.totalPages);
    }
    getData();
  }, [searchParams]);

  const logout = () => {
    navigate("/");
    localStorage.clear();
  };

  if (!recipes) return <>Loading</>;

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
      <SearchSection onSearchParamsChange={changeSearchParams} />
      <CardsList recipes={recipes} />
      <Pagination
        totalPages={totalPages}
        pageNumber={searchParams.pageNumber}
        onPageNumberChange={changePageNumber}
      />
    </>
  );
}

export default AllRecipesPage;
