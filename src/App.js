import './App.css';
import React, {useState} from 'react';



function App() {

    const [number1, setNumbre1] = useState("");
    const [number2, setNumbre2] = useState("");
    const [currentOperation, setCurrentOperation] = useState("");
    const [result, setResult] = useState(0);


    function deleteNumber () {
      if (currentOperation === "") {
        setNumbre1(number1.toString().slice(0,-1));
      } else {
        setNumbre2(number2.toString().slice(0,-1));
      }
    }

    function allClear () {
      setNumbre1("");
      setNumbre2("");
      setCurrentOperation("");
      setResult("");
    }
    function clickNumber (val) {
      if (currentOperation === "") {
        setNumbre1(number1 + val)
      } else {
        setNumbre2(number2 + val)
      }
      
    }

    function clikOperation (val) {
      setCurrentOperation(val)
    }

    function getResult () {
      // eslint-disable-next-line default-case
      switch (currentOperation) {
        case "+":
          setResult (Number(number1) + Number(number2));
          break;
          case "-":
            setResult (Number(number1) - Number(number2));
            break;
            case "*":
            setResult (Number(number1) * Number(number2));
            break;
            case "/":
            setResult (Number(number1) / Number(number2));
            break;
      }
    }

  return (
    <div className="App">
     <div className="continuous-2"> Calculator express  </div>
      <div className='calculator-grid '>
        <div className='output'>
        <div className='number-before'>{currentOperation ? number1 + currentOperation : ""}</div>
        <div className='number-after'>{ result ? result : (!currentOperation ? number1 : number2)}</div> 
        </div>
        <button onClick={allClear} className='spaw-two'>AC</button>
        <button onClick={deleteNumber}>DEL</button>
        <button onClick={()=>{clikOperation("/")}}>/</button>
        <button onClick={ () => {clickNumber(7)} }>7</button>
        <button onClick={ () => {clickNumber(8)} }>8</button>
        <button onClick={ () => {clickNumber(9)} }>9</button>
        <button onClick={()=>{clikOperation("*")}}>*</button>
        <button onClick={ () => {clickNumber(4)} }>4</button>
        <button onClick={ () => {clickNumber(5)} }>5</button>
        <button onClick={ () => {clickNumber(6)} }>6</button>
        <button onClick={()=>{clikOperation("+")}}>+</button>
        <button onClick={ () => {clickNumber(1)} }>1</button>
        <button onClick={ () => {clickNumber(2)} }>2</button>
        <button onClick={ () => {clickNumber(3)} }>3</button>
        <button onClick={()=>{clikOperation("-")}}>-</button>
        <button onClick={ () => {clickNumber(".")}}>.</button>
        <button onClick={  () =>{clickNumber(0)}}>0</button>
        <button onClick={getResult} className='spaw-two'>=</button>
      </div>
    </div>
  );
}

export default App;
