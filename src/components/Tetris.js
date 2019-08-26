import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import { createStage, checkCollision } from '../helpers';
import { useInterval } from '../customHooks/useInterval';
import { usePlayer } from '../customHooks/usePlayer';
import { useStage } from '../customHooks/useStage';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = props => {
    const [ dropTime, setDropTime ] = useState(null);
    const [ gameOver, setGameOver ] = useState(false);

    const [ player, updatePlayerPos, resetPlayer, playerRotate ] = usePlayer();
    const [ stage, setStage ] = useStage(player, resetPlayer);

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    };

    const startGame = () => {        
        setStage(createStage());
        resetPlayer();
        setDropTime(1000);
        setGameOver(false);
    };

    const drop = () => {
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, colldided: false });
        } else {
            if (player.pos.y < 1) {
                setGameOver(true);
                setDropTime(null);
                console.log('GAME OVER');
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        } 
    };

    const keyUp = ({ keyCode }) => {
        if(!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000);
            }
        }
    };

    const dropPlayer = () => {
        setDropTime(null);
        drop()
    };

    const move = ({ keyCode }) => {
        if (gameOver) return null;
     
        if (keyCode === 37) return movePlayer(-1);
        if (keyCode === 39) return movePlayer(1);
        if (keyCode === 40) return dropPlayer();
        if (keyCode === 38) playerRotate(stage, 1);
    };

    useInterval(() => {
        drop();

    }, dropTime);

    return (
        <StyledTetrisWrapper role="button"  tabIndex="0"  onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver 
                        ? <Display gameOver={gameOver} text="Game over" />
                        : <div>
                            <Display text='Score' />
                            <Display text='Rows' />
                            <Display text='Level' />
                        </div>
                    }
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

// Tetris.propTypes = {
    
// };

export default Tetris;
