export const winner = [[2,2,2,2,2,2,2,2,2,2],
                       [2,2,2,2,2,2,2,2,2,2],
                       [2,2,2,2,2,2,2,2,4,2],
                       [2,4,2,2,2,2,2,4,2,2],
                       [2,2,4,2,2,2,4,2,2,2],
                       [2,2,2,4,2,4,2,2,2,2],
                       [2,2,2,2,4,2,2,2,2,2],
                       [2,2,2,2,2,2,2,2,2,2],
                       [2,2,2,2,2,2,2,2,2,2],
                       [2,2,2,2,2,2,2,2,2,2]]

export const loser = [[2,2,2,2,2,2,2,2,2,2],
                       [2,2,2,2,2,2,2,2,2,2],
                       [2,2,2,2,4,4,2,2,2,2],
                       [2,2,2,4,2,2,4,2,2,2],
                       [2,2,4,2,2,2,2,4,2,2],
                       [2,2,4,2,2,2,2,4,2,2],
                       [2,2,2,4,2,2,4,2,2,2],
                       [2,2,2,2,4,4,2,2,2,2],
                       [2,2,2,2,2,2,2,2,2,2],
                       [2,2,2,2,2,2,2,2,2,2]]


export let gameOver = (arrayShips) => {
    let hit = 0;
    arrayShips.forEach(ship => {
        ship.forEach(deck => {
            if (deck[2] === 1)
                hit++;
        });
    });
    if (hit === 20)
        return true;
    else return false;
}