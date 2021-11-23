import React, { useState, useCallback} from 'react';
import './TweetInput.css';


function TweetInput({openPost, setOpenPost, setTweets, tweets}) {
  
  const ClosePost = () => {
    setOpenPost(false)
  };

  const [textAreaValue, setTextAreaValue] = useState('');

  const TextAreaValue = (e) => {
    setTextAreaValue(e.target.value)
  };

  const addTweet = useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);

  const sendTweet = () => {
    if(textAreaValue){
      addTweet({
        id: new Date().getTime(), 
        icon: '☠️', 
        displayName: 'ミスター死',
        accountName: 'mrdeath',
        content: textAreaValue
      })
    }
  };
  
  // const textareaRef = useRef(null);

  // const sendTweet = useCallback((props) => {

  //   const addTweet = props.addTweet

  //   if(textareaRef.current) {
  //     addTweet({
  //       id: new Date().getTime(), 
  //       icon: '☠️', 
  //       displayName: 'ミスター死',
  //       accountName: 'mrdeath',
  //       content: textareaRef.current.value
  //     });
  //   }
  // }, [textareaRef.current, props.addTweet]);

  return (
    <div>
    {openPost && !tweets ? (
      <div id="overlay">
    <div className="postpage">
    <div className="back__btn">
      <button className="back__btn--close" onClick={ClosePost}>&times;</button>
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
    <button className="provide__btn" onClick={() => {sendTweet(); ClosePost();}}>Provide</button>
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