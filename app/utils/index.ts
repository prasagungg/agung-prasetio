export function formatDate(inputText: string) {
  const inputDate = new Date(inputText);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return inputDate.toLocaleDateString("en-ID", options);
}

export function extractContent(htmlString: string) {
  const htmlPattern = /<[^>]*>/g;

  return htmlString.replace(/&amp;/g, "&").replace(htmlPattern, "").trim();
}
