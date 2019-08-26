import React from 'react';
import PropTypes from 'prop-types';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

const Stage = ({ stage }) => {
    const rows = () => {
        return stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />));
    };

    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {rows()}
        </StyledStage>
    );
};

Stage.propTypes = {
    stage: PropTypes.string.isRequired
};

export default Stage;