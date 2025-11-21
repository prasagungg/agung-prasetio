import MediumCard from "../components/MediumCard";
import { articles } from "../data/articles";
import { formatDate } from "../utils";

export default async function Articles() {
  return (
    <div className="container px-3 mx-auto max-w-2xl">
      <div className="grid grid-cols-1 gap-5 py-5">
        {articles.map((item) => (
          <MediumCard
            title={item.title}
            description={item.description}
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
