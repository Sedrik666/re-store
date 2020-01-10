import React, {Component} from 'react'
import { connect } from 'react-redux'

import withBookstoreService from '../hoc/with-bookstore-service';
import BookListItem from "../book-list-item/book-list-item";
import compose from '../../utils/compose';
import { fetchBooks } from "../../actions/actions";
import './book-list.css';
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const BookList = ({books}) => {
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
};

class BookListContainer extends Component{
    componentDidMount() {
        this.props.fetchBooks();
    }

    render(){
        const { books, loading, error } = this.props;
        if(loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>
        }
        return(
            <BookList books={books}/>
        )
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
    fetchBooks: fetchBooks(bookstoreService, dispatch)
});

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);