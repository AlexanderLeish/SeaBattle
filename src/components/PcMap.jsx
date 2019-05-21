import React from 'react';
import {HitEnemy} from '../functions/HitEnemy';
import {HitGamer} from '../functions/HitGamer';
import {gameOver, winner, loser} from '../functions/GameOver';

export default class PcMap extends React.Component {
    constructor(props) {
        super(props);
        this.onFire = this.onFire.bind(this);
    }

    onFire = (idCell, currentPcMap, currnetGamerMap) => {
        let pcMap = [];
        let gamerMap = [];
        this.props.setPcMap(pcMap);
        const pcShips = this.props.pcShips;
        pcMap = HitEnemy(idCell, currentPcMap, pcShips); // Выстрел пользователя
        if (gameOver(pcShips)) { // Проверка победы пользователя
            pcMap = loser;
            gamerMap = winner;
            this.props.setPcMap(pcMap);
            this.props.setGamerMap(gamerMap);
        } else {
            this.props.setPcMap(pcMap);

        this.props.setGamerMap(gamerMap);
        const gamerShips = this.props.gamerShips;
        gamerMap = HitGamer(currnetGamerMap, gamerShips); // Выстрел компьютера
        if (gameOver(gamerShips)) { // Проверка победы компьютера
            pcMap = winner;
            gamerMap = loser;
            this.props.setPcMap(pcMap);
            this.props.setGamerMap(gamerMap);
        } else {
            this.props.setGamerMap(gamerMap);
        }
    }
    }

    render() {
        const currentPcMap = this.props.pcMap;
        const currnetGamerMap = this.props.gamerMap;
        const mapCell = currentPcMap.map((columnsCell, i) => {
            const rowsCell = columnsCell.map((cell, j) => {
                let classCell = '';
                if (cell === 1 || cell === 0) 
                    classCell = 'Pc-Sea Transition-Pc-Sea'
                    if (cell === 2)
                    classCell = 'Sea-Hit Animate'
                        else if (cell === 3)
                        classCell = 'Ship-Hit Animate'
                            else if (cell === 4)
                            classCell = 'Ship-Sink Animate'
                let idCell = i+','+j;
                return (
                    <div 
                        key={idCell} 
                        className={classCell} 
                        id={idCell} 
                        onClick={() => this.onFire(idCell, currentPcMap, currnetGamerMap)}>
                    </div>  
                )
            }        
            );
            return rowsCell;
        })
        return (
            <div className="Map-container">
                    {mapCell}       
            </div>
        )
    }
}