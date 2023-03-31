import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const SingleBlog = ({blog, handleMarkAsRead, handleBookmark}) => {
    const {authorName, authorImage, blogTitle, coverImage, publishDate, readTime} = blog;
    
    return (
        <div className='card border-b-2 mb-10'>
            <img src={coverImage} alt="cover image" className='rounded-lg h-[250px] md:h-[450px] w-full' />
            <div className='flex justify-between items-center mt-8 mb-5'>
                <div className='flex items-center gap-6'>
                    <img src={authorImage} alt="author image" className='w-14 h-14 rounded-full' />
                    <div>
                        <h3 className='text-2xl font-bold'>{authorName}</h3>
                        <small>{publishDate}</small>
                    </div>
                </div>
                <div>
                    {readTime} min read <span 
                    onClick={()=>handleBookmark(blogTitle)}
                    className='cursor-pointer'><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </div>
            <h2 className='text-4xl font-bold mb-7'>{blogTitle}</h2>
            <p onClick={()=> handleMarkAsRead(readTime)} className='cursor-pointer text-purple-600 underline mb-10'>Mark as read</p>   
        </div>
    );
};

export default SingleBlog;