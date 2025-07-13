// LeetCodeDonut.jsx
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const LeetCodeDonut = () => {
  const easy = { solved: 255, total: 885 };
  const medium = { solved: 602, total: 1881 };
  const hard = { solved: 197, total: 850 };
  const totalSolved = easy.solved + medium.solved + hard.solved;
  const totalQuestions = easy.total + medium.total + hard.total;

  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [
          easy.solved,
          medium.solved,
          hard.solved,
          // Add remaining unsolved combined for full ring if needed
        ],
        backgroundColor: [
          "#22c55e", // green-ish
          "#facc15", // yellow
          "#ef4444", // red
        ],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-zinc-800 rounded-lg text-white">
      <div className="relative w-72 h-72 mx-auto">
        <Doughnut data={data} options={options} />
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{totalSolved}</span>
          <span className="text-gray-400 text-sm">Solved</span>
          <span className="text-gray-400 text-xs">/ {totalQuestions}</span>
        </div>
      </div>
      {/* Legend/Stats */}
      <div className="mt-4 grid grid-cols-3 text-center text-sm">
        <div>
          <span className="block text-green-400 font-bold">{easy.solved}</span>
          <span className="text-gray-400">/ {easy.total}</span>
          <div className="mt-1 text-green-400">Easy</div>
        </div>
        <div>
          <span className="block text-yellow-400 font-bold">{medium.solved}</span>
          <span className="text-gray-400">/ {medium.total}</span>
          <div className="mt-1 text-yellow-400">Medium</div>
        </div>
        <div>
          <span className="block text-red-400 font-bold">{hard.solved}</span>
          <span className="text-gray-400">/ {hard.total}</span>
          <div className="mt-1 text-red-400">Hard</div>
        </div>
      </div>
    </div>
  );
};
