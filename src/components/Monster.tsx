import * as React from 'react';
// import API from '../API';
import Monster from 'src/models/Monster';
import './Components.css'

interface IPropsType {
    monster:Monster
}

class Monsterr extends React.Component<IPropsType, any> {
  constructor(props: IPropsType) {
    super(props);
    this.state = {
    }
  }

  public render() {
      const { monster }= this.props;
    return (
        <div className="monster">          
          <div className="front">?</div>       
          <div className="back">{monster.name}</div>
        </div>
    );
  }
}

export default Monsterr;
