interface Article {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  categories: string[];
}

export const articles: Article[] = [
  {
    title: "My Story with Typescript",
    pubDate: "2024-02-27",
    link: "https://medium.com/@agungprasetio878/my-story-with-typescript-8e89c327a117",
    description:
      "I started my coding journey with JavaScript, the language that powers the web, but can also be used for mobile, desktop, and server. However, as the number of projects grows and they scale up, JavaScript can become very messy.",
    categories: ["JavaScript", "Proggraming", "Typescript"],
  },
  {
    title:
      "What do you need to know about Synchronous & Asynchronous in JavaScript",
    pubDate: "2024-02-26",
    link: "https://medium.com/@agungprasetio878/what-do-you-need-to-know-about-synchronous-asynchronous-in-javascript-947f3cbb97ce",
    description:
      "Synchronous and Asynchronous are natural properties of JavaScript that you must understand if you want to focus on the JavaScript programming language",
    categories: [
      "JavaScript",
      "Proggraming",
      "Asynchronous",
      "Sync",
      "Synchronous",
    ],
  },
];
