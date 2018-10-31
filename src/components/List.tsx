import * as React from 'react';
import API from '../API';
import Monster from 'src/models/Monster';
import './Components.css'
import Monsterr from './Monster';
import Modal from './Modal/Main';

interface IStateType {
    monsters: Monster[];
    isModalVisible: boolean;
    monsterSlug: string;
    favMonsters: any[];
}

class MonsterList extends React.Component<any, IStateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            monsters: [],
            isModalVisible: false,
            monsterSlug: '',
            favMonsters: []
        }
        this.escFunction = this.escFunction.bind(this);
    }

    public componentDidMount() {
        this._getMonsters();
        document.addEventListener("keydown", this.escFunction, false);
    }

    public componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
    }

    public escFunction(event: any) {
        if (event.keyCode === 27) {
            this._exitModal();
        }
    }

    public _exitModal(){        
        this.setState({ isModalVisible: false })
    }

    public _getMonsters() {
        API.GetMonsters().then(resp => {
            this.setState({ monsters: resp.data })
        });
    }

    public _showModal(monsterSlug: string) {
        this.setState({ isModalVisible: true, monsterSlug })
    }
    
    public _addRemoveFavorite(monsterSlug: string) {
        const favData = this.state.favMonsters.slice(0);
        if (this.state.favMonsters.findIndex((x: any) => x === monsterSlug) > -1) {
            favData.splice(this.state.favMonsters.findIndex((x: any) => x === monsterSlug));
        }
        else {
            favData.push(monsterSlug);
        }
        this.setState({ favMonsters: favData })
    }

    public render() {
        return (
            <div className="panels">
                {this.state.monsters.length > 0 && this.state.monsters.map((monster: Monster) => {
                    return (<Monsterr key={monster.slug} monster={monster} onClick={(monsterSlug) => this._showModal(monsterSlug)} />)
                })}
                {this.state.isModalVisible === true ?
                    <Modal monsterSlug={this.state.monsterSlug} monsters={this.state.monsters} exit={()=>{this._exitModal()}}
                    _addRemoveFavorite={(monsterSlug)=> {this._addRemoveFavorite(monsterSlug)}} favMonsters={this.state.favMonsters}/>
                    : null
                }
            </div>
        );
    }
}

export default MonsterList;
