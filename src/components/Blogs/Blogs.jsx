import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
    },[])

    return (
        <section className='card-container'>
            {
                blogs.map(blog => <SingleBlog key={blog.id} blog={blog} />)
            }
        </section>
    );
};

export default Blogs;