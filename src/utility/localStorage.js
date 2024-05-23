//add to wishlist
const getStoredWishList = () =>{
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }

    return [];
}


const addToWishlist = id =>{
    const storedWishlists = getStoredWishList();
    const exist = storedWishlists.find(bookId => bookId === id)
    if(!exist){
        storedWishlists.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlists))
    }
}

//add to read
const getStoredReadList = () =>{
    const storedReadlist = localStorage.getItem('readlist');
    if(storedReadlist){
        return JSON.parse(storedReadlist);
    }

    return [];
}


const addToReadlist = id =>{
    const storedReadlists = getStoredReadList();
    const exist = storedReadlists.find(bookId => bookId === id)
    if(!exist){
        storedReadlists.push(id);
        localStorage.setItem('readlist', JSON.stringify(storedReadlists))
    }
}

export {addToWishlist, getStoredWishList, addToReadlist, getStoredReadList}