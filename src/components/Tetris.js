import React, { useState } from 'react';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import { createStage, checkCollision } from '../helpers';
import { useInterval } from '../customHooks/useInterval';
import { usePlayer } from '../customHooks/usePlayer';
import { useStage } from '../customHooks/useStage';
import { useGameStatus } from '../customHooks/useGameStatus';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

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
        setScore(0);
        setRows(0);
        setLevel(0);
    };

    const drop = () => {
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);
        }

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
                console.log('interval on');
                
                setDropTime(1000 / (level + 1) + 200);
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
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    }
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
