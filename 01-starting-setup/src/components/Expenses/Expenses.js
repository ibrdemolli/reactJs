import Card from "../GeneralUI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const selectedOptionHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedValue={filteredYear}
          onSelectedOption={selectedOptionHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
