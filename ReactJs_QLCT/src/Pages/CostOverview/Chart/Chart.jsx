import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ expenses }) => {
  if (!Array.isArray(expenses) || expenses.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[#308BEB]">Cost Overview</h2>
        <p>No data to display.</p>
      </div>
    );
  }

  const parsedExpenses = expenses.map((expense) => ({
    ...expense,
    amount:
      typeof expense.amount === "string"
        ? parseFloat(expense.amount)
        : expense.amount,
  }));

  const data = {
    labels: parsedExpenses.map((expense) => expense.date),
    datasets: [
      {
        label: "Chi phí",
        data: parsedExpenses.map((expense) => expense.amount),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#308BEB]">
      Cost Overview
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
