import logo from './logo.svg';
import './App.css';
import FunctionalComponents from './components/FunctionalComponents';
import { useState } from 'react';
import ClassComponents from './components/ClassComponents';

function App() {

  let [show,setShow]=useState(true)
  return (
    <div className="App">

      <button type='button' onClick={()=>{
          setShow(!show)
      }}>load page</button>
      {show===true&&<FunctionalComponents /> }
      <hr></hr>
      {show===true&&<ClassComponents />}
    </div>
  );
}

export default App;
