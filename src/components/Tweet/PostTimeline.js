import React, {useState} from 'react';
import Timeline from './Timeline';
import TweetInput from './TweetInput';
import Icon0 from '../../images/choose_logo-1.png';
import Icon1 from '../../images/choose_logo-11.png';


function PostTimeline(){


  const [tweets, setTweets] = useState([
    {
      id: 0,
      icon: Icon0,
      displayName: 'Informate',
      accountName: 'Informate@123',
      content: 'Black Friday is coming!! They are doing discount sales now!'
    },
    {
      id: 1,
      icon: Icon1,
      displayName: 'LoveinVan',
      accountName: 'LoveinVan@456',
      content: 'I just saw rainbow at Metrotown!!'
    }
  ]);

  return(
    <div>
      <TweetInput tweets={tweets} setTweets={setTweets}/>
      <Timeline tweets={tweets}/>
    </div>
  )
};

  export default PostTimeline;