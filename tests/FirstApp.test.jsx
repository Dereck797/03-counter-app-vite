import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    test('Debe de hacer match con el snapshot', () => {
      
        const title = 'Hola Soy Goku Super Sayayin 4'
        render( <FirstApp title={title}/> )


    })
    
  
})
