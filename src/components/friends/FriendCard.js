// Wes Mitchell

import React from 'react';
import { Link } from 'react-router-dom';

export const FriendCard = ({ friend, handleDeleteFriend }) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3>Name: {friend.user.name} <span className="card-friendName">
          </span>
          </h3>
          <div className="friendEmail">E-Mail: {friend.user.email}</div>
          <button type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete Friend</button>
        </div>
      </div>
    </>
  );
}