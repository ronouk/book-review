import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToReadlist, addToWishlist } from "../../utility/localStorage";

const SingleBook = () => {
    const { id } = useParams();
    const allBooks = useLoaderData();
    const singleBook = allBooks[id - 1]; //our id of json data starts with 1 but system data starts with 0
    const { name, author, rating, summary, relevant_tag, category, number_of_pages, publisher, year_of_publishing, image } = singleBook;
    const placeholderImage = "https://res.cloudinary.com/gargiulo/image/upload/v1611877985/placeholder-1x1-book2_jnmnok.jpg";

     // add to wishlist

     const handleAddToWishlist = () => {
        // addToWishlist(id);

        const getStoredWishlist = localStorage.getItem('wishlist');
        const storedWishlistParsed = JSON.parse(getStoredWishlist);
        const getStoredReadlist = localStorage.getItem('readlist');
        const storedReadlistParsed = JSON.parse(getStoredReadlist);
        console.log(storedReadlistParsed, storedWishlistParsed, typeof storedWishlistParsed);

        if(storedWishlistParsed.includes(id)){
            toast("Already in wishlist")
        }

        else if(storedReadlistParsed.includes(id)){
            toast("Already in readlist") //if already in readlist, cannot be added to wishlist anymore
        }

        else{
            addToWishlist(id);
            toast("Added to wishlist")
        }
    }


    // add to read list

    const handleAddtoRead = () => {
        // addToReadlist(id);

        const getStoredReadlist = localStorage.getItem('readlist');
        const storedReadlistParsed = JSON.parse(getStoredReadlist);
        console.log(storedReadlistParsed, typeof storedReadlistParsed);

        if(storedReadlistParsed.includes(id)){
            toast("Already in readlist")
        }

        else{
            addToReadlist(id);
            toast("Added to readlist")
        }
    }

    return (
        <div className="w-10/12 mx-auto mb-12 md:mb-24">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="bg-[#1313130D] rounded-xl lg:w-1/2 flex justify-center items-center">
                    <img className="m-10 h-[450px] rounded-xl" src={image || placeholderImage} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <div className="space-y-4 pb-4 border-b">
                        <h1 className="heading text-4xl font-bold">{name}</h1>
                        <p>By: {author}</p>
                    </div>
                    <div className="space-y-4 py-4 border-b">
                        {category}
                    </div>
                    <div className="space-y-4 py-4 border-b">
                        <p><span>Review: </span>{summary}</p>
                        <div className='flex gap-4 items-center'>
                            <span className="font-bold">Tag </span>
                            {relevant_tag.map((tag, index) => <p className='bg-green-100 px-2 rounded-xl text-green-600 text-sm' key={index}>#{tag}</p>)}
                        </div>
                    </div>
                    <div className="space-y-4 py-4">
                        <table>
                            <tbody>
                                <tr className="h-8">
                                    <td className="w-60">Number of Pages:</td>
                                    <td className="font-semibold w-60">{number_of_pages}</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="w-60">Publisher:</td>
                                    <td className="font-semibold w-60">{publisher}</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="w-60">Year of Publishing:</td>
                                    <td className="font-semibold w-60">{year_of_publishing}</td>
                                </tr>
                                <tr className="h-8">
                                    <td className="w-60">Rating:</td>
                                    <td className="font-semibold w-60">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={handleAddtoRead} className="btn bg-transparent border-2 shadow-none border-[#1313134D] hover:text-white">Read</button>
                        <button onClick={handleAddToWishlist} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleBook;