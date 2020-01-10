import React from "react";
import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header row'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className='logo text-dark'>
                ReStore
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart'/>
                {numItems} items (${total})
            </a>
        </header>
    );
};

export default ShopHeader;