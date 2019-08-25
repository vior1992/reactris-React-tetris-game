import React from 'react';
import PropTypes from 'prop-types';

import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => {
    return (
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
    );
};

Display.propTypes = {
    gameOver: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Display;