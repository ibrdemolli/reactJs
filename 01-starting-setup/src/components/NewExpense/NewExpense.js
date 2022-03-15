import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSavedExpense(expenseData);
    setIsEditing(false);
  };

  const clickNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const clickCancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={clickNewExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelBtnClick= {clickCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
