import React,  {useState} from 'react'
import { FaVolumeXmark } from "react-icons/fa6";
//import SliderComponent from './SliderComponent';
import '../styles/Content.scss'

const Sound = () => {

    let [sound, setSound] = useState(true);
    

    function controlSound(){
        setSound(!sound)
    }
  return (
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
  )
}

export default Sound
