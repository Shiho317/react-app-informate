import React from 'react';
import '../styles/MobileHome.css';
import {Link} from 'react-router-dom';
import slideImg1 from '../../images/topicicon-1.jpg';
import slideImg2 from '../../images/topicicon-2.jpg';
import slideImg3 from '../../images/topicicon-3.jpg';
import slideImg4 from '../../images/topicicon-4.jpg';
import slideImg5 from '../../images/topicicon-5.jpg';
import slideImg6 from '../../images/topicicon-6.jpg';
import slideImg7 from '../../images/topicicon-7.jpg';
import slideImg8 from '../../images/topicicon-8.jpg';
import slideImg9 from '../../images/topicicon-9.jpg';
import pTopicImg1 from '../../images/personal_topic-1.png';
import pTopicImg2 from '../../images/personal_topic-2.png'; 

function MobileHome () {

  return(
    <div className= 'body'>
      <div className="topic">
      <h1>Topic</h1>
      <div className="slide">
        <img className="slide__img1" src={slideImg1} alt="exchange"/>
        <img className="slide__img2" src={slideImg2} alt="money"/>
        <img className="slide__img3" src={slideImg3} alt="spot"/>
      </div>
      <div className="slide">
        <img className="slide__img4" src={slideImg4} alt="education"/>
        <img className="slide__img5" src={slideImg5} alt="health"/>
        <img className="slide__img6" src={slideImg6} alt="house"/>
      </div>
      <div className="slide">
        <img className="slide__img7" src={slideImg7} alt="living"/>
        <img className="slide__img8" src={slideImg8} alt="trip"/>
        <img className="slide__img9" src={slideImg9} alt="others"/>
      </div>
  <div>
    <button className="slider__btn slider__btn--left">&larr;</button>
    <button className="slider__btn slider__btn--right">&rarr;</button>
    <div className="dots"></div>
  </div>
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
