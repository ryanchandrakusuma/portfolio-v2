// Loads Markdown entries (front matter + rendered Content) from src/entries.
const slugOf = (path) => path.split("/").pop().replace(/\.md$/, "");

const docModules = import.meta.glob("../entries/case-studies/*.md", { eager: true });
const projectModules = import.meta.glob("../entries/projects/*.md", { eager: true });

const toList = (mods) =>
  Object.entries(mods)
    .map(([path, mod]) => ({ slug: slugOf(path), data: mod.frontmatter, Content: mod.Content }))
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

// Design docs: newest first by `date` ("YYYY-MM"), ties broken by `order`.
// IDs are numbered chronologically, so the most recent doc has the highest number.
export const docs = toList(docModules)
  .sort((a, b) => (b.data.date || "").localeCompare(a.data.date || "") || (a.data.order ?? 99) - (b.data.order ?? 99))
  .map((d, i, all) => ({ ...d, data: { ...d.data, id: `DOC-${String(all.length - i).padStart(3, "0")}` } }));
export const projects = toList(projectModules);

// Colour tone for a status label
export function tone(status = "") {
  const s = status.toLowerCase();
  if (["shipped", "published", "live", "proposed & adopted"].includes(s)) return "ok";
  if (["in progress", "debug build"].includes(s)) return "amber";
  return "info";
}
