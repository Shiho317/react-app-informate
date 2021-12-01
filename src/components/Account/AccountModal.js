import React from 'react';

function AccountModal({showModal, OpenAlert, newIcon, OpenChoose, newUserName, ChangeUserName,
ChangeCountryImage, newCity, ChangeCity, newTwitterAcc, ChangeTwitterAcc, CloseModal, Save, color}) {
  return (
    <div>
      {showModal ? (
        <div id='overlay'>
          <div className='modal'>
            <button className="btn--close-modal" onClick={OpenAlert}>&times;</button>
  
        <div className="profile__modal">
          <div className="modal__img" style={{backgroundColor: color.rgba}}>
            <img className="modal__img--src" src={newIcon} alt="icon" width="90px" height="100px" />
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
      
    </div>
  )
};

export default AccountModal;