import React from 'react';

const Numbers = ({handleButton}) => {
    //when button clicked show that on display
    return (
        <div>
            <button onClick={() => handleButton('1')}>1</button>
            <button onClick={()=>handleButton('2')}>2</button>
            <button onClick={()=>handleButton('3')}>3</button>
            <button onClick={()=>handleButton('4')}>4</button>
            <button onClick={()=>handleButton('5')}>5</button>
            <button onClick={()=>handleButton('6')}>6</button>
            <button onClick={()=>handleButton('7')}>7</button>
            <button onClick={()=>handleButton('8')}>8</button>
            <button onClick={()=>handleButton('9')}>9</button>

        </div>
    )
}

export default Numbers;