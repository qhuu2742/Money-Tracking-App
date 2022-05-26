import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 28);
  // const expenseTitle = 'Gundam';
  // const expenseAmount = 400.00;

  // useState nhận hai tham số, tham số đầu là giá trị ban đầu, tham số thứ 2 là một function để update giá trị ban đầu
  // khi có giá trị thay đổi, React sẽ gọi lại component một lần nữa để update giá trị mới.
  // note: ý nghĩa của việc dùng [], đây là array destructuring, nó có nghĩa là bạn đang tạo
  // hai biến title và setState
  // const [title, setState] = useState(props.title);

  // const clickHandler = () => {
  //     setState('New Value');
  //     console.log('Clicked!');
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
