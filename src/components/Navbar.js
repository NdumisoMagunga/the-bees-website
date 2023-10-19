import React, {Fragment, useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar(){
    const navRef =useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>Club</a>
                <a href='/#'>Team</a>
                <a href='/#'>Fixtures</a>
                <a href='/#'>Fan Zone</a>
                <a href='/#'>Shop</a>

                <button>
                    <FaTimes />
                </button>

                <button>
                    <FaBars />
                </button>
            </nav>
        </header>
    )
}

export default Navbar;