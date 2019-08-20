import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ gameOver, text }) => {
    return (
        <div>
            {text}
        </div>
    );
};

Display.propTypes = {
    gameOver: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Display;