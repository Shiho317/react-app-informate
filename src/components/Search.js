import React, {useState, useEffect} from 'react';
import './styles/Search.css';
import WrapImg1 from '../images/wrap_spot.png';
import WrapImg2 from '../images/wrap_education.png';
import WrapImg3 from '../images/wrap_health.png';
import WrapImg4 from '../images/wrap_house.png';
import WrapImg5 from '../images/wrap_living.png'
import WrapImg6 from '../images/wrap_trip.png';
import WrapImg7 from '../images/wrap_others.png';
import WrapImg8 from '../images/wrap_global.png';
import MobileSearch from './mobile/MobileSearch';
import PostTimeline from './Tweet/PostTimeline';

function Search () {

  const [laptopSearch, setLaptopSearch] = useState(true);

  const LaptopSearch = () => {
    if(window.innerWidth <= 640){
      setLaptopSearch(false);
    }else{
      setLaptopSearch(true);
    }
  };

  useEffect(() => {
    LaptopSearch();
  }, []);

  window.addEventListener('resize', LaptopSearch);

  return(
    <div>
    {laptopSearch ? (
    <div>
      <div className="search-and-timeline">
    <div className="Search">
      <div className="wantToKnow">
        <h1>I want to know...</h1>
      </div>

    <div className="wrap">

      <div className="item1">
        <img className="item1__1" src={WrapImg1} alt="spot"/>
      </div>

      <div className="item2">
        <img className="item2__2" src={WrapImg2} alt="education"/>
      </div>

      <div className="item3">
        <img className="item3__3" src={WrapImg3} alt="health"/>
      </div>

      <div className="item4">
        <img className="item4__4" src={WrapImg4} alt="house"/>
      </div>

      <div className="item5">
        <img className="item5__5" src={WrapImg5} alt="living"/>
      </div>

      <div className="item6">
        <img className="item6__6" src={WrapImg6} alt="trip"/>
      </div>

      <div className="item7">
        <img className="item7__7" src={WrapImg7} alt="others"/>
      </div>

      <div className="item8">
        <img className="item8__8" src={WrapImg8} alt="global"/>
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
      <p>Copyright ??2021.ShihoNagano All Right Reserved.</p>
    </div>
      
    </div>
    ) : (
      <MobileSearch />
    )}
    
    </div>
  )
}

export default Search;