import './App.css';
import {Card} from './header';
import React, { Component } from 'react';
import Form from './components/Form';
import {useState} from 'react';




function App(){

  const[isActive, setIsActive] = useState(false);
    
const handleClick = () => {
    //useful toggle switch with useState 
    setIsActive(current => !current);
}
    
  return (
    <div className="App" style={{backgroundColor: isActive ? 'salmon' : 'rgb(170, 252, 184)',
    color: isActive ? 'white' : 'rgb(170, 252, 184)',}}>
      <button className='submit-btn2' onClick={handleClick}>Change</button>
      <div className='outer-header'>
        <div className='header'>
      <Card/>
      <Form/>
      </div>
      </div>
    </div>
  );

};
export default App;


