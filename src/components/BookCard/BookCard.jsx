import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const BookCard = ({ book }) => {
    const { id, name, author, rating, relevant_tag, category, image } = book;

    return (
        <NavLink to={`/bookdetails/${id}`}>
            <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4 w-full">
                <div className='flex justify-center bg-gray-200 p-6 rounded-xl'>
                    <img className='h-60 rounded-xl' src={image} alt="" />
                </div>
                <div className='flex gap-4'>
                    {relevant_tag.map((tag, index) => <p className='bg-green-100 px-2 rounded-xl text-green-600 text-sm' key={index}>{tag}</p>)}
                </div>
                <h2 className='text-xl lg:text-2xl font-bold heading'>{name}</h2>
                <h3>By: {author}</h3>
                <hr className='border-dashed' />
                <div className='flex justify-between'>
                    <p>{category}</p>
                    <div className='flex items-center gap-2'>
                        {rating}
                        <CiStar className='hover:text-emerald-600' />
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