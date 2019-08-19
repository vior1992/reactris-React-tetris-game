import React from 'react';
import PropTypes from 'prop-types';

const StartButton = ({ callback }) => {
    return (
        <div>
            Start Game
        </div>
    );
};

StartButton.propTypes = {
    callback: PropTypes.func.isRequired
};

export default StartButton;