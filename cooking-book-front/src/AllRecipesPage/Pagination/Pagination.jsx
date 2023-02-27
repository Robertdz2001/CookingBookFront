import classes from "./Pagination.module.css";
import { useState } from "react";
function Pagination(props) {
  const changePageNumber = (event) => {
    props.onPageNumberChange(event.target.value);
  };

  const changePageNumber2 = (value) => {
    if (value < props.totalPages) {
      props.onPageNumberChange(value);
    }
  };

  const [incrementCounter, setIncrementCounter] = useState(0);

  const changeIncrementCounter = (value) => {
    setIncrementCounter((currentIncrementCounter) => {
      if (currentIncrementCounter + 2 * value > props.totalPages) {
        return currentIncrementCounter;
      } else {
        return currentIncrementCounter + value;
      }
    });
  };

  const makeButtons = () => {
    let buttons = [];

    if (props.totalPages > 8) {
      for (let i = 1 + incrementCounter; i <= 6 + incrementCounter; i++) {
        buttons.push(
          <button
            key={"button" + i}
            value={i}
            className={`${classes["btn--number"]} ${
              props.pageNumber == i && classes["active"]
            }`}
            onClick={changePageNumber}>
            {i}
          </button>
        );
      }
      if (props.pageNumber < props.totalPages - 6) {
        buttons.push(
          <button
            key={"button..."}
            className={classes["btn--number"]}
            onClick={() => {
              changeIncrementCounter(6);
              changePageNumber2(buttons[5].props.value + 1);
            }}>
            ...
          </button>
        );
        buttons.push(
          <button
            key={"button" + props.totalPages}
            value={props.totalPages}
            className={`${classes["btn--number"]} ${
              props.pageNumber == props.totalPages && classes["active"]
            }`}
            onClick={changePageNumber}>
            {props.totalPages}
          </button>
        );
      } else {
        buttons.push(
          <button
            key={"button" + props.totalPages - 1}
            value={props.totalPages - 1}
            className={`${classes["btn--number"]} ${
              props.pageNumber == props.totalPages - 1 && classes["active"]
            }`}
            onClick={changePageNumber}>
            {props.totalPages - 1}
          </button>
        );
        buttons.push(
          <button
            key={"button" + props.totalPages}
            value={props.totalPages}
            className={`${classes["btn--number"]} ${
              props.pageNumber == props.totalPages && classes["active"]
            }`}
            onClick={changePageNumber}>
            {props.totalPages}
          </button>
        );
      }
    } else {
      for (let i = 1; i <= props.totalPages; i++) {
        buttons.push(
          <button
            key={"button" + i}
            value={i}
            className={`${classes["btn--number"]} ${
              props.pageNumber == i && classes["active"]
            }`}
            onClick={changePageNumber}>
            {i}
          </button>
        );
      }
    }

    return <>{buttons}</>;
  };

  const decreasePageNumber = () => {
    if (props.pageNumber > 1) {
      props.onPageNumberChange(parseInt(props.pageNumber) - 1);
      //   if (parseInt(props.pageNumber - 1) % 6 == 0) {
      //     changeIncrementCounter(-6);
      //   }
    }
  };

  const increasePageNumber = () => {
    if (props.pageNumber < props.totalPages) {
      props.onPageNumberChange(parseInt(props.pageNumber) + 1);
      if (parseInt(props.pageNumber) % 6 == 0) {
        changeIncrementCounter(6);
      }
    }
  };

  return (
    <div className={classes["pagination"]}>
      <button className={classes["btn--arrow"]} onClick={decreasePageNumber}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={classes["arrow"]}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {makeButtons()}

      <button className={classes["btn--arrow"]} onClick={increasePageNumber}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={classes["arrow"]}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
