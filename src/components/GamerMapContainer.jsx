import React from 'react';
import GamerMap from './GamerMap';
import {connect} from 'react-redux';

export class GamerMapContainer extends React.Component {
    render () {
        return (
            <GamerMap gamerMap={this.props.gamerMap}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        gamerMap: state.battle.gamerMap
    };
}

const mapDispatchToProps = {
    // setBattleMap
}

export default connect (mapStateToProps, mapDispatchToProps)(GamerMapContainer);