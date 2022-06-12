import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [value, setValue] = useState("0");

  
  return (
    <>
    <div id="main">
      
      <textarea id='char-limit-input' countLimit={50}/>
      <div id='word-counter'>
      <span handelChange={(e)=>{
        setValue({length: e.target.value.split(" ").length });
      }}>{value}</span>
      </div>

      <div id='char-counter' onChange={(e)=>{
        setValue({value:e.target.value}) >
    {value}</div>

      <div id='fontSize-input'>
      <input type="range" min="16" max="32"/>
    
      </div>
      
    
  
      {/* <textarea
        value={value}
        onChange={(e) => {
          setValue({ value: e.target.value });
          setValue({ length: e.target.value.split(" ").length });
        }}
      >
        Type hear
      </textarea> */}

    
    </>
  );
};

export default App;
