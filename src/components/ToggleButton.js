export default function ToggleButton({ theme, handleTheme }) {
  return (
    <div className="toggle">
      <button
        className={`toggle__btn${theme === 1 ? " active" : ""}`}
        onClick={handleTheme}
      >
        <span>1</span>
      </button>
      <button
        className={`toggle__btn${theme === 2 ? " active" : ""}`}
        onClick={handleTheme}
      >
        <span>2</span>
      </button>
      <button
        className={`toggle__btn${theme === 3 ? " active" : ""}`}
        onClick={handleTheme}
      >
        <span>3</span>
      </button>
    </div>
  );
}
