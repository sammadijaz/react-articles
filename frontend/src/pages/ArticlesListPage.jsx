import { Link } from "react-router-dom";
import articles from "../content/article-content";
import ArticleList from "../components/ArticleList";

const ArticlesListPage = () => {
  return (
    <ArticleList articles={articles}/>
  );
};

export default ArticlesListPage;
