import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

const Stage = ({ stage }) => {
    return (
        <div>
            <Cell />
        </div>
    );
};

Stage.propTypes = {
    stage: PropTypes.string.isRequired
};

export default Stage;