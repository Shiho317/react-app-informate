import React, {useState, useEffect} from 'react';
import './Home.css';
import '../App.css';
import slideImg1 from '../images/topicicon-1.jpg';
import slideImg2 from '../images/topicicon-2.jpg';
import slideImg3 from '../images/topicicon-3.jpg';
import slideImg4 from '../images/topicicon-4.jpg';
import slideImg5 from '../images/topicicon-5.jpg';
import slideImg6 from '../images/topicicon-6.jpg';
import slideImg7 from '../images/topicicon-7.jpg';
import slideImg8 from '../images/topicicon-8.jpg';
import slideImg9 from '../images/topicicon-9.jpg';
import pTopicImg1 from '../images/personal_topic-1.png';
import pTopicImg2 from '../images/personal_topic-2.png'; 
import MobileHome from './mobile/MobileHome';
import PostTimeline from './PostTimeline';

function Home(){

  const [laptopHome, setLaptopHome] = useState(true);

  const LaptopHome = () => {
    if(window.innerWidth <= 640){
      setLaptopHome(false)
    }else{
      setLaptopHome(true)
    }
  }

  useEffect(() => {
    LaptopHome();
  },[]);

  window.addEventListener('resize', LaptopHome);

  return (
    <div>
    {laptopHome ? (
    <div>
    <div className="home-and-timeline">
    <div className="homepage">
      <h1>Topic</h1>
      <div className="slide">
        <img className='slide__img1' src={slideImg1} alt="img"/>
        <img className='slide__img2' src={slideImg2} alt="img"/>
        <img className='slide__img3' src={slideImg3} alt="img"/>
      </div>
      <div className="slide">
        <img className='slide__img4' src={slideImg4} alt="img"/>
        <img className='slide__img5' src={slideImg5} alt="img"/>
        <img className='slide__img6' src={slideImg6} alt="img"/>
      </div>
      <div className="slide">
        <img className='slide__img7' src={slideImg7} alt="img"/>
        <img className='slide__img8' src={slideImg8} alt="img"/>
        <img className='slide__img9' src={slideImg9} alt="img"/>
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

      <div className="howmany__btn">
        <button>See total LIKED</button>
      </div>
      </div>
      </div>
        <div>
        <PostTimeline/>
        </div>
      </div>

      
        <div className="footer">
        <ul className="footer__list">
          <li>Help</li>
          <li>Privacy</li>
        </ul>
        <p>Copyright ©2021.ShihoNagano All Right Reserved.</p>
        </div>
    </div>
    ) : (
      <MobileHome />
    )}
    </div>
  )
  
}

export default Home;