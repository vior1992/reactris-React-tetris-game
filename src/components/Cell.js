import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ type }) => {
    return (
        <div>
            cell
        </div>
    );
};

Cell.propTypes = {
    type: PropTypes.string.isRequired
};

export default Cell;