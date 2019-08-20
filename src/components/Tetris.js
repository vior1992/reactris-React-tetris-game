import React from 'react';
import PropTypes from 'prop-types';

import { createStage } from '../helpers';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = props => {    
    return (
        <div>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text='Score' />
                    <Display text='Rows' />
                    <Display text='Level' />
                </div>
                <StartButton />
            </aside>
        </div>
    );
};

// Tetris.propTypes = {
    
// };

export default Tetris;