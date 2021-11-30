import React from 'react';
import Tweets from './Tweets';

function Timeline (props) {

  const TweetList = props.tweets.map((tweet) => (
    <Tweets
      key={tweet.id}
      icon={tweet.icon}
      displayName={tweet.displayName}
      accountName={tweet.accountName}
      content={tweet.content}
    />
  ))
  return(
    <div className="timeline">
      {TweetList}
    </div>
  )
}

export default Timeline;