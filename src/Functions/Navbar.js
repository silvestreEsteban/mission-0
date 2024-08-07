import './Navbar.css';
import myImage from './NavbarImg/flame.png';
import dropdownImage from './NavbarImg/menu.png';
import { useState } from 'react';

export default function Navbar() {   
const [showMenu, setShowMenu] = useState(false)

/* const dropdownButtonFunction = () => {
    console.log('Hello');
    if (toggleClass === 'to-be-hidden') {
        setToggleClass('content-dropbtn')
    } else {
        setToggleClass('to-be-hidden');
    }
} */ 

    const dropdownButtonFunction = () => {
        console.log('Hello');
        
            setShowMenu(!showMenu)
       
        
 }

    return (

        <>
        <div className="navbar-div">
            <div className="left-side-of-navbar">
                <div id="logo">
                   <img id="img" src={myImage} alt='myImg'></img>
                </div>
                <h1>Outdoor Gear</h1>
            </div>
            <div className="right-side-of-navbar">
                <div id="buttons">
                    <button className="button" id="button1">Marketplace</button>
                    <button className="button" id="button2">Register</button>
                    <button className="button" id="button2">Log In</button>
                </div>
            
            <div className='dropdown-bar' id='dropdown-bar-div'>
               <button className='dropbtn hidden' onClick={dropdownButtonFunction}><img className='dropbtn' id='dropdownImg' src={dropdownImage} alt='dropdown'></img></button>
               <div className={showMenu ? 'content-dropbtn' : 'to-be-hidden'}>
                   <button className='dropdown-button hiddenBtn'>Marketplace</button>
                   <button className='dropdown-button hiddenBtn'>Register</button>
                   <button className='dropdown-button hiddenBtn'>Log In</button>
               </div>
            </div>
        </div>
        </div>
        
        </>
    )
}