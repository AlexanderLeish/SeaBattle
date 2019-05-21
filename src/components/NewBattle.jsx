import React from 'react';
import { installGameMap } from '../functions/ShipPlacement';

export default class NewBattle extends React.Component {
    constructor(props) {
        super(props);
        this.onNewBattleClick = this.onNewBattleClick.bind(this);
    }

    onNewBattleClick() { 
        let gamerState = installGameMap(); // Генерация игрового состояния для пользователя
        let pcState = installGameMap(); // -----------------//---------------- компьютера
        let gamerMap = gamerState.gameMap; // Карта пользователя
        let gamerShips = gamerState.ships; // --//-- компьютера
        let pcMap = pcState.gameMap; // Массив кораблей с координатами (пользователя)
        let pcShips = pcState.ships; // -------------//--------------- (компьютера)
        this.props.setBattleMap(gamerMap, pcMap, gamerShips, pcShips);
    }

    render() {
        return (
            <div className="Header-button">
                <button className="New-battle" onClick={this.onNewBattleClick}>
                    Новая битва
                </button>
            </div>
        )
    }
}