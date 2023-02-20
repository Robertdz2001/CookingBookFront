import classes from "./AccordionSection.module.css";

function AccordionItem(props) {
  function openAcc(event) {
    const exist = event.currentTarget.classList.contains(classes.open);
    const ele = event.currentTarget.parentNode.children;
    for (let i = 0; i < ele.length; i++) {
      ele[i].classList.remove(classes.open);
    }

    if (!exist) {
      event.currentTarget.classList.add(classes.open);
    }
  }

  return (
    <div className={classes["item"]} onClick={openAcc}>
      <p className={classes["number"]}>{props.number}</p>
      <p className={classes["text"]}>{props.title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={classes["icon"]}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>

      <div className={classes["hidden-box"]}>
        <p className={classes["answer"]}>{props.text}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
