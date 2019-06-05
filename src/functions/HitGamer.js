import {gameRandom, sizeMap, testAroudCell} from './ShipPlacement';
import {hitTest} from './HitEnemy';

const aroundCellArray = [['-1','-1'],['-1',''],['-1','+1'],['','-1'],['',''],['','+1'],['+1','-1'],['+1',''],['+1','+1']];
const diagonalCellArray = [['-1','-1'],['-1','+1'],['+1','-1'],['+1','+1']];


// Проверка клетки на соседство с потопленным кораблем
let testCell = (yCell, xCell, gameMap) => {	
	if (testAroudCell(yCell, xCell)) {
		for (let i = 0; i < 9; i++) {
			let y = yCell+(+(aroundCellArray[i][0]));
			let x = xCell+(+(aroundCellArray[i][1]));
			if (testAroudCell(y, x)) {
                if ((gameMap[y][x] === 4))
                    return false;
			}	
		}
		return true;
	}
	else return false;
 }

// Проверка клетки на диагональное соседство с подбитой палубой
let testDiagonalCell = (yCell, xCell, gameMap) => {	
	if (testAroudCell(yCell, xCell)) {
		for (let i = 0; i < 4; i++) {
			let y = yCell+(+(diagonalCellArray[i][0]));
			let x = xCell+(+(diagonalCellArray[i][1]));
			if (testAroudCell(y, x)) {
                if ((gameMap[y][x] === 3))
                    return false;
			}	
		}
		return true;
	}
	else return false;
 }

export let HitGamer = (gamerMap, gamerShips) => {
    let notHit = true;
    while (notHit) {
        console.log(123);
        let y = gameRandom(sizeMap); // Начальная клетка X 
        let x = gameRandom(sizeMap); // Начальная клетка Y 
        if (testCell(y, x, gamerMap)) { 
            if (testDiagonalCell(y, x, gamerMap)) {
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
    }
    return gamerMap;
}