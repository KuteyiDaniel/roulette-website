import React, {useEffect, useRef, useState} from "react";
import "../styles/roulette-slider.scss";

import SilverIcon from "../icons/Coin 5.png";
import BlackIcon from "../icons/black-coin.png";
import GoldIcon from "../icons/Coin 17.png";

const createRouletteIcons = (reps = 15) => {
    let rouletteIcons = [];
    let components = [
        {
            type: "silver",
            icon: SilverIcon
        },
        {
            type: "black",
            icon: BlackIcon
        },
        {
            type: "gold",
            icon: GoldIcon
        }
    ]

    for (let i = 0; i < reps; i++) {
        rouletteIcons = [
            ...rouletteIcons,
            ...components
        ]
    }


   // console.log({ rouletteIcons })
    return rouletteIcons
}


function getRandomTimeoutRange(min = 4, max = 8.5) {
    return Math.random() * (max - min) + min;
}

const RouletteSlider = ({ rollTimeout = 5, onMatch }) => {


    let [ sliderIcons] = useState(createRouletteIcons());
    let [waitTime, updateWaitTime] = useState(0);
    let [ sliding, updateSliding ] = useState(false);
    let [ canSlide, updateCanSlide] = useState(false);
    let [ slideTime, updateSlideTime ] = useState(0);
    let mainSlider = useRef(null);
    let centerLine = useRef(null);
    let sliderTimeout = useRef(0);
    let [ transitionTimeout ] = useState(100);
    let [ translateDistance, updateTranslateDistance ] = useState(40);

    const getMatchingIcon = () => {
        if (mainSlider.current && centerLine.current) {
            let centerPositioning = centerLine.current.getBoundingClientRect();


            let matching = null;
            Array.from( mainSlider.current.children).forEach((child, index) => {
               let {
                   left, right
               } = child.getBoundingClientRect();


              if ((left <= centerPositioning.left) && (centerPositioning.left <= right) && !matching) {
                    matching = sliderIcons[index]
                }
           })

            if (matching) {
                onMatch(matching )
            }
        }
    };


    useEffect(() => {
        console.log('Mounted')
        if (!canSlide) { updateCanSlide(true) }
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        updateWaitTime(rollTimeout);
        updateTranslateDistance(40)
        updateSliding(false)
    }, [rollTimeout])

    useEffect(() => {
       // console.log('Should slide:', sliding, slideTime, mainSlider.current)
        if (sliding) {
            if (slideTime > 0) {
                if (mainSlider.current) {
                    let timeout = transitionTimeout;
                    setTimeout(() => {
                        let newSlideTime = parseFloat((slideTime - (timeout / 1000)).toFixed(2));
                        if (newSlideTime < 1) {
                            updateTranslateDistance(5)
                        }
                        updateSlideTime(newSlideTime)
                    }, timeout)
                }

            } else {
               console.log('Slide ended')

                window.clearTimeout(sliderTimeout.current);



                setTimeout(() => {
                    updateWaitTime(rollTimeout);
                    updateSliding(false)
                    getMatchingIcon();



                    if (mainSlider.current) {
                        mainSlider.current.style.cssText = `transform: translateX(0);transition: ease-in-out .2s`;
                    }
                }, 3000)
            }

        }

        // eslint-disable-next-line
    }, [slideTime, sliding])



    useEffect(() => {
        console.log('Sliding', sliding)
        
        const moveSlider = () => {

            if (sliding === false || !mainSlider.current) { return }


            let { scrollWidth } = mainSlider.current;
            let clientWidth = mainSlider.current.parentElement.clientWidth;
            let transform = 0;
            if (mainSlider.current.style && mainSlider.current.style.transform) {
                transform = mainSlider.current.style.transform.replace(/[^\d.]/g, '');
                transform = parseFloat(transform);
            }

            let distance = mainSlider.current.dataset.translateDistance;
            if (!distance) {
                distance = 40;
            } else {
                distance = parseFloat(distance);
            }

          //  console.log({ distance })
            let position = transform + distance;
            let transition = position <= (scrollWidth - clientWidth);
            if (!transition) {
                position = 0;
            }


           // console.log({ position, transition, translateDistance })
            mainSlider.current.style.cssText = `transform: translateX(-${position}px);transition:${ transition ? `ease ${ distance >= 40  ?'.1s' : '1s' }` : 'none'}`
            sliderTimeout.current = window.setTimeout(() => {
                if (sliding) { moveSlider() }

            }, 2)
        }


        moveSlider();

        updateSlideTime(getRandomTimeoutRange())

        return () => {
            window.clearTimeout(sliderTimeout.current)
        }
    }, [sliding])





    useEffect(() => {
        if (canSlide) {
            if (waitTime === 0) {
                console.log('Wait ended')
                updateTranslateDistance(40)
                updateSliding(true)


            } else {
                let timeout =  100
                setTimeout(() => {
                    updateWaitTime(parseFloat((waitTime - (timeout / 1000)).toFixed(2)))
                }, timeout)
            }
        }

        // eslint-disable-next-line
    }, [waitTime])

    useEffect(() => {
        if (mainSlider.current) {
            mainSlider.current.dataset.translateDistance = `${translateDistance}px`
        }
    }, [ translateDistance ])


    return <div className={'roulette-slider'}>
        <div className={'roulette-cover'}>
            <div className={'cover-data'}>
                {
                    !sliding && waitTime > 0 ? <div className={'roulette-countdown'}>
                        <div className={'countdown-header'}>Rolling in</div>
                        <div className={'countdown-timer'}>{ waitTime }</div>
                    </div> : <div ref={el => centerLine.current = el } className={'center-line'}></div>
                }
            </div>
        </div>
        <div className={'slider-main container'}>
            <div ref={el => mainSlider.current = el }
                 className={'slider-main slider'}

            >
                {
                    sliderIcons.map((item, index) => {
                        let { type, icon } = item;
                        return <div className={'slider-icon'} key={index}>
                            <img
                                alt={type}
                                src={icon}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}


export default RouletteSlider
