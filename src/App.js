import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';
import AccountPage from './components/pages/AccountPage';
import PostPage from './components/pages/PostPage';

import topImage from './images/home_img.png';
import introImage from './images/InforMATE_logo.PNG';
import inforMateLogo from './images/InforMATE_logo.PNG';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Top/>} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/searchpage" element={<SearchPage/>} />
        <Route path="/accountpage" element={<AccountPage/>} />
        <Route path="/postpage" element={<PostPage/>} />
        
      </Routes>
    </Router>
  </div>
);
}

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
          <input className="name" type="text" value={inputName} onChange={InputName}/>
        </label>
        </div>

        <div className="email--input">
          <label htmlFor='email'>Email
            <input className="email" type="text" value={inputEmail} onChange={ExistAccount}/>
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

  const CheckAccount = (acc => {
    if(acc.email === inputEmail)
    return acc.email
  });

  let currentAccount;

  currentAccount = accounts.find(CheckAccount);

  const [currentName, setCurrentName] = useState('');

  const GetCurrentName = () => {
    const splitName = currentAccount.name.split(' ');
    setCurrentName(splitName[0])
  }

  
  const [inputPassword, setInputPassword] = useState('');

  const InputPassword = (e) => {
    setInputPassword(e.target.value)
  };

  const [checkPassword, setCheckPassword] = useState(true);

  const [currentPassword, setCurrentPassword] = useState('');

  const GetCurrentPassword = () => {
    setCurrentPassword(currentAccount.password);
  }

  const CheckPassword = () => {
    if(currentPassword === inputPassword){
      setCheckPassword(true);
      setShowSignIn(false);
    }else if(currentPassword !== inputPassword){
      setCheckPassword(false);
    }
  };

  const [showWelcomeBack, setShowWelcomeBack] = useState(false)

  const ShowWelcomeBack = () => {
    
    if(checkPassword){
      setShowWelcomeBack(false)
    }else{
      setShowWelcomeBack(true)
    }

  }

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
            <input className="password-check" type={lockCheckPassword ? 'text' : 'password'} onChange={InputPassword}/>
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
            <p className="error">⚠️ Your email or password is not correct.</p>
          )}
        </div>

        {currentAccount ? (
          <div className="login">
          <button className="login--btn" onClick={() => {CheckPassword(); GetCurrentPassword(); GetCurrentName(); ShowWelcomeBack();}}>Log in</button>
          </div>
        ) : (
          <div className="login">
          <button className="login--btn" style={{opacity: 0.5}}>Log in</button>
          </div>
        )}
        

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
        `<h2>Welcome back, {currentName}!<br/>Let's get started.</h2>` <img src={inforMateLogo} alt='logo'/>;
        </div>
      ) : (
        <div className="welcome-back"></div>
      )}

    </div>
  )
}

export default App;
