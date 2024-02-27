/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const MediumCard = ({
  title,
  description,
  pubDate,
  categories,
  link,
}: {
  title: string;
  description: string;
  pubDate: string;
  categories: string[];
  link: string;
}) => {
  console.log(title);

  return (
    <div className="w-full bg-white border border-gray-200 shadow-md dark:bg-zinc-800/50 dark:border-gray-800">
      <div className="p-3 pb-8">
        <Link href={link} target="_blank">
          <h5 className="mb-2 text-xl mt-0 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <Link href={link} target="_blank">
          <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
            {description.length <= 200
              ? description
              : description.slice(0, 200) + "..."}
          </p>
        </Link>

        <p className="font-normal text-sm text-gray-700 dark:text-gray-400 m-0">
          {pubDate}
        </p>
        <div className="flex gap-2 mt-6 flex-wrap">
          {categories.map((item) => (
            <span
              key={item}
              className="whitespace-nowrap bg-gradient-to-r from-blue-500 to-blue-400 shadow-sm text-white px-2 py-1 rounded-full text-[.7rem] "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
