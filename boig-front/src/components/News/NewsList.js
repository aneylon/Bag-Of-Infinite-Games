import NewsListItem from "./NewsListItem";

const NewsList = ({ news }) => {
  return (
    <div>
      <ul>
        {news.map((newsItem) => {
          return <NewsListItem news={newsItem} key={newsItem.id} />;
        })}
      </ul>
    </div>
  );
};
export default NewsList;
