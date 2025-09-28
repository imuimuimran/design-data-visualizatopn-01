import React from 'react';
import NavMenu from './NavMenu';
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
        id: 1
    },
]

const NavBar = () => {
    return (
        <nav>
            {/* Dinamically made nav menu using another component */}
            <ul className='flex'>
                {
                    navigationMenu.map(menuRoute => <NavMenu key={menuRoute.id} menuRoute = {menuRoute}></NavMenu>)
                }
            </ul>

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