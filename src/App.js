import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [newText,setnewText]=useState('');
  useEffect(() => {
    console.log('UI rendering done');
  })
  function changeHandler(event) {
    console.log(event.target.value);
    setnewText(event.target.value);
  }
  return (
    <div>
      <input type='text' onChange={changeHandler}></input>
      <p>{newText}</p>
    </div>

  );
}

export default App;
