import React, { useState } from 'react';
import './styles/SignUp.css';
import inforMateLogo from '../images/InforMATE_logo.PNG';

function SignUp({showSignUp, setShowSignUp, setShowSignIn, accounts}){

  const CloseModal = () =>{
    setShowSignUp(false);
  };

  const OpenSignIn = () =>{
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const [lockedPassword, setLockedPassword] = useState(false);

  const togglePassword = () =>{
    setLockedPassword((prevState) => !prevState);
  }

  const [inputPassword, setInputPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);

  const PasswordError = (e) => {
      setInputPassword(e.target.value);

    if(e.target.value.length >= 8 && e.target.value.match(/[A-Z]/) && e.target.value.match(/[0-9]/)){
      setPasswordError(true);
    }else{
      setPasswordError(false);
    }
  };

  const [existAccount, setExistAccount] = useState(false);
  const [inputEmail, setInputEmail] = useState('');

  const ExistAccount = (e) => {

    setInputEmail(e.target.value)

    if(accounts.find(acc => acc.email === inputEmail)){
      setExistAccount(true);
    }else{
      setExistAccount(false)
    }
  }

  const [inputConfirm, setInputConfirm] = useState('');
  const [checkInputConfirm, setCheckInputConfirm] = useState(true);

  const [inputName, setInputName] = useState('');

  const InputName = (e) => {
    setInputName(e.target.value);
  }

  const CheckInputConfirm = (e) => {
    setInputConfirm(e.target.value);

    if(inputPassword === inputConfirm){
      setCheckInputConfirm(true);
    }else{
      setCheckInputConfirm(false);
    };
  };

  const newAcc = {
    name: inputName,
    email: inputEmail,
    password: inputPassword
    };

    const splitName = newAcc.name.split(' ');
    const firstName = splitName[0];

  const [submitSuccess, setSubmitSuccess] = useState(false)

  const SubmitSuccess = () => {
    setSubmitSuccess(true);

    accounts.push(newAcc);

    setShowSignUp(false);
  }

  const JumpToAccount = () => {

    if(submitSuccess){
      setTimeout(() => {
        window.location.href = '/accountpage'
      }, 2000)
    }
  };
  JumpToAccount();
  

  return(
    <div>
    {showSignUp ? (
    <div id="overlay">
        <div className="join-modal">
        <button className="btn-close-joinmodal" onClick={CloseModal}>&times;</button>
        <h3>Sign Up</h3>
        <p className="joinus">Thank you, guest.<br/>
        Please fill this blank below to join us.</p>

        <div className="name--input">
        <label htmlFor='name'>Name
          <input className="name" type="text" value={inputName} onChange={InputName} required/>
        </label>
        </div>

        <div className="email--input">
          <label htmlFor='email'>Email
            <input className="email" type="text" value={inputEmail} onChange={ExistAccount} required/>
          </label>
          {existAccount ? (
            <div className="exist"><p>* Your email is already registered.</p></div>
          ) : (
            <div className="exist"></div>
          )}
        
        </div>
    
        <div className="password--input">
          <label htmlFor='password'>Password
            <input className="password" type={lockedPassword ? 'text' : 'password'} value={inputPassword} onChange={PasswordError}/>
            <button className="password__lock" onClick={togglePassword}>
            {lockedPassword ? (
              <i className='fas fa-lock-open' />
            ):(
              <i className='fas fa-lock' />
            )}
            
            </button>
          </label>
          {passwordError ? (<p className="password__stricts">* Password must be at least 8 characters long, including 1 uppercase character and 1 degit.</p>) : (<p className="password__stricts" style={{color: 'red'}}>* Password must be at least 8 characters long, including 1 uppercase character and 1 degit.</p>)}
        
        </div>

      <div className="confirm--input">
        <label htmlFor='confirm'>
          <input className="confirm" type="password" placeholder="Confirm(password)" value={inputConfirm} onChange={CheckInputConfirm}/>
        </label>
        {checkInputConfirm ? (
          <p className="notmatch">
          </p>
        ) : (
          <p className="notmatch" style={{color: 'red'}}>'⚠️ Your input is incorrect with your password.'</p>
        )}
      </div>

      <div className="signup">
      {passwordError && !existAccount && checkInputConfirm ? (
        <button className="signup--btn" onClick={SubmitSuccess}>Sign up</button>
      ) : (
        <button className="signup--btn" style={{opacity: 0.5}}>Sign up</button>
      )}
      </div>

      <hr className="border--join" />
      <p className="modal-login">Already have an account?  <button className="jump--login" onClick={OpenSignIn}>Log in</button></p>
    
      </div>
      </div>
  ) : (
    <div>
    </div>
  )}

    {submitSuccess ? (
      <div className="overlay"></div>
    ) : (
      <div></div>
    )}

    {submitSuccess ? (
      <div className="welcome-back">
        `<h2>Welcome, {firstName}!<br/>Thank you for join!</h2>` <img src={inforMateLogo} alt='logo'/>;
      </div>
    ) : (
      <div className="welcome-back"></div>
    )}
    
    </div>
  )
}

export default SignUp;