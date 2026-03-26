import { toast } from "react-toastify";

//get item from localstorage

//get stored wishlist
const getStoredWishList = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    }

    return [];
}

//get stored readlist
const getStoredReadList = () => {
    const storedReadlist = localStorage.getItem('readlist');
    if (storedReadlist) {
        return JSON.parse(storedReadlist);
    }

    return [];
}

//add to wishlist
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

    else if (isInReadList) {
        toast("Already in read list")
    }

    else {
        toast("Already in wish list")
    }
}

//add to readlist
const addToReadlist = id => {
    const idInt = parseInt(id);
    const storedReadlists = getStoredReadList();
    const isInReadList = storedReadlists.find(bookId => bookId === idInt)

    //is in wish list
    const storedWishList = getStoredWishList();
    const isInWishList = storedWishList.find(bookId => bookId === idInt)

    if (isInReadList) {
        return toast("Already in Read List")
    }

    if (isInWishList) {

        const remainingWishlist = storedWishList.filter(bookId => bookId !== idInt);
        localStorage.setItem('wishlist', JSON.stringify(remainingWishlist));
    }

    storedReadlists.push(idInt);
    localStorage.setItem('readlist', JSON.stringify(storedReadlists));

    if(isInWishList){
        toast("Moved from Wish List to Read List")
    }
    else{
        toast("Added to Read List")
    }

}

//delete from wishlist
const deleteFromWishList = id => {
    const idInt = parseInt(id);
    const storedWishList = getStoredWishList();
    const remainingWishListBooks = storedWishList.filter(bookId => bookId !== idInt);
    localStorage.setItem("wishlist", JSON.stringify(remainingWishListBooks))
}

//delete from readlist
const deleteFromReadList = id => {
    const idInt = parseInt(id);
    const storedReadList = getStoredReadList();
    const remainingReadListBooks = storedReadList.filter(bookId => bookId !== idInt)
    localStorage.setItem("readlist", JSON.stringify(remainingReadListBooks))
}

export { addToWishlist, getStoredWishList, addToReadlist, getStoredReadList, deleteFromReadList, deleteFromWishList }