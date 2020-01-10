import React, {Component} from 'react'
import { connect } from 'react-redux'

import withBookstoreService from '../hoc/with-bookstore-service';
import BookListItem from "../book-list-item/book-list-item";
import compose from '../../utils/compose';
import { booksLoaded } from "../../actions/actions";
import './book-list.css';
import Spinner from "../spinner/spinner";


class BookList extends Component{
    componentDidMount() {

        const { bookstoreService, booksLoaded } = this.props;
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render(){
        const { books, loading } = this.props;
        if(loading){
            return <Spinner/>
        }
        return(
            <ul className='book-list'>
                {
                    books.map((book) => (
                        <li key={book.id} className='book-list-item'>
                            <BookListItem book={book}/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ books }) => {
    return { books }
};

const mapDispatchToProps = { booksLoaded };

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);