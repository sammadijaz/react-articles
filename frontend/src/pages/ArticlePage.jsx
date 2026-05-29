import { useParams } from "react-router-dom"

const ArticlePage = () => {
  const { name } = useParams();

  return (
    <h1>This is {name} Article</h1>
  )
}

export default ArticlePage