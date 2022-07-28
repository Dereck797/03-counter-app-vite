import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en CounterApp', () => {

    const initCounter = 100;

    test('Debe de hacer match con el snapshot', () => {
      
        const { container, getByText } = render( <CounterApp value={initCounter} /> );
        expect( container ).toMatchSnapshot();
        expect( getByText(initCounter) ).toBeTruthy();

    })
    
    test('Debe de incrementar con el botón +1', () => {

        render( <CounterApp value={initCounter} /> );
        fireEvent.click(  screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();

    })

    test('Debe decrementar con el botón -1', () => {

        render( <CounterApp value={initCounter} /> );
        fireEvent.click(  screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();

    })

    test('Debe hacer reset y dejar el valor inicial ', () => {

        render( <CounterApp value={initCounter} /> );
        fireEvent.click(  screen.getByText('-1'));
        fireEvent.click(  screen.getByText('-1'));
        fireEvent.click(  screen.getByText('-1'));
        fireEvent.click(  screen.getByText('+1'));
        // fireEvent.click(  screen.getByText('Reset'));
        // expect(screen.getByText('100')).toBeTruthy();

        fireEvent.click(screen.getByRole('button', {name:'btn-reset'} ));
        expect(screen.getByText('100')).toBeTruthy();
    })
    

})
