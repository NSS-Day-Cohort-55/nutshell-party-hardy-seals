// Wesley Mitchell
import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from './ArticleHelpers';

export const FriendArticleCard = ({ article, handleDeleteArticle, loggedInUser }) => {
  return (
    <div className="card font-italic">
      <div className="card-content">
        <h3>Title: <span className="card-articleName">
          {article.title}
        </span></h3>
        <p>Synopsis: {article.synopsis}</p>
        <div className="articleURL">URL: {article.url}</div>
        <div className="articleDate">Date Saved: {dateFormat(article.timestamp)} </div>
        <div className='=articleUser'>Posted By: {article.user.name}</div>
        {article.userId === loggedInUser.id ?  
        <Link to={`/articles/${article.id}/edit`}>
            <button>Edit</button>
        </Link>
        : ''
        }
        {article.userId === loggedInUser.id ?
        <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
        : ''
        }
      </div>
    </div>
  );
}