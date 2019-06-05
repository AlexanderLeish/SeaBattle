import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './store/reducers';
import GamerMapContainer from './components/GamerMapContainer';
import PcMapContainer from './components/PcMapContainer';
import NewBattleContainer from './components/NewBattleContainer';

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends React.Component {
  render() {
  return (
    <Provider store={store}>
      <div className="Container">
        <div>
          <div className="Game-header">
            <div className="Title">Морской бой</div>
            <NewBattleContainer/>
          </div>
          <div className="Game-field">
            <GamerMapContainer/>
            <PcMapContainer/>
          </div>
        </div>
      </div>
    </Provider>
  );
}
}
