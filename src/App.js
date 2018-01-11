import React, {Component} from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import MenuPanel from './components/common/MenuPanel';

class App extends Component{
    render(){
        return(
            <Provider store={createStore(reducers)}>
                <MenuPanel />
            </Provider>
        );
    }
}

export default App;