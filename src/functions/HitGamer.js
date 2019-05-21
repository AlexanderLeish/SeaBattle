import {gameRandom, sizeMap,} from './ShipPlacement';
import {hitTest} from './HitEnemy';

let testHitCell = (y, x, gamerMap) => {
    if ((gamerMap[y][x] === 2) || (gamerMap[y][x] === 3) || (gamerMap[y][x] === 4))
        return false;
        else return true;
}

export let HitGamer = (gamerMap, gamerShips) => {
    let notHit = true;
    while (notHit) {
        console.log(123);
        let y = gameRandom(sizeMap); // Начальная клетка X 
        let x = gameRandom(sizeMap); // Начальная клетка Y 
        if (testHitCell(y, x, gamerMap)) { // Проверка повторного попадания
            if (gamerMap[y][x] === 0) {
                gamerMap[y][x] = 2;
                notHit = false;
                } else if (gamerMap[y][x] === 1) {
                    gamerMap[y][x] = 3;
                    hitTest(y, x, gamerMap, gamerShips);
                    notHit = false;
                }
        }
    }
    return gamerMap;
}