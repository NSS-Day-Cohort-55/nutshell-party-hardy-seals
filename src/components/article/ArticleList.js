// Wesley Mitchell

import react from "react";
import { useState, useEffect } from "react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { deleteArticle, getAllArticles } from "../../modules/ArticleManager";
import { FriendArticleCard } from "./FriendArticleCard";
import { getAllFriends } from "../../modules/FriendManager";
import { getUsers } from "../../modules/FriendManager";

export const ArticleList = () => { 
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [friends, setFriends] = useState([])
  const [user, setUsers] = useState([])
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

   useEffect(() => {
    getAllFriends(loggedInUser).then(setFriends)
  }, [])

  useEffect(() => {
    getUsers().then(setUsers)
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
      {articles.map(article => <ArticleCard isFriend={loggedInUser.id === article.userId || !(friends.filter(friend => friend.userId === article.userId).length > 0)} article={article} key={article.id} handleDeleteArticle={handleDeleteArticle} loggedInUser={loggedInUser} /> ) }
    </div>
    </>
  )
}
