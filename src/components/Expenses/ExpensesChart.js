import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // chạy vòng for trong mảng, vòng for này có nhiệm vụ update value trong mảng chartDataPoints
  for (const expense of props.expenses) {
    // trả về 1 số, ví dụ tháng 1 sẽ trả về 0, tháng 2 là 1, ...
    const expenseMonth = expense.date.getMonth(); 
    // dùng expenseMonth như 1 index để update value trong mảng chartDataPoints
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  // sau khi chạy vòng for và update xong thì truyền dữ liệu xuống component Chart
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
