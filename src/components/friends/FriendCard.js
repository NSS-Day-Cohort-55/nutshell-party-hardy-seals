import React from 'react';
import { Link } from 'react-router-dom';

export const FriendCard = ({ friend, handleDeleteFriend, loggedInUser }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-articleName">
          {friend.name}
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