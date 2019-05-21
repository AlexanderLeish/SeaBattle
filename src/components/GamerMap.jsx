import React from 'react';

export default class GamerMap extends React.Component {
    render() {
        let classCell = '';
        const gamerMap = this.props.gamerMap;
        const mapCell = gamerMap.map((columnsCell, i) => {
            const rowsCell = columnsCell.map((cell, j) => {
                if (cell === 0) 
                    classCell = 'Gamer-Sea Animate';
                    else if (cell === 1)
                    classCell = 'Gamer-Ship Animate';
                        if (cell === 2)
                        classCell = 'Sea-Hit Animate'
                            else if (cell === 3)
                            classCell = 'Ship-Hit Animate'
                                else if (cell === 4)
                                classCell = 'Ship-Sink Animate'
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