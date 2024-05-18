import React, { useState } from 'react';
import Button from './Button_temp';
import Display from './Display';
import './Calculator.css'; // Adicione estilos básicos para a calculadora

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
  
    // Defina os botões científicos
    const scientificButtons = ['sin', 'cos', 'tan', 'log', 'sqrt'];
  
    const handleButtonClick = (value) => {
      if (scientificButtons.includes(value)) {
        let result;
        const number = parseFloat(displayValue);
        switch (value) {
          case 'sin':
            result = Math.sin(number);
            break;
          case 'cos':
            result = Math.cos(number);
            break;
          case 'tan':
            result = Math.tan(number);
            break;
          case 'log':
            result = Math.log10(number);
            break;
          case 'sqrt':
            result = Math.sqrt(number);
            break;
          default:
            break;
        }
        setDisplayValue(result.toString());
      } else if (value === 'C') {
        setDisplayValue('0');
      } else if (value === '=') {
        try {
          setDisplayValue(eval(displayValue).toString());
        } catch {
          setDisplayValue('Error');
        }
      } else {
        setDisplayValue((prev) => (prev === '0' ? value : prev + value));
      }
    };
  
    return (
      <div className="calculator">
        <Display value={displayValue} />
        <div className="buttons">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C', ...scientificButtons].map((symbol) => (
            <Button key={symbol} onClick={() => handleButtonClick(symbol)}
            className={scientificButtons.includes(symbol) ? 'scientific-button' : ''}
            >
              {symbol}
            </Button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Calculator;