// Screen nos permite tener en memoria el ultimo render, aquí vamos a tener la versión actualizado después de los últimos cambios del DOM 
import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Hola, Soy Gohan';

    test('Debe de hacer match con el snapshot', () => {
      
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();
    
    })

    test(' Debe de mostrar el mensaje Hola, Goku', () => {
        
        render( <FirstApp title={ title }/> );
        expect( screen.getByText(title)).toBeTruthy();
        // screen.debug();
    })
    
    test(' Debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title={ title }/> );
        // getByRole nos permite traer los objetos identificandolos por etuquetas de html
        expect( screen.getByRole('heading' , {level: 1 }).innerHTML ).toContain( title );
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        render(
            <FirstApp
                title={title}
                subtitle={subTitle}
            />
        ); 

        expect(screen.getAllByText(subTitle).length).toBe(2);
        
    })
    
    

    
})
