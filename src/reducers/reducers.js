const initialState = {
    books: [
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
};

const reducer = (state = initialState, action) => {
    switch (action) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default: 
            return state;
    }
};

export default reducer;