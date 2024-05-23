import React from 'react';
import WishlistSingle from '../WishlistSingle/WishlistSingle';

const Wishlist = ({allBooks}) => {
    const {name} = allBooks;
    // console.log(allBooks[0]);
    // console.log(allBooks[0].name);
    const savedWishList = localStorage.getItem('wishlist')
    const parsedWishlist = JSON.parse(savedWishList);
    console.log(parsedWishlist, typeof parsedWishlist);


    return (
        <div className='flex flex-col gap-6'>
            {
                parsedWishlist.map(wishlistBookId => <WishlistSingle book = {allBooks[wishlistBookId]}></WishlistSingle>)
            }
        </div>
    );
};

export default Wishlist;