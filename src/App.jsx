import React, { useState } from "react";

function App(){
   const[text, setText] = useState('Yogee');
   function handleClick(){
    if(text=="Yogee"){
      setText("king");
    }else{
      setText("Yogee");
    }
   }
    return(
    <>
    <div>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>Change Title</button>

    </div>
    </>
  )
};

export default App;
