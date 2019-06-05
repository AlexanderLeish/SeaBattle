import React from 'react';

export default class GamerMap extends React.Component {
    render() {
        let classCell = '';
        const gamerMap = this.props.gamerMap;
        const mapCell = gamerMap.map((columnsCell, i) => {
            const rowsCell = columnsCell.map((cell, j) => {
                switch (cell) {
                    case 0: 
                        classCell = 'Gamer-Sea Animate';
                    break;
                    case 1:
                        classCell = 'Gamer-Ship Animate';
                    break;
                    case 2:
                        classCell = 'Sea-Hit Animate';
                    break;
                    case 3:
                        classCell = 'Ship-Hit Animate';
                    break;
                    case 4:
                        classCell = 'Ship-Sink Animate';
                    break;
                    default:
                }
                let idCell = i+','+j;
                return (
                    <div key={idCell} className={classCell} id={idCell}></div>  
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