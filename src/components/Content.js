import React, { useEffect } from 'react'
import { useState, /* useEffect */ } from 'react'
import '../styles/Content.scss'
import { FaVolumeXmark } from "react-icons/fa6";
import SliderComponent from './SliderComponent';
import BettingCategory from './BettingCategory';
import CountDown from './CountDown';
import ReactTable from './ReactTable';
import RouletteSlider from "./RouletteSlider";
import RouletteRolls from "./RouletteRolls";


const Content = () => {

    let [sound, setSound] = useState(true);
    let [matches, updateMatches] = useState([])

    function controlSound(){
        setSound(!sound)
    }

    useEffect(()=>{
            console.log({ matches })
    }, [matches])


    let navigationItems = [
        {
            item: 'Coinflip',
            imageUrl: './coin.png'
        },

        {
            item: 'Crash',
            imageUrl: './crash.png'
        },

        {
            item: 'Plinko',
            imageUrl: './plinko.png'
        },

        {
            item: 'Dice',
            imageUrl: './dice.png'
        },

        {
            item: 'Lucky Wheel',
            imageUrl: './wheel.png'
        },

        {
            item: 'Mines',
            imageUrl: './mine.svg'
        },

    ]

    let moreInformation = [
        {
            item: 'Leaderboard',
            imageUrl: './leaderboard.png'
        },

        {
            item: 'Statistics',
            imageUrl: './stats.png'
        },

        {
            item: 'Settings',
            imageUrl: './settings.png'
        },
    ]


    const getMatch = (match) => {
        console.log({ match })
        updateMatches([
            ...matches,
            match
        ])
    }

  return (

    <div className='main-container'>
      <nav className='fixed-nav-bar'>
            <ul className='navigation-list' >
                {
                    navigationItems.map((data, index) => {
                        return <li key={index}>
                            <img src={data.imageUrl} alt='#'/>
                            {data.item}
                            </li>
                    })
                }

                <div className='border-line'></div>

                {
                    moreInformation.map((info, index)=>{
                        return <li key={index}>
                            <img src={info.imageUrl} alt='#'/>
                            {info.item}
                        </li>
                    })
                }
            </ul>
      </nav>

      <div className='content'>
            <div className='roulette'>
                <header>
                    <span>ROULETTE</span>
                    <div className='volume' onClick={()=>controlSound()}>
                        {
                            sound ?
                            <>
                            <img src='./Volume_Max.png' alt='#'/>
                            Sound On
                            </>
                            :

                            <>
                            <FaVolumeXmark />
                            Sound Off
                            </>

                        }
                    </div>

                </header>

                {/*<SliderComponent/>*/}
                <RouletteSlider
                    rollTimeout={15}
                    onMatch={event => getMatch(event)}
                />

                <RouletteRolls
                    rolls={matches}
                />

                <div className='input-field-container'>
                    <div className='input-field'>
                        <input
                            type='text'
                            placeholder='Enter bet amount...'
                        />

                        <div className='odds'>
                            <div>CLEAR</div>
                            <div>+0.01</div>
                            <div>+0.1</div>
                            <div>+1</div>
                            <div>+10</div>
                            <div>+100</div>
                            <div>1/2</div>
                            <div>X2</div>
                            <div>MAX</div>
                        </div>

                        <img src='./span.font-numeric.png' alt='#'/>
                    </div>
                </div>

                <BettingCategory/>
            </div>

            <div className='roulette-race'>
                <header>
                    <span>Daily Roulette Race</span>
                    <span>Ends in <CountDown/> </span>
                </header>

                <ReactTable/>

            </div>
      </div>
    </div>
  )
}

export default Content
