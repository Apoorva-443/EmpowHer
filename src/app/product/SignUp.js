export default function SignUp({ onSignIn, onClose }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-pink-600">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border rounded px-3 py-2" />
        <input type="email" placeholder="Email" className="border rounded px-3 py-2" />
        <input type="password" placeholder="Password" className="border rounded px-3 py-2" />
        <button type="submit" className="bg-pink-500 text-white rounded px-4 py-2 font-semibold">Sign Up</button>
      </form>
      <div className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <button className="text-pink-500 font-semibold" onClick={onSignIn}>Sign In</button>
      </div>
    </div>
  );
}