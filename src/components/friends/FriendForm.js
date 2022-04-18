// Wes Mitchell

import react from "react";
import { useState } from "react";
import { addArticle } from "../../modules/ArticleManager";
import { useNavigate } from "react-router-dom";
import { dateFormat } from "./ArticleHelpers";

export const FriendForm = () => {
  const [friend, setFriend] = useState(
    {
      "id": 3,
      "userId": 1,
      "loggedUserId": JSON.parse(sessionStorage.nutshell_user).id
    })

  const loggedInUser = JSON.parse(sessionStorage.nutshell_user)

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const handleControlledInputChange = evt => {
    const newArticle = { ...article }
    let selectedVal = evt.target.value
    newArticle[evt.target.id] = selectedVal
    setArticle(newArticle)
  }

  const handleClickSaveArticle = (evt) => {
    evt.preventDefault()

    if (article.url === '' || article.title === '' || article.synopsis === '') {
      window.alert("Please complete the full form.")
      setIsLoading(false)
    } else {
      setIsLoading(true)
      addArticle(article).then(() => navigate('/articles'))
    }
  }

  return (
    <form className="articleForm">
      <h2 className="articleForm__title">New Article</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="test" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article Title" value={article.title} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="synopsis"> Synopsis:</label>
          <input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Synopsis" value={article.synopsis} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="URL" value={article.url} />
        </div>
      </fieldset>
      <button type="button" onClick={handleClickSaveArticle}>Save Article</button>
    </form>
  )
}