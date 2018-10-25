import * as React from 'react';
import './App.css';

// import silk from '../public/silk.jpg';
import MonsterList from './components/List';
import API from './API';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsterImage: ''
    }
  }

  componentWillMount() {
    this._getMonsterImage();
  }

  public _getMonsterImage() {
    API.GetMonster('fooz').then(monster => {
      this.setState({ monsterImage: monster.data.images.thumb.replace('http://localhost:5000', 'https://monster-app.herokuapp.com') })
    })
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
