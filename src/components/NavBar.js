import React from 'react'
import '../styles/NavBar.scss'
//import { PiCaretDownBold } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { PiChatsCircle } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";

const NavBar = () => {

  return (
    <nav className='navigation-bar'>
        <div className='navigation-page-width'>
            <div className='navigation-content'>
                <div className='company-emblem'>
                    <img src='./Layer 1.png' alt='company-logo'/>
                </div>

                <div className='navigation-figures'>
                    <div className='margin-area'>
                        <img src='./solana-sol-logo.png'alt='#'/>
                        <span className='figure'>49.55677717</span>
                        <i class='bx bx-chevron-down caret-down'></i>
                    </div>
                    <img src='./Frame 5.png' alt='#'/>
                </div>

                <div className='navigation-user-container'>
                    <span className='navigation-icons'>
                        <div className='navigation-icon'> <GoSearch/></div>
                        <div className='navigation-icon margin'> <PiChatsCircle /></div>
                        <div className='navigation-icon'> <IoNotificationsOutline /></div>
                    </span>
                    <span className='user-information'>
                        <p className='username'>Peter Penn</p>
                        <img src='./Frame 3.png' alt='#'/>
                    </span>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default NavBar
