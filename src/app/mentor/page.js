"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ChannelAnalytics from "./ChannelAnalytics";

function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      aria-label="Toggle Theme"
      className="rounded-full p-2 bg-gradient-to-tr from-yellow-400 to-pink-500 shadow-lg text-white"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

function Profile({ onProfileClick }) {
  return (
    <button
      onClick={onProfileClick}
      className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      <span className="bg-white text-pink-600 rounded-full w-7 h-7 flex items-center justify-center font-bold">E</span>
      <span className="font-semibold hidden sm:block">Mentor</span>
    </button>
  );
}

export default function MentorPage() {
  const router = useRouter();
  const [theme, setTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeSection, setActiveSection] = useState("uploadedVideos");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const mentorVideos = [
    {
      id: 1,
      title: "Digital Skills for Beginners",
      thumbnail: "/thumbnails/digital-skills.jpg",
      views: 1200,
      likes: 300,
      duration: "1:30:00",
      category: "Digital Marketing",
    },
    {
      id: 2,
      title: "Financial Planning for Women",
      thumbnail: "/thumbnails/financial-planning.jpg",
      views: 900,
      likes: 250,
      duration: "1:00:00",
      category: "Financial Skills",
    },
    {
      id: 3,
      title: "Traditional Crafts to Modern Business",
      thumbnail: "/thumbnails/crafts-business.jpg",
      views: 1500,
      likes: 400,
      duration: "2:00:00",
      category: "Entrepreneurship",
    },
    {
      id: 4,
      title: "Organic Farming Techniques",
      thumbnail: "/thumbnails/organic-farming.jpg",
      views: 1100,
      likes: 350,
      duration: "1:45:00",
      category: "Agriculture",
    },
    {
      id: 5,
      title: "Effective Communication Skills",
      thumbnail: "/thumbnails/communication-skills.jpg",
      views: 1300,
      likes: 450,
      duration: "1:15:00",
      category: "Personal Development",
    },
    {
      id: 6,
      title: "Health and Wellness for Women",
      thumbnail: "/thumbnails/health-wellness.jpg",
      views: 1400,
      likes: 500,
      duration: "1:10:00",
      category: "Health",
    },
  ];

  const mentorDetails = {
    name: "Emily Johnson",
    expertise: "Digital Marketing & Business Skills",
    totalVideos: 6,
    totalViews: 7300,
    totalLikes: 2200,
    joinedDate: "March 2024",
    bio: "Helping women entrepreneurs master digital skills and grow their businesses"
  };

  const handleAuthAction = () => {
    setShowSignIn(true);
  };

  const handleLogin = () => {
    router.push("/mentor/signup");
  };

  const handleProfileClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className={theme === "dark" ? "flex min-h-screen flex-col bg-[#0a1026] text-white" : "flex min-h-screen flex-col bg-gradient-to-br from-pink-100 to-purple-100 text-gray-900"}>
      {/* Header with improved navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            EmpowHer
          </Link>
          <div className="flex items-center gap-4">
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 rounded-full hover:bg-gray-700/50"
              >
                ⋮
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
                  <button onClick={() => handleAuthAction("profile")} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                    Profile
                  </button>
                  <button onClick={() => handleAuthAction("settings")} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                    Settings
                  </button>
                  <button onClick={() => setShowAnalytics(true)} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                    Channel Analytics
                  </button>
                </div>
              )}
            </div>
            <Profile onProfileClick={handleProfileClick} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 text-center">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Mentor Dashboard
          </h1>
          
          {/* Dashboard Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveSection("uploadedVideos")}
              className={`px-6 py-3 rounded-full font-semibold ${
                activeSection === "uploadedVideos"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "bg-white border border-pink-400 text-pink-600"
              }`}
            >
              Uploaded Videos
            </button>
            <button
              onClick={() => setActiveSection("uploadNewVideo")}
              className={`px-6 py-3 rounded-full font-semibold ${
                activeSection === "uploadNewVideo"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "bg-white border border-pink-400 text-pink-600"
              }`}
            >
              Upload New Video
            </button>
          </div>

          {/* Content Sections */}
          {activeSection === "uploadedVideos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mentorVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start">
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-4">
                    {/* Video thumbnail placeholder */}
                  </div>
                  <span className="mb-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold">
                    {video.category}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500 mb-4">
                    <span>👁️ {video.views}</span>
                    <span>❤️ {video.likes}</span>
                    <span>⏱️ {video.duration}</span>
                  </div>
                  <button
                    onClick={() => handleAuthAction("edit")}
                    className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition"
                  >
                    Edit Video
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeSection === "uploadNewVideo" && (
            <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-pink-600">Upload New Video</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Video File
                </label>
                <input
                  type="file"
                  accept="video/*"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter video description..."
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories/Hashtags
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="#DigitalSkills #Entrepreneurship"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAuthAction("upload");
                }}
                className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition"
              >
                Upload Video
              </button>
            </form>
          )}

          {activeSection === "analytics" && (
            <ChannelAnalytics />
          )}
        </section>
      </main>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-8">
            <p className="mb-4 text-gray-600 text-center">Please log in to access this feature.</p>
            <div className="flex gap-4">
              <button
                onClick={handleLogin}
                className="flex-1 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold"
              >
                Login
              </button>
              <button
                onClick={() => setShowLoginModal(false)}
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-pink-600">Mentor Profile</h2>
              <button
                onClick={() => setShowProfileModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-1">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl font-bold text-pink-600">
                      {mentorDetails.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{mentorDetails.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Joined {mentorDetails.joinedDate}
                  </p>
                </div>
              </div>
              <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4">
                <p className="text-gray-600 dark:text-gray-300">{mentorDetails.bio}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Videos</p>
                  <p className="text-xl font-semibold">{mentorDetails.totalVideos}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Views</p>
                  <p className="text-xl font-semibold">{mentorDetails.totalViews}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Likes</p>
                  <p className="text-xl font-semibold">{mentorDetails.totalLikes}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Expertise</p>
                  <p className="text-xl font-semibold">{mentorDetails.expertise}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-gray-900 relative">
            <button
              className="absolute top-3 right-3 text-xl text-gray-400 hover:text-pink-500"
              onClick={() => setShowSignIn(false)}
            >
              ×
            </button>
            <SignIn
              onSignUp={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
              onClose={() => setShowSignIn(false)}
            />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-gray-900 relative">
            <button
              className="absolute top-3 right-3 text-xl text-gray-400 hover:text-pink-500"
              onClick={() => setShowSignUp(false)}
            >
              ×
            </button>
            <SignUp
              onSignIn={() => {
                setShowSignUp(false);
                setShowSignIn(true);
              }}
              onClose={() => setShowSignUp(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

