import React from 'react';

const Wishlist = ({allBooks}) => {
    const {name} = allBooks;
    // console.log(allBooks[0]);
    // console.log(allBooks[0].name);
    const savedWishList = localStorage.getItem('wishlist')
    const parsedWishlist = JSON.parse(savedWishList);
    console.log(parsedWishlist, typeof parsedWishlist);


    return (
        <div>
            {
                parsedWishlist.map(wishlistBookId => <h1>{allBooks[wishlistBookId].name}</h1>)
            }
        </div>
    );
};

export default Wishlist;