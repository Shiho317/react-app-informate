import React, { useState } from 'react';
import './styles/TweetInput.css';


function TweetInput({openPost, OpenPost, tweets, setTweets}) {

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
      icon: 'Me', 
      displayName: 'ms.Jane',
      accountName: 'msJane',
      content: textAreaValue
    })
  }
};

  console.log(tweets)

  return (
    <div>
    {openPost && !tweets ? (
      <div id="overlay">
    <div className="postpage">
    <div className="back__btn">
      <button className="back__btn--close" onClick={OpenPost}>&times;</button>
    </div>
    <div className="list">
      <select name ="list__category" id="category">
        <option value="spot">Spot</option>
        <option value="education">Education</option>
        <option value="health">Health</option>
        <option value="house">House</option>
        <option value="living">Living</option>
        <option value="trip">Trip</option>
        <option value="others">Others</option>
      </select>
    </div>

      <div className="input">
        <textarea  className="comment" onChange={TextAreaValue} name="comment" placeholder="Let's share imformation!" cols="30" rows="20"/>
      </div>
    
    <div className="provide">
    <button className="provide__btn" onClick={() => {sendTweet(); OpenPost();}}>Provide</button>
    </div>
    </div>
    
    </div>
    ) : (
      <div></div>
    )}
    </div>
  );
}

export default TweetInput;