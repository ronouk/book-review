import { useLoaderData } from "react-router";
import ReadList from "../ReadList/ReadList";
import Wishlist from "../Wishlist/Wishlist";
import { useState } from "react";

const ListedBooks = () => {

    const allBooks = useLoaderData()

    //localstorage readlist
    const savedReadListId = localStorage.getItem('readlist');
    const parsedReadlistId = JSON.parse(savedReadListId);

    //localstorage wishlist
    const savedWishListId = localStorage.getItem('wishlist');
    const parsedWishlistId = JSON.parse(savedWishListId);

    const parsedReadList = allBooks.filter(
        book => parsedReadlistId.includes(book.id)
    );

    const parsedWishList = allBooks.filter(
        book => parsedWishlistId.includes(book.id)
    );

    // sorting

    const [sortType, setSortType] = useState("")

    //readlist sort

    const displayReadList = [...parsedReadList].sort((a,b) => {
        if(sortType === "rating"){
            return a.rating - b.rating
        }

        if(sortType ==="pageNumber"){
            return a.number_of_pages - b.number_of_pages
        }

        if(sortType === "publishingYear"){
            return a.year_of_publishing - b.year_of_publishing
        }

        return 0;
    })

    //wishlist sort

        const displayWishList = [...parsedWishList].sort((a,b) => {
        if(sortType === "rating"){
            return a.rating - b.rating
        }

        if(sortType ==="pageNumber"){
            return a.number_of_pages - b.number_of_pages
        }

        if(sortType === "publishingYear"){
            return a.year_of_publishing - b.year_of_publishing
        }

        return 0;
    })

    //function call for sorting

    const handleSortList = type =>{
        setSortType(type)
    }


    return (
        <div className="w-11/12 md:w-10/12 lg:w-10/12 mx-auto mb-12 md:mb-24">
            <h2 className="bg-[#1313130D] rounded-xl py-12 text-3xl font-bold text-center mb-12">Listed Books</h2>

            <div className="text-center mb-12">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn w-52 text-white bg-[#23BE0A]">Click</div>
                    <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleSortList("rating")}><a>Rating</a></li>
                        <li onClick={()=>handleSortList("pageNumber")}><a>Number of Pages</a></li>
                        <li onClick={()=>handleSortList("publishingYear")}><a>Publish Year</a></li>
                    </ul>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lift">
                <input type="radio" name="listtab" role="tab" className="tab" aria-label="Completed Books" defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        <ReadList
                            allBooks={allBooks}
                            displayReadList={displayReadList}
                        ></ReadList>
                    }
                </div>

                <input type="radio" name="listtab" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        <Wishlist
                            allBooks={allBooks}
                            displayWishList={displayWishList}
                        ></Wishlist>
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;