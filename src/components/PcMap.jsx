import React from 'react';
import {HitEnemy} from '../functions/HitEnemy';
import {HitGamer} from '../functions/HitGamer';
import {gameOver, winner, loser} from '../functions/GameOver';

export default class PcMap extends React.Component {
    constructor(props) {
        super(props);
        this.onClickFire = this.onClickFire.bind(this);
        this.onSelectWinner = this.onSelectWinner.bind(this);
    }

    onSelectWinner = (thisWinner) => {
        let pcMap = [];
        let gamerMap = [];
        this.props.setMaps(gamerMap, pcMap);
        switch (thisWinner) {
            case 1:
                pcMap = loser;
                gamerMap = winner;
                this.props.setMaps(gamerMap, pcMap);
            break;
            case 2:
                pcMap = winner;
                gamerMap = loser;
                this.props.setMaps(gamerMap, pcMap);
            break;
            default:
        }
    }

    onClickFire = (idCell, currentPcMap, currnetGamerMap) => {
        let thisWinner = 0;
        // Выстрел пользователя
        let pcMap = [];
        this.props.setPcMap(pcMap);
        const pcShips = this.props.pcShips;
        pcMap = HitEnemy(idCell, currentPcMap, pcShips);
        if (gameOver(pcShips)) { // Проверка победы пользователя
            thisWinner = 1;
            this.onSelectWinner(thisWinner);
        } else {
            this.props.setPcMap(pcMap);
            // Выстрел компьютера
            let gamerMap = [];
            this.props.setGamerMap(gamerMap);
            const gamerShips = this.props.gamerShips;
            gamerMap = HitGamer(currnetGamerMap, gamerShips);
            if (gameOver(gamerShips)) { // Проверка победы компьютера
                thisWinner = 2;
                this.onSelectWinner(thisWinner);
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
                        onClick={() => this.onClickFire(idCell, currentPcMap, currnetGamerMap)}>
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