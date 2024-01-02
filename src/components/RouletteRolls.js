import React, {useRef} from "react";
import "../styles/roulette-rolls.scss";

import SilverIcon from "../icons/Coin 5.png";
import BlackIcon from "../icons/black-coin.png";
import GoldIcon from "../icons/Coin 17.png";
const RouletteRolls = ({ rolls }) => {
    let listRef = useRef(null);
    let containerRef = useRef(null);
    const getTranslatePosition = () => {
        let position = 0;
        if (listRef.current && containerRef.current) {
            position = containerRef.current.clientWidth - listRef.current.clientWidth;
            console.log({ position })
        }

        return position
    }

    const getRolls = (type) => {
        let rollType = [...rolls].reverse().slice(0, 100).filter(roll => roll.type === type);

        return rollType.length;
    }
    return <div className={'roulette-rolls'}>
        <label className={'rolls-label'}>PREVIOUS ROLLS</label>
        <div ref={el => listRef.current = el} className={'rolls-list'}>
            <div className={'rolls-container'}
                 style={{ 'transform': `translateX(-${getTranslatePosition()}px)`}}
                 ref={el => containerRef.current = el}
            >
                {
                    rolls.map((roll, index) => {
                        return <div key={index} className={'roll-icon'}>
                            <img alt={roll.type} src={roll.icon}/>
                        </div>
                    })
                }
            </div>
        </div>

        <div className={'rolls-summary'}>
            <label className={'rolls-label'}>LAST 100</label>
            <div className={'summary-item'}>
                <img
                    alt={'black icon'}
                    src={BlackIcon}
                />

                <label>{ getRolls('black') }</label>
            </div>

            <div className={'summary-item'}>
                <img
                    alt={'silver icon'}
                    src={SilverIcon}
                />
                <label>{ getRolls('silver') }</label>
            </div>

            <div className={'summary-item'}>
                <img
                    alt={'gold icon'}
                    src={GoldIcon}
                />

                <label>{ getRolls('gold') }</label>
            </div>
        </div>
    </div>
}


export default RouletteRolls
