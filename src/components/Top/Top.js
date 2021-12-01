import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../styles/Top.css';
import topImage from '../../images/home_img.png';
import introImage from '../../images/InforMATE_logo.PNG';

function Top(){

  const [showSignUp, setShowSignUp] = useState(false);
  
  const ShowSignUp = () =>{
    setShowSignUp(true);
  };
  
  const [showSignIn, setShowSignIn] = useState(false);
  
  const ShowSignIn = () =>{
    setShowSignIn(true);
  };
  
  const account1 = {
    name: 'InforMATE',
    email: 'Informate123@gmail.com',
    password: 'Informate123',
  };
  
  const account2 = {
    name: 'Shiho Nagano',
    email: 'shihonagano@gmail.com',
    password: 'Shihonagano123',
  };
  
  const accounts = [account1, account2];
  
  return (
    <div className="top">
      <img className='top__img' src={topImage} alt="InfoMATE" />
  
      <div className="intro">
      <img className='intro__img' src={introImage} alt='Logo' />
      <h1>Hey Boys and Girls,<br/>Let's help each other</h1>
      <p>Provide and collect new imformation.<br/>This could help you a lot.</p>
  
      <div className="intro__btn">
        <div>
          <button className="joinNow" onClick={ShowSignUp}>Join now</button>
        </div>
        <div>
          <button className="signIn" onClick={ShowSignIn}>Sign in</button>
        </div>
          
      </div>
      
      </div>
  
      
  
      <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} accounts={accounts} />
      <SignIn showSignIn={showSignIn} setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} accounts={accounts}/>
  
    </div>
    );
  }

  export default Top;