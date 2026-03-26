import React from 'react';
import ListItemSingle from '../ListItemSingle/ListItemSingle';

const Wishlist = ({ displayWishList, onDelete, handleMove, addToReadlist }) => {

    const listName = "wishlist";

    return (
        <div className='flex flex-col gap-6'>
            {
                displayWishList.length > 0 ?
                    displayWishList.map((book, index) => <ListItemSingle
                        key={index}
                        book={book}
                        listName={listName}
                        onDelete={onDelete}
                        handleMove = {handleMove}
                        addToReadlist = {addToReadlist}
                    ></ListItemSingle>)
                    :
                    <div>No book added to Wishlist yet</div>
            }
        </div>
    );
};

export default Wishlist;