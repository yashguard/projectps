import './App.css';
import Button from './Button';
import React,{useState} from 'react';

function App() {

  let [state,setState] = useState();
  const clearValue =  () => {
    setState(null)
  }
  return (
    <>
      <input type="text" onChange={(event)=>setState(event.target.value) }/>
      <Button clearValue={clearValue} />
      <h1>{state}</h1>
    </>
  );
}

export default App;
