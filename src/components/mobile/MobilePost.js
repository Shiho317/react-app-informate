import React, {useState} from 'react';
import '../styles/MobilePost.css';
import {Link} from 'react-router-dom';
import logo from '../../images/InforMATE_logo.PNG';



function MobilePost () {

  const [urlInput, setUrlInput] = useState(false);

  const UrlInput = () => {
    setUrlInput((prevState) => !prevState)
  };

  return(
    <div>
    <div className="header">
    <img className="header__logo" src={logo} alt="logo" style={{width: '50px'}}/>
    </div>
    <div className="postpage">
    <div className="back__btn">
      <i class="fas fa-chevron-left"></i>
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
        <textarea className="comment" name="comment" placeholder="Let's share imformation!" cols="30" rows="20"/>
      </div>


    <div id="preview">
    </div>

    <div className="file">

    <label className="photo">
      <i className="far fa-image"></i>
      <input type="file" className="photo" name="upload_img" accept="image/*" multiple/>
    </label>
      
      
    
    <label className="url">
      <i class="fas fa-paperclip" onClick={UrlInput}></i>
      {urlInput ? (
        <input type="url" className="url--input" placeholder="url"/>
      ) : (
        <div></div>
      )}
      
    </label>

    </div> 
    <div className="provide">
    <button className="provide__btn">Provide</button>
    </div>
    </div>

    <div className='footer'>
        <div className="ft__icon">

        <div className="icon--btn">
        <Link to="/homepage">
          <i class="fas fa-home"></i>
        </Link>
        </div>

        <div className="icon--active">
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
