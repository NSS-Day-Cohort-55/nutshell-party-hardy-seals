// Wesley Mitchell
import react from "react";
import { useState } from "react";
import { addArticle, updateArticle, getArticleById } from "../../modules/ArticleManager";
import { useNavigate,useParams } from "react-router-dom";
import { dateFormat } from "./ArticleHelpers";
import { useEffect } from "react";

export const ArticleEditForm  = () => {
  const [article, setArticle] = useState({
      userId: parseInt(sessionStorage.getItem("nutshell_user")),
      title: "",
      synopsis: "",
      url: "",
  })

  const {articleId} = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const handleFieldChange = evt => {
    const stateToChange = {...article};
    stateToChange[evt.target.id] = evt.target.value;
    setArticle(stateToChange);
  };

  const updateExistingArticle = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // default values for locationId and customerId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedArticle = {
      id: parseInt(articleId),
      userId: article.userId,
      title: article.title,
      synopsis: article.synopsis,
      url: article.url,
      timestamp: article.timestamp
    };

    if (article.url === '' || article.title === '' || article.synopsis === '') {
      window.alert("Please complete the full form.")
      setIsLoading(false)
    } else {
      setIsLoading(true)
      console.log(editedArticle);
      updateArticle(editedArticle).then(() => navigate('/articles'))
    }
}

  useEffect(() => {
    getArticleById(articleId).then(setArticle)
  }, [])

  return (
    <form className="articleForm">
    <h2 className="articleForm__title">Update Your Article</h2>
    <fieldset>
       <div className="form-group">
         <label htmlFor="title">Title:</label>
         <input type="test" id="title" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Article Title" value={article.title} />
       </div>
    </fieldset>
    <fieldset>
       <div className="form-group">
         <label htmlFor="synopsis"> Synopsis:</label>
         <input type="text" id="synopsis" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="Synopsis" value={article.synopsis} />
       </div>
    </fieldset>
    <fieldset>
     <div className="form-group">
       <label htmlFor="url">URL:</label>
       <input type="text" id="url" onChange={handleFieldChange} required autoFocus className="form-control" placeholder="URL" value={article.url} />
     </div>
     </fieldset>
   <button type="button" onClick={updateExistingArticle}>Update Article</button>
  </form>
  )
}