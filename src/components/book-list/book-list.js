import React, {Component} from 'react'
import { connect } from 'react-redux'

import withBookstoreService from '../hoc/with-bookstore-service';
import BookListItem from "../book-list-item/book-list-item";
import compose from '../../utils/compose';
import { booksLoaded } from "../../actions/actions";
import './book-list.css';


class BookList extends Component{
    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);
    }

    render(){
        const { books } = this.props;
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