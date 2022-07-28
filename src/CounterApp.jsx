import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => { 

    const [counter, setCounter] = useState( value );

    const suma = () => setCounter((co) => co + 1);
    const resta = () => setCounter((co) => co - 1);
    const reset = () => setCounter(value);
    
    return (
        <>
        <h1>CounterApp</h1>
        <h2 data-testid="counter">{ counter }</h2>

        <button onClick={suma} > +1 </button>
        <button onClick={resta} > -1 </button>
        <button onClick={reset} > Reset </button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}