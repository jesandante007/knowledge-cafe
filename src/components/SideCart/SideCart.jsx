import React from 'react';

const SideCart = () => {
    return (
        <aside>
            <div className='text-center py-5 rounded-lg bg-purple-100 text-purple-700 text-2xl font-bold mb-6'>Spent time on read: {0} min</div>
            <div className='bg-gray-100 p-7 rounded-lg'>
                <h3 className='text-2xl font-bold mb-4'>Bookmarked Blogs: {0}</h3>
                {
                <div className='bg-white rounded-lg p-5 mb-4'></div>
                }
            </div>
        </aside>
    );
};

export default SideCart;