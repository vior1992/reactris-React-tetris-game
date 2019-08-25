import React from 'react';
import PropTypes from 'prop-types';

import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => {
    return (
        <StyledStartButton callback={callback}>
            Start Game
        </StyledStartButton>
    );
};

StartButton.propTypes = {
    callback: PropTypes.func.isRequired
};

export default StartButton;