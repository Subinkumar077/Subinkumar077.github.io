"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export default function ContributionGraph() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(true);
        } else {
          setData(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const getColorClass = (count: number) => {
    if (count === 0) return "bg-[#161616]";
    if (count <= 2) return "bg-green-300"; // Light (Low contributions)
    if (count <= 5) return "bg-green-400";
    if (count <= 10) return "bg-green-600";
    return "bg-green-800"; // Dark (High contributions)
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Fallback to simulated data if loading or error
  if (loading || error || !data) {
    const weeks = 53;
    const days = 7;
    // Use a static grid for loading state to avoid hydration mismatch
    const grid = Array.from({ length: weeks }, () =>
      Array.from({ length: days }, () => "bg-[#161616]")
    );

    return (
      <section className="mt-20 lg:pl-12 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex justify-between text-xs font-geist text-neutral-600 mb-2 px-1">
          {months.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex gap-1">
            {grid.map((week, i) => (
              <div key={i} className="flex flex-col gap-1">
                {week.map((colorClass, j) => (
                  <div
                    key={j}
                    className={`w-3 h-3 rounded-[1px] ${colorClass}`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 text-xs font-geist text-neutral-600">
          <span>
            {loading
              ? "Loading..."
              : error
              ? "Unable to load data"
              : "1,842 contributions"}
          </span>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-[1px] bg-[#161616]"></div>
              <div className="w-3 h-3 rounded-[1px] bg-green-300"></div>
              <div className="w-3 h-3 rounded-[1px] bg-green-400"></div>
              <div className="w-3 h-3 rounded-[1px] bg-green-600"></div>
              <div className="w-3 h-3 rounded-[1px] bg-green-800"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-20 lg:pl-12 opacity-80 hover:opacity-100 transition-opacity">
      <div className="flex justify-between text-xs font-geist text-neutral-600 mb-2 px-1">
        {months.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-1">
          {data.weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-1">
              {week.contributionDays.map((day, j) => (
                <div
                  key={j}
                  className={`w-3 h-3 rounded-[1px] ${getColorClass(
                    day.contributionCount
                  )}`}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-xs font-geist text-neutral-600">
        <span>{data.totalContributions.toLocaleString()} contributions</span>
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-[1px] bg-[#161616]"></div>
            <div className="w-3 h-3 rounded-[1px] bg-green-300"></div>
            <div className="w-3 h-3 rounded-[1px] bg-green-400"></div>
            <div className="w-3 h-3 rounded-[1px] bg-green-600"></div>
            <div className="w-3 h-3 rounded-[1px] bg-green-800"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
