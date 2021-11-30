import React, {useState, useCallback} from 'react';
import '../styles/Tweets.css';


function Tweets(props){

  const [liked, setLiked] = useState(false);
  const toggleLike = useCallback(() => setLiked((prev) => !prev), [setLiked]);

  return(
    <div className="tweet">
      <div className="icon-container">
        <img src={props.icon} alt="icon"/>
      </div>
      <div className="body-container">
        <div className="status-display">
          <span className="display-name">{props.displayName}</span>
          <span className="account-name">@{props.accountName}</span>
        </div>
        <div className="content">{props.content}</div>
        <div className="status-liked">
        <span onClick={toggleLike}>{liked ? '❤️' : '🤍'}</span>
        </div>
      </div>
    </div>
  )
};

export default Tweets;