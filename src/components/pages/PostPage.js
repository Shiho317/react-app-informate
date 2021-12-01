import React, {useState, useEffect} from 'react';
import '../../App.css';
import MobilePost from '../mobile/MobilePost';

export default function PostPage (addTweet) {
  const[laptopPost, setLaptopPost] = useState(true);

  const LaptopPost = () => {
    if(window.innerWidth <= 640){
      setLaptopPost(false);
    }else{
      setLaptopPost(true);
    }
  };

  useEffect(() => {
    LaptopPost();
  }, []);

  window.addEventListener('resize', LaptopPost);

    return(
      <div>
      {laptopPost ? (
        <div>This page is not exist.</div>
      ) : (
        <MobilePost />
      )}
        
      </div>
        );
}