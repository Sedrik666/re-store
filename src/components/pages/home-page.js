import React from "react";
import BookList from "../book-list/book-list";
import ShoppingCartTable from "../shopping-card-table/shopping-card-table";

const HomePage = () => {

    return (
        <div>
            <p>Home</p>
            <BookList/>
            <ShoppingCartTable/>
        </div>
    )
};

export default HomePage;

