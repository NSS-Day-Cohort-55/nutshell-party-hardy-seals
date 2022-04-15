import react from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { deleteArticle, getAllArticles } from "../../modules/ArticleManager";
import './ArticleList.css'

export const ArticleList = () => { 
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleDeleteArticle = (id) => { 
    setIsLoading(true)
    deleteArticle(id)
      .then(() => getAllArticles()
        .then(setArticles))
        setIsLoading(false)
   }

   useEffect(() => {
     getAllArticles().then(setArticles)
   }, [])

   const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

  return (
    <>
    <section className="section-content">
      <button type="button"
              className="btn btn-primary"
              onClick={() => {navigate("/articles/create")}}>
              Add Article
      </button>
    </section>
    <div className="container-cards">
      {articles.map(article => <ArticleCard article={article} key={article.id} handleDeleteArticle={handleDeleteArticle} loggedInUser={loggedInUser}/>)}
    </div>
    </>
  )
}
