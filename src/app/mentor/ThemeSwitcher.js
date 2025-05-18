export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      className="px-4 py-2 rounded-full border border-pink-400 text-pink-600 font-semibold hover:bg-pink-100 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Switch theme"
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}