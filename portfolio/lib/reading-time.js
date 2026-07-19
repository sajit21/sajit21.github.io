const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(content) {
  const textOnly = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_~>\-|]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const wordCount = textOnly.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

  return `${minutes} min read`;
}
