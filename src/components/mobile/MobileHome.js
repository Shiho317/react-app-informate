import React from 'react';
import '../styles/MobileHome.css';
import {Link} from 'react-router-dom';
import Slider from './Slider/Slider';
import pTopicImg1 from '../../images/personal_topic-1.png';
import pTopicImg2 from '../../images/personal_topic-2.png'; 

function MobileHome () {

  return(
    <div className= 'body'>
      <div className="topic">
      <h1>Topic</h1>

      <Slider/>
    </div>

  <div className="personal_topic">
    <h1>Personal Topic</h1>
    <div className="p-topic">
      <img className="p-topic__1" src={pTopicImg1} alt="post"/>
      <img className="p-topic__2" src={pTopicImg2} alt="liked"/>
    </div>
    </div>

  <div className="howmany">
    <h1>How many people did you help?</h1>

    <div className="btn">
      <button className="btn__liked">See total LIKED</button>
    </div>
    </div>


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
}

export default MobileHome;
