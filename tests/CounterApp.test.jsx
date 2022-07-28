import { render } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en CounterApp', () => {


    test('Debe de hacer match con el snapshot', () => {
      
        const initCounter = 100;
        const { container, getByText } = render( <CounterApp value={initCounter} /> );
        expect( container ).toMatchSnapshot();
        expect( getByText(initCounter) ).toBeTruthy();
    })
    

})
