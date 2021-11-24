import React, {useState} from 'react';
import '../styles/MobileAccount.css';
import {Link} from 'react-router-dom';
import InputColor from 'react-input-color';
import ChooseLogo1 from '../../images/choose_logo-1.png';
import ChooseLogo2 from '../../images/choose_logo-2.png';
import ChooseLogo3 from '../../images/choose_logo-3.png';
import ChooseLogo4 from '../../images/choose_logo-4.png';
import ChooseLogo5 from '../../images/choose_logo-5.png';
import ChooseLogo6 from '../../images/choose_logo-6.png';
import ChooseLogo7 from '../../images/choose_logo-7.png';
import ChooseLogo8 from '../../images/choose_logo-8.png';
import ChooseLogo9 from '../../images/choose_logo-9.png';
import ChooseLogo10 from '../../images/choose_logo-10.png';
import ChooseLogo11 from '../../images/choose_logo-11.png';
import ChooseLogo12 from '../../images/choose_logo-12.png';
import ChooseLogo13 from '../../images/choose_logo-13.png';
import ChooseLogo14 from '../../images/choose_logo-14.png';
import ChooseLogo15 from '../../images/choose_logo-15.png';
import ChooseLogo16 from '../../images/choose_logo-16.png';
import ChooseLogo17 from '../../images/choose_logo-17.png';
import ChooseLogo18 from '../../images/choose_logo-18.png';
import ChooseLogo19 from '../../images/choose_logo-19.png';
import ChooseLogo20 from '../../images/choose_logo-20.png';
import ChooseLogo21 from '../../images/choose_logo-21.png';
import ChooseLogo22 from '../../images/choose_logo-22.png';
import Canada from '../../images/canada-bg.jpg';
import UnitedStates from '../../images/unitedstates-bg.jpg';
import UnitedKingdom from '../../images/unitedkingdom-bg.jpg';
import Australia from '../../images/australia-bg.jpg';
import NewZealand from '../../images/newzealand-bg.jpg';
import Germany from '../../images/germany-bg.jpg';
import Japan from '../../images/japan-bg.jpg';
import SouthKorea from '../../images/southkorea-bg.jpg';
import France from '../../images/france-bg.jpg';



function MobileAccount () {

  const [showModal, setShowModal] = useState(false);

  const OpenModal = () => {
    setShowModal(true);
  }

  const CloseModal = () => {
    setShowModal(false);
  }

  const [showAlert, setShowAlert] = useState(false);

  const OpenAlert = () => {
    setShowAlert(true);
  }

  const CloseAlert = () => {
    setShowAlert(false);
  }

  const [showChoose, setShowChoose] = useState(false);

  const OpenChoose = () => {
    setShowChoose(true)
  }

  const CloseChoose = () => {
    setShowChoose(false)
  }

  const [color, setColor] = useState({});

  const [newIcon, setNewIcon] = useState(ChooseLogo1);

  const ChangeIcon = (e) => {
    console.log(e.target.src)
    setNewIcon(e.target.src)
  }

  const [newUserName, setNewUserName] = useState('Informate');
  const [newCity, setNewCity] = useState('Vancouver');
  const [newTwitterAcc, setNewTwitterAcc] = useState('@InforMate_123');
  const [newCountry, setNewCountry] = useState('Canada');

  const [clickDone, setClickDone] = useState(true);

  const Delete = () => {
    setClickDone(false);
  }

  const Save = () => {
    setClickDone(true);
  }


  const ChangeUserName = (e) => {
    setNewUserName(e.target.value);
  }
  
  const ChangeCity = (e) => {
    setNewCity(e.target.value);
  }

  const ChangeTwitterAcc = (e) => {
    setNewTwitterAcc(e.target.value);
  }

    const [countryBg, setCountryBg] = useState(Canada);

    const ChangeCountryImage = (e) => {
      
      if(e.target.value === 'Canada'){
        setCountryBg(Canada);
        setNewCountry('Canada');
      }else if(e.target.value === 'United States'){
        setCountryBg(UnitedStates);
        setNewCountry('United States')
      }else if(e.target.value === 'United Kingdom'){
        setCountryBg(UnitedKingdom);
        setNewCountry('United Kingdom');
      }else if(e.target.value === 'Australia'){
        setCountryBg(Australia);
        setNewCountry('Australia');
      }else if(e.target.value === 'New Zealand'){
        setCountryBg(NewZealand);
        setNewCountry('New Zealand');
      }else if(e.target.value === 'Germany'){
        setCountryBg(Germany);
        setNewCountry('Germany');
      }else if(e.target.value === 'Japan'){
        setCountryBg(Japan);
        setNewCountry('Japan');
      }else if(e.target.value === 'South Korea'){
        setCountryBg(SouthKorea);
        setNewCountry('South Korea');
      }else if(e.target.value === 'France'){
        setCountryBg(France);
        setNewCountry('France');
      }
    }
  
    const nowTime = new Date();
    const nowHour = nowTime.getHours();

  return(
    <div>
    <div className='accountpage' style={{backgroundImage: `url(${countryBg})`}}>
    <div className="profile">

    <div className="hello">
    <h1><span className="greeting">{nowHour < 12 ? ('Good morning, ') : nowHour < 18 ? ('Good afternoon, ') : nowHour < 24 || nowHour < 6 ? ('Good evening, ') : ('')}</span> <span className="name">{newUserName}.</span></h1>
    </div>

    <div className="profile__icon">

      <div className="icon__img" style={{backgroundColor: color.rgba}}>
        <img className="icon__img--src" src={newIcon} alt="icon" width={"90px"} height={"100px"} />
      </div>

      <div className="icon__change">
      <button className="change" onClick={OpenChoose}>Change your icon</button>
      </div>

    </div>

    <div className="profile__data">

      <div className="user">
        <h6>User Name</h6>
        {clickDone? <p className="user__name">{newUserName}</p> : <p className="user__name"></p>}
      </div>

      <div className="country">
        <h6>Country</h6>
        {clickDone ? <p className="country__name">{newCountry}</p> : <p className="country__name">Cananda</p>}
      </div>

      <div className="city">
        <h6>City(optional)</h6>
        {clickDone ? <p className="city__name">{newCity}</p> : <p className="city__name"></p>}
      </div>

      <div className="twitter">
        <h6>Twitter(optional)</h6>
        {clickDone ? <p className="twitter__name">{newTwitterAcc}</p> : <p className="twitter__name"></p>}
      </div>

      <div className="profile__edit">
        <button className="edit" onClick={OpenModal}>Edit profile</button>
      </div>
    </div>
    </div>

    {showModal ? (
    <div id='overlay'>
    <div className="modal">
    <button className="btn--close-modal" onClick={OpenAlert}>&times;</button>

    <div className="profile__modal">
      <div className="modal__img" style={{backgroundColor: color.rgba}}>
        <img className="modal__img--src" src={ChooseLogo1} alt="icon" width="90px" height="100px" />
      </div>

      <div className="icon__change">
      <button className="change--inmodal" onClick={OpenChoose}>Change your icon</button>
      </div>
    </div>

    <div className="profile__data">

      <div className="modal__user">
        <h6>User Name</h6>
        <input type="text" id="modal__user" placeholder="Shiho" value={newUserName} onChange={ChangeUserName}/>
      </div>

      <div className="modal__country">
        <h6>Country</h6>
        <select name="country" id="modal__country" onChange={ChangeCountryImage}>
          <option value="Canada">Canada</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Australia">Australia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="South Korea">South Korea</option>
          <option value="France">France</option>
        </select>
      </div>

      <div className="modal__city">
        <h6>City(optional)</h6>
        <input type="text" placeholder="Vancouver" id="modal__city" value={newCity} onChange={ChangeCity}/>
      </div>

      <div className="modal__twitter">
        <h6>Twitter(optional)</h6>
        <input type="text" placeholder="@InforMATE_123" id="modal__twitter" value={newTwitterAcc} onChange={ChangeTwitterAcc}/>
      </div>

      <div className="profile__edit">
        <button className="done" onClick={() => {CloseModal(); Save();}}>Done</button>
      </div>
    </div>
  </div>
  </div>
    ) : (
      <div>
      </div>
    )}

  
  {showAlert ? (
    <div className="close__concent">
    <h3>⚠️ Are you really want to close?</h3>
    <p>Your changes will be deleted. If you want to save your changes, please choose cancel button below.</p>

    <div className="choose--btn">
      <button className="close" onClick={() => {CloseModal(); CloseAlert(); Delete();}}>Close</button>
      <button className="cancel" onClick={CloseAlert}>Cancel</button>
    </div>
    </div>
  ) : (
    <div>
    </div>
  )}
  

  {showChoose ? (
    <div className="chooseyours">
    <button className="btn--close-choose" onClick={CloseChoose}>&times;</button>
    <h3>Choose your icon</h3>
    <div style={{margin: '0 auto', width: '100px', height: '80px', marginBottom: '10px', backgroundColor: color.rgba}}>
      </div>
      <InputColor initialValue='#ffffff' onChange={setColor} placement='right'/>
    <div className="chooseyours__icon" onClick={ChangeIcon}>
      <img src={ChooseLogo1} alt="icon1" style={{width: "90px", height: "100px"}} />
      <img src={ChooseLogo2} alt="icon2" style={{width: "110px", height: "110px"}} />
      <img src={ChooseLogo3} alt="icon3" width="100px" height="100px" />
      <img src={ChooseLogo4} alt="icon4" width="80px" height="100px" />
      <img src={ChooseLogo5} alt="icon5" width="80px" height="100px" />
      <img src={ChooseLogo6} alt="icon6" width="80px" height="100px" />
      <img src={ChooseLogo7} alt="icon7" width="80px" height="100px" />
      <img src={ChooseLogo8} alt="icon8" width="80px" height="100px" />
      <img src={ChooseLogo9} alt="icon9" width="100px" height="100px" />
      <img src={ChooseLogo10} alt="icon10" width="100px" height="100px"/>
      <img src={ChooseLogo11} alt="icon11" width="100px" height="100px" />
      <img src={ChooseLogo12} alt="icon12" width="80px" height="100px" />
      <img src={ChooseLogo13} alt="icon13" width="70px" height="100px" />
      <img src={ChooseLogo14} alt="icon14" width="70px" height="100px" />
      <img src={ChooseLogo15} alt="icon15" width="70px" height="100px" />
      <img src={ChooseLogo16} alt="icon16" width="110px" height="100px" />
      <img src={ChooseLogo17} alt="icon22" width="70px" height="100px" />
      <img src={ChooseLogo18} alt="icon18" width="70px" height="100px" />
      <img src={ChooseLogo19} alt="icon19" width="70px" height="100px" />
      <img src={ChooseLogo20} alt="icon20" width="70px" height="100px" />
      <img src={ChooseLogo21} alt="icon21" width="100px" height="100px" />
      <img src={ChooseLogo22} alt="icon22" width="70px" height="100px" />
    </div>
    </div>
  ) : (
    <div>
    </div>
  )}
    </div>

    <div className='footer'>
        <div className="ft__icon">

        <div className="icon--btn">
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

        <div className="icon--active">
        <Link to="/accountpage">
          <i class="fas fa-user"></i>
        </Link>
        </div>
        
        </div>
        </div>
    </div>
  )
};

export default MobileAccount;
