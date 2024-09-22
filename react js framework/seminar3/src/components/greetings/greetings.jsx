import PropTypes from 'prop-types';

const Greetings = ({ name }) => {
  return <h1>Привет, {name}!</h1>;
};

Greetings.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Greetings;
