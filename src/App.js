import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {


  let response;
 async function get(){
  const users =  await (await fetch("http://localhost:3002/user")).json();
  console.log("AQUII",users)
  response = users;
}
useEffect(()=>{
  get();
},[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
