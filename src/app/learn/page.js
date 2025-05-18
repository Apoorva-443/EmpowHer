"use client";
import Link from "next/link";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const mentorChannels = [
	{
		id: 1,
		title: "Digital Marketing Mastery",
		mentor: "Priya Shah",
		subscribers: "2.5K",
		description: "Learn digital marketing strategies for small businesses",
		image: "/placeholder.svg",
		videos: [
			{
				id: 1,
				title: "Social Media Marketing Basics",
				duration: "15:30",
				views: "1.2K",
				thumbnail: "/placeholder.svg",
				description: "Introduction to social media marketing strategies",
			},
			// Add more videos...
		],
	},
	{
		id: 2,
		title: "Handicraft Business",
		mentor: "Meena Kumari",
		subscribers: "1.8K",
		description: "Traditional handicraft techniques and business tips",
		image: "/placeholder.svg",
		videos: [
			{
				id: 1,
				title: "Starting Your Craft Business",
				duration: "20:15",
				views: "950",
				thumbnail: "/placeholder.svg",
				description: "Guide to starting your handicraft business",
			},
			// Add more videos...
		],
	},
	{
		id: 3,
		title: "Financial Literacy",
		mentor: "Lakshmi Iyer",
		subscribers: "3.2K",
		description: "Personal finance and business accounting basics",
		image: "/placeholder.svg",
		videos: [
			{
				id: 1,
				title: "Business Accounting 101",
				duration: "18:45",
				views: "1.5K",
				thumbnail: "/placeholder.svg",
				description: "Basic accounting principles for small businesses",
			},
			// Add more videos...
		],
	},
	{
		id: 4,
		title: "Tech Skills",
		mentor: "Anjali Kumar",
		subscribers: "2.1K",
		description: "Basic tech skills for digital business",
		image: "/placeholder.svg",
		videos: [
			{
				id: 1,
				title: "Website Building Basics",
				duration: "22:10",
				views: "1.1K",
				thumbnail: "/placeholder.svg",
				description: "Learn to create your business website",
			},
			// Add more videos...
		],
	},
];

const domains = [
	{ id: 1, name: "Agriculture", icon: "🌾" },
	{ id: 2, name: "Technology", icon: "💻" },
	{ id: 3, name: "Finance", icon: "💰" },
	{ id: 4, name: "Healthcare", icon: "⚕️" },
	{ id: 5, name: "Artworks", icon: "🎨" },
	{ id: 6, name: "Embroidery", icon: "🧵" },
	{ id: 7, name: "Food", icon: "🍳" },
	{ id: 8, name: "Beauty", icon: "💄" },
];

function ThemeSwitcher({ theme, setTheme }) {
	return (
		<button
			aria-label="Toggle Theme"
			className="rounded-full p-2 bg-gradient-to-tr from-yellow-400 to-pink-500 shadow-lg text-white"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			{theme === "light" ? "🌙" : "☀"}
		</button>
	);
}

export default function LearnPage() {
	// Add theme state
	const [theme, setTheme] = useState("light");
	const [selectedChannel, setSelectedChannel] = useState(null);
	const [showSignIn, setShowSignIn] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentDomainSlide, setCurrentDomainSlide] = useState(0);
	const [selectedDomain, setSelectedDomain] = useState(null);

	// Add this sample data for domain videos
	const domainVideos = {
		Agriculture: [
			{
				id: 1,
				title: "Organic Farming Basics",
				thumbnail: "/placeholder.svg",
				duration: "15:30",
				views: "1.2K",
				description: "Learn the fundamentals of organic farming",
			},
			{
				id: 2,
				title: "Sustainable Agriculture",
				thumbnail: "/placeholder.svg",
				duration: "18:45",
				views: "980",
				description: "Sustainable farming practices for better yield",
			},
		],
		Technology: [
			{
				id: 1,
				title: "Introduction to AI",
				thumbnail: "/placeholder.svg",
				duration: "12:30",
				views: "2.1K",
				description: "Basics of artificial intelligence and machine learning",
			},
			{
				id: 2,
				title: "Web Development 101",
				thumbnail: "/placeholder.svg",
				duration: "25:10",
				views: "1.8K",
				description: "Learn the fundamentals of web development",
			},
		],
		Finance: [
			{
				id: 1,
				title: "Investing for Beginners",
				thumbnail: "/placeholder.svg",
				duration: "30:00",
				views: "1.5K",
				description: "Introduction to investing in the stock market",
			},
			{
				id: 2,
				title: "Understanding Cryptocurrencies",
				thumbnail: "/placeholder.svg",
				duration: "28:15",
				views: "1.2K",
				description: "A beginner's guide to cryptocurrencies and blockchain",
			},
		],
		Healthcare: [
			{
				id: 1,
				title: "Nutrition Basics",
				thumbnail: "/placeholder.svg",
				duration: "20:00",
				views: "1.3K",
				description: "Learn the fundamentals of nutrition and healthy eating",
			},
			{
				id: 2,
				title: "Mental Health Awareness",
				thumbnail: "/placeholder.svg",
				duration: "18:30",
				views: "1.1K",
				description: "Understanding mental health and wellness",
			},
		],
		Artworks: [
			{
				id: 1,
				title: "Watercolor Painting for Beginners",
				thumbnail: "/placeholder.svg",
				duration: "22:45",
				views: "900",
				description: "Introduction to watercolor painting techniques",
			},
			{
				id: 2,
				title: "Digital Art Fundamentals",
				thumbnail: "/placeholder.svg",
				duration: "24:10",
				views: "850",
				description: "Learn the basics of digital art creation",
			},
		],
		Embroidery: [
			{
				id: 1,
				title: "Embroidery Stitches 101",
				thumbnail: "/placeholder.svg",
				duration: "19:20",
				views: "700",
				description: "Basic embroidery stitches and techniques",
			},
			{
				id: 2,
				title: "Creating Embroidery Patterns",
				thumbnail: "/placeholder.svg",
				duration: "21:15",
				views: "650",
				description: "How to create your own embroidery patterns",
			},
		],
		Food: [
			{
				id: 1,
				title: "Baking Basics",
				thumbnail: "/placeholder.svg",
				duration: "25:30",
				views: "1.4K",
				description: "Learn the fundamentals of baking delicious goods",
			},
			{
				id: 2,
				title: "Healthy Cooking Tips",
				thumbnail: "/placeholder.svg",
				duration: "27:10",
				views: "1.1K",
				description: "Tips for cooking healthy and tasty meals",
			},
		],
		Beauty: [
			{
				id: 1,
				title: "Skincare Routine 101",
				thumbnail: "/placeholder.svg",
				duration: "15:45",
				views: "1.3K",
				description: "Basics of a good skincare routine",
			},
			{
				id: 2,
				title: "Makeup Application for Beginners",
				thumbnail: "/placeholder.svg",
				duration: "20:30",
				views: "1.0K",
				description: "Learn the basics of makeup application",
			},
		],
	};

	const handleVideoClick = () => {
		setShowSignIn(true);
	};

	// Add this handler function
	const handleDomainClick = (domain) => {
		setSelectedDomain(domain);
	};

	// Update the SignIn component to handle successful login
	const handleSignInSuccess = () => {
		setShowSignIn(false);
		// If there's a selected domain, show its content
		if (selectedDomain) {
			handleDomainClick(selectedDomain);
		}
	};

	const getDomainColor = (domain) => {
		const colors = {
			Agriculture: "bg-green-200",
			Technology: "bg-blue-200",
			Finance: "bg-yellow-200",
			Healthcare: "bg-red-200",
			Artworks: "bg-purple-200",
			Embroidery: "bg-pink-200",
			Food: "bg-orange-200",
			Beauty: "bg-rose-200",
		};
		return colors[domain] || "bg-gray-200";
	};

	const getDomainIcon = (domain) => {
		const icons = {
			Agriculture: "🌾",
			Technology: "💻",
			Finance: "💰",
			Healthcare: "⚕️",
			Artworks: "🎨",
			Embroidery: "🧵",
			Food: "🍳",
			Beauty: "💄",
		};
		return icons[domain] || "📚";
	};

	return (
		<div
			className={
				theme === "dark"
					? "min-h-screen bg-[#0a1026] text-gray-100" // Changed from text-white
					: "min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 text-gray-900"
			}
		>
			{/* Update header background for dark mode */}
			<header
				className={`w-full py-6 shadow ${
					theme === "dark" ? "bg-[#1a2236]" : "bg-white"
				}`}
			>
				<div className="container mx-auto flex items-center justify-between px-8 md:px-12">
					<Link
						href="/"
						className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
					>
						EmpowHer
					</Link>
					<div className="flex items-center gap-4">
						<ThemeSwitcher theme={theme} setTheme={setTheme} />
						<nav className="hidden md:flex gap-6">
							<Link
								href="/learn"
								className="text-purple-600 font-bold"
							>
								Learn
							</Link>
							<Link
								href="/mentor"
								className="hover:text-pink-500 font-semibold"
							>
								Mentor
							</Link>
							<Link
								href="/seller"
								className="hover:text-pink-500 font-semibold"
							>
								Sell
							</Link>
							<Link
								href="/product"
								className="hover:text-pink-500 font-semibold"
							>
								Buy
							</Link>
						</nav>
					</div>
				</div>
			</header>

			<main className="container mx-auto px-8 md:px-12 py-12">
				{/* Hero Section */}
				<section className="text-center mb-20">
					<h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
						Develop Your Skills
					</h1>

					<h2
						className={`text-2xl font-bold mb-8 ${
							theme === "dark" ? "text-purple-400" : "text-purple-600"
						}`}
					>
						Content to Explore
					</h2>

					{/* Update domain buttons for dark mode */}
					<div className="relative max-w-4xl mx-auto mb-16">
						<div className="flex justify-center gap-8">
							{domains
								.slice(currentDomainSlide, currentDomainSlide + 4)
								.map((domain) => (
									<button
										key={domain.id}
										className={`px-8 py-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 flex items-center gap-3
                                            ${theme === "dark" ? "bg-[#1a2236] text-gray-100" : "bg-white text-gray-700"}`}
										onClick={() => handleDomainClick(domain.name)} // Add onClick handler
									>
										<span className="text-2xl">{domain.icon}</span>
										<span className="font-bold">{domain.name}</span>
									</button>
								))}
						</div>

						{/* Domain Navigation Arrows */}
						{currentDomainSlide > 0 && (
							<button
								className={`absolute left-[-40] top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-300 ${
									theme === "dark"
										? "bg-[#1a2236]/90 text-purple-400 hover:bg-[#1a2236]"
										: "bg-white/90 text-purple-600 hover:bg-white"
								}`}
								onClick={() =>
									setCurrentDomainSlide(Math.max(0, currentDomainSlide - 1))
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2.5}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</button>
						)}
						{currentDomainSlide < domains.length - 4 && (
							<button
								className={`absolute right-[-40] top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-300 ${
									theme === "dark"
										? "bg-[#1a2236]/90 text-purple-400 hover:bg-[#1a2236]"
										: "bg-white/90 text-purple-600 hover:bg-white"
								}`}
								onClick={() =>
									setCurrentDomainSlide(
										Math.min(domains.length - 4, currentDomainSlide + 1)
									)
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2.5}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>
						)}
					</div>

					<p
						className={`text-xl max-w-2xl mx-auto font-medium ${
							theme === "dark" ? "text-gray-300" : "text-gray-600"
						}`}
					>
						Unlock your potential with expert-led courses and workshops. Join our
						community of learners and achieve your goals.
					</p>
				</section>

				{/* Domain Videos Page */}
				{selectedDomain && (
					<section className="mb-20">
						<button
							onClick={() => setSelectedDomain(null)}
							className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
								theme === "dark"
									? "bg-[#1a2236]/50 text-purple-400 hover:bg-[#1a2236]/80"
									: "bg-white/50 text-purple-600 hover:bg-white/80"
							} backdrop-blur-sm shadow-sm hover:scale-105`}
						>
							<span className="text-lg">←</span>
							<span className="font-medium">Back to Domains</span>
						</button>
						<h2
							className={`text-3xl font-bold mb-8 ${
								theme === "dark" ? "text-purple-400" : "text-purple-600"
							}`}
						>
							{selectedDomain} Courses
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{domainVideos[selectedDomain]?.map((video) => (
								<div
									key={video.id}
									className={`rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition
            ${theme === "dark" ? "bg-[#1a2236]" : "bg-white"}`}
									onClick={handleVideoClick}
								>
									<div className={`w-full h-48 ${getDomainColor(selectedDomain)} bg-opacity-20 flex items-center justify-center`}>
										{video.thumbnail ? (
											<img
												src={video.thumbnail}
												alt={video.title}
												className="w-full h-full object-cover"
											/>
										) : (
											<span className="text-4xl opacity-30">
												{getDomainIcon(selectedDomain)}
											</span>
										)}
									</div>
									<div className="p-4">
										<h3
											className={`font-bold text-lg mb-2 ${
												theme === "dark" ? "text-gray-100" : "text-gray-900"
											}`}
										>
											{video.title}
										</h3>
										<p
											className={`text-sm mb-2 ${
												theme === "dark" ? "text-gray-400" : "text-gray-600"
											}`}
										>
											{video.description}
										</p>
										<div className="flex items-center justify-between text-sm text-gray-500">
											<span>{video.duration}</span>
											<span>{video.views} views</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Video Grid */}
				{selectedChannel && (
					<section className="mb-20">
						<button
							onClick={() => setSelectedChannel(null)}
							className="mb-6 flex items-center text-purple-600 hover:text-purple-700"
						>
							← Back to Channels
						</button>
						<h2 className="text-2xl font-bold mb-6 text-purple-600">
							{selectedChannel.title} Videos
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{selectedChannel.videos.map((video) => (
								<div
									key={video.id}
									className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
									onClick={handleVideoClick}
								>
									<div className={`w-full h-48 ${getDomainColor(selectedDomain)} bg-opacity-20 flex items-center justify-center`}>
										{video.thumbnail ? (
											<img
												src={video.thumbnail}
												alt={video.title}
												className="w-full h-full object-cover"
											/>
										) : (
											<span className="text-4xl opacity-30">
												{getDomainIcon(selectedDomain)}
											</span>
										)}
									</div>
									<div className="p-4">
										<h3 className="font-bold text-lg mb-2">
											{video.title}
										</h3>
										<p className="text-gray-600 text-sm mb-2">
											{video.description}
										</p>
										<div className="flex items-center justify-between text-sm text-gray-500">
											<span>{video.duration}</span>
											<span>{video.views} views</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Channel Cards Section - Moved to bottom */}
				{!selectedDomain && !selectedChannel && (
					<section className="relative">
						<h2
							className={`text-4xl font-extrabold text-center mb-12 ${
								theme === "dark" ? "text-purple-400" : "text-purple-600"
							}`}
						>
							Featured Channels
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{mentorChannels
								.slice(currentSlide, currentSlide + 4)
								.map((channel) => (
									<div
										key={channel.id}
										className={`rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300
                                            ${theme === "dark" ? "bg-[#1a2236]" : "bg-white"}`}
										onClick={() => setSelectedChannel(channel)}
									>
										<img
											src={channel.image}
											alt={channel.title}
											className="w-full h-48 object-cover"
										/>
										<div className="p-6">
											<h3
												className={`font-bold text-xl mb-2 ${
													theme === "dark" ? "text-purple-400" : "text-purple-600"
												}`}
											>
												{channel.title}
											</h3>
											<p
												className={
													theme === "dark"
														? "text-gray-300 mb-4"
														: "text-gray-600 mb-4"
												}
											>
												{channel.description}
											</p>
											<div className="flex items-center justify-between">
												<span
													className={
														theme === "dark" ? "text-gray-400" : "text-gray-500"
													}
												>
													by {channel.mentor}
												</span>
												<span
													className={`text-sm font-semibold ${
														theme === "dark"
															? "text-purple-400"
															: "text-purple-500"
													}`}
												>
													{channel.subscribers} subscribers
												</span>
											</div>
										</div>
									</div>
								))}
						</div>
						{/* Navigation Arrows */}
						{currentSlide > 0 && (
							<button
								className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-300 ${
									theme === "dark"
										? "bg-[#1a2236]/90 text-purple-400 hover:bg-[#1a2236]"
										: "bg-white/90 text-purple-600 hover:bg-white"
								}`}
								onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2.5}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</button>
						)}
						{currentSlide < mentorChannels.length - 4 && (
							<button
								className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-300 ${
									theme === "dark"
										? "bg-[#1a2236]/90 text-purple-400 hover:bg-[#1a2236]"
										: "bg-white/90 text-purple-600 hover:bg-white"
								}`}
								onClick={() => setCurrentSlide(Math.min(mentorChannels.length - 4, currentSlide + 1))}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2.5}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>
						)}
					</section>
				)}
			</main>

			{/* Sign In Modal */}
			{showSignIn && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
					<div className="bg-white rounded-2xl p-8 max-w-sm w-full relative">
						<button
							className="absolute top-3 right-3 text-xl text-gray-400 hover:text-purple-500"
							onClick={() => {
								setShowSignIn(false);
								setSelectedDomain(null);
							}}
						>
							×
						</button>
						<SignIn
							onSignUp={() => {
								setShowSignIn(false);
								setShowSignUp(true);
							}}
							onClose={() => {
								setShowSignIn(false);
								setSelectedDomain(null);
							}}
							onSuccess={handleSignInSuccess}
						/>
					</div>
				</div>
			)}

			{/* Sign Up Modal */}
			{showSignUp && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
					<div className="bg-white rounded-2xl p-8 max-w-sm w-full relative">
						<button
							className="absolute top-3 right-3 text-xl text-gray-400 hover:text-purple-500"
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