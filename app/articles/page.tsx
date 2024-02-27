import MediumCard from "../components/MediumCard";
import { extractContent, formatDate } from "../utils";

interface MediumItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  categories: string[];
}
async function getData() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agungprasetio878"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Articles() {
  const data = await getData();

  return (
    <div className="container px-3 mx-auto max-w-2xl">
      <div className="grid grid-cols-1 gap-5 py-5">
        {data.items.map((item: MediumItem) => (
          <MediumCard
            title={extractContent(item.title)}
            description={extractContent(item.description)}
            pubDate={formatDate(item.pubDate)}
            key={item.title}
            categories={item.categories}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
