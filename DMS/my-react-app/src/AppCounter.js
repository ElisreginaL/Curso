
import React, { useState } from 'react';

function AppCounter() {
    const [counter, setCounter] = useState(0);

    return<>
    <h1>Valor: {counter}</h1>
    <button onClick={() => {setCounter(counter - 1);}}> 
    -1 
    </button>
    <button onClick={() => {setCounter(counter + 1);}}> 
    +1 
    </button>
    </>
}

export default AppCounter;
