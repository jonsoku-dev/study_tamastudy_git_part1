import React from 'react';

const Operations = ({handleOperations}) => {
    return (
        <div>
            <button onClick={() => handleOperations('+')}>+</button>
            <button onClick={() => handleOperations('-')}>-</button>
            <button onClick={() => handleOperations('*')}>*</button>
            <button onClick={() => handleOperations('/')}>/</button>
            <button onClick={() => handleOperations('ce')}>ce</button>
            <button onClick={() => handleOperations('=')}>=</button>



        </div>
    )
}

export default Operations;