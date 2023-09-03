/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const Card = ({
  img,
  title,
  description,
  stacks,
  link,
}: {
  img: string;
  title: string;
  description: string;
  stacks: string[];
  link?: string;
}) => {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-md dark:bg-zinc-800/50 dark:border-gray-800 relative">
      {link ? (
        <Link href={link} target="_blank">
          <img className="w-full h-45 sm:h-35" src={img} alt={title} />
        </Link>
      ) : (
        <img className="w-full h-45 sm:h-35" src={img} alt={title} />
      )}
      <div className="p-3 pb-8">
        <h5 className="mb-2 text-xl mt-0 font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div className="flex gap-2 absolute bottom-2 w-[80%] overflow-auto">
          {stacks.map((item) => (
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

export default Card;
