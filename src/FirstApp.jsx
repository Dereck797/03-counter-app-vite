import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name }) => {

  return (
    <>
      <div data-testid="test-title">{title}</div>
      <h1>{subtitle}</h1>
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
  subtitle: 'No Hay Subtitulo',
  name: 'Dereck Muñoz'
}
