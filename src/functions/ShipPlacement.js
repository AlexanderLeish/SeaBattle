export const sizeMap = 10; // Размер игровой карты
export const aroundCellArray = [['-1', '-1'], // Массив координат соседних ячеек
						['-1', ''], 
						['-1', '+1'],
						['', '-1'],
						['', ''], // Центральная ячейка
						['', '+1'],
						['+1', '-1'],
						['+1', ''],
						['+1', '+1']]

export let gameRandom = x => Math.floor(Math.random()*x); // Генератор целых чисел
	
// Подсчёт количества не установленных кораблей
let countShipArray = (shipArray) => {
	let amount = 0;
	shipArray.forEach(ship => {
		amount += ship;
	});
	if (amount !== 0) return true;
	else return false;
}

// Создание пустой карты
let mapArray = x => { 
	let gameMap = [];
	for (let i = 0; i < x; i++){
		gameMap[i] = [];
		for (let j = 0; j < x; j++){
			gameMap[i][j] = 0;
		}
	}
	return gameMap;
}

// Проверка на существование соседней клетки
export let testAroudCell = (x, y) => {
	if ((y > -1) && (y < sizeMap) && (x > -1) && (x < sizeMap)) return true
	else return false
}

// Проверка клетки на возможность установить палубу
let testCell = (yCell, xCell, gameMap) => {	
	if (testAroudCell(yCell, xCell)) {
		for (let i = 0; i < 9; i++) {
			let y = yCell+(+(aroundCellArray[i][0]));
			let x = xCell+(+(aroundCellArray[i][1]));
			if (testAroudCell(y, x)) {
				if (gameMap[y][x] !== 0) return false; // false если соседняя клетка занята
			}	
		}
		return true; // 
	}
	else return false;
 }

let ship = []; // Массив координат корабля

// Проверка возможности установить корабль
let testShip = (y, x, deck, yD, xD, gameMap) => {
	for (let i = 0; i < deck; i++) {
		if (testCell(y, x, gameMap)) {
			ship[i] = [y, x];
			y += yD;
			x += xD;
		}
		else return false
	}
	return true;
}

// Проверка установка коробля в любой ориентации
let testPositionShip = (yCell, xCell, deck, shipPos, gameMap) => {
	switch(shipPos) {
		case 0: // установка корабля по горизонтали
			if (testShip(yCell, xCell, deck, 0, 1, gameMap)) {
			return true;
			} else  if (testShip(yCell,xCell, deck, 0, -1, gameMap)) {
				return true; }
			break;
		case 1: // установка корабля по вертикали
		if (testShip(yCell,xCell, deck, 1, 0, gameMap)) {
			return true;
			} else  if (testShip(yCell, xCell, deck, -1, 0, gameMap)) {
				return true; }
			break;
		default: 
	}
}
// Установка корабля на карту
let installShip = (yCell, xCell, deck, shipPos, gameMap, ships, countShip) => {
	if (testPositionShip(yCell, xCell, deck, shipPos, gameMap)) {
		ships[countShip] = []; //Массив координат корабля
		for (let i = 0; i < deck; i++) {
			gameMap[ship[i][0]][ship[i][1]] = 1; //Установка палубы на карту
			ships[countShip][i] = [];	// Объект координат палубы
			ships[countShip][i][0] = ship[i][0]; // y
			ships[countShip][i][1] = ship[i][1]; // x
			ships[countShip][i][2] = 0; // Без повреждений
		}
		return true;
	}
}
// Заполнение карты кораблями со случайными координатами и положением
export let installGameMap = () => {
	let shipArray = [0,4,3,2,1]; // Массив кораблей ( [4] - один четырёхпалубный...)
	let gameMap = mapArray(sizeMap);
	let nextShip = shipArray.length-1;
	let ships = [];
	let countShip = 0;
	while (countShipArray(shipArray)) {
		let xCell = gameRandom(sizeMap); // Начальная клетка X (0-sizeMap)
		let yCell = gameRandom(sizeMap); // Начальная клетка Y (0-sizeMap)
		let shipPos = gameRandom(2);
		if (installShip(yCell, xCell, nextShip, shipPos, gameMap, ships, countShip)) {
			shipArray[nextShip]--;
			countShip++;
			if (shipArray[nextShip] === 0) {
				nextShip--;
			}
		}
	}
	let newGame = {};
	newGame.gameMap = gameMap; // Новая карта
	newGame.ships = ships;	// Массив кораблей с координатами на новой карте
	return newGame;
}