import React from 'react';

const SideCart = ({time, titles}) => {
    return (
        <div className='md:h-screen md:sticky md:top-0'>
            <div className='text-center py-5 rounded-lg bg-purple-100 text-purple-700 text-2xl font-bold mb-6'>Spent time on read: {time} min</div>
            <div className='bg-gray-100 p-7 rounded-lg'>
                <h3 className='text-2xl font-bold mb-4'>Bookmarked Blogs: {titles.length}</h3>
                {
                    titles.map((title, index) => <div key={index} className='bg-white rounded-lg text-lg font-semibold p-5 mb-4'>
                        {title}
                    </div>)
                }
            </div>
        </div>
    );
};

export default SideCart;