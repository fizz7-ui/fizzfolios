import { useEffect, useState } from "react";
import { Trophy, Target, TrendingUp } from "lucide-react";

// Define types for your state
type DifficultyStats = {
  solved: number;
  total: number;
};

export const LeetCodeStats = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animatedCount, setAnimatedCount] = useState<number>(0);

  // Static data
  const totalProblems: number = 3616;
  const solvedProblems: number = 1054;
  const rank: number = 18277;

  useEffect(() => {
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

  const progressPercentage: number = (solvedProblems / totalProblems) * 100;

  return (
    <section
      id="leetcode"
      className="py-24 px-4 bg-gradient-to-br from-secondary/10 to-primary/5"
    >
      <div className="container mx-auto">
        <div
          className={`text-center mb-20 ${
            isVisible ? "slide-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              LEETCODE MASTERY
            </span>
          </h2>
          <p className="text-2xl text-accent/80 max-w-4xl mx-auto leading-relaxed">
            Relentlessly honing algorithmic thinking and problem-solving skills
            through systematic practice.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div
              className={`glass-morphism p-6 rounded-2xl text-center ${
                isVisible ? "slide-in-left delay-100" : "opacity-0"
              }`}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">
                {rank.toLocaleString()}
              </h3>
              <p className="text-muted-foreground">Global Rank</p>
            </div>

            <div
              className={`glass-morphism p-6 rounded-2xl text-center ${
                isVisible ? "scale-in delay-300" : "opacity-0"
              }`}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">
                {animatedCount}
              </h3>
              <p className="text-muted-foreground">Problems Solved</p>
            </div>

            <div
              className={`glass-morphism p-6 rounded-2xl text-center ${
                isVisible ? "slide-in-right delay-500" : "opacity-0"
              }`}
            >
              <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">
                {progressPercentage.toFixed(1)}%
              </h3>
              <p className="text-muted-foreground">Completion Rate</p>
            </div>
          </div>

          {/* Progress Visualization */}
          <div
            className={`glass-morphism p-8 rounded-2xl ${
              isVisible ? "slide-in-up delay-700" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Problem Solving Progress
            </h3>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Problems Solved</span>
                <span>
                  {solvedProblems} / {totalProblems}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-2000 ease-out"
                  style={{
                    width: isVisible ? `${progressPercentage}%` : "0%",
                    transition: "width 2s ease-out",
                  }}
                ></div>
              </div>
            </div>

            {/* Visual Chart */}
            <div className="grid grid-cols-12 gap-1 max-w-2xl mx-auto">
              {Array.from({ length: totalProblems }, (_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-sm transition-all duration-1000 ${
                    index < solvedProblems
                      ? "bg-gradient-primary"
                      : "bg-muted/30"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${(index / solvedProblems) * 2}s`
                      : "0s",
                  }}
                ></div>
              ))}
            </div>

            <div className="flex justify-between mt-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <div className="w-3 h-3 bg-gradient-primary rounded mr-2"></div>
                Solved ({solvedProblems})
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-muted/30 rounded mr-2"></div>
                Remaining ({totalProblems - solvedProblems})
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
