import React from 'react';
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

function ChooseLogo({showChoose, CloseChoose, color, setColor, ChangeIcon}) {
  return (
    <div>
    {showChoose ? (
      <div className="chooseyours">
      <button className="btn--close-choose" onClick={CloseChoose}>&times;</button>
      <h3>Choose your icon</h3>
      <div style={{margin: '0 auto', width: '100px', height: '80px', marginBottom: '10px', backgroundColor: color.rgba}}>
      </div>
      <InputColor initialValue='#ffffff' onChange={setColor} placement='right'/>
      <div className="chooseyours__icon" onClick={ChangeIcon}>
        <img src={ChooseLogo1} alt="icon1" width="90px" height="100px" />
        <img src={ChooseLogo2} alt="icon2" width="110px" height="110px" />
        <img src={ChooseLogo3} alt="icon3" width="100px" height="100px" />
        <img src={ChooseLogo4} alt="icon4" width="80px" height="100px" />
        <img src={ChooseLogo5} alt="icon5" width="80px" height="100px" />
        <img src={ChooseLogo6} alt="icon6" width="80px" height="100px" />
        <img src={ChooseLogo7} alt="icon7" width="80px" height="100px" />
        <img src={ChooseLogo8} alt="icon8" width="80px" height="100px" />
        <img src={ChooseLogo9} alt="icon9" width="100px" height="100px" />
        <img src={ChooseLogo10} alt="icon10" width="100px" height="100px" />
        <img src={ChooseLogo11} alt="icon11" width="100px" height="100px" />
        <img src={ChooseLogo12} alt="icon12" width="80px" height="100px" />
        <img src={ChooseLogo13} alt="icon13" width="70px" height="100px" />
        <img src={ChooseLogo14} alt="icon14" width="70px" height="100px" />
        <img src={ChooseLogo15} alt="icon15" width="70px" height="100px" />
        <img src={ChooseLogo16} alt="icon16" width="110px" height="100px" />
        <img src={ChooseLogo17} alt="icon17" width="100px" height="100px" />
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
  )
}

export default ChooseLogo;