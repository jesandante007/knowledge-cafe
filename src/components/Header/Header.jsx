import React from 'react';
import img from '../../assets/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-5 border-b-2 mb-7'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={img} alt="profile image" className='w-14 h-14 rounded-full' />
        </header>
    );
};

export default Header;