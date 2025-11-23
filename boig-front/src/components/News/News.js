import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import CreateNews from "./CreateNews";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>News</h1>
      <CreateNews />
      {isLoading && <div>...loading...</div>}
      {news.length > 0 && <NewsList news={news} />}
    </div>
  );
};
export default News;
