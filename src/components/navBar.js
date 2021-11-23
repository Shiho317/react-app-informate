import React, {useState, useEffect} from 'react';
import logo from '../images/InforMATE_logo.PNG';
import {Link} from 'react-router-dom';
import './navBar.css';
import TweetInput from './TweetInput';


function NavBar() {

  const [openPost, setOpenPost] = useState(false);

  const OpenPost = () => {
    setOpenPost(true)
  }


  const [showNav, setShowNav] = useState(true);

  const ShowNav = () => {
    if(window.innerWidth <= 640){
      setShowNav(false);
    }else{
      setShowNav(true);
    }
  }

  useEffect(() => {
    ShowNav();
  }, []);

  window.addEventListener('resize', ShowNav);

  return (
    <div>

          {showNav ? (
            <div>
              <nav className="nav-bar">
              <div className="nav-bar--container">
              <ul>
              <li className="nav-item">
              <Link to="/homepage" className="nav-links">
              Home
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/searchpage" className="nav-links">
              Search
              </Link>
              </li>
              <li className="nav-item">
              <Link to="/accountpage" className="nav-links">
              Account
              </Link>
              </li>
              </ul>
    
              <Link to="/" className="nav-bar--logo">
                <img className="logo" src={logo} alt="logo"/>
              </Link>
              <button className='btn--Post'  onClick={OpenPost}>Post</button>
              
              <Link to="/">
                <button className='btn--signUp'>SIGN UP</button>
              </Link>
    
              </div>
              </nav>
    
            </div>
    
          ) : (
            <div className="header">
              <img className="header__logo" src={logo} alt="logo" style={{width: '50px'}}/>
            </div>
          )}

          <TweetInput openPost={openPost} setOpenPost={setOpenPost}/>
    </div>
  )
}

export default NavBar;