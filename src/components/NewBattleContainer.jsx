import React from 'react';
import NewBattle from './NewBattle';
import {connect} from 'react-redux';
import { setBattleMap } from '../store/battle/actions';

export class NewBattleContainer extends React.Component {
    render () {
        return (
            <NewBattle setBattleMap={this.props.setBattleMap}/>
        )
    }
}

const mapStateToProps = () => {
    return {
        
    };
}

const mapDispatchToProps = {
    setBattleMap
}

export default connect (mapStateToProps, mapDispatchToProps)(NewBattleContainer);