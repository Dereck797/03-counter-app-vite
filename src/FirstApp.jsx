//los porp types sirven para definir el tipo de las propiedades o props
import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle }) => {

  return (
    <>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
    </>
  )
}

// En este caso estamos definiendo que title no puede ser nada mas que un String
// Si nosotros enviamos un número al componente como propiedad a title este presentará 
// un error en consola
FirstApp.propTypes = {
  // La etiqueta isRequired define que la propiedad debe ser obligatoria
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}
