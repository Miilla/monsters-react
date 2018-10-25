import * as React from 'react';
import API from '../API';
import Monster from 'src/models/Monster';

interface IStateType {
  monsters: Monster[];
}

class MonsterList extends React.Component<any, IStateType> {
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
        <div>
          {this.state.monsters.length > 0 && this.state.monsters.map((monster: Monster) => {
            return (<div key={monster.slug}>{monster.name}</div>)
          })}
        </div>
    );
  }
}

export default MonsterList;