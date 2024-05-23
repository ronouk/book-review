import { useLoaderData } from "react-router-dom";
import Read from "../Read/Read";
import Wishlist from "../Wishlist/Wishlist";

const ListedBooks = () => {

    const allBooks = useLoaderData();
    console.log(allBooks);

    return (
        <div className="w-10/12 mx-auto mb-12 md:mb-24">
            <h2 className="bg-[#1313130D] rounded-xl py-12 text-3xl font-bold text-center mb-12">Listed Books</h2>

            <div className="text-center mb-12">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn w-52 text-white bg-[#23BE0A]">Click</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publish Year</a></li>
                    </ul>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        <Read allBooks = {allBooks}></Read>
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        <Wishlist allBooks = {allBooks}></Wishlist>
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;