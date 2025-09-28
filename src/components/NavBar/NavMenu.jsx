import React from 'react';

const NavMenu = ({menuRoute}) => {
    return (
        <li className='mr-10 hover:bg-amber-400'>
            <a href={menuRoute.path}>{menuRoute.name}</a>
        </li>
    );
};

export default NavMenu;