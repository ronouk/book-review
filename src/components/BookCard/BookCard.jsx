import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaBookReader, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { addToReadlist, addToWishlist } from "../../utility/localStorage";

const BookCard = ({ book }) => {
    const { id, name, author, rating, relevant_tag, category, image } = book;

    return (
        <NavLink to={`/bookdetails/${id}`}>
            <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4 h-full">
                <div className='relative flex justify-center bg-gray-200 p-6 rounded-xl'>
                    <div className='absolute top-4 right-4 space-y-2 text-xl'>
                        <div
                            className='bg-green-200 hover:bg-green-700 hover:text-white p-2 rounded-md cursor-pointer transition'
                            title='Add to Wishlist'
                            onClick={() => addToWishlist(id)}>
                            <FaRegHeart />
                        </div>
                        <div
                            className='bg-amber-200 hover:bg-green-700 hover:text-white p-2 rounded-md cursor-pointer transition'
                            title='Mark as Read'
                            onClick={() => addToReadlist(id)}>
                            <FaBookReader />
                        </div>
                    </div>
                    <img className='h-60 rounded-xl' src={image} alt="" />
                </div>
                <div className='flex flex-col flex-1 gap-2 border-b border-dashed pb-3'>
                    <div className='flex flex-row gap-2'>
                        {relevant_tag.map((tag, index) => <span className='bg-green-100 px-2 rounded-xl text-green-600 text-sm' key={index}>{tag}</span>)}
                    </div>
                    <h2 className='text-xl lg:text-2xl font-bold heading'>{name}</h2>
                    <h3>By: {author}</h3>
                    {/* <hr className='border-dashed' /> */}
                </div>
                <div className='flex justify-between items-center'>
                    <p>{category}</p>
                    <div className='flex items-center gap-2'>
                        {rating}
                        <FaRegStar className='hover:text-emerald-600 mb-1' />
                    </div>
                </div>
            </div>

        </NavLink>
    );
};

BookCard.propTypes = {
    book: PropTypes.object,
}

export default BookCard;