import React from 'react';
import PropTypes from 'prop-types';

import { createStage } from '../helpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = props => {    
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text='Score' />
                        <Display text='Rows' />
                        <Display text='Level' />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

// Tetris.propTypes = {
    
// };

export default Tetris;