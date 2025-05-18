export default function SignUp({ onSignIn, onClose }) {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <input
                type="text"
                placeholder="Full Name"
                className="rounded px-3 py-2 border border-yellow-300"
            />
            <input
                type="email"
                placeholder="Email"
                className="rounded px-3 py-2 border border-yellow-300"
            />
            <input
                type="password"
                placeholder="Password"
                className="rounded px-3 py-2 border border-yellow-300"
            />
            <input
                type="password"
                placeholder="Confirm Password"
                className="rounded px-3 py-2 border border-yellow-300"
            />
            <button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 rounded hover:opacity-90"
                onClick={onClose}
            >
                Sign Up
            </button>
            <div className="text-center text-sm">
                <span className="text-gray-600">Already have an account? </span>
                <button
                    className="text-yellow-600 font-semibold hover:text-yellow-700"
                    onClick={onSignIn}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}