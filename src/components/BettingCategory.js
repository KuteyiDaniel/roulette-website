import React from 'react'
import '../styles/BettingCategory.scss'

const BettingCategory = () => {
    let BettingCategory = [
        {
            odds: '2X',
            username: ['Fenrik', 'Tiki', 'aswrd', 'Morriez', 'Frnkfurt2324', 'Beau', 'dukaj', '-Foxy', 'PUGHY PALH', 'Ice'],
            //numberOfBets: username.length,
            figures: [40.00,20.00,20.00,18.00,11.00,9.00,8.00,8.00,8.00,7.00],
            src: './Coin 4.png',
            userImage:'./Ellipse 1.png'
        },

        {
            odds: '14X',
            //numberOfBets: 8
            username: ['Fenrik', 'Tiki', 'aswrd', 'Morriez', 'Frnkfurt2324', 'Beau', 'dukaj', '-Foxy'],
            figures: [40.00, 20.00, 20.00,18.00,11.00,9.00,8.00,8.00],
            src: './black-coin.png',
            userImage:'./Ellipse 1.png'
        },

        {
            odds: '2X',
            //numberOfBets: 9
            username: ['Fenrik', 'Tiki', 'aswrd', 'Morriez', 'Frnkfurt2324', 'Beau', 'dukaj', '-Foxy', 'PUGHY PALH'],
            figures: [40.00, 20.00, 20.00,18.00,11.00,9.00,8.00,8.00,8.00],
            src:'./Coin 3.png',
            userImage:'./Ellipse 1.png'
        }
    ]

    const randomizedBettingCategory = BettingCategory.map(category => ({
        ...category,
        username: [...category.username].sort(() => Math.random() - 0.5)
      }));

    console.log({randomizedBettingCategory})
    
  return (
    <div className='betting-section'>
        {
            randomizedBettingCategory.map((data, index)=>{
                console.log(data.figures)
                return <div className='betting-content' key={index}>
                    <div className='betting-header'>
                        <div className='header'>
                            <img src={data.src} alt='#'/>
                            <header>PLACE BET</header>
                        </div>
                        <span>WIN {data.odds}</span>
                    </div>
                    <div className='betting-container'>
                        <div className='betting-container-header'>
                            <header>{data.figures.length} Bets Total</header>
                            <div className='winnings'>
                                <img src='./winnings.png' alt='#'/>
                                {data.figures.reduce((acc, figure) => acc + figure, 0).toFixed(2)}
                            </div>
                        </div>

                       
                        {data.username.map((user, i) => (
                            <ul>
                                <li key={i}>
                                    <div>
                                    <img src={data.userImage} className='user-image' alt='\'/>
                                    {user}  
                                    </div>

                                   <div className='figure'>
                                    {data.figures[i].toFixed(2)}
                                   </div>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default BettingCategory
