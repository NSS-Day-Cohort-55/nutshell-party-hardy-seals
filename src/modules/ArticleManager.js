import react from "react";

const remoteURL = "http://localhost:8088"

export const getAllArticles = () => {
  return fetch(`${remoteURL}/articles?_sort=timestamp&_order=desc`)
  .then(res => res.json())
}

export const addArticle = (newArticle) => { 
  return fetch(`${remoteURL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newArticle)
  }).then(response => response.json())
}

export const deleteArticle = (id) => { 
  return fetch(`${remoteURL}/articles/${id}`, {
    method: "DELETE",
  })
  .then(response => response.json())
}

export const updateArticle = (article) => { 
  return fetch(`${remoteURL}/articles/${article.id}`, {
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  })
  .then(response => response.json())
}

export const getArticleById = (id) => {
  return fetch(`${remoteURL}/articles/${id}`)
  .then(res => res.json())
}