
//export const FirstApp = (props) => {
// Es raro enviar solo props por lo general se desestructura prpos de la siguiente manrea 
// Se pueden definir props por defecto, si subtitle viene undefined o null. Traera en su valor 
// la palabra "Hola Soy Vegeta"
export const FirstApp = ({title, subtitle= 'Hola Soy Vegeta' }) => {

  return (
    <>
      <h1>{1+1}</h1>
      <h1>{title}</h1>
      <h1>{subtitle+1}</h1>
    </>
  )
}
