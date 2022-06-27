import './App.css';
import GetList from './components/GetList.js';
import AddNew from './components/AddNew.js';
import { useState } from 'react';

function App() {
  const [fetch,setFetch]=useState(false);
  const [push,setPush]=useState(false);
  const handleClick1= (e)=>{
     setFetch(true);
     setPush(false);
  }
  const handleClick2= (e)=>{
    setFetch(false);
    setPush(true);
 }
  return (
    <div className="App">
      <div className="header">
     <h1>Book API</h1>
     </div>
     
     <div className='body'>
      <div className='fetchlist' >
        <h2 onClick={handleClick1}>Get the Book List</h2>
      </div>
      <div className='addnew' onClick={handleClick2}>
        <h2 onClick={handleClick2}>Add a new book</h2>
      </div>
     </div>
     <div className='fullbody'>
     {fetch&&<GetList/>}
     {push&&<AddNew/>
     }</div>
    </div>
  );
}

export default App;
