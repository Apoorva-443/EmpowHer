"use client";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Sample data for the graph (views over last 10 days)
const graphData = [
  { date: "Apr 19", views: 0 },
  { date: "Apr 24", views: 500 },
  { date: "Apr 28", views: 1200 },
  { date: "May 3", views: 3000 },
  { date: "May 7", views: 800 },
  { date: "May 12", views: 2500 },
  { date: "May 16", views: 1800 },
];

// Sample top content (use your mentorVideos sample)
const mentorVideos = [
  {
    id: 1,
    title: "Digital Skills for Beginners",
    views: 1095,
    thumbnail: "",
  },
  {
    id: 2,
    title: "Traditional Crafts to Modern Business",
    views: 134,
    thumbnail: "",
  },
  {
    id: 3,
    title: "Effective Communication Skills",
    views: 5,
    thumbnail: "",
  },
];

export default function ChannelAnalytics() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={
        theme === "dark"
          ? "min-h-screen flex flex-col items-center py-10 px-2 bg-[#0a1026] text-white"
          : "min-h-screen flex flex-col items-center py-10 px-2 bg-gradient-to-br from-pink-100 to-purple-100 text-gray-900"
      }
    >
      <div
        className={
          "w-full max-w-3xl rounded-2xl shadow-lg p-8 " +
          (theme === "dark"
            ? "bg-[#181c2a] text-white"
            : "bg-white text-gray-900")
        }
      >
        <div className="flex justify-end mb-4">
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </div>
        <h1 className="text-3xl font-extrabold mb-2 text-pink-600">
          Channel analytics
        </h1>
        <div className="flex gap-8 border-b pb-2 mb-6">
          <button className="border-b-2 border-pink-500 font-semibold text-pink-600 pb-1 px-2">
            Overview
          </button>
          <button className="text-gray-500 hover:text-pink-600 pb-1 px-2">
            Content
          </button>
          <button className="text-gray-500 hover:text-pink-600 pb-1 px-2">
            Audience
          </button>
          <button className="text-gray-500 hover:text-pink-600 pb-1 px-2">
            Trends
          </button>
        </div>
        <div className="text-2xl font-bold text-center mb-8">
          Your channel got{" "}
          <span className="text-pink-600">10,974 views</span> in the last 28 days
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={theme === "dark"
            ? "bg-[#23263a] rounded-xl p-4 flex flex-col items-center shadow text-white"
            : "bg-pink-50 rounded-xl p-4 flex flex-col items-center shadow text-gray-900"}>
            <div className="text-lg font-semibold">Views</div>
            <div className="text-2xl font-bold text-pink-600">11.0K</div>
            <div className="text-xs text-green-600 mt-1">&uarr; 999% more</div>
          </div>
          <div className={theme === "dark"
            ? "bg-[#23263a] rounded-xl p-4 flex flex-col items-center shadow text-white"
            : "bg-pink-50 rounded-xl p-4 flex flex-col items-center shadow text-gray-900"}>
            <div className="text-lg font-semibold">Watch time (hours)</div>
            <div className="text-2xl font-bold text-pink-600">10.5</div>
            <div className="text-xs text-green-600 mt-1">&uarr; 999% more</div>
          </div>
          <div className={theme === "dark"
            ? "bg-[#23263a] rounded-xl p-4 flex flex-col items-center shadow text-white"
            : "bg-pink-50 rounded-xl p-4 flex flex-col items-center shadow text-gray-900"}>
            <div className="text-lg font-semibold">Subscribers</div>
            <div className="text-2xl font-bold text-pink-600">+18</div>
            <div className="text-xs text-green-600 mt-1">&uarr; 999% more</div>
          </div>
        </div>
        {/* Graph */}
        <div className={theme === "dark"
          ? "bg-[#23263a] rounded-xl p-6 mb-8 shadow text-white"
          : "bg-gray-50 rounded-xl p-6 mb-8 shadow text-gray-900"}>
          <div className="font-semibold mb-2">Views in last 28 days</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme === "dark" ? "#444" : "#e5e7eb"} />
              <XAxis dataKey="date" tick={{ fill: theme === "dark" ? "#fff" : "#a0aec0", fontSize: 12 }} />
              <YAxis tick={{ fill: theme === "dark" ? "#fff" : "#a0aec0", fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  background: theme === "dark" ? "#23263a" : "#fff",
                  color: theme === "dark" ? "#fff" : "#000",
                  borderRadius: 8,
                  border: "none",
                }}
              />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#ec4899"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={theme === "dark"
          ? "bg-[#23263a] rounded-xl p-6 mb-8 shadow flex flex-col md:flex-row md:items-center md:justify-between text-white"
          : "bg-gray-50 rounded-xl p-6 mb-8 shadow flex flex-col md:flex-row md:items-center md:justify-between text-gray-900"}>
          <div>
            <div className="font-semibold mb-2">Realtime</div>
            <div className="flex items-center gap-4">
              <div>
                <div className="text-sm">Subscribers</div>
                <div className="text-lg font-bold text-pink-600">92</div>
              </div>
              <div>
                <div className="text-sm">Views (48h)</div>
                <div className="text-lg font-bold text-pink-600">1,238</div>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-pink-600 transition">
              See live count
            </button>
          </div>
        </div>
        {/* Top Content */}
        <div className="mb-8">
          <div className="font-semibold mb-2">Top content</div>
          <div className="space-y-2">
            {mentorVideos.map((video) => (
              <div
                key={video.id}
                className={theme === "dark"
                  ? "flex items-center justify-between bg-[#181c2a] rounded-lg shadow p-2 text-white"
                  : "flex items-center justify-between bg-white rounded-lg shadow p-2 text-gray-900"}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                  <span className="text-sm truncate max-w-xs">
                    {video.title}
                  </span>
                </div>
                <span className="text-pink-600 font-bold">{video.views}</span>
              </div>
            ))}
          </div>
          <button className={theme === "dark"
            ? "mt-4 bg-[#23263a] hover:bg-pink-900 text-white font-semibold px-4 py-2 rounded-full transition"
            : "mt-4 bg-gray-200 hover:bg-pink-100 text-gray-700 font-semibold px-4 py-2 rounded-full transition"}>
            See more
          </button>
        </div>
        <div className="text-right text-xs text-gray-400">
          Apr 19 – May 16, 2025 &nbsp; | &nbsp; Last 28 days
        </div>
      </div>
    </div>
  );
}