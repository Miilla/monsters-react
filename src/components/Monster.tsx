import * as React from 'react';
import './Components.css'
import Monster from 'src/models/Monster';

interface IPropsType {
    monster: Monster;
    onClick: (monsterSlug: string) => void;
}

class Monsterr extends React.Component<IPropsType, any> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {
        }
    }

    public render() {
        const { monster } = this.props;
        return (
            <div className="monster" onClick={() => this.props.onClick(monster.slug)}>
                <div className="front">?</div>
                <div className="back">{monster.name}</div>
            </div>
        );
    }
}

export default Monsterr;
