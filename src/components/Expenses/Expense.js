import React, { useState } from "react";

import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const saveDataYearHandler = (data) => {
    console.log("du lieu moi: ", data);
    setFilteredYear(data);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // console.log('day la expense: ',expense)
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveDatayear={saveDataYearHandler}
        />
        {/* {
                    filteredExpenses.length === 0 ? (
                        <p>Không có gì cả.</p>
                    ) : (
                        filteredExpenses.map((expense) => (
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date} />
                        ))
                    )
                } */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
