import React from 'react'
import '../styles/ReactTable.scss'

const ReactTable = () => {
    let tableInformation = [
        {
            game: 'Arsenal (Alicia) - Chelsea (July)',
            time: 43,
            amount: 4583288,
            multiplier: 1.01,
            //pay: 4590183
        },

        {
            game: 'West Ham (Harrison) - Everton (October)',
            time: 33,
            amount: 4581088,
            multiplier: 1.01,
            //pay: 45910183
        },

        {
            game: 'Chelsea (Palmer) - Luton (May)',
            time: 23,
            amount: 4588834,
            multiplier: 1.01,
            //pay: 4581183
        },

        {
            game: 'Arsenal (Jimenez) - Fulham (December)',
            time: 29,
            amount: 2390156,
            multiplier: 1.01,
            //pay: 2390183
        },
    ]

    
  return (
    <div className='table-container'>
        <table>
            <tr>
                <th>Game</th>
                <th>Time</th>
                <th>Bet Amount</th>
                <th>Multiplier</th>
                <th>Payout</th>
            </tr>

            {
                tableInformation.map((data, index)=>{
                    return <tr key={index}>
                        <td>{data.game}</td>
                        <td>00:{data.time}</td>
                        <td>{data.amount}</td>
                        <td>{data.multiplier}</td>
                        <td className='pay'>{(data.amount * data.multiplier).toFixed(1)}</td>
                    </tr>
                })
            }

        </table>

        

        
    </div>
  )
}

export default ReactTable
