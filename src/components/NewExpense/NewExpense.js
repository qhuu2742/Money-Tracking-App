import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isVisible, setVisible] = useState(false);

  // tham số enteredExpenseData là tham số mặc định, chính là dữ liệu ở bên ExpenseForm components
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setVisible(false);
  };

  const openForm = () => {
    setVisible(true);
  };
  const closeForm = (stateData) => {
    setVisible(stateData);
  };

  return (
    <div className="new-expense">
      {!isVisible && <button onClick={openForm}>Add New Expense</button>}
      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stateCloseForm={closeForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
