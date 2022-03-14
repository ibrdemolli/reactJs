import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../GeneralUI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title); // this is a hook that returns the props.title and a function

  // const clickHandler = () => {
  //   setTitle('Updated!'); // this pushes react to reexecute this component
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2> 
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
