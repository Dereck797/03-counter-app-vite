import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    test('Debe de hacer match con el snapshot', () => {
      
        const title = 'Hola Soy Goku Super Sayayin 4';
        // el render retorna un objeto que expone ciertas propiedades dentro de ellas 
        // tenemos al container
        const { container } = render( <FirstApp title={title}/> )
        console.log( container );
        
        // El método toMatchSnapshot crea una fotografía del objeto renderizado inicialmente
        // Automáticamente se crea un carpeta llamada snapshots en donde se ve reflejado el snapshot inicial 
        // No tiene mucho sentido utilizar este método para componentes que cambian mucho
        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar el titulo H1', () => {
      
        const title = 'Hola Soy Goku Super Sayayin 4';
        // Estas funciones que nos da testing Library son muy utiles para poder anailzar rápidamente el DOM(Es el componente renderizado)
        const { container, getByText } = render( <FirstApp title={title}/> )
        // esta función nos permite saber si en lo que estamos renderizando existe ese titulo
        expect( getByText(title) ).toBeTruthy();

        // El querySelector me permite saltar al DOM y buscar una etiqueta H1
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

    })
    
    
  
})
