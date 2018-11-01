import * as React from 'react';
import './Modal.css'
import Monster from 'src/models/Monster';
import { STAT_API } from 'src/config';

interface IPropsType {
    monster: Monster;
}

class MonsterDetails extends React.Component<IPropsType, any> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {
        }
    }

    public _getMonsterImage(monster: Monster) {
        return monster.images.thumb.replace('http://localhost:5000', STAT_API);
    }

    public render() {
        const { monster } = this.props;
        const monsterImage = this._getMonsterImage(monster);
        const danger = parseFloat(monster.statistics.danger) * 100;
        const frequency = parseFloat(monster.statistics.frequency) * 100;
        const power = parseFloat(monster.statistics.power) * 100;
        return (
            <div className="monster-details">
                <div className="monster-details-img">
                    <img src={monsterImage} />
                </div>
                <span className="monster-details-desc">{monster.description}</span>
                <div className="monster-details-stat">
                    <span className="monster-details-label">{'Danger: '}</span>
                    <div className="progress stat-bar">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: danger }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                </div>
                <div className="monster-details-stat">
                    <span className="monster-details-label">{'Frequency: '}</span>
                    <div className="progress stat-bar">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: frequency }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                </div>
                <div className="monster-details-stat">
                    <span className="monster-details-label">{'Power: '}</span>
                    <div className="progress stat-bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: power }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MonsterDetails;
