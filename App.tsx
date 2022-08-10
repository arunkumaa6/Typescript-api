import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const [name,setNmae]=React.useState('react')
  const update=(value:any)=>{
    setNmae(value);
  } 

  const [tack,setTack]=useState("")

  

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res:any)=> console.log(res));
},[]);
  
  
  return (
    <div className="App">{name}
      <button onClick={()=> update("js")}>update</button>
    </div>
  );
}

export default App;
