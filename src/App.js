import React, {Component} from 'react';
import './App.css';
import TimerView from './components/TimerView'

class App extends Component {
    render() {
        return (
            <div className="App">
                <TimerView />
            </div>
        );
    }
}

export default App;
