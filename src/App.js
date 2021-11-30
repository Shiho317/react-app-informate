import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';
import AccountPage from './components/pages/AccountPage';
import TopPage from './components/pages/TopPage';
import PostPage from './components/pages/PostPage';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<TopPage/>} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/searchpage" element={<SearchPage/>} />
        <Route path="/accountpage" element={<AccountPage/>} />
        <Route path="/postpage" element={<PostPage/>} />
        
      </Routes>
    </Router>
  </div>
);
}
  export default App;