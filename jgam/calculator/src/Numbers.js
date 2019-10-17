import React from 'react';
import './Numbers.css';


const Numbers = ({handleButton}) => {
    //when button clicked show that on display
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <div className="first">
                <button type="button" class="btn btn-outline-secondary" onClick={() => handleButton('1')}>1</button>
                <button type="button" class="btn btn-outline-secondary" onClick={()=>handleButton('2')}>2</button>
                <button type="button" class="btn btn-outline-secondary" onClick={()=>handleButton('3')}>3</button>
            </div>

            <div className="second">
                <button type="button" class="btn btn-outline-secondary" onClick={()=>handleButton('4')}>4</button>
                <button type="button" class="btn btn-outline-secondary" onClick={()=>handleButton('5')}>5</button>
                <button type="button" class="btn btn-outline-secondary" onClick={()=>handleButton('6')}>6</button>
            </div>

            <div className="third">
                <button type="button" class="btn btn-outline-secondary" onClick={()=>handleButton('7')}>7</button>
                <button type="button" class="btn btn-outline-secondary" onClick={()=>handleButton('8')}>8</button>
                <button type="button" class="btn btn-outline-secondary" onClick={()=>handleButton('9')}>9</button>
            </div>
        </div>
    )
}

export default Numbers;