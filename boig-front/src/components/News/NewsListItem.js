const NewsListItem = ({ news }) => {
  return (
    <article>
      <h1>{news.title}</h1>
      <h3>{news.author}</h3>
      <p>{news.body}</p>
      <p>{news.date}</p>
    </article>
  );
};

export default NewsListItem;
