import React, {useState} from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
    const [num, setNum] = useState("");
    const [oldNum, setOldNum] = useState("");
    const [operator, setOperator] = useState();

    function inputNumber (e) {
        let input = e.target.value
        if(num === 0){
            setNum(input);
        } else {
            setNum(num+input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentagem(e) {
        setNum(num / 100);
    }

    function changeSign() {
        if(num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum("");
    }

    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
        }else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    }
    const vis={
        visibility:"hidden"
    }
    const cpy={
        textDecoration:"none"
    }
    
    return (
        <div>
            <Box m={10}/>
            <Container maxWidth="xs">
                <div className='wrapper'>Calculator
                <Box m={12}/>
                    <p className='result  ' placeholder='result'>{num}</p>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                   
                    <button onClick={porcentagem}>%</button>
                    <button className='orange' onClick={operatorHandler} value={'/'}>/</button>
                    <button className='grey' onClick={inputNumber} value={7}>7</button>
                    <button className='grey' onClick={inputNumber} value={8}>8</button>
                    <button className='grey' onClick={inputNumber} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value={'X'}>X</button>
                    <button className='grey' onClick={inputNumber} value={4}>4</button>
                    <button className='grey' onClick={inputNumber} value={5}>5</button>
                    <button className='grey' onClick={inputNumber} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value={'-'}>-</button>
                    <button className='grey' onClick={inputNumber} value={1}>1</button>
                    <button className='grey' onClick={inputNumber} value={2}>2</button>
                    <button className='grey' onClick={inputNumber} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
                    <button className='grey ' onClick={inputNumber} value={0}>0</button>
                    <button style={vis}>.</button>
                    <button className='grey' onClick={inputNumber} value={"."}>.</button>
                    <button className='orange' onClick={calculate}>=</button>
                  <br />
                  <br />
                <div>&copy;Copyright |<a href="https://devdaim.me" style={cpy}><em> DevDaim</em> </a></div>
                </div>
            </Container>
        </div>
    )
}