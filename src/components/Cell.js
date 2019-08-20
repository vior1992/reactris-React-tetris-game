import React from 'react';
import PropTypes from 'prop-types';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => {
    const color = TETROMINOS[type].color;
    
    return (
        <StyledCell type={type} color={color} >
            cell
        </StyledCell>
    );
};

Cell.propTypes = {
    type: PropTypes.string.isRequired
};

export default Cell;