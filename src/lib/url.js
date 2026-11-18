// Prefix a site-relative path with Astro's base so links work on GitHub Pages sub-paths.
export function u(path = "") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${String(path).replace(/^\//, "")}`;
}

// Month helpers for "YYYY-MM" strings
export function monthIndex(ym) {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}
// Current month as "YYYY-MM" (evaluated at build time)
export function currentMonth() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
export function fmtMonth(ym) {
  if (!ym) return "Present";
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1).toLocaleString("en-US", { month: "short", year: "numeric" });
}
export function duration(start, end) {
  const months = monthIndex(end || currentMonth()) - monthIndex(start) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  const part = (n, unit) => (n ? `${n} ${unit}${n === 1 ? "" : "s"}` : "");
  return [part(y, "year"), part(m, "month")].filter(Boolean).join(" ");
}
