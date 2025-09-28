import React, { useState } from 'react';
import NavMenu from './NavMenu';
import { Menu, SquareChevronUp } from 'lucide-react';

const navigationMenu = [
    {
        name: "Home",
        path: "/home",
        id: 1
    },
    {
        name: "About Us",
        path: "/about-us",
        id: 2
    },
    {
        name: "Services",
        path: "/services",
        id: 3
    },
    {
        name: "Bloge",
        path: "/blog",
        id: 4
    },
    {
        name: "Contact",
        path: "/contact",
        id: 5
    },
]

const NavBar = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false) 
    const menuBar = navigationMenu.map(menuRoute => <NavMenu key={menuRoute.id} menuRoute = {menuRoute}></NavMenu>)
    return (
        <nav className='flex justify-between mx-10 mt-10'> 
            {/* Dinamically made nav menu using another component */}
            <span className='flex' onClick={() => setDropdownMenu(!dropdownMenu)}>
                {
                    dropdownMenu ? 
                        <SquareChevronUp className='md:hidden'></SquareChevronUp> : 
                        <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 ${dropdownMenu ? 'top-7' : '-top-75' } bg-emerald-200 p-4 space-y-4`}>
                    {
                        menuBar
                    }
                </ul>
                <h3 className='ml-2'>Nav Menu</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                    menuBar
                }
            </ul>

            <button>Sign In</button>

            {/* Dinamically mad nav menu */}
            {/* <ul className='flex'>
                {
                    navigationMenu.map(menuRoute =><li className='mr-10'><a href={menuRoute.path}>{menuRoute.name}</a></li>)
                }
            </ul> */}

            {/* Manually made nav menu */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href='/'>Home</a></li>
                <li className='mr-10'><a href='/about'>About</a></li>
                <li className='mr-10'><a href='/blog'>Blog</a></li>
                <li className='mr-10'><a href='/contact'>Contact</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBar;