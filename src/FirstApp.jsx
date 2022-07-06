import { Fragment } from "react"

// No se puede mandar el objeto completo.. sino por cada una de sus propiedades
// a no ser que utilicemos JSON.stringify()
const object = {
  message: 'Hola Mundo',
  title: 'Castiblanco '
}

const newMessage = 'Dereck';

const array = [1,2,3,4,5,6]

// Lo mas recomendable es utilizar las funciones fuera del functional component
const funcion = () => { return 'DERECK SEBASTIAN MUNOZ CASTIBLANCO' }

export const FirstApp = (props) => {
  // aunque se debe utilizar cuando dentro del functional componen exista alguna
  // variable propia que deba modificarser o que vaya a cambiar}
  console.log(props);
  const funcion1 = () => { return 'La buena ratón' }

  return (
    //La etiqueta Fragment evita que deba agruparse todo en un div
    // que probablemente podría ser inecesario, al momento de inspeccionar el código
    // podemos identificar que no existe un div sino que los elementos quedan anidados
    // al div del root
    <Fragment>
        <h1>{object.message}</h1>
        <h1>{object.title}</h1>
        {/* <h1>{ JSON.stringify (object) }</h1>  */}
        <h1>{ funcion1() }</h1>
        <h1>{ funcion() }</h1>
        <h1>{ newMessage }</h1>
        <h1> { 1 + 1 }</h1>
        <h1>{array}</h1>
        <h2>Deeck Muñoz</h2>
    </Fragment>
  )
}
