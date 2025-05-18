export default function SignIn({ onSignUp, onClose, onSuccess }) {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-center">Sign In</h2>
            <input
                type="email"
                placeholder="Email"
                className="rounded px-3 py-2 border border-gray-300"
            />
            <input
                type="password"
                placeholder="Password"
                className="rounded px-3 py-2 border border-gray-300"
            />
            <button
                className="bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700"
                onClick={onSuccess}
            >
                Sign In
            </button>
            <div className="text-center text-sm">
                <span className="text-gray-600">Don't have an account? </span>
                <button
                    className="text-purple-600 font-semibold hover:text-purple-700"
                    onClick={onSignUp}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}