
export let hitTest = (y, x, pcMap, pcShips) => {
    let hit = 0;
    pcShips.forEach(ship => {
        ship.forEach(deck => {
            if ((deck[0] === +y) && (deck[1] === +x)) {          
                deck[2] = 1; // Палуба повреждена
                ship.forEach(deck => {
                    if (deck[2] === 1)
                        hit++; // Количество попаданий в корабль
                });
                if (ship.length === hit) {
                    ship.forEach(deck => {
                        pcMap[deck[0]][deck[1]] = 4; // Индикация утонувшего корабля
                    });
                }
            }
        });
    });
    let resultHitTest = {};
    resultHitTest.pcMap = pcMap;
    resultHitTest.pcShips = pcShips;
    return resultHitTest;
}

export let HitEnemy = (idCell, pcMap, pcShips) => {
    let arrYX = idCell.split(',');
    let y = arrYX[0];
    let x = arrYX[1];
    switch (pcMap[y][x]) {
        case 0: // Мимо
            pcMap[y][x] = 2;
        break;
        case 1: // Попал в корабль
            pcMap[y][x] = 3; 
            hitTest(y, x, pcMap, pcShips);
        break;
        default:
    }
    return pcMap;
}