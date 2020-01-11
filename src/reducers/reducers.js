const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
};

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null,
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            //const existingBook = state.cartItems.find((book) => book.id === bookId);
            let newItem = {};

                newItem = {
                    id: book.id,
                    name: book.title,
                    count: 1,
                    total: book.price
                };
           /* if(existingBook===undefined){
            }else{
                newItem = {
                    id: book.id,
                    name: book.title,
                    count: existingBook.count + 1,
                    total: book.price * (existingBook.count + 1),
                };
            }*/


            return {
                ...state,
                loading: false,
                cartItems:[
                    ...state.cartItems,
                    newItem
                ]
            };
        default: 
            return state;
    }
};

export default reducer;