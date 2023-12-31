import React, {useState, useEffect} from 'react'
import '../styles/Slider.scss'

const SliderComponent = () => {
    let imageArray = [
        {
            imageUrl: './Coin 5.png'
        },

        {
            imageUrl: './Coin 17.png'
        },

        {
            imageUrl: './Coin 5.png'
        },

        {
            imageUrl: './Coin 17.png'
        },

        {
            imageUrl: './Coin 5.png'
        },

        {
            imageUrl: './Coin 17.png'
        },

        {
            imageUrl: './Coin 5.png'
        },

        {
            imageUrl: './Coin 17.png'
        },

        {
            imageUrl: './Coin 5.png'
        },

        {
            imageUrl: './Coin 17.png'
        },

        {
            imageUrl: './Coin 5.png'
        },

        {
            imageUrl: './Coin 17.png'
        },

        {
            imageUrl: './Coin 5.png'
        },

        {
            imageUrl: './Coin 17.png'
        },
        
    ]

    //let randomImage =  Math.floor(Math.random() * imageArray.length);
    //console.log(randomImage)

    //let newArray = [(imageArray[randomImage])]
    //console.log(newArray)

    
    let [index, setIndex] = useState(0);
    let delay = 1000

    useEffect(() => {
        setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => { };
    }, [index]);

    
  return (
    <>
        <div className='slider-container'>
            <div className='slider' style={{ transform: `translate3d(${-index * 100}%)` }}>
            {
                imageArray.map((data, dataIndex)=>{
                    return <div className='slide' key={dataIndex}>
                        <img src={data.imageUrl} alt='\'/>
                    </div>
                })
            }
            </div>
        </div>

       
    </>
  )
}

export default SliderComponent
