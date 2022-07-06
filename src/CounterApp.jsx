import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => { 

    // Entre parentesis se define el valor inicial del hook
    const [counter, setCounter] = useState( value );


    const event = () => {
        // setCounter(counter + 1);
        // lo anterior también se puede hacer de la siguiente manera
        // 'co' es el valor del estado anterior de counter
        setCounter((co) => co + 1);
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick={event} > +1 </button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}