import { useLoaderData, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { addToReadlist, addToWishlist } from "../../utility/localStorage";

const SingleBook = () => {
    const clickedBook = useLoaderData();
    const { id, name, author, rating, summary, relevant_tag, category, number_of_pages, publisher, year_of_publishing, image } = clickedBook;
    const placeholderImage = "https://img.freepik.com/premium-photo/open-book-wooden-table-garden-sunny-summer-day-reading-vacation-concept_627494-2063.jpg";

    const navigate = useNavigate()

    return (
        <div className="w-10/12 mx-auto mb-12 md:mb-24">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="bg-[#1313130D] rounded-xl lg:w-1/2 flex justify-center items-center">
                    <img className="m-10 h-112 rounded-xl" src={image || placeholderImage} alt="" />
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
                        <button onClick={() => addToReadlist(id)} className="btn bg-transparent border-2 shadow-none border-[#1313134D] hover:text-white hover:bg-green-700">Mark as Read</button>
                        <button onClick={() => addToWishlist(id)} className="btn bg-[#50B1C9] text-white hover:bg-amber-600">Add to Wishlist</button>
                        <button onClick={() => navigate(-1)} className="btn bg-[#1c610c] text-white hover:bg-orange-700">Go Back</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleBook;