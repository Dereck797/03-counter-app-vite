import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name }) => {

  return (
    <>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      <h1>{name}</h1>
    </>
  )
}
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

// Nuestros defaultProps van a entrar antes
FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 'Algo anda mal',
  name: 'Fernando anda en skate'
}
