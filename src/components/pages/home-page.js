import React from "react";
import BookList from "../book-list/book-list";

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            title: 'Realise It!',
            author: 'Michael T. Niggard'
        }
    ]
    return (
        <div>
            <p>Home</p>
            <BookList books={books}/>
        </div>
    )
};

export default HomePage;

