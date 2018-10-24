import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import API from './API';

interface IStateType {
  monsters: any[];
}

class App extends React.Component<any, IStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsters: []
    }
  }

  public componentDidMount() {
    this._getMonsters();
  }

  public _getMonsters() {
    API.GetMonsters().then(resp => {
      this.setState({ monsters: resp.data })
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.state.monsters.length > 0 && this.state.monsters.map((monster: any) => {
            return (<div key={monster.slug}>{monster.name}</div>)
          })}
        </div>
      </div>
    );
  }
}

export default App;
