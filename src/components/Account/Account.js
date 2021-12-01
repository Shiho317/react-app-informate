import React, {useState, useEffect} from 'react';
import '../../App.css';
import '../styles/Account.css';
import ChooseLogo1 from '../../images/choose_logo-1.png';
import Canada from '../../images/canada-bg.jpg';
import UnitedStates from '../../images/unitedstates-bg.jpg';
import UnitedKingdom from '../../images/unitedkingdom-bg.jpg';
import Australia from '../../images/australia-bg.jpg';
import NewZealand from '../../images/newzealand-bg.jpg';
import Germany from '../../images/germany-bg.jpg';
import Japan from '../../images/japan-bg.jpg';
import SouthKorea from '../../images/southkorea-bg.jpg';
import France from '../../images/france-bg.jpg';
import MobileAccount from '../mobile/MobileAccount';
import AccountModal from './AccountModal';
import ChooseLogo from './ChooseLogo';

function Account(){

  const [laptopAccount, setLaptopAccount] = useState(true);

  const LaptopAccount = () => {
    if(window.innerWidth <= 640){
      setLaptopAccount(false);
    }else{
      setLaptopAccount(true);
    };
  };

  useEffect(() => {
    LaptopAccount();
  }, []);

  window.addEventListener('resize', LaptopAccount);

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
      }else if(e.target.value === 'United States'){
        setCountryBg(UnitedStates);
      }else if(e.target.value === 'United Kingdom'){
        setCountryBg(UnitedKingdom);
      }else if(e.target.value === 'Australia'){
        setCountryBg(Australia);
      }else if(e.target.value === 'New Zealand'){
        setCountryBg(NewZealand);
      }else if(e.target.value === 'Germany'){
        setCountryBg(Germany);
      }else if(e.target.value === 'Japan'){
        setCountryBg(Japan);
      }else if(e.target.value === 'South Korea'){
        setCountryBg(SouthKorea);
      }else if(e.target.value === 'France'){
        setCountryBg(France);
      }
    }
  
    const nowTime = new Date();
    const nowHour = nowTime.getHours();
    

  return(
      <div>
      {laptopAccount ? (
      <div className='accountpage' style={{backgroundImage: `url(${countryBg})`}}>

      <div className="profile">

      
        <div className="hello">
        <h1><span className="greeting">{nowHour < 12 ? ('Good morning, ') : nowHour < 18 ? ('Good afternoon, ') : nowHour < 24 || nowHour < 6 ? ('Good evening, ') : ('')}</span> <span className="name">{newUserName}.</span></h1>
        </div>
      
      <div className="profile__icon">

        <div className="icon__img" style={{backgroundColor: color.rgba}}>
          <img className="icon_img--src" src={newIcon} alt="icon" width={130} height={140} />
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
          <p className="country__name">Cananda</p>
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
    </div>
    ) : (
      <MobileAccount />
    )}

    <AccountModal 
    showModal={showModal}
    OpenAlert={OpenAlert}
    newIcon={newIcon}
    OpenChoose={OpenChoose}
    newUserName={newUserName}
    ChangeUserName={ChangeUserName}
    ChangeCountryImage={ChangeCountryImage}
    newCity={newCity}
    ChangeCity={ChangeCity}
    newTwitterAcc={newTwitterAcc}
    ChangeTwitterAcc={ChangeTwitterAcc}
    CloseModal={CloseModal}
    Save={Save}
    color={color}/>


    <ChooseLogo 
    showChoose={showChoose}
    CloseChoose={CloseChoose}
    color={color}
    setColor={setColor}
    ChangeIcon={ChangeIcon}/>
    </div>
  )
}

export default Account;