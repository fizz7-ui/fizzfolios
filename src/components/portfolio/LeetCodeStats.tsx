import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Trophy, Target, TrendingUp } from "lucide-react";

ChartJS.register(
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export const LeetCodeStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [stats, setStats] = useState({
    totalSolved: 0,
    totalQuestions: 0,
    ranking: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    easyTotal: 0,
    mediumTotal: 0,
    acceptanceRate: 0, 
    hardTotal: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/ice__fizz");
        const data = await res.json();
        setStats({
          totalSolved: data.totalSolved,
          totalQuestions: data.totalQuestions,
          ranking: data.ranking,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          easyTotal: data.totalEasy,
          acceptanceRate: data.acceptanceRate,
          mediumTotal: data.totalMedium,
          hardTotal: data.totalHard,
        });
      } catch (err) {
        console.error("Failed to fetch LeetCode stats", err);
      }
    };

    fetchStats();
  }, []);

  const solvedProblems = stats.totalSolved;
  const totalProblems = stats.totalQuestions || 3616;
  const rank = stats.ranking;

  const easy = { solved: stats.easySolved, total: stats.easyTotal };
  const medium = { solved: stats.mediumSolved, total: stats.mediumTotal };
  const hard = { solved: stats.hardSolved, total: stats.hardTotal };

  const totalSolved = easy.solved + medium.solved + hard.solved;
  const acceptanceRate = stats.acceptanceRate;


  useEffect(() => {
    if (!solvedProblems) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          let start = 0;
          const increment = solvedProblems / 100;
          const timer = setInterval(() => {
            start += increment;
            if (start >= solvedProblems) {
              setAnimatedCount(solvedProblems);
              clearInterval(timer);
            } else {
              setAnimatedCount(Math.floor(start));
            }
          }, 20);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById("leetcode");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [solvedProblems]);

  if (!stats.totalSolved) {
    return <div className="text-center text-xl text-zinc-400 py-20">Loading LeetCode stats...</div>;
  }

  const donutData = {
    labels: [],
    datasets: [
      {
        label: "Solved",
        data: [
          easy.solved,
          easy.total - easy.solved,
          medium.solved,
          medium.total - medium.solved,
          hard.solved,
          hard.total - hard.solved,
        ],
        backgroundColor: [
          "#3b82f6", "#3b82f622",
          "#facc15", "#facc1533",
          "#ef4444", "#ef444433",
        ],
        borderWidth: 0,
        cutout: "90%",
        spacing: 4,
        borderRadius: 999,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  const contestData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Rating",
        data: [1682, 1726, 1822, 1756, 1927],
        fill: false,
        borderColor: "#facc15",
        pointBackgroundColor: "#facc15",
        pointRadius: 4,
        tension: 0,
      },
    ],
  };

  const contestOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#ccc", font: { size: 12 } },
      },
      y: {
        grid: { color: "#333" },
        ticks: { color: "#ccc", font: { size: 12 } },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#222",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
  };

  return (
    <section id="leetcode" className="py-24 px-4 bg-gradient-to-br from-secondary/10 to-primary/5">
      <div className="container mx-auto max-w-5xl">
        <div className={`text-center mb-20 ${isVisible ? "slide-in-up" : "opacity-0"}`}>
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">LEETCODE MASTERY</span>
          </h2>
          <p className="text-2xl text-accent/80 max-w-4xl mx-auto leading-relaxed">
            Relentlessly honing algorithmic thinking and problem-solving skills through systematic practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className={`glass-morphism p-6 rounded-2xl text-center ${isVisible ? "slide-in-left delay-100" : "opacity-0"}`}>
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-2">{rank.toLocaleString()}</h3>
            <p className="text-muted-foreground">Global Rank</p>
          </div>

          <div className={`glass-morphism p-6 rounded-2xl text-center ${isVisible ? "scale-in delay-300" : "opacity-0"}`}>
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-accent mb-2">{animatedCount.toLocaleString()}</h3>
            <p className="text-muted-foreground">Problems Solved</p>
          </div>

          <div className={`glass-morphism p-6 rounded-2xl text-center ${isVisible ? "slide-in-right delay-500" : "opacity-0"}`}>
            <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-blue-400 mb-2">{acceptanceRate.toFixed(1)}%</h3>
            <p className="text-muted-foreground">Acceptance Rate</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 glass-morphism p-6 rounded-2xl">
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-[220px] w-[220px] sm:h-[260px] sm:w-[260px]">
              <Doughnut data={donutData} options={donutOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">{totalSolved}</span>
                <span className="text-xs text-green-400">✓ Solved</span>
                <span className="text-sm text-zinc-400">7 Attempting</span>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm w-full max-w-xs">
              <div className="flex justify-between items-center bg-[#2b2b2b] px-4 py-2 rounded">
                <span className="text-[#3b82f6]">Easy</span>
                <span>{easy.solved}/{easy.total}</span>
              </div>
              <div className="flex justify-between items-center bg-[#2b2b2b] px-4 py-2 rounded">
                <span className="text-[#facc15]">Medium</span>
                <span>{medium.solved}/{medium.total}</span>
              </div>
              <div className="flex justify-between items-center bg-[#2b2b2b] px-4 py-2 rounded">
                <span className="text-[#ef4444]">Hard</span>
                <span>{hard.solved}/{hard.total}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6">
            <div>
              <h4 className="text-sm text-zinc-400 mb-1">Contest Rating</h4>
              <p className="text-3xl font-bold text-white mb-4">1,927</p>
              <div className="flex justify-between text-sm mb-4">
                <div>
                  <p className="text-zinc-400">Global Ranking</p>
                  <p className="text-white font-semibold">93,039<span className="text-zinc-500"> / 717,814</span></p>
                </div>
                <div>
                  <p className="text-zinc-400">Attended</p>
                  <p className="text-white font-semibold">5</p>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-[2/1] mt-4">
              {isVisible && <Line data={contestData} options={contestOptions} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
