import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((newsItem) =>
  newsItem.categories.includes("politics")
);

// Part 2 - start here
const sortedNews = filteredNews.slice().sort((news1, news2) => {
  if (news1.body.length > news2.body.length) {
    return 1;
  }
  if (news1.body.length < news2.body.length) {
    return -1;
  }
  return 0;
});

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
