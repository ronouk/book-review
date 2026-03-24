import React from 'react';
import ListItemSingle from '../ListItemSingle/ListItemSingle';

const Wishlist = ({displayWishList}) => {

    return (
        <div className='flex flex-col gap-6'>
            {
                displayWishList.map((book, index) => <ListItemSingle key={index} book = {book}></ListItemSingle>)
            }
        </div>
    );
};

export default Wishlist;