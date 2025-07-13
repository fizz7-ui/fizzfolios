import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const LeetCodeStats = () => {
  const easy = { solved: 255, total: 885 };
  const medium = { solved: 602, total: 1881 };
  const hard = { solved: 197, total: 850 };

  const totalSolved = easy.solved + medium.solved + hard.solved;
  const totalQuestions = easy.total + medium.total + hard.total;

  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Problems Solved",
        data: [easy.solved, medium.solved, hard.solved],
        backgroundColor: ["#00d9ff", "#facc15", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-zinc-900 text-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">LeetCode Progress</h2>

        {/* Donut Chart */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <span className="text-4xl font-bold">{totalSolved}</span>
            <span className="text-sm text-gray-400">/ {totalQuestions} Solved</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 space-y-2 text-sm w-full max-w-xs">
          <div className="flex justify-between">
            <span className="text-cyan-400">Easy</span>
            <span>{easy.solved} / {easy.total}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-yellow-400">Medium</span>
            <span>{medium.solved} / {medium.total}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-red-400">Hard</span>
            <span>{hard.solved} / {hard.total}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
