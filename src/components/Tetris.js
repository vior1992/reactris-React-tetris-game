import React from 'react';
import PropTypes from 'prop-types';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = props => {
    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display text='Score'/>
                    <Display text='Rows'/>
                    <Display text='Level'/>
                </div>
                <StartButton />
            </aside>
        </div>
    );
};

// Tetris.propTypes = {
    
// };

export default Tetris;