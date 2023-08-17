export default function Input({ val, onChange }) {
  return (
    <input
      type="text"
      className="input"
      dir="rtl"
      value={val}
      onChange={onChange}
    />
  );
}
