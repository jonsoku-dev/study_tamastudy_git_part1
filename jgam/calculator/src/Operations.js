import React from 'react';

const Operations = ({handleOperations}) => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

            <div className="arithmetic">
            <button type="button" class="btn btn-secondary btn-lg" onClick={() => handleOperations('+')}>+</button>
            <button type="button" class="btn btn-secondary btn-lg" onClick={() => handleOperations('-')}>-</button>
            <button type="button" class="btn btn-secondary btn-lg" onClick={() => handleOperations('*')}>*</button>
            <button type="button" class="btn btn-secondary btn-lg" onClick={() => handleOperations('/')}>/</button>
            </div>

            <div className="runFunction">
            <button type="button" class="btn btn-primary btn-lg" onClick={() => handleOperations('ce')}>ce</button>
            <button type="button" class="btn btn-primary btn-lg" onClick={() => handleOperations('=')}>=</button>
            </div>




            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <button onClick={() => handleOperations('(')}>(</button>
            <button onClick={() => handleOperations(')')}>)</button>




        </div>
    )
}

export default Operations;