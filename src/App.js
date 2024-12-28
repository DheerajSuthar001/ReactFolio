import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [newText,setnewText]=useState('');

  //Everytime Ui renders
  // useEffect(() => {
  //   console.log('UI rendering done');
  // });

  //first and one time only
  // useEffect (()=>{
  //   console.log('UI rendering done');
  // },[]);

  //first time and dependency based
  // useEffect(()=>{
  //   console.log('UI rendering done');
  // },[newText]);

  //unmounting
  useEffect (()=>{
    console.log('added');

    return ()=>{
      console.log('removed');
    }
  },[newText])
  function changeHandler(event) {
    console.log(event.target.value);
    setnewText(event.target.value);
  };

  const [windowWidth, setwindowWidth]=useState(window.innerWidth);
  useEffect(()=>{
    let handlewindowSize=()=>{
      setwindowWidth(window.innerWidth);
    }
    window.addEventListener('resize',handlewindowSize);
    return ()=>{
      window.removeEventListener('resize',handlewindowSize);
      
    }
  },[windowWidth]);

  return (
    <div>
      <input type='text' onChange={changeHandler}></input>
      <p>{newText}</p>
      <p>Window width is {windowWidth}</p>
    </div>

  );
}

export default App;
