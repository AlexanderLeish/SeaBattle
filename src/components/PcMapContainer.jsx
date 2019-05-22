import React from 'react';
import PcMap from './PcMap';
import {connect} from 'react-redux';
import {setPcMap, setGamerMap, setMaps} from '../store/battle/actions';

export class PcMapContainer extends React.Component {
    render () {
        return (
            <PcMap 
                setPcMap={this.props.setPcMap}
                setGamerMap={this.props.setGamerMap}
                setMaps={this.props.setMaps}
                pcMap={this.props.pcMap} 
                gamerMap={this.props.gamerMap} 
                pcShips={this.props.pcShips} 
                gamerShips={this.props.gamerShips} 
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        pcMap: state.battle.pcMap,
        gamerMap: state.battle.gamerMap,
        pcShips: state.battle.pcShips,
        gamerShips: state.battle.gamerShips
    };
}

const mapDispatchToProps = {
    setPcMap,
    setGamerMap,
    setMaps
}

export default connect (mapStateToProps, mapDispatchToProps)(PcMapContainer);