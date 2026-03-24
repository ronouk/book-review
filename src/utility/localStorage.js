import { toast } from "react-toastify";

//add to wishlist
const getStoredWishList = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    }

    return [];
}

//add to read
const getStoredReadList = () => {
    const storedReadlist = localStorage.getItem('readlist');
    if (storedReadlist) {
        return JSON.parse(storedReadlist);
    }

    return [];
}


const addToWishlist = id => {
    const idInt = parseInt(id);
    const storedWishlists = getStoredWishList();
    const isInWishList = storedWishlists.find(bookId => bookId === idInt)

    const storedReadList = getStoredReadList();
    const isInReadList = storedReadList.find(bookId => bookId === idInt)

    if (!isInWishList && !isInReadList) {
        storedWishlists.push(idInt);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlists));
        toast("Added to wishlist")
    }

    else if (isInReadList){
        toast("Already in read list")
    }

    else {
        toast("Already in wish list")
    }
}


const addToReadlist = id => {
    const idInt = parseInt(id);
    const storedReadlists = getStoredReadList();
    const exist = storedReadlists.find(bookId => bookId === idInt)
    if (!exist) {
        storedReadlists.push(idInt);
        localStorage.setItem('readlist', JSON.stringify(storedReadlists));
        toast("Added to readlist")
    }

    else{
        toast("Already in readlist")
    }
}

export { addToWishlist, getStoredWishList, addToReadlist, getStoredReadList }