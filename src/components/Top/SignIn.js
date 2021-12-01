import React, { useState } from 'react';
import '../styles/SignIn.css';
import inforMateLogo from '../../images/InforMATE_logo.PNG';

function SignIn({showSignIn, setShowSignIn, setShowSignUp, accounts}){

  const CloseModal = () =>{
    setShowSignIn(false);
  };

  const OpenSignUp = () =>{
    setShowSignIn(false);
    setShowSignUp(true);
  }

  const [lockCheckPassword, setLockCheckPassword] = useState(false);

  const toggleCheckPassword = () =>{
    setLockCheckPassword((prevState) => !prevState)
  }

  const [inputEmail, setInputEmail] = useState('');

  const InputEmail = (e) => {
    setInputEmail(e.target.value);
  }

  // const CheckAccount = (acc => {
  //   if(acc.email === inputEmail)
  //   return acc.email
  // });

  // console.log(accounts)

  const [judgeError, setJudgeError] = useState(false);

  const SetJudgeError = () => {
    setJudgeError(true);
  }

  const [inputPassword, setInputPassword] = useState('');

  const InputPassword = (e) => {
    setInputPassword(e.target.value)
    console.log(inputPassword)
  };

  const [checkPassword, setCheckPassword] = useState(false);
  
  let currentAccount;
  let currentName;
  let currentPassword;

  const FindAccount = () =>{
    currentAccount = accounts.find(acc => acc.email === inputEmail);
    console.log(currentAccount)
    const splitName = currentAccount.name.split(' ');
    currentName = splitName[0];
    console.log(currentName);

    currentPassword = currentAccount.password;
    console.log(currentPassword);

    if(currentPassword === inputPassword){
          setCheckPassword(true);
          setShowSignIn(false);
          setShowWelcomeBack(true)
          console.log('yay')
        }else if(currentPassword !== inputPassword){
          setCheckPassword(false);
        }

  }


  // const FindAccount = () => {
  //   setCurrentAccount(accounts.find(CheckAccount));
  //   console.log(currentAccount);
  // }

  // const [currentName, setCurrentName] = useState('');

  // const GetCurrentName = () => {
  //   const splitName = currentAccount.name.split(' ');
  //   setCurrentName(splitName[0])
  //   console.log(splitName)
  // }

  
  // const [inputPassword, setInputPassword] = useState('');

  // const InputPassword = (e) => {
  //   setInputPassword(e.target.value)
  //   console.log(inputPassword)
  // };

  // const [checkPassword, setCheckPassword] = useState(true);

  // const [currentPassword, setCurrentPassword] = useState('');

  // const GetCurrentPassword = () => {
  //   setCurrentPassword(currentAccount.password);
  //   console.log(currentPassword);
  // }

  // const CheckPassword = () => {
  //   if(currentPassword === inputPassword){
  //     setCheckPassword(true);
  //     setShowSignIn(false);
  //   }else if(currentPassword !== inputPassword){
  //     setCheckPassword(false);
  //   }
  // };

  const [showWelcomeBack, setShowWelcomeBack] = useState(false)

  // const ShowWelcomeBack = () => {
  //   if(checkPassword === true){
  //     setShowWelcomeBack(true);
  //     console.log('yay')
  //   }else{
  //     setShowWelcomeBack(false)
  //     console.log('nah')
  //   }
  // };

  const JumpToAccount = () => {

    if(showWelcomeBack){
      setTimeout(() => {
        window.location.href = '/accountpage'
      }, 2000)
    }
  };
  JumpToAccount();

  return(
    <div>
      {showSignIn ? (
        <div id="overlay">
          <div className="signin-modal">
          <button className="btn-close-signinmodal" onClick={CloseModal}>&times;</button>
          <h3>Sign In</h3>
          <p className="sign-in">Welcome back!<br/>
          Please fill this blank below to sign in.</p>

        <div className="sign-email">
          <label htmlFor='email-check'>Email
          <input className="email-check" type="text" onChange={InputEmail}/>
          </label>
        </div>
      
        <div className="sign-password">
          <label htmlFor='password-check'>Password
            <input className="password-check" type={lockCheckPassword ? 'text' : 'password'} onChange={InputPassword} />
            <button className="password-check__lock" onClick={toggleCheckPassword}>
              {lockCheckPassword ? (
                <i className='fas fa-lock-open' />
              ) : (
                <i className='fas fa-lock' />
              )}
            </button>
          </label>
            {checkPassword ? (
            <p className="error"></p>
          ) : (
            <p className="error">
            {judgeError ? 
              '⚠️ Your email or password is not correct.' : ''}
            </p>
          )}
          
        </div>

          <div className="login">
          <button className="login--btn" onClick={() => {FindAccount(); SetJudgeError();}}>Log in</button>
          </div>
        
        <hr className="border--signin" />
        <p className="modal-signup">You don't have an account? <button className="jump--signup" onClick={OpenSignUp}>Sign up</button></p>
      
        </div>
        </div>

      ) : (
        <div>
        </div>
      )}

      {showWelcomeBack ? (
        <div className="overlay"></div>
      ) : (
        <div></div>
      )}

      {showWelcomeBack ? (
        <div className="welcome-back">
        `<h2>Welcome back!<br/>Let's get started.</h2>` <img src={inforMateLogo} alt='logo'/>;
        </div>
      ) : (
        <div className="welcome-back"></div>
      )}

    </div>
    )
}

export default SignIn;