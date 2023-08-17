export default function CalcContainer({ theme, children }) {
  return <div className={`container theme-${theme}`}>{children}</div>;
}
