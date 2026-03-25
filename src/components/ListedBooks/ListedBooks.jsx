import { useLoaderData } from "react-router";
import ReadList from "../ReadList/ReadList";
import Wishlist from "../Wishlist/Wishlist";
import { useState } from "react";
import { deleteFromReadList, deleteFromWishList } from "../../utility/localStorage"

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
        if (sortType === "rating") {
            return b.rating - a.rating
        }

        if (sortType === "pageNumber") {
            return b.number_of_pages - a.number_of_pages
        }

        if (sortType === "publishingYear") {
            return b.year_of_publishing - a.year_of_publishing
        }

        return 0;
    })

    //wishlist sort

    const displayWishList = [...wishList].sort((a, b) => {
        if (sortType === "rating") {
            return a.rating - b.rating
        }

        if (sortType === "pageNumber") {
            return a.number_of_pages - b.number_of_pages
        }

        if (sortType === "publishingYear") {
            return a.year_of_publishing - b.year_of_publishing
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

    const handleDeleteWish = (id) => {
        deleteFromWishList(id);
        const newWishList = wishList.filter(book => book.id !== id)
        setWishList(newWishList)
    }

    return (
        <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto mb-12 md:mb-24">
            <h2 className="bg-[#1313130D] rounded-xl py-12 text-3xl font-bold text-center mb-12">Listed Books</h2>

            <div className="text-center mb-12">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn w-52 text-white bg-[#23BE0A]">Click</div>
                    <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortList("rating")}><a>Rating</a></li>
                        <li onClick={() => handleSortList("pageNumber")}><a>Number of Pages</a></li>
                        <li onClick={() => handleSortList("publishingYear")}><a>Publish Year</a></li>
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
                        ></Wishlist>
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;