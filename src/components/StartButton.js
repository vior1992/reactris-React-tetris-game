import React from 'react';
import PropTypes from 'prop-types';

import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => {
    return (
        <StyledStartButton onClick={callback}>
            Start Game
        </StyledStartButton>
    );
};

StartButton.propTypes = {
    callback: PropTypes.func.isRequired
};

export default StartButton;