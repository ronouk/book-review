import { useLoaderData } from "react-router";
import ReadList from "../ReadList/ReadList";
import Wishlist from "../Wishlist/Wishlist";
import { useState } from "react";
import { addToReadlist, deleteFromReadList, deleteFromWishList } from "../../utility/localStorage"
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {

    const allBooks = useLoaderData();

    //localstorage readlist

    const [readList, setReadList] = useState(() => {
        const savedReadListId = localStorage.getItem('readlist');
        const parsedReadlistId = JSON.parse(savedReadListId) || [];
        return allBooks.filter(
            book => parsedReadlistId?.includes(book.id)
        );
    })

    //localstorage wishlist

    const [wishList, setWishList] = useState(() => {
        const savedWishListId = localStorage.getItem('wishlist');
        const parsedWishlistId = JSON.parse(savedWishListId) || [];

        return allBooks.filter(
            book => parsedWishlistId?.includes(book.id)
        );

    })

    // sorting

    const [sortType, setSortType] = useState("")

    //readlist sort

    const displayReadList = [...readList].sort((a, b) => {
        if (sortType === ": Rating") {
            return b.rating - a.rating
        }

        if (sortType === ": Page Number") {
            return b.number_of_pages - a.number_of_pages
        }

        if (sortType === ": Publishing Year") {
            return b.year_of_publishing - a.year_of_publishing
        }

        return 0;
    })

    //wishlist sort

    const displayWishList = [...wishList].sort((a, b) => {
        if (sortType === ": Rating") {
            return b.rating - a.rating
        }

        if (sortType === ": Page Number") {
            return b.number_of_pages - a.number_of_pages
        }

        if (sortType === ": Publishing Year") {
            return b.year_of_publishing - a.year_of_publishing
        }

        return 0;
    })

    //function call for sorting

    const handleSortList = type => {
        setSortType(type)
    }

    //handle delete readlist item

    const handleDeleteRead = (id) => {
        deleteFromReadList(id);
        const newReadList = readList.filter(book => book.id !== id)
        setReadList(newReadList)
    }

    //handle delete wishlist item

    const handleDeleteWish = (id) => {
        deleteFromWishList(id);
        const newWishList = wishList.filter(book => book.id !== id)
        setWishList(newWishList)
    }

    //handle move to read if mark as read

    const handleMoveToRead = (id) => {

        //update wish list
        const newWishList = wishList.filter(book => book.id !== id)
        setWishList(newWishList);

        //update readlist
        const movedBook = allBooks.find(book => book.id === id);
        setReadList([...readList, movedBook])
    }

    return (
        <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto mb-12 md:mb-24">
            <h2 className="bg-[#1313130D] rounded-xl py-12 text-3xl font-bold text-center mb-12">Listed Books</h2>

            <div className="text-center mb-12">
                <div className="dropdown">
                    {
                        (readList.length <= 1 && wishList.length <= 1) ?

                            <div tabIndex={0} role="button" className="btn w-52 text-white bg-[#23BE0A]">Nothing to sort</div>
                            :

                            <div tabIndex={0} role="button" className="btn w-52 text-white bg-[#23BE0A]">Sort {`${sortType}`}</div>

                    }
                    <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortList(": Rating")}><a>Rating</a></li>
                        <li onClick={() => handleSortList(": Page Number")}><a>Number of Pages</a></li>
                        <li onClick={() => handleSortList(": Publishing Year")}><a>Publish Year</a></li>
                    </ul>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lift">
                <input type="radio" name="listtab" role="tab" className="tab" aria-label="Completed Books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        <ReadList
                            displayReadList={displayReadList}
                            onDelete={handleDeleteRead}
                        ></ReadList>
                    }
                </div>

                <input type="radio" name="listtab" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        <Wishlist
                            displayWishList={displayWishList}
                            onDelete={handleDeleteWish}
                            handleMove={handleMoveToRead}
                            addToReadlist={addToReadlist}
                        ></Wishlist>
                    }
                </div>

            </div>

            <Helmet>
                <title>Listed Books</title>
            </Helmet>

        </div>
    );
};

export default ListedBooks;