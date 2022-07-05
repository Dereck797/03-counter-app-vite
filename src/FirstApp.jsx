import { Fragment } from "react"

export const FirstApp = () => {
  return (
    //La etiqueta Fragment evita que deba agruparse todo en un div
    // que probablemente podría ser inecesario, al momento de inspeccionar el código
    // podemos identificar que no existe un div sino que los elementos quedan anidados
    // al div del root
    <Fragment>
        <h1>FirstApp</h1>
        <h2>Deeck Muñoz</h2>
    </Fragment>
  )
}
