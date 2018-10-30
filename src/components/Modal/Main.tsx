import * as React from 'react';
import './Modal.css'
import Monster from 'src/models/Monster';
import MonsterDetails from './MonsterDetails';
import API from 'src/API';

interface IPropsType {
    monsterSlug: string;
    monsters: Monster[];
    exit: () => void;
}

class Modal extends React.Component<IPropsType, any> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {
            monster: '',
        }
    }

    public _getMonster() {
        API.GetMonster(this.props.monsterSlug).then((resp) => {
            this.setState({ monster: resp.data });
        })
    }

    public componentDidMount() {
        this._getMonster();
    }

    public render() {
        if (this.state.monster === '') { return null; }
        return (
            <div className="main-backdrop">
                <div className="main-modal">
                    <div className="main-modal-inner">
                        <div className="main-header">
                            <div className="exit-icon"/>
                            <div className="main-header-name">{this.state.monster.name}</div>
                            <i className="material-icons exit-icon" onClick={()=> this.props.exit()}>
                                highlight_off
                            </i>
                        </div>
                        <div className="main-monster-details">
                            <MonsterDetails monster={this.state.monster} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
