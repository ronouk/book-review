import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { id, name, author, rating, summary, relevant_tag, category, number_of_pages, publisher, year_of_publishing, image } = book;
    // console.log(book);
    return (
        <Link to={`${id}`}>
            <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4 w-full">
                <div className='flex justify-center bg-gray-200 p-6 rounded-xl'>
                    <img className='h-80 rounded-xl' src={image} alt="" />
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
            
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;