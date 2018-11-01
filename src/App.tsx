import * as React from 'react';
import './App.css';
import MonsterList from './components/List';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="App">
                <div className="parallax">
                    <div className="App-title-back">
                        <div className="App-title">Welcome to the base of most scariest   <span className="blood"> MONSTERS </span>   in the world!</div>
                    </div>
                </div>
                <div className="app-main">
                    <MonsterList />
                </div>

                <div className="parallax">
                    <div className="App-title-back">
                        <i className="material-icons">
                            insert_emoticon
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
