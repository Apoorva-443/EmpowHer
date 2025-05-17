"use client";
import Link from "next/link";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// Sample products (added more for a richer UI)
const products = [
	{
		id: 1,
		name: "Handwoven Cotton Scarf",
		category: "Handicrafts",
		price: 599,
		location: "Rajasthan, India",
		img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
		desc: "Beautiful handwoven cotton scarf made with traditional techniques.",
		featured: true,
	},
	{
		id: 2,
		name: "Organic Spice Collection",
		category: "Food",
		price: 899,
		location: "Kerala, India",
		img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
		desc: "Set of premium organic Indian spices.",
		featured: true,
	},
	{
		id: 3,
		name: "Embroidered Cushion Cover",
		category: "Home Decor",
		price: 499,
		location: "Gujarat, India",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
		desc: "Hand-embroidered cushion cover with traditional designs.",
		featured: false,
	},
	{
		id: 4,
		name: "Terracotta Vase",
		category: "Handicrafts",
		price: 799,
		location: "West Bengal, India",
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
		desc: "Traditional terracotta vase, perfect for home decor.",
		featured: false,
	},
	{
		id: 5,
		name: "Bamboo Basket",
		category: "Handicrafts",
		price: 299,
		location: "Assam, India",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
		desc: "Eco-friendly handwoven bamboo basket.",
		featured: false,
	},
	{
		id: 6,
		name: "Silver Anklet",
		category: "Jewelry",
		price: 1200,
		location: "Tamil Nadu, India",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		desc: "Traditional silver anklet with intricate design.",
		featured: true,
	},
	{
		id: 7,
		name: "Block Printed Bedsheet",
		category: "Home Decor",
		price: 999,
		location: "Jaipur, India",
		img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
		desc: "Cotton bedsheet with traditional block print.",
		featured: false,
	},
	{
		id: 8,
		name: "Handmade Clay Earrings",
		category: "Jewelry",
		price: 350,
		location: "Odisha, India",
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
		desc: "Colorful handmade clay earrings.",
		featured: false,
	},
	{
		id: 9,
		name: "Organic Herbal Tea",
		category: "Food",
		price: 450,
		location: "Darjeeling, India",
		img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
		desc: "Refreshing organic herbal tea blend.",
		featured: false,
	},
	{
		id: 10,
		name: "Handloom Cotton Saree",
		category: "Clothing",
		price: 1800,
		location: "Andhra Pradesh, India",
		img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
		desc: "Elegant handloom cotton saree.",
		featured: true,
	},
];

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

function Profile({ onClick }) {
	return (
		<div
			className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 rounded-full shadow-lg cursor-pointer"
			onClick={onClick}
		>
			<span className="bg-white text-pink-600 rounded-full w-7 h-7 flex items-center justify-center font-bold">
				B
			</span>
			<span className="font-semibold hidden sm:block">Buyer</span>
		</div>
	);
}

export default function ProductPage() {
	const [theme, setTheme] = useState("light");
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [showSignIn, setShowSignIn] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);
	const [showProfile, setShowProfile] = useState(false);

	return (
	<div
			className={
				theme === "dark"
					? "flex min-h-screen flex-col bg-[#0a1026] text-white"
					: "flex min-h-screen flex-col bg-gradient-to-br from-pink-100 to-purple-100 text-gray-900"
			}
	>
			{/* Navbar */}
			<header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur">
				<div className="container mx-auto flex h-16 items-center justify-between px-4">
					<Link
						href="/"
						className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
					>
						EmpowHer
					</Link>
					<div className="flex items-center gap-4">
						<ThemeSwitcher theme={theme} setTheme={setTheme} />
						<Profile onClick={() => setShowProfile(true)} />
						<span
							className="text-2xl cursor-pointer"
							title="Shopping Cart"
						>
							🛒
						</span>
						<span
							className="text-2xl cursor-pointer"
							title="Shopping Bag"
						>
							🛍️
						</span>
					</div>
				</div>
			</header>
			<main className="flex-1">
				<section className="py-12 text-center">
					<h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
						Explore Categories
					</h1>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 max-w-4xl mx-auto">
						{[
							{ name: "Handicrafts", icon: "🧶" },
							{ name: "Clothing", icon: "👕" },
							{ name: "Jewelry", icon: "💍" },
							{ name: "Home Decor", icon: "🏠" },
							{ name: "Food", icon: "🍲" },
						].map((cat) => (
							<div
								key={cat.name}
								className="bg-white/10 rounded-xl p-4 flex flex-col items-center shadow hover:scale-105 transition cursor-pointer"
							>
								<span className="text-2xl mb-2">{cat.icon}</span>
								<span className="font-semibold">{cat.name}</span>
							</div>
						))}
					</div>
					{/* Filters and Search */}
					<div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
						{/* Filters */}
						<aside className="bg-white/10 rounded-xl p-6 w-full md:w-64 mb-4 md:mb-0">
							<div className="mb-4">
								<label className="block mb-1 font-semibold">
									Category
								</label>
								<select className="w-full rounded p-2 bg-white/20 text-white">
									<option>All Categories</option>
									<option>Handicrafts</option>
									<option>Clothing</option>
									<option>Jewelry</option>
									<option>Home Decor</option>
									<option>Food</option>
								</select>
							</div>
							<div className="mb-4">
								<label className="block mb-1 font-semibold">
									Price Range
								</label>
								<input
									type="range"
									min="0"
									max="5000"
									className="w-full"
								/>
								<div className="flex justify-between text-xs mt-1">
									<span>₹0</span>
									<span>₹5000</span>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-1 font-semibold">
									Sort By
								</label>
								<select className="w-full rounded p-2 bg-white/20 text-white">
									<option>Newest First</option>
									<option>Price: Low to High</option>
									<option>Price: High to Low</option>
								</select>
							</div>
							<div className="mb-4">
								<label className="block mb-1 font-semibold">
									Shipping Options
								</label>
								<div>
									<label className="flex items-center gap-2">
										<input
											type="checkbox"
											className="accent-pink-500"
										/>{" "}
										Local Pickup
									</label>
									<label className="flex items-center gap-2">
										<input
											type="checkbox"
											className="accent-pink-500"
											defaultChecked
										/>{" "}
										Domestic Shipping
									</label>
									<label className="flex items-center gap-2">
										<input
											type="checkbox"
											className="accent-pink-500"
										/>{" "}
										International Shipping
									</label>
								</div>
							</div>
							<button className="w-full mt-2 px-4 py-2 rounded bg-pink-500 text-white font-semibold">
								Reset Filters
							</button>
						</aside>
						{/* Product Grid */}
						<section className="flex-1">
							<div className="flex items-center mb-4 gap-2">
								<input
									type="text"
									placeholder="Search products..."
									className="flex-1 rounded px-3 py-2 bg-white/20 text-white"
								/>
								{/* Voice and Image Search Icons */}
								<button
									className="p-2 rounded-full bg-white/20 text-xl text-pink-500 hover:bg-pink-100"
									title="Voice Search"
								>
									<span role="img" aria-label="Voice Search">🎤</span>
								</button>
								<button
									className="p-2 rounded-full bg-white/20 text-xl text-pink-500 hover:bg-pink-100"
									title="Image Search"
								>
									<span role="img" aria-label="Image Search">📷</span>
								</button>
								<button className="px-3 py-2 rounded bg-pink-500 text-white font-semibold">
									Search
								</button>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{products.map((product) => (
									<div
										key={product.id}
										className="bg-white/10 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
										onClick={() => setSelectedProduct(product)}
									>
										<div className="relative">
											<img
												src={product.img}
												alt={product.name}
												className="w-full h-48 object-cover"
											/>
											{product.featured && (
												<span className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
													Featured
												</span>
											)}
										</div>
										<div className="p-4">
											<span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2 inline-block">
												{product.category}
											</span>
											<h3 className="font-bold text-lg mb-1">
												{product.name}
											</h3>
											<p className="text-sm mb-2">
												{product.desc}
											</p>
											<div className="flex items-center justify-between">
												<span className="text-pink-400 font-bold text-lg">
													₹{product.price}.00
												</span>
												<button
													className="px-3 py-1 rounded bg-pink-500 text-white text-sm font-semibold"
													onClick={(e) => {
														e.stopPropagation();
														setShowSignIn(true);
													}}
												>
													Add
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>
				</section>
			</main>
			{/* Product Detail Modal */}
			{selectedProduct && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
					<div className="bg-white rounded-2xl p-8 max-w-lg w-full text-gray-900 relative">
						<button
							className="absolute top-3 right-3 text-xl text-gray-400 hover:text-pink-500"
							onClick={() => setSelectedProduct(null)}
						>
							×
						</button>
						<img
							src={selectedProduct.img}
							alt={selectedProduct.name}
							className="w-full h-56 object-cover rounded-xl mb-4"
						/>
						<h2 className="text-2xl font-bold mb-2">
							{selectedProduct.name}
						</h2>
						<span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2 inline-block">
							{selectedProduct.category}
						</span>
						<p className="mb-2">{selectedProduct.desc}</p>
						<div className="mb-2 text-sm text-gray-600">
							{selectedProduct.location}
						</div>
						<div className="flex items-center justify-between mt-4">
							<span className="text-pink-500 font-bold text-xl">
								₹{selectedProduct.price}.00
							</span>
							<button
								className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:scale-105 transition"
								onClick={() => {
									setSelectedProduct(null);
									setShowSignIn(true);
								}}
							>
								Buy
							</button>
						</div>
					</div>
				</div>
			)}
			{/* Profile Modal */}
			{showProfile && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
					<div className="bg-white rounded-2xl p-8 max-w-xs w-full text-gray-900 relative">
						<button
							className="absolute top-3 right-3 text-xl text-gray-400 hover:text-pink-500"
							onClick={() => setShowProfile(false)}
						>
							×
						</button>
						<div className="flex flex-col items-center">
							<div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-3">
								<span className="bg-white text-pink-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
									B
								</span>
							</div>
							<h3 className="font-bold text-lg mb-1">Buyer</h3>
							<p className="text-sm text-gray-600 mb-2">buyer@email.com</p>
							<div className="text-xs text-gray-500 mb-2">Location: India</div>
							<div className="text-xs text-gray-500 mb-2">Member since: 2024</div>
							<button
								className="mt-3 px-4 py-2 rounded bg-pink-500 text-white font-semibold"
								onClick={() => setShowProfile(false)}
							>
								Close
							</button>
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
