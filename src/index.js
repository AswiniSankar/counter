import React,{useState} from "react";
import ReactDOM from "react-dom";

import './index.css';

function Counter (){
    const [value, setValue]=useState(0);
    const slowTimer = () => {
       setTimeout(() =>{
        //    setValue(value+1); though 5 times click the button it will increase as a one time
        setValue((prevStatus) =>{
            return prevStatus +1 ;
        });
       },2000);
    };
    return (
    <div>
    <h2>Without Time out counter</h2>
    <h2>{value}</h2>
    <button className="btn"  type="button" onClick={() => setValue(value - 1)}>
        Decrease
    </button>
    <button className="btn"  type="button" onClick={() => setValue(0)}>Reset</button>
    <button className="btn"  type="button" onClick={() => setValue(value + 1)}>Increase</button>
    <h2>With Time out counter</h2>
    <h2>{value}</h2>
    <button className="btn"  type="button" onClick={slowTimer}>
      Slow Increase
    </button>
    </div>
    );
}

ReactDOM.render(<Counter></Counter>, document.getElementById('root'));