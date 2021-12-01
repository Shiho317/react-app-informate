import React, { useState } from 'react';
import '../styles/TweetInput.css';
import Logo3 from '../../images/choose_logo-3.png';


function TweetInput({tweets, setTweets}) {

  const [textAreaValue, setTextAreaValue] = useState('');

  const TextAreaValue = (e) => {
    setTextAreaValue(e.target.value)
  };


  const addTweet = (tweet) => {
    setTweets(prev => [tweet, ...prev])
  }

  const  sendTweet = () => {
    if(textAreaValue){
    addTweet({
      id: new Date().getTime(), 
      icon: Logo3, 
      displayName: 'ms.Jane',
      accountName: 'msJane',
      content: textAreaValue
    })
  }
};

  console.log(tweets)

  return (
    <React.Fragment>
      <div className="input">
        <textarea  className="comment" onChange={TextAreaValue} name="comment" placeholder="Let's share imformation!" cols="20" rows="10"/>
      </div>
    
    <div className="provide">
    <button className="provide__btn" onClick={sendTweet}>Provide</button>
    </div>
    
    </React.Fragment>
  );
}

export default TweetInput;