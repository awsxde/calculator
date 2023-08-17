export default function Info({ children }) {
  return (
    <div className="info">
      <p className="info__name">calc</p>
      <div className="info__toggle">
        <p>theme</p>
        {children}
      </div>
    </div>
  );
}
