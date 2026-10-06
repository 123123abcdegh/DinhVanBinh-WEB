/** Nền trang: các vệt sáng pastel, lưới mờ và lớp nhiễu nhẹ. */
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__glow bg__glow--1" />
      <div className="bg__glow bg__glow--2" />
      <div className="bg__glow bg__glow--3" />
      <div className="bg__grid" />
      <div className="bg__noise" />
    </div>
  );
}
