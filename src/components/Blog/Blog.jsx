import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
    },[])

    return (
        <section>
            
        </section>
    );
};

export default Blog;