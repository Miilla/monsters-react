import * as React from 'react';
import './Modal.css'
import Monster from 'src/models/Monster';
import MonsterDetails from './MonsterDetails';
import API from 'src/API';

interface IPropsType {
    monsterSlug: string;
    monsters: Monster[];
    exit: () => void;
    _addRemoveFavorite: (monsterSlug:string) => void;
    favMonsters: any[];
}

class Modal extends React.Component<IPropsType, any> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {
            monster: '',
            monsterSlug: ''
        }
    }

    public _getMonster(monsterSlug: string) {
        API.GetMonster(monsterSlug).then((resp) => {
            this.setState({ monster: resp.data, monsterSlug });
        })
    }

    public componentDidMount() {
        this._getMonster(this.props.monsterSlug);
    }

    public _getOtherMonster(e: any, monsters: Monster[], order: number) {
        let monsterSlug = '';
        const monsterIdex = monsters.findIndex((x) => x.slug === this.state.monsterSlug);

        if (monsterIdex + order > monsters.length - 1) {
            monsterSlug = monsters[0].slug;
        }
        else if (monsterIdex + order === -1) {
            monsterSlug = monsters[monsters.length - 1].slug;
        }
        else {
            monsterSlug = monsters[monsterIdex + order].slug;
        }
        this._getMonster(monsterSlug);
    }

    public handleClick(e: any) {
        if (e.target.className === "main-backdrop") {
            this.props.exit();
        }
    }


    public render() {
        if (this.state.monster === '') { return null; }

        const { monsters, _addRemoveFavorite, favMonsters } = this.props;
        return (
            <div className="main-backdrop" onClick={(e) => this.handleClick(e)} >
                <div className="main-modal" tabIndex={0} onBlur={() => this.props.exit()}  >
                    <div className="main-modal-arrow-center" onClick={(e) => this._getOtherMonster(e, monsters, -1)}>
                        <div className="modal-arrow-image-left" />
                    </div>
                    <div className="main-modal-inner">
                        <div className="main-header">
                            <div className="exit-icon" />
                            <div className="main-header-name">{this.state.monster.name}</div>
                            <i className="material-icons exit-icon" onClick={() => _addRemoveFavorite(this.state.monsterSlug)}>
                                {(favMonsters.findIndex((x: any) => x === this.state.monsterSlug) > -1) ? "favorite_border" : "add_circle"}
                            </i>
                        </div>
                        <div className="main-monster-details">
                            <MonsterDetails monster={this.state.monster} />
                        </div>
                        <div className="modal-carousel">
                            {monsters.map((monster) => {
                                return (
                                    <div key={monster.slug} className="carousel-icon">
                                        <i className="material-icons " onClick={() => this._getMonster(monster.slug)}>
                                            {(this.state.monsterSlug === monster.slug) ? "brightness_1" : "adjust"}
                                        </i>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="main-modal-arrow-center" onClick={(e) => this._getOtherMonster(e, monsters, 1)}>
                        <div className="modal-arrow-image-right" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
