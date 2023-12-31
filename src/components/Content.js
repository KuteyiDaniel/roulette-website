import React from 'react'
import { useState } from 'react'
import '../styles/Content.scss'
import { FaVolumeXmark } from "react-icons/fa6";
import SliderComponent from './SliderComponent';
import BettingCategory from './BettingCategory';

const Content = () => {

    let [sound, setSound] = useState(true)

    function controlSound(){
        setSound(!sound)
    }


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

                <SliderComponent/>

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
      </div>
    </div>
  )
}

export default Content