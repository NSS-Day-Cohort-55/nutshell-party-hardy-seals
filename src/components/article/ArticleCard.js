import React from 'react';
import { Link } from 'react-router-dom';
import "./ArticleCard.css"
import { dateFormat } from './ArticleHelpers';

export const ArticleCard = ({ article, handleDeleteArticle }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Title: <span className="card-articleName">
          {article.title}
        </span></h3>
        <p>Synopsis: {article.synopsis}</p>
        <div className="articleURL">URL: {article.url}</div>
        <div className="articleDate">Date Saved: {dateFormat(article.timestamp)} </div>  
        <Link to={`/articles/${article.id}/edit`}>
            <button>Edit</button>
        </Link>
        <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
      </div>
    </div>
  );
}