import React from "react";
import './Introduction.css';
import Typed from 'react-typed';

const Introduction = () =>{
    return(
    <div className="introduction">
    <h1>
    <Typed id = 'text' className="white mt5"
     strings ={["Hi, my name is Regi Loshi,"]}
     typeSpeed={40}
     showCursor= {false}
     />
     <br/>
     <Typed id = 'text2' className="white mt5"
     strings = {["I'm a Software Engineering Student."]}
     typeSpeed={40}
     startDelay={1500}
     showCursor= {false}
     />
     </h1>
     </div>
    )
}
export default Introduction;