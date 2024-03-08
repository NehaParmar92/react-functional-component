import React, { useEffect, useState } from 'react';
import Item from './Item';
import './component-style.css';

const Blog = (props) => {
    const [blog, setBlog] = useState([]);
    const [page, setPage] = useState(1);


    const updateData = async () => {
        // const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d859ef457c554d7d84c47c607a4fd54d&page=10&pageSize=1`;
        const url = `https://api.slingacademy.com/v1/sample-data/blog-posts?page=${page}&pageSize=10`;

        let data = await fetch(url);
        let parseData = await data.json();
        console.log("parseData",parseData)
        setBlog(parseData.blogs); // Update to parseData.blogs
    }

    useEffect(() => {
        updateData();
    }, []);
    const handlePreviousClick = async () => {
        updateData();

        setPage(page-1);
    }
    const handleNextClick = async () => {
        updateData();
        setPage(page+1);

        }
    
    return (
        <main className="main-area">
            <section className="blogs blogs" id="blogs">
        <article className="heading">our <span>blogs</span></article>
                <div className="box-container">
                    {blog.map((element) => {
                        return (
                            <div className='content' key={element.id}>
                                <Item
                                    user_id={element.user_id || ''}
                                    category={element.category || ''}
                                    title={element.title || ''}
                                    description={element.description || ''}
                                    imageUrl={element.photo_url || ''} />
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className='buttonContainer'>
                    <button className="button button1" type='button' onClick={handlePreviousClick}>&larr; Previous</button>
                    <button className="button button2" type='button' onClick={handleNextClick}>Next &rarr;</button>
                </section>
        </main>
    );
}

export default Blog;
