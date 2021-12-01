import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/MobilePost.css';
import NavBar from '../navBar';
import TweetInput from '../Tweet/TweetInput';
import Timeline from '../Tweet/Timeline';
import Icon0 from '../../images/choose_logo-1.png';
import Icon1 from '../../images/choose_logo-11.png';

function MobilePost () {

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
      <NavBar/>
      <TweetInput tweets={tweets} setTweets={setTweets}/>
      <Timeline tweets={tweets}/>

      <div className='footer'>
      <div className="ft__icon">
      
      <div className="icon--active">
        <Link to="/homepage">
        <i class="fas fa-home"></i>
        </Link>
      </div> 
      
      <div className="icon--btn">
        <Link to="/postpage">
        <i class="fas fa-plus-circle"></i>
        </Link>
      </div>
      

      <div className="icon--btn">
        <Link to="/searchpage">
        <i class="fas fa-search"></i>
        </Link>
      </div>

      <div className="icon--btn">
        <Link to="/accountpage">
        <i class="fas fa-user"></i>
        </Link>
      </div>
      
      </div>
      </div>
    </div>
  )
};

export default MobilePost;
