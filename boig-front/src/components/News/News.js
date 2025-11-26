import NewsList from "./NewsList";
import CreateNews from "./CreateNews";
import useFetch, { methods } from "../../hooks/useFetch";
import Pulse from "../Loading/Pulse";

const News = () => {
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/news",
    methods.GET
  );

  return (
    <div>
      <h1>News</h1>
      <CreateNews />
      {isPending && <Pulse />}
      {data && <NewsList news={data} />}
      {error && <div>An error occured : {error}</div>}
    </div>
  );
};
export default News;
