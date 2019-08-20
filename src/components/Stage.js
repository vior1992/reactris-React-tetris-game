import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

const Stage = ({ stage }) => {
    const rows = () => {
        return stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />));
    };

    return (
        <div>
            {rows()}
        </div>
    );
};

Stage.propTypes = {
    stage: PropTypes.string.isRequired
};

export default Stage;