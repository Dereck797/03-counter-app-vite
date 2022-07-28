import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    // test('Debe de hacer match con el snapshot', () => {

    //     const title = 'Hola Soy Goku Super Sayayin 4'
    //     render( <FirstApp title={title}/> )

    // })

    test(' Debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);

    })

    test('Debe de mostrar el titulo enviado por props ', () => {

        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un Subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subtitle={subTitle}
            />
        );

        expect(getAllByText(subTitle).length).toBe(2);

        // expect(getByText(subTitle)).toBeTruthy();
        // expect(getByText(title)).toBeTruthy();

    })

})
