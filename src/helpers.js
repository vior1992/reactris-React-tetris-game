export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
    return Array.from(Array(STAGE_HEIGHT), () => {
        return new Array(STAGE_WIDTH).fill([0, 'clear'])
    });
};

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    const { tetromino, pos } = player;

    for (let y = 0; y < tetromino.length; y += 1) {
        for (let x = 0; x < tetromino[y].length; x += 1) {
            if (tetromino[y][x] !== 0) {
                if(!stage[y + pos.y + moveY] ||
                !stage[y + pos.y + moveY][x + pos.x + moveX] ||
                stage[y + pos.y + moveY][x + pos.x + moveX][1] !== 'clear'
                ) return true;
            }
        }
    }
}