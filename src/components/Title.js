import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ headline }) => <h2>{headline}</h2>;

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
