import React, {Fragment} from 'react';
import './book-list-item.css';

const BookListItem = ({book}) => {
    const { title, author, price, coverImage } = book;
    return(
        <Fragment>
            <div className='book-cover'>
                <img src={coverImage} alt=""/>
            </div>
            <div className='book-details'>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href='#' className='book-title'>{title}</a>
                <div className='book-author'>{author}</div>
                <div className='book-price'>{price}</div>
                <button className='btn btn-info add-to-cart'>Add to cart</button>
            </div>
        </Fragment>
    )
};

export default BookListItem;