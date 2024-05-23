//add to wishlist
const getStoredWishList = () =>{
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }

    return [];
}


const addToWishlist = id =>{
    const idInt = parseInt(id);
    const storedWishlists = getStoredWishList();
    const exist = storedWishlists.find(bookId => bookId === idInt)
    if(!exist){
        storedWishlists.push(idInt);
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
    const idInt = parseInt(id);
    const storedReadlists = getStoredReadList();
    const exist = storedReadlists.find(bookId => bookId === idInt)
    if(!exist){
        storedReadlists.push(idInt);
        localStorage.setItem('readlist', JSON.stringify(storedReadlists))
    }
}

export {addToWishlist, getStoredWishList, addToReadlist, getStoredReadList}