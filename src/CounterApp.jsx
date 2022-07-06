import PropTypes from 'prop-types';

export const CounterApp = ({value}) => { 
    const event = (event) => {
        console.log(event);
        // El valor de Value no se muestra en pantalla por que no se se está renderizando
        value = 1000;   
        console.log(value);
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ value }</h2>

        <button onClick={event} > +1 </button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}